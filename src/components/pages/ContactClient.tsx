"use client";

import { useState, type FormEvent } from "react";
import { Camera, MessageCircle, Phone } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { Reveal } from "@/components/Reveal";
import { btnPrimary } from "@/components/ui";
import {
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  MAPS_EMBED_SRC,
  PHONE_DISPLAY,
  PHONE_TEL,
  whatsappLink,
} from "@/lib/site";

export function ContactClient() {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  // The contact form composes a WhatsApp message straight to the clinic.
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const message = `${t.contact.formName}: ${form.name}\n${t.contact.formPhone}: ${form.phone}\n\n${form.message}`;
    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
  };

  const cards = [
    {
      icon: MessageCircle,
      label: t.common.whatsapp,
      value: PHONE_DISPLAY,
      href: whatsappLink(t.whatsappDefault),
      external: true,
    },
    {
      icon: Phone,
      label: t.common.call,
      value: PHONE_DISPLAY,
      href: `tel:${PHONE_TEL}`,
      external: false,
    },
    {
      icon: Camera,
      label: t.common.instagram,
      value: `@${INSTAGRAM_HANDLE}`,
      href: INSTAGRAM_URL,
      external: true,
    },
  ];

  return (
    <>
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <Reveal>
          <h1 className="font-display text-5xl text-charcoal">
            {t.contact.title}
          </h1>
          <span className="heading-underline mt-5" />
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-charcoal-soft">
            {t.contact.intro}
          </p>
        </Reveal>

        {/* Contact cards */}
        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {cards.map((card, i) => (
            <Reveal
              key={card.label}
              delay={i * 110}
              variant="scale"
              as="a"
              href={card.href}
              target={card.external ? "_blank" : undefined}
              rel={card.external ? "noopener noreferrer" : undefined}
              className="group card-hover flex flex-col items-center rounded-2xl border border-rose-gold-light/40 bg-white p-7 text-center"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-rose-gold-light/25 text-rose-gold-dark">
                <card.icon className="icon-pop h-6 w-6" strokeWidth={1.5} />
              </span>
              <span className="mt-4 text-sm text-charcoal-soft">
                {card.label}
              </span>
              <span className="mt-1 font-medium text-charcoal" dir="ltr">
                {card.value}
              </span>
            </Reveal>
          ))}
        </div>

        {/* Hours + Form */}
        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <Reveal variant="left">
            <h2 className="text-xl font-medium text-charcoal">
              {t.contact.hoursHeading}
            </h2>
            <div className="mt-5 overflow-hidden rounded-2xl border border-rose-gold-light/40">
              <table className="w-full text-sm">
                <tbody>
                  {t.contact.hoursRows.map((row, i) => (
                    <tr
                      key={row.day}
                      className={i % 2 === 0 ? "bg-white" : "bg-cream"}
                    >
                      <td className="px-5 py-3.5 text-charcoal">{row.day}</td>
                      <td className="px-5 py-3.5 text-charcoal-soft" dir="ltr">
                        {row.time}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>

          <Reveal variant="right">
            <h2 className="text-xl font-medium text-charcoal">
              {t.contact.formHeading}
            </h2>
            <form onSubmit={handleSubmit} className="mt-5 space-y-4">
              <div>
                <label htmlFor="name" className="sr-only">
                  {t.contact.formName}
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder={t.contact.formName}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-xl border border-rose-gold-light/50 bg-white px-4 py-3 text-sm text-charcoal outline-none transition-colors focus:border-rose-gold"
                />
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">
                  {t.contact.formPhone}
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder={t.contact.formPhone}
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full rounded-xl border border-rose-gold-light/50 bg-white px-4 py-3 text-sm text-charcoal outline-none transition-colors focus:border-rose-gold"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  {t.contact.formMessage}
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  placeholder={t.contact.formMessage}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className="w-full resize-none rounded-xl border border-rose-gold-light/50 bg-white px-4 py-3 text-sm text-charcoal outline-none transition-colors focus:border-rose-gold"
                />
              </div>
              <button type="submit" className={`btn-shine ${btnPrimary}`}>
                {t.contact.formSubmit}
              </button>
            </form>
          </Reveal>
        </div>
      </section>

      {/* Map */}
      <Reveal as="section" className="border-t border-rose-gold-light/40">
        <iframe
          src={MAPS_EMBED_SRC}
          title={t.contact.mapTitle}
          className="h-[420px] w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </Reveal>
    </>
  );
}
