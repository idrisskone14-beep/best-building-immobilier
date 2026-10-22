"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ArrowRight, Check, CircleAlert, LoaderCircle } from "lucide-react";
import {
  SERVICES,
  SERVICE_PRESETS,
  SUBJECTS,
  SUBJECT_PRESETS,
  contactSchema,
  type ContactField,
} from "@/lib/contact-schema";
import { company, env } from "@/lib/site";
import { Turnstile } from "./Turnstile";

type Status = "idle" | "sending" | "success" | "unavailable" | "error";
type Errors = Partial<Record<ContactField | "captcha", string>>;

const API_MESSAGES: Record<string, string> = {
  rate_limited: "Trop de demandes en peu de temps. Merci de réessayer dans quelques minutes.",
  captcha: "La vérification anti-spam a échoué. Merci de réessayer.",
  forbidden: "La demande a été refusée. Rechargez la page puis réessayez.",
  too_large: "Votre message est trop volumineux.",
  send_failed: "L’envoi a échoué. Merci de réessayer ou de nous contacter directement.",
};

function Field({
  id,
  label,
  error,
  required = true,
  children,
  className = "",
}: {
  id: string;
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="block text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-navy">
        {label}
        {required && (
          <span aria-hidden="true" className="text-red">
            {" "}
            *
          </span>
        )}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-2 text-sm text-red">
          {error}
        </p>
      )}
    </div>
  );
}

