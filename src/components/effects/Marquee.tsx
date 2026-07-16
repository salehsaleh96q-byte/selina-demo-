"use client";

export function Marquee({ items }: { items: string[] }) {
  const track = [...items, ...items];
  return (
    <div className="marquee" aria-hidden>
      <div className="marquee-track">
        {track.map((item, i) => (
          <span key={i} className="marquee-item">
            {item}
            <span className="marquee-star">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
