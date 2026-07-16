import {
  Award,
  BadgeCheck,
  Droplet,
  Flower2,
  HandHeart,
  Heart,
  Layers,
  Leaf,
  Lock,
  Microscope,
  ShieldCheck,
  Sparkles,
  Syringe,
  type LucideIcon,
} from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  Award,
  BadgeCheck,
  Droplet,
  Flower2,
  HandHeart,
  Heart,
  Layers,
  Leaf,
  Lock,
  Microscope,
  ShieldCheck,
  Sparkles,
  Syringe,
};

export function Icon({
  name,
  className,
  strokeWidth = 1.5,
}: {
  name: string;
  className?: string;
  strokeWidth?: number;
}) {
  const Cmp = ICONS[name] ?? Sparkles;
  return <Cmp className={className} strokeWidth={strokeWidth} aria-hidden />;
}
