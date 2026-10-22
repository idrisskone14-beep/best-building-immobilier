"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavLink } from "@/lib/site";

/** Onglets des sous-rubriques d'une rubrique : une page chacune. */
export function SubNav({ label, items }: { label: string; items: readonly NavLink[] }) {
  const pathname = usePathname();
  return (
    <nav aria-label={label} className="border-b border-ink/15 bg-white">
      <ul className="wrap flex gap-x-8 gap-y-1 overflow-x-auto py-1 [scrollbar-width:none]">
        {items.map((item) => {
          const active = pathname === item.href;
          return (
            <li key={item.href} className="shrink-0">
              <Link
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`relative block whitespace-nowrap py-4 text-[0.72rem] font-semibold uppercase tracking-[0.14em] transition-colors ${
                  active ? "text-red" : "text-navy hover:text-red"
                }`}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-0 bottom-0 h-0.5 bg-red transition-transform duration-300 ${active ? "scale-x-100" : "scale-x-0"}`}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
