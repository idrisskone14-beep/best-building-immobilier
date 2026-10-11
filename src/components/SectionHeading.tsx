import { Reveal } from "./Reveal";

export function SectionHeading({
  index,
  eyebrow,
  title,
  children,
  className = "",
  size = "lg",
}: {
  index?: string;
  eyebrow: string;
  title: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  size?: "lg" | "md";
}) {
  return (
    <Reveal className={className}>
      <p className="eyebrow">
        {index && <span className="tabular-nums">{index}</span>}
        <span>{eyebrow}</span>
      </p>
      <h2 className={`display mt-6 ${size === "lg" ? "display-lg" : "display-md"}`}>{title}</h2>
      {children && <div className="lead mt-6 max-w-2xl">{children}</div>}
    </Reveal>
  );
}
