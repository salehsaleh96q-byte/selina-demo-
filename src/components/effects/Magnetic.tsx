"use client";

import { useRef, type ReactNode, type MouseEvent } from "react";

export function Magnetic({
  children,
  className = "",
  strength = 0.35,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  const onMove = (e: MouseEvent) => {
    if (window.matchMedia("(hover: none)").matches) return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);
    el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  };

  const onLeave = () => {
    const el = ref.current;
    if (el) el.style.transform = "";
  };

  return (
    <span
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`magnetic ${className}`}
    >
      {children}
    </span>
  );
}
