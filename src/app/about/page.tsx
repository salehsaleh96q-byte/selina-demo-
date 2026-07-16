import type { Metadata } from "next";
import { AboutClient } from "@/components/pages/AboutClient";

export const metadata: Metadata = {
  title: "من نحن — عيادة الدكتورة زهراء محمد في كركوك",
  description:
    "تعرّفي على قصة عيادة Selina Derma والدكتورة زهراء محمد وقيمها في تقديم عناية راقية وآمنة بالبشرة في كركوك، العراق.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return <AboutClient />;
}
