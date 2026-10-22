export type ProjectStatus =
  | "Projet livré"
  | "Programme en développement"
  | "Parcelle immatriculée"
  | "Lots avec ACD"
  | "En cours d’approbation";

const TONES: Record<ProjectStatus, { light: string; dark: string }> = {
  "Projet livré": { light: "bg-navy text-white", dark: "bg-white text-navy" },
  "Programme en développement": { light: "bg-red text-white", dark: "bg-red text-white" },
  "Parcelle immatriculée": { light: "border border-red text-red", dark: "border border-white/70 text-white" },
  "Lots avec ACD": { light: "bg-navy text-white", dark: "bg-white text-navy" },
  "En cours d’approbation": { light: "border border-navy text-navy", dark: "border border-white/70 text-white" },
};

export function StatusTag({ status, onDark = false }: { status: ProjectStatus; onDark?: boolean }) {
  const tone = TONES[status][onDark ? "dark" : "light"];
  return (
    <span className={`inline-block px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.18em] ${tone}`}>
      {status}
    </span>
  );
}
