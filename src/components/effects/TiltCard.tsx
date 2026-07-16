"use client";

import { useRef, type ReactNode, type MouseEvent, type ElementType } from "react";

export function TiltCard({
  children,
  className = "",
  max = 7,
  as: Tag = "div",
  ...rest
}: {
  children: ReactNode;
  className?: string;
  max?: number;
  as?: ElementType;
  [key: string]: unknown;
}) {
  const ref = useRef<HTMLElement>(null);

  const onMove = (e: MouseEvent) => {
    if (window.matchMedia("(hover: none)").matches) return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    const rx = (0.5 - py) * max * 2;
    const ry = (px - 0.5) * max * 2;
    el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-6px)`;
  };

  const onLeave = () => {
    const el = ref.current;
    if (el) el.style.transform = "";
  };

  return (
    <Tag
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`tilt ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}
