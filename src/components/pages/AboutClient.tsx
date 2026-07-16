"use client";

import Image from "next/image";
import { Camera } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";
import { INSTAGRAM_URL } from "@/lib/site";

/**
 * Doctor photo — set to "/images/doctor.jpg" once the photo is added to
 * public/images. Left null shows an elegant monogram placeholder.
 */
const DOCTOR_PHOTO: string | null = null;

/** Gallery slots — add a `src` to turn a placeholder into a real photo. */
const GALLERY: { src?: string; alt: string }[] = [
  { alt: "صورة من داخل عيادة Selina Derma" },
  { alt: "صورة من داخل عيادة Selina Derma" },
  { alt: "صورة من داخل عيادة Selina Derma" },
  { alt: "صورة من داخل عيادة Selina Derma" },
  { alt: "صورة من داخل عيادة Selina Derma" },
  { alt: "صورة من داخل عيادة Selina Derma" },
];

export function AboutClient() {
  const { t, lang } = useLanguage();

  return (
    <>
      {/* Header + story */}
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
        <Reveal>
          <h1 className="font-display text-5xl text-charcoal">
            {t.about.title}
          </h1>
          <div className="signature-line mt-5" />
        </Reveal>
        <Reveal delay={120}>
          <h2 className="mt-10 text-xl font-medium text-charcoal">
            {t.about.storyHeading}
          </h2>
          <div className="mt-4 space-y-4">
            {t.about.story.map((p, i) => (
              <p
                key={i}
                className="text-base leading-relaxed text-charcoal-soft"
              >
                {p}
              </p>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Founding doctor */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6">
          <Reveal className="text-center">
            <h2 className="font-display text-4xl text-charcoal">
              {t.about.teamHeading}
            </h2>
            <span className="heading-underline mx-auto mt-4" />
          </Reveal>
          {t.about.team.slice(0, 1).map((doctor) => (
            <Reveal key={doctor.name} variant="scale" className="mt-12">
              <div className="mx-auto flex max-w-2xl flex-col items-center gap-8 rounded-3xl border border-rose-gold-light/40 bg-cream/50 p-8 text-center sm:flex-row sm:p-10 sm:text-start">
                {DOCTOR_PHOTO ? (
                  <Image
                    src={DOCTOR_PHOTO}
                    alt={`${doctor.name} — ${doctor.role}`}
                    width={176}
                    height={176}
                    className="h-44 w-44 shrink-0 rounded-full object-cover"
                  />
                ) : (
                  <div
                    className="flex h-44 w-44 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-rose-gold-light/60 to-rose-gold/30 font-display text-6xl text-rose-gold-dark"
                    role="img"
                    aria-label={`${doctor.name} — ${doctor.role}`}
                  >
                    {doctor.name
                      .replace(/^(الدكتورة|د\.|Dr\.)\s*/, "")
                      .charAt(0)}
                  </div>
                )}

                <div>
                  <h3 className="font-display text-3xl text-charcoal">
                    {doctor.name}
                  </h3>
                  <p className="mt-2 text-rose-gold-dark">{doctor.role}</p>
                  <p className="mt-1 text-sm text-charcoal-soft">
                    {doctor.experience}
                  </p>
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 rounded-xl border border-rose-gold/40 px-4 py-2.5 text-sm font-medium text-rose-gold-dark transition-colors hover:bg-rose-gold-light/20"
                  >
                    <Camera className="h-4 w-4" strokeWidth={1.5} />
                    {lang === "ar"
                      ? "شاهدي أعمال الدكتورة على إنستغرام"
                      : "See the doctor's work on Instagram"}
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <Reveal className="text-center">
          <h2 className="font-display text-4xl text-charcoal">
            {t.about.valuesHeading}
          </h2>
          <span className="heading-underline mx-auto mt-4" />
        </Reveal>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {t.about.values.map((value, i) => (
            <Reveal
              key={value.title}
              delay={i * 130}
              variant="scale"
              className="group card-hover rounded-2xl border border-rose-gold-light/40 bg-white p-7 text-center"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-gold-light/25 text-rose-gold-dark">
                <Icon name={value.icon} className="icon-pop h-7 w-7" />
              </div>
              <h3 className="mt-5 text-lg font-medium text-charcoal">
                {value.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal-soft">
                {value.body}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Gallery (placeholders) */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <Reveal className="text-center">
            <h2 className="font-display text-4xl text-charcoal">
              {t.about.galleryHeading}
            </h2>
            <span className="heading-underline mx-auto mt-4" />
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3">
            {GALLERY.map((item, i) => (
              <Reveal
                key={i}
                delay={(i % 3) * 100}
                variant="scale"
                className="group overflow-hidden rounded-2xl"
              >
                {item.src ? (
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={800}
                    height={600}
                    className="aspect-[4/3] h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div
                    className="aspect-[4/3] bg-gradient-to-br from-cream to-rose-gold-light/40 transition-transform duration-500 group-hover:scale-105"
                    role="img"
                    aria-label={item.alt}
                  />
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
