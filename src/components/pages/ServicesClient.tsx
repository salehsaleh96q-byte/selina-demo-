"use client";

import { useState } from "react";
import { ChevronDown, Check, MessageCircle } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";
import { btnPrimary } from "@/components/ui";
import { whatsappLink } from "@/lib/site";

export function ServicesClient() {
  const { t } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      {/* Header */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <Reveal>
          <h1 className="font-display text-5xl text-charcoal">
            {t.services.title}
          </h1>
          <span className="heading-underline mt-5" />
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-charcoal-soft">
            {t.services.intro}
          </p>
        </Reveal>
      </section>

      {/* Services grid */}
      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <div className="grid gap-6 md:grid-cols-2">
          {t.serviceList.map((service, i) => (
            <Reveal
              key={service.id}
              delay={(i % 2) * 120}
              variant="scale"
              as="article"
              className="group card-hover flex flex-col rounded-2xl border border-rose-gold-light/40 bg-white p-7 sm:p-8"
            >
              <div id={service.id}>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-rose-gold-light/25 text-rose-gold-dark">
                  <Icon name={service.icon} className="icon-pop h-6 w-6" />
                </div>
                <h2 className="mt-5 text-xl font-medium text-charcoal">
                  {service.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-charcoal-soft">
                  {service.description}
                </p>

                <p className="mt-5 text-xs font-medium uppercase tracking-wide text-rose-gold-dark">
                  {t.services.benefitsLabel}
                </p>
                <ul className="mt-3 space-y-2">
                  {service.benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-start gap-2.5 text-sm text-charcoal"
                    >
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-rose-gold"
                        strokeWidth={2}
                      />
                      {benefit}
                    </li>
                  ))}
                </ul>

                <a
                  href={whatsappLink(t.whatsappService(service.title))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn-shine mt-6 inline-flex ${btnPrimary}`}
                >
                  <MessageCircle className="h-4 w-4" strokeWidth={1.75} />
                  {t.common.inquire}
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
          <Reveal className="text-center">
            <h2 className="font-display text-4xl text-charcoal">
              {t.services.faqHeading}
            </h2>
            <span className="heading-underline mx-auto mt-4" />
          </Reveal>
          <div className="mt-10 divide-y divide-rose-gold-light/40 border-y border-rose-gold-light/40">
            {t.faq.map((item, i) => {
              const open = openFaq === i;
              return (
                <Reveal key={item.q} delay={i * 70}>
                  <button
                    type="button"
                    onClick={() => setOpenFaq(open ? null : i)}
                    aria-expanded={open}
                    className="flex w-full items-center justify-between gap-4 py-5 text-start"
                  >
                    <span className="text-base font-medium text-charcoal">
                      {item.q}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-rose-gold transition-transform duration-300 ${
                        open ? "rotate-180" : ""
                      }`}
                      strokeWidth={1.75}
                    />
                  </button>
                  <div className="accordion-panel" data-open={open}>
                    <div>
                      <p className="pb-5 text-sm leading-relaxed text-charcoal-soft">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
