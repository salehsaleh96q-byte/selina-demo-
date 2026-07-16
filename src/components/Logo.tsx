import Image from "next/image";

export function Logo({
  className = "",
  width = 150,
  height = 52,
  priority = false,
}: {
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}) {
  return (
    <Image
      src="/images/logo.svg"
      alt="Selina Derma"
      width={width}
      height={height}
      priority={priority}
      className={className}
    />
  );
}
