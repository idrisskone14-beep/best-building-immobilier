import { NextResponse } from "next/server";
import { contactPayloadSchema } from "@/lib/contact-schema";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Réception du formulaire de contact.
 * Protections : contrôle d'origine, validation serveur (zod), champ piège (honeypot),
 * délai minimal de remplissage, limitation de débit par IP (au mieux, en mémoire),
 * Cloudflare Turnstile optionnel. Envoi via l'API Resend si configurée ; sinon 503 explicite
 * (le formulaire n'affirme alors jamais qu'un message a été envoyé).
 */

const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, { count: number; reset: number }>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  if (hits.size > 500) for (const [k, v] of hits) if (v.reset < now) hits.delete(k);
  const entry = hits.get(ip);
  if (!entry || entry.reset < now) {
    hits.set(ip, { count: 1, reset: now + WINDOW_MS });
    return false;
  }
  entry.count += 1;
  return entry.count > MAX_PER_WINDOW;
}

const escapeHtml = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
const oneLine = (s: string) => s.replace(/[\r\n]+/g, " ").trim();

const json = (body: Record<string, unknown>, status = 200) =>
  NextResponse.json(body, { status, headers: { "Cache-Control": "no-store" } });

async function verifyTurnstile(token: string | undefined, ip: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true; // non configuré : les autres protections restent actives
  if (!token) return false;
  try {
    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret, response: token, remoteip: ip }),
    });
    const data = (await res.json()) as { success?: boolean };
    return data.success === true;
  } catch {
    return false;
  }
}

export async function POST(request: Request) {
  // Même origine uniquement.
  const origin = request.headers.get("origin");
  const host = request.headers.get("host");
  if (origin) {
    try {
      if (new URL(origin).host !== host) return json({ ok: false, code: "forbidden" }, 403);
    } catch {
      return json({ ok: false, code: "forbidden" }, 403);
    }
  }

  const length = Number(request.headers.get("content-length") ?? 0);
  if (length > 20_000) return json({ ok: false, code: "too_large" }, 413);

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (rateLimited(ip)) return json({ ok: false, code: "rate_limited" }, 429);

  let raw: unknown;
  try {
    raw = await request.json();
  } catch {
    return json({ ok: false, code: "bad_request" }, 400);
  }

  const parsed = contactPayloadSchema.safeParse(raw);
  if (!parsed.success) {
    const fields: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = String(issue.path[0] ?? "form");
      fields[key] ??= issue.message;
    }
    return json({ ok: false, code: "invalid", fields }, 422);
  }
  const data = parsed.data;

  // Robots : champ piège rempli ou formulaire soumis trop vite → succès apparent, rien n'est envoyé.
  const tooFast = typeof data.startedAt === "number" && Date.now() - data.startedAt < 2500;
  if (data.website || tooFast) return json({ ok: true });

  if (!(await verifyTurnstile(data.turnstileToken, ip))) return json({ ok: false, code: "captcha" }, 400);

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !to || !from) return json({ ok: false, code: "not_configured" }, 503);

  const rows: [string, string][] = [
    ["Nom et prénoms", data.name],
    ["Téléphone", data.phone],
    ["Email", data.email],
    ["Objet", data.subject],
    ["Programme / service", data.service],
    ...(data.slot ? ([["Date et créneau souhaités", data.slot]] as [string, string][]) : []),
  ];
  const text = [...rows.map(([k, v]) => `${k} : ${v}`), "", data.message].join("\n");
  const html = `<div style="font-family:Arial,sans-serif;color:#20252a;max-width:640px">
    <h2 style="color:#0f3450;margin:0 0 16px">Nouvelle demande depuis le site</h2>
    <table style="border-collapse:collapse;width:100%">${rows
      .map(
        ([k, v]) =>
          `<tr><td style="padding:6px 12px 6px 0;color:#565d65;vertical-align:top;white-space:nowrap">${escapeHtml(k)}</td><td style="padding:6px 0"><strong>${escapeHtml(v)}</strong></td></tr>`,
      )
      .join("")}</table>
    <hr style="border:0;border-top:1px solid #e7e5e1;margin:18px 0">
    <p style="white-space:pre-wrap;line-height:1.6">${escapeHtml(data.message)}</p>
  </div>`;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: data.email,
        subject: oneLine(`[Site 2BI] ${data.subject} — ${data.name}`).slice(0, 200),
        text,
        html,
      }),
    });
    if (!res.ok) {
      console.error("Resend error", res.status, await res.text().catch(() => ""));
      return json({ ok: false, code: "send_failed" }, 502);
    }
    return json({ ok: true });
  } catch (error) {
    console.error("Contact send failed", error);
    return json({ ok: false, code: "send_failed" }, 502);
  }
}

export function GET() {
  return json({ ok: false, code: "method_not_allowed" }, 405);
}
