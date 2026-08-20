import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site";

type LogoProps = {
  variant?: "dark" | "light";
  className?: string;
  imageClassName?: string;
};

export default function Logo({ variant = "dark", className = "", imageClassName = "h-14 w-auto" }: LogoProps) {
  return (
    <Link href="/" className={`inline-flex items-center ${className}`} aria-label={`${siteConfig.name} — Inicio`}>
      <Image
        src={variant === "light" ? "/logo-etl-blanco.png" : "/logo-etl.png"}
        alt={siteConfig.name}
        width={896}
        height={635}
        priority
        className={imageClassName}
      />
    </Link>
  );
}
