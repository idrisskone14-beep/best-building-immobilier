"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { nav, company } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  // Route à laquelle le menu a été ouvert : il se referme donc seul à chaque navigation.
  const [openPath, setOpenPath] = useState<string | null>(null);
  const [headerH, setHeaderH] = useState(84);
  const headerRef = useRef<HTMLElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isOpen = openPath === pathname;

  const toggle = () => setOpenPath(isOpen ? null : pathname);

  const close = useCallback(() => {
    setOpenPath(null);
    toggleRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!isOpen || !headerRef.current) return;
    setHeaderH(headerRef.current.getBoundingClientRect().height);
  }, [isOpen]);

  // Verrouillage du défilement, Échap pour fermer, piège à focus.
  useEffect(() => {
    if (!isOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusables = () =>
      Array.from(panelRef.current?.querySelectorAll<HTMLElement>("a[href], button:not([disabled])") ?? []);
    focusables()[0]?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") return close();
      if (e.key !== "Tab") return;
      const items = [toggleRef.current, ...focusables()].filter(Boolean) as HTMLElement[];
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKey);
    };
  }, [isOpen, close]);

  const solid = scrolled || isOpen;
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header
      ref={headerRef}
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-500 ${
        solid ? "bg-white shadow-[0_1px_0_rgb(32_37_42/0.1)]" : "bg-transparent"
      }`}
    >
      <div className="wrap flex items-center justify-between gap-8">
        <Logo
          variant="plate"
          priority
          className={`w-[8.75rem] transition-[width] duration-500 sm:w-[10.5rem] ${solid ? "xl:w-[10.5rem]" : "xl:w-[12.5rem]"}`}
        />

        <nav aria-label="Navigation principale" className="hidden xl:block">
          <ul className="flex items-center gap-5 2xl:gap-9">
            {nav.map((item) => {
              const active = isActive(item.href);
              if (item.href === "/contact") {
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={`btn whitespace-nowrap !px-5 !py-3 ${solid ? "btn-red" : "btn-line-light"}`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              }
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`group relative py-2 whitespace-nowrap text-[0.7rem] font-semibold uppercase tracking-[0.08em] transition-colors 2xl:text-[0.78rem] 2xl:tracking-[0.16em] ${
                      solid ? "text-navy hover:text-red" : "text-white"
                    }`}
                  >
                    {item.label}
                    <span
                      aria-hidden="true"
                      className={`absolute inset-x-0 -bottom-0.5 h-px origin-left bg-current transition-transform duration-500 ${
                        active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      } ${solid && active ? "text-red" : ""}`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          ref={toggleRef}
          type="button"
          onClick={toggle}
          aria-expanded={isOpen}
          aria-controls="menu-mobile"
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          className={`-mr-2 inline-flex h-12 w-12 items-center justify-center xl:hidden ${solid ? "text-navy" : "text-white"}`}
        >
          {isOpen ? <X size={28} strokeWidth={1.5} aria-hidden="true" /> : <Menu size={28} strokeWidth={1.5} aria-hidden="true" />}
        </button>
      </div>

      {/* Menu mobile plein écran */}
      <div
        id="menu-mobile"
        ref={panelRef}
        hidden={!isOpen}
        className="on-dark absolute inset-x-0 top-full overflow-y-auto bg-navy text-white xl:hidden"
        style={{ height: `calc(100dvh - ${headerH}px)` }}
      >
        <nav aria-label="Navigation mobile" className="wrap flex min-h-full flex-col justify-between py-10">
          <ul>
            {nav.map((item, i) => (
              <li key={item.href} className="border-b border-white/15">
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className="flex items-baseline gap-5 py-4 font-display text-[2.1rem] leading-none aria-[current=page]:italic sm:text-5xl"
                >
                  <span className="w-7 font-sans text-xs font-semibold tabular-nums tracking-[0.2em] text-white/55">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-10 space-y-3 text-sm text-white/80">
            <a href={`tel:${company.phones[0].tel}`} className="inline-flex items-center gap-3 text-base text-white">
              <Phone size={18} strokeWidth={1.5} aria-hidden="true" />
              {company.phones[0].display}
            </a>
            <p>
              {company.address.street}, {company.address.city}
            </p>
          </div>
        </nav>
      </div>
    </header>
  );
}
