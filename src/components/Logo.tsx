import Image from "next/image";
import Link from "next/link";
import { company } from "@/lib/site";

/**
 * Logo officiel, utilisé tel quel (ni redessiné, ni recoloré, proportions d'origine).
 * Le libellé bleu nuit du logo n'étant pas lisible sur fond sombre, il est toujours posé
 * sur une plaque blanche (variant="plate") plutôt que modifié.
 */
export function Logo({
  variant = "plain",
  className = "",
  priority = false,
  linked = true,
}: {
  variant?: "plain" | "plate";
  className?: string;
  priority?: boolean;
  linked?: boolean;
}) {
  const image = (
    <Image
      src="/brand/logo-2bi.png"
      alt={`${company.name} — ${company.acronym}`}
      width={1400}
      height={575}
      priority={priority}
      sizes="(min-width: 1024px) 220px, 160px"
      className="h-auto w-full"
    />
  );
  const inner = variant === "plate" ? <span className="block bg-white p-2.5 sm:p-3">{image}</span> : image;
  if (!linked) return <span className={className}>{inner}</span>;
  return (
    <Link href="/" aria-label={`${company.name} — retour à l’accueil`} className={`block ${className}`}>
      {inner}
    </Link>
  );
}
