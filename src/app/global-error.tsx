"use client";

/** Dernier filet de sécurité : remplace le layout racine, donc styles volontairement en ligne. */
export default function GlobalError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html lang="fr">
      <body style={{ margin: 0, background: "#0a2438", color: "#fff", fontFamily: "system-ui, sans-serif" }}>
        <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", padding: "2rem", textAlign: "center" }}>
          <div>
            <h1 style={{ fontFamily: "Georgia, serif", fontWeight: 500, fontSize: "2.5rem", margin: 0 }}>Un incident technique est survenu.</h1>
            <p style={{ opacity: 0.8, margin: "1rem 0 2rem" }}>Merci de réessayer dans un instant.</p>
            <button
              type="button"
              onClick={reset}
              style={{ background: "#a73030", color: "#fff", border: 0, padding: "1rem 2rem", letterSpacing: "0.15em", textTransform: "uppercase", cursor: "pointer" }}
            >
              Réessayer
            </button>
          </div>
        </main>
      </body>
    </html>
  );
}
