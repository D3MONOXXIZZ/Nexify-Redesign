import Image from "next/image";
import Link from "next/link";

export function Logo({
  className = "",
}: {
  className?: string;
  showTagline?: boolean;
  size?: "sm" | "md" | "lg";
}) {
  return (
    <Link
      href="/"
      className={`brand-link ${className}`}
      aria-label="Nexify Concepts home"
    >
      <span className="brand-symbol">
        <Image
          src="/nexify-brand.png"
          width={74}
          height={74}
          sizes="74px"
          alt=""
        />
      </span>
      <span className="brand-name">
        nexify<small>CONCEPTS</small>
      </span>
    </Link>
  );
}