export function ContactForm() {
  const params = useSearchParams();
  const defaultSubject = SUBJECT_PRESETS[params.get("objet") ?? ""] ?? "";
  const defaultService = SERVICE_PRESETS[params.get("service") ?? ""] ?? "";

  const formRef = useRef<HTMLFormElement>(null);
  const startedAt = useRef(0);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [apiMessage, setApiMessage] = useState("");
  const [token, setToken] = useState("");
  const [mailto, setMailto] = useState("");

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  const aria = (id: ContactField) => ({
    "aria-invalid": errors[id] ? (true as const) : undefined,
    "aria-describedby": errors[id] ? `${id}-error` : undefined,
  });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const values = {
      name: String(fd.get("name") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      email: String(fd.get("email") ?? ""),
      subject: String(fd.get("subject") ?? ""),
      service: String(fd.get("service") ?? ""),
      slot: String(fd.get("slot") ?? ""),
      message: String(fd.get("message") ?? ""),
      consent: fd.get("consent") === "on",
    };

    const result = contactSchema.safeParse(values);
    const next: Errors = {};
    if (!result.success) {
      for (const issue of result.error.issues) {
        const key = issue.path[0] as ContactField;
        next[key] ??= issue.message;
      }
    }
    if (env.turnstileSiteKey && !token) next.captcha = "Merci de valider la vérification anti-spam.";
    setErrors(next);
    const firstKey = Object.keys(next)[0];
    if (firstKey) {
      form.querySelector<HTMLElement>(`[name="${firstKey}"]`)?.focus();
      return;
    }

    setStatus("sending");
    setApiMessage("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          website: String(fd.get("website") ?? ""),
          startedAt: startedAt.current,
          turnstileToken: token || undefined,
        }),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; code?: string; fields?: Errors };
      if (res.ok && data.ok) {
        setStatus("success");
        form.reset();
        return;
      }
      if (data.code === "not_configured") {
        const body = `${values.message}\n\n— ${values.name}\n${values.phone}\n${values.email}\n${values.service}${values.slot ? `\nCréneau souhaité : ${values.slot}` : ""}`;
        setMailto(`mailto:${company.email}?subject=${encodeURIComponent(values.subject)}&body=${encodeURIComponent(body)}`);
        setStatus("unavailable");
        return;
      }
      if (data.code === "invalid" && data.fields) {
        setErrors(data.fields);
        setStatus("idle");
        return;
      }
      setApiMessage(API_MESSAGES[data.code ?? ""] ?? "Une erreur est survenue. Merci de réessayer ou de nous contacter directement.");
      setStatus("error");
    } catch {
      setApiMessage("Connexion impossible. Vérifiez votre réseau puis réessayez.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="border border-navy/25 bg-white p-8 sm:p-12">
        <span className="flex h-12 w-12 items-center justify-center bg-navy text-white">
          <Check size={24} strokeWidth={1.75} aria-hidden="true" />
        </span>
        <h3 className="display display-md mt-8">Votre demande a bien été envoyée.</h3>
        <p className="lead mt-4 max-w-xl">
          Merci pour votre confiance. Un conseiller de {company.name} prendra connaissance de votre message et reviendra vers vous.
        </p>
        <button type="button" onClick={() => setStatus("idle")} className="link-arch mt-8">
          Envoyer une autre demande
        </button>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate aria-label="Formulaire de contact" className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
      {/* Champ piège : invisible pour les visiteurs, tentant pour les robots. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website">Ne pas remplir</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <Field id="name" label="Nom et prénoms" error={errors.name} className="sm:col-span-2">
        <input id="name" name="name" type="text" autoComplete="name" className="field" {...aria("name")} />
      </Field>

      <Field id="phone" label="Téléphone" error={errors.phone}>
        <input id="phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" placeholder="+225 …" className="field" {...aria("phone")} />
      </Field>

      <Field id="email" label="Adresse email" error={errors.email}>
        <input id="email" name="email" type="email" autoComplete="email" className="field" {...aria("email")} />
      </Field>

      <Field id="subject" label="Objet de la demande" error={errors.subject}>
        <select id="subject" name="subject" defaultValue={defaultSubject} className="field" {...aria("subject")}>
          <option value="" disabled>
            Sélectionnez…
          </option>
          {SUBJECTS.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </Field>

      <Field id="service" label="Programme ou service concerné" error={errors.service}>
        <select id="service" name="service" defaultValue={defaultService} className="field" {...aria("service")}>
          <option value="" disabled>
            Sélectionnez…
          </option>
          {SERVICES.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </Field>

      <Field id="slot" label="Date et créneau souhaités (rendez-vous)" error={errors.slot} required={false} className="sm:col-span-2">
        <input
          id="slot"
          name="slot"
          type="text"
          placeholder="Ex. : mardi après-midi, ou un jour de la semaine prochaine"
          className="field"
          {...aria("slot")}
        />
      </Field>

      <Field id="message" label="Message" error={errors.message} className="sm:col-span-2">
        <textarea id="message" name="message" rows={5} className="field resize-y" {...aria("message")} />
      </Field>

      <div className="sm:col-span-2">
        <div className="flex items-start gap-3">
          <input
            id="consent"
            name="consent"
            type="checkbox"
            className="mt-1.5 h-4 w-4 shrink-0 accent-[#a73030]"
            {...aria("consent")}
          />
          <label htmlFor="consent" className="text-sm leading-relaxed text-ink-soft">
            J’accepte que les informations saisies soient utilisées par {company.name} pour traiter ma demande, conformément à la{" "}
            <Link href="/politique-de-confidentialite" className="underline underline-offset-4 hover:text-red">
              politique de confidentialité
            </Link>
            .
          </label>
        </div>
        {errors.consent && (
          <p id="consent-error" className="mt-2 text-sm text-red">
            {errors.consent}
          </p>
        )}
      </div>

      {env.turnstileSiteKey && (
        <div className="sm:col-span-2">
          <Turnstile siteKey={env.turnstileSiteKey} onToken={setToken} />
          {errors.captcha && <p className="mt-2 text-sm text-red">{errors.captcha}</p>}
        </div>
      )}

      <div className="sm:col-span-2">
        <button type="submit" disabled={status === "sending"} className="btn btn-red w-full disabled:opacity-70 sm:w-auto">
          {status === "sending" ? (
            <>
              <LoaderCircle size={16} className="animate-spin" aria-hidden="true" />
              <span>Envoi en cours…</span>
            </>
          ) : (
            <>
              <span>Envoyer ma demande</span>
              <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" />
            </>
          )}
        </button>

        <div aria-live="polite" className="mt-6">
          {status === "error" && (
            <p role="alert" className="flex items-start gap-3 border-l-2 border-red bg-white p-4 text-sm">
              <CircleAlert size={18} className="mt-0.5 shrink-0 text-red" aria-hidden="true" />
              <span>
                {apiMessage} Vous pouvez aussi nous écrire à{" "}
                <a href={`mailto:${company.email}`} className="underline underline-offset-4">
                  {company.email}
                </a>
                .
              </span>
            </p>
          )}
          {status === "unavailable" && (
            <div role="alert" className="border-l-2 border-navy bg-white p-5 text-sm">
              <p className="font-semibold text-navy">L’envoi en ligne n’est pas encore disponible.</p>
              <p className="mt-2 text-ink-soft">Votre message n’a pas été transmis. Vous pouvez nous l’adresser directement :</p>
              <ul className="mt-3 space-y-1">
                <li>
                  <a href={mailto} className="underline underline-offset-4">
                    Envoyer par email avec mon message pré-rempli
                  </a>
                </li>
                <li>
                  Ou par téléphone :{" "}
                  {company.phones.map((p, i) => (
                    <span key={p.tel}>
                      {i > 0 && " · "}
                      <a href={`tel:${p.tel}`} className="underline underline-offset-4">
                        {p.display}
                      </a>
                    </span>
                  ))}
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </form>
  );
}
