export type ProjectStatus = "Réalisation achevée" | "Projet architectural" | "Programme en développement";

export function StatusTag({ status, onDark = false }: { status: ProjectStatus; onDark?: boolean }) {
  const tone =
    status === "Réalisation achevée"
      ? "bg-navy text-white"
      : status === "Programme en développement"
        ? "bg-red text-white"
        : onDark
          ? "border border-white/70 text-white"
          : "border border-navy text-navy";
  return (
    <span className={`inline-block px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.18em] ${tone}`}>
      {status}
    </span>
  );
}
