"use client";

import { MessageCircle } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { whatsappLink } from "@/lib/site";

export function FloatingWhatsApp() {
  const { t, lang } = useLanguage();

  return (
    <a
      href={whatsappLink(t.whatsappDefault)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={lang === "ar" ? "تواصلي عبر واتساب" : "Contact on WhatsApp"}
      className="fixed bottom-6 end-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform hover:scale-105 hover:bg-[#1ebe5d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
    >
      <MessageCircle className="h-7 w-7" strokeWidth={1.75} />
      <span className="pointer-events-none absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-20" />
    </a>
  );
}
