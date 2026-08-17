import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site";

type LogoProps = {
  variant?: "dark" | "light";
  className?: string;
};

export default function Logo({ variant = "dark", className = "" }: LogoProps) {
  return (
    <Link href="/" className={`inline-flex items-center ${className}`} aria-label={`${siteConfig.name} — Inicio`}>
      <Image
        src={variant === "light" ? "/logo-etl-blanco.svg" : "/logo-etl.svg"}
        alt={siteConfig.name}
        width={128}
        height={46}
        priority
        className="h-11 w-auto"
      />
    </Link>
  );
}
