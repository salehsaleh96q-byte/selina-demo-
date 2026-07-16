import type { Metadata } from "next";
import { ServicesClient } from "@/components/pages/ServicesClient";

export const metadata: Metadata = {
  title: "الخدمات — بوتكس، فيلر، ميزوثيرابي وعناية بالبشرة",
  description:
    "تعرّفي على خدمات عيادة Selina Derma: البوتكس، الفيلر، الميزوثيرابي، الليزر، تنظيف البشرة، التقشير الكيميائي وعلاج حب الشباب في كركوك، العراق.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return <ServicesClient />;
}
