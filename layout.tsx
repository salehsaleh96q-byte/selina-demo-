import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Inter,
  Markazi_Text,
  Tajawal,
} from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/WhatsAppButton";
import { ScrollProgress } from "@/components/effects/ScrollProgress";
import { CursorGlow } from "@/components/effects/CursorGlow";
import { ADDRESS, INSTAGRAM_URL, PHONE_TEL, SITE_URL } from "@/lib/site";

const tajawal = Tajawal({
  variable: "--font-tajawal",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

const markazi = Markazi_Text({
  variable: "--font-markazi",
  subsets: ["arabic", "latin"],
  weight: ["400", "500"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Selina Derma | عيادة الدكتورة زهرة محمد للجلدية والتجميل في كركوك",
    template: "%s | Selina Derma",
  },
  description:
    "عيادة Selina Derma للدكتورة زهرة محمد — بوتكس، فيلر، ميزوثيرابي، ليزر وعناية متخصصة بالبشرة في كركوك، العراق. احجزي موعدك الآن عبر واتساب.",
  keywords: [
    "عيادة جلدية كركوك",
    "بوتكس كركوك",
    "فيلر كركوك",
    "ليزر كركوك",
    "عناية بالبشرة",
    "ميزوثيرابي",
    "دكتورة زهرة محمد",
    "طبيب جلدية العراق",
    "Botox Kirkuk",
    "dermatology clinic Iraq",
    "Selina Derma",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Selina Derma",
    title: "Selina Derma | عيادة الدكتورة زهرة محمد في كركوك",
    description:
      "بوتكس، فيلر، ميزوثيرابي، ليزر وعناية متخصصة بالبشرة في كركوك، العراق.",
    images: ["/images/og-image.jpg"],
    locale: "ar_IQ",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: "Selina Derma",
  description:
    "عيادة الدكتورة زهرة محمد للعناية بالبشرة والتجميل غير الجراحي — بوتكس، فيلر، ميزوثيرابي، ليزر وعناية بالبشرة في كركوك، العراق.",
  url: SITE_URL,
  telephone: PHONE_TEL,
  image: `${SITE_URL}/images/og-image.jpg`,
  priceRange: "$$",
  sameAs: [INSTAGRAM_URL],
  founder: {
    "@type": "Physician",
    name: "الدكتورة زهرة محمد",
    medicalSpecialty: "Dermatology",
  },
  areaServed: "كركوك، العراق",
  address: {
    "@type": "PostalAddress",
    streetAddress: ADDRESS.street,
    addressLocality: ADDRESS.city,
    addressCountry: ADDRESS.countryCode,
  },
  medicalSpecialty: "Dermatology",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday"],
      opens: "10:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Thursday",
      opens: "10:00",
      closes: "18:00",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${tajawal.variable} ${markazi.variable} ${cormorant.variable} ${inter.variable} h-full`}
    >
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LanguageProvider>
          <ScrollProgress />
          <CursorGlow />
          <div className="grain" aria-hidden />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingWhatsApp />
        </LanguageProvider>
      </body>
    </html>
  );
}
