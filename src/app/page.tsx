"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";
import { Magnetic } from "@/components/effects/Magnetic";
import { TiltCard } from "@/components/effects/TiltCard";
import { Counter } from "@/components/effects/Counter";
import { Marquee } from "@/components/effects/Marquee";
import { btnOutline, btnPrimary, btnGhost } from "@/components/ui";
import { whatsappLink } from "@/lib/site";

export default function HomePage() {
  const { t, lang } = useLanguage();
  const Arrow = lang === "ar" ? ArrowLeft : ArrowRight;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="blob pointer-events-none absolute -top-24 end-0 h-96 w-96 rounded-full bg-rose-gold-light/40 blur-3xl" />
        <div className="blob blob-slow pointer-events-none absolute top-40 -start-24 h-80 w-80 rounded-full bg-rose-gold/15 blur-3xl" />

        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2">
          {/* Text */}
          <div>
            <p
              className="flex items-center gap-2 text-sm font-medium tracking-wide opacity-0"
              style={{ animation: "fadeUp 0.7s ease-out 0.05s forwards" }}
            >
              <Sparkles className="h-4 w-4 text-rose-gold" strokeWidth={1.75} />
              <span className="shimmer-text">
                {lang === "ar"
                  ? "عيادة العناية الراقية"
                  : "Refined Skincare Clinic"}
              </span>
            </p>

            <h1
              className="mt-4 font-display text-5xl text-charcoal opacity-0 sm:text-6xl"
              style={{ animation: "fadeUp 0.8s ease-out 0.15s forwards" }}
            >
              {t.home.heroTitle}
            </h1>
            <div className="signature-line mt-5" />
            <p
              className="mt-6 max-w-md text-lg leading-relaxed text-charcoal-soft opacity-0"
              style={{ animation: "fadeUp 0.8s ease-out 0.35s forwards" }}
            >
              {t.home.heroSubtitle}
            </p>
            <div
              className="mt-9 flex flex-wrap gap-3 opacity-0"
              style={{ animation: "fadeUp 0.8s ease-out 0.55s forwards" }}
            >
              <Magnetic>
                <a
                  href={whatsappLink(t.whatsappDefault)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn-shine ${btnPrimary}`}
                >
                  <MessageCircle className="h-4 w-4" strokeWidth={1.75} />
                  {t.home.ctaBook}
                </a>
              </Magnetic>
              <Magnetic>
                <Link href="/services" className={btnOutline}>
                  {t.home.ctaServices}
                  <Arrow className="h-4 w-4" strokeWidth={1.75} />
                </Link>
              </Magnetic>
            </div>
          </div>

          {/* Decorative visual (CSS only — no external image) */}
          <div
            className="relative opacity-0"
            style={{ animation: "fadeUp 0.9s ease-out 0.35s forwards" }}
          >
            <TiltCard className="relative overflow-hidden rounded-[28px] border border-white/60 shadow-2xl shadow-rose-gold/20">
              <div className="relative aspect-[4/5] bg-gradient-to-br from-rose-gold-light/70 via-cream to-white sm:aspect-square">
                {/* soft drifting glow */}
                <div className="blob pointer-events-none absolute -top-10 -end-10 h-56 w-56 rounded-full bg-rose-gold/25 blur-2xl" />
                <div className="blob blob-slow pointer-events-none absolute bottom-0 start-0 h-44 w-44 rounded-full bg-rose-gold-light/50 blur-2xl" />

                {/* monogram */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-44 w-44 items-center justify-center rounded-full border border-rose-gold/30 bg-white/50 backdrop-blur-sm">
                    <span className="font-display text-8xl text-rose-gold-dark">
                      S
                    </span>
                  </div>
                </div>

                {/* floating sparkles */}
                <Sparkles
                  className="bob absolute top-12 start-12 h-6 w-6 text-rose-gold/60"
                  strokeWidth={1.5}
                />
                <Sparkles
                  className="bob absolute bottom-16 end-14 h-8 w-8 text-rose-gold-dark/40"
                  strokeWidth={1.5}
                  style={{ animationDelay: "1.2s" }}
                />
              </div>
            </TiltCard>

            {/* Floating glass badge */}
            <div className="bob absolute -bottom-5 start-4 flex items-center gap-3 rounded-2xl border border-white/60 bg-white/80 px-4 py-3 shadow-xl shadow-rose-gold/10 backdrop-blur-md sm:start-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-gold-light/40 text-rose-gold-dark">
                <BadgeCheck className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <div className="leading-tight">
                <p className="text-sm font-medium text-charcoal">
                  {lang === "ar" ? "أطباء معتمدون" : "Certified doctors"}
                </p>
                <p className="text-xs text-charcoal-soft">
                  {lang === "ar" ? "نتائج طبيعية وآمنة" : "Natural, safe results"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee ribbon */}
      <section className="border-y border-rose-gold-light/40 bg-white py-5">
        <Marquee items={t.home.marquee} />
      </section>

      {/* Trust bar */}
      <section className="bg-cream">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-10 sm:px-6 md:grid-cols-4">
          {t.home.trust.map((item, i) => (
            <Reveal
              key={item.label}
              delay={i * 90}
              variant="up"
              className="group flex items-center gap-3"
            >
              <Icon
                name={item.icon}
                className="icon-pop h-6 w-6 shrink-0 text-rose-gold"
              />
              <span className="text-sm text-charcoal">{item.label}</span>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Services preview */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <Reveal className="max-w-2xl">
          <h2 className="font-display text-4xl text-charcoal">
            {t.home.servicesHeading}
          </h2>
          <span className="heading-underline mt-4" />
          <p className="mt-4 text-charcoal-soft">{t.home.servicesSub}</p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.serviceList.map((service, i) => (
            <Reveal
              key={service.id}
              delay={(i % 3) * 110}
              variant="scale"
              className="h-full"
            >
              <TiltCard className="group flex h-full flex-col rounded-2xl border border-rose-gold-light/40 bg-white p-7 transition-shadow duration-300 hover:border-rose-gold/50 hover:shadow-xl hover:shadow-rose-gold/10">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-rose-gold-light/25 text-rose-gold-dark">
                  <Icon name={service.icon} className="icon-pop h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-medium text-charcoal">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal-soft">
                  {service.short}
                </p>
                <Link
                  href="/services"
                  className={`mt-4 ${btnGhost}`}
                  aria-label={`${t.common.details} — ${service.title}`}
                >
                  {t.common.details}
                  <Arrow className="h-3.5 w-3.5" strokeWidth={1.75} />
                </Link>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Stats band */}
      <section className="relative overflow-hidden bg-charcoal">
        <div className="blob pointer-events-none absolute -top-20 end-10 h-72 w-72 rounded-full bg-rose-gold/25 blur-3xl" />
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 py-16 sm:px-6 md:grid-cols-4">
          {t.home.stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 110} className="text-center">
              <div className="font-display text-5xl text-rose-gold-light">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-2 text-sm text-white/70">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Why Selina Derma */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <Reveal className="text-center">
            <h2 className="font-display text-4xl text-charcoal">
              {t.home.whyHeading}
            </h2>
            <span className="heading-underline mx-auto mt-4" />
          </Reveal>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {t.home.why.map((item, i) => (
              <Reveal
                key={item.title}
                delay={i * 130}
                className="group text-center"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-gold-light/25 text-rose-gold-dark">
                  <Icon name={item.icon} className="icon-pop h-7 w-7" />
                </div>
                <h3 className="mt-5 text-lg font-medium text-charcoal">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal-soft">
                  {item.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-rose-gold-light/30">
        <Reveal
          variant="scale"
          className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6"
        >
          <h2 className="font-display text-4xl text-charcoal">
            {t.home.finalCtaTitle}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-charcoal-soft">
            {t.home.finalCtaBody}
          </p>
          <Magnetic className="mt-8 inline-block">
            <a
              href={whatsappLink(t.whatsappDefault)}
              target="_blank"
              rel="noopener noreferrer"
              className={`btn-shine ${btnPrimary} px-8 py-4 text-base`}
            >
              <MessageCircle className="h-5 w-5" strokeWidth={1.75} />
              {t.nav.book}
            </a>
          </Magnetic>
        </Reveal>
      </section>
    </>
  );
}
