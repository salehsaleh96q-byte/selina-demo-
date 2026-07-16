import type { Metadata } from "next";
import { ContactClient } from "@/components/pages/ContactClient";

export const metadata: Metadata = {
  title: "تواصلي معنا — عيادة Selina Derma في كركوك",
  description:
    "تواصلي مع عيادة Selina Derma في كركوك، العراق عبر واتساب أو الهاتف أو الإنستغرام. ساعات العمل والموقع على الخريطة.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return <ContactClient />;
}
