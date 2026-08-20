type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-2xl ${alignment}`}>
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">{title}</h2>
      <div
        className={`mt-4 h-0.5 w-14 rounded-full bg-gradient-to-r from-brand-blue to-brand-purple ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
      {description ? <p className="mt-5 text-base leading-relaxed text-ink-soft">{description}</p> : null}
    </div>
  );
}
