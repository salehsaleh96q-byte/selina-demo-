"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";

type Variant = "up" | "left" | "right" | "scale";

const variantClass: Record<Variant, string> = {
  up: "",
  left: "reveal-left",
  right: "reveal-right",
  scale: "reveal-scale",
};

export function Reveal({
  children,
  className = "",
  delay = 0,
  variant = "up",
  as: Tag = "div",
  once = true,
  ...rest
}: {
  children: ReactNode;
  className?: string;
  /** stagger delay in ms */
  delay?: number;
  variant?: Variant;
  as?: ElementType;
  once?: boolean;
  [key: string]: unknown;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) io.disconnect();
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [once]);

  return (
    <Tag
      ref={ref}
      className={`reveal ${variantClass[variant]} ${
        visible ? "is-visible" : ""
      } ${className}`}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
      {...rest}
    >
      {children}
    </Tag>
  );
}
