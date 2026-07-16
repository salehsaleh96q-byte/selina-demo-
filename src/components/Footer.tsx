"use client";

import Link from "next/link";
import { Camera, MapPin, MessageCircle, Phone } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { Logo } from "@/components/Logo";
import {
  ADDRESS_LINE,
  INSTAGRAM_HANDLE,
  PHONE_DISPLAY,
  PHONE_TEL,
  SOCIAL,
  whatsappLink,
} from "@/lib/site";

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  const links = [
    { href: "/", label: t.nav.home },
    { href: "/services", label: t.nav.services },
    { href: "/about", label: t.nav.about },
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <footer className="mt-auto border-t border-rose-gold-light/40 bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <Logo width={150} height={52} />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-charcoal-soft">
            {t.footer.tagline}
          </p>
          <a
            href={SOCIAL.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Instagram — @${INSTAGRAM_HANDLE}`}
            className="mt-5 inline-flex items-center gap-2 rounded-lg border border-rose-gold-light/60 px-3 py-2 text-sm text-rose-gold-dark transition-colors hover:bg-rose-gold-light/20"
          >
            <Camera className="h-4 w-4" strokeWidth={1.5} />
            <span dir="ltr">@{INSTAGRAM_HANDLE}</span>
          </a>
        </div>

        <div>
          <h2 className="text-sm font-medium text-charcoal">
            {t.footer.quickLinks}
          </h2>
          <ul className="mt-4 space-y-2.5">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-charcoal-soft transition-colors hover:text-rose-gold-dark"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-medium text-charcoal">
            {t.footer.contactHeading}
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-charcoal-soft">
            <li>
              <a
                href={whatsappLink(t.whatsappDefault)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 transition-colors hover:text-rose-gold-dark"
              >
                <MessageCircle className="h-4 w-4 text-rose-gold" strokeWidth={1.5} />
                {t.common.whatsapp}
              </a>
            </li>
            <li>
              <a
                href={`tel:${PHONE_TEL}`}
                className="flex items-center gap-2.5 transition-colors hover:text-rose-gold-dark"
                dir="ltr"
              >
                <Phone className="h-4 w-4 text-rose-gold" strokeWidth={1.5} />
                {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a
                href={SOCIAL.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 transition-colors hover:text-rose-gold-dark"
              >
                <Camera className="h-4 w-4 text-rose-gold" strokeWidth={1.5} />
                <span dir="ltr">@{INSTAGRAM_HANDLE}</span>
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-rose-gold" strokeWidth={1.5} />
              <span>{ADDRESS_LINE}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-rose-gold-light/30">
        <p className="mx-auto max-w-6xl px-4 py-5 text-center text-xs text-charcoal-soft sm:px-6">
          © {year} Selina Derma. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
