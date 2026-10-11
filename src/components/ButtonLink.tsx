import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Variant = "red" | "navy" | "line" | "line-light";

export function ButtonLink({
  href,
  children,
  variant = "red",
  className = "",
  arrow = true,
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  arrow?: boolean;
}) {
  return (
    <Link href={href} className={`btn btn-${variant} ${className}`}>
      <span>{children}</span>
      {arrow && <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" />}
    </Link>
  );
}

export function TextLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link href={href} className={`link-arch ${className}`}>
      <span>{children}</span>
      <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" />
    </Link>
  );
}
