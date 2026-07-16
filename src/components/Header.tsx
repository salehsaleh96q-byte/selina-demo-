"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Languages, Menu, MessageCircle, X } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { Logo } from "@/components/Logo";
import { whatsappLink } from "@/lib/site";

export function Header() {
  const { t, toggle, lang } = useLanguage();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", label: t.nav.home },
    { href: "/services", label: t.nav.services },
    { href: "/about", label: t.nav.about },
    { href: "/contact", label: t.nav.contact },
  ];

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-40 border-b border-rose-gold-light/40 bg-cream/80 backdrop-blur-md">
      <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" aria-label="Selina Derma" className="shrink-0">
          <Logo priority width={140} height={48} />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm transition-colors hover:text-rose-gold ${
                  isActive(link.href)
                    ? "text-rose-gold-dark"
                    : "text-charcoal-soft"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={toggle}
            aria-label={lang === "ar" ? "Switch to English" : "التبديل إلى العربية"}
            className="flex items-center gap-1.5 rounded-lg border border-rose-gold-light/60 px-2.5 py-1.5 text-xs font-medium text-charcoal-soft transition-colors hover:border-rose-gold hover:text-rose-gold-dark"
          >
            <Languages className="h-4 w-4" strokeWidth={1.5} aria-hidden />
            {t.switchTo}
          </button>

          <a
            href={whatsappLink(t.whatsappDefault)}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-xl bg-rose-gold px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-rose-gold-dark sm:inline-flex"
          >
            <MessageCircle className="h-4 w-4" strokeWidth={1.75} aria-hidden />
            {t.common.whatsapp}
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-charcoal-soft transition-colors hover:text-rose-gold-dark md:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="menu-in border-t border-rose-gold-light/40 bg-cream md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-4 py-2 sm:px-6">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-lg px-2 py-3 text-base transition-colors hover:bg-rose-gold-light/20 ${
                    isActive(link.href)
                      ? "text-rose-gold-dark"
                      : "text-charcoal"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="py-2">
              <a
                href={whatsappLink(t.whatsappDefault)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 rounded-xl bg-rose-gold px-4 py-3 text-sm font-medium text-white"
              >
                <MessageCircle className="h-4 w-4" strokeWidth={1.75} aria-hidden />
                {t.nav.book}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
