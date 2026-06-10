export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  dark = false,
}) {
  const alignCls =
    align === "left" ? "text-left" : "mx-auto max-w-2xl text-center";

  return (
    <div className={`mb-12 sm:mb-14 ${alignCls}`}>
      {eyebrow && (
        <span
          className={`mb-4 inline-flex items-center gap-1.5 rounded-full px-3.5 py-1 text-xs font-semibold uppercase tracking-widest ${
            dark
              ? "bg-sky-400/10 text-sky-300 ring-1 ring-sky-400/30"
              : "bg-sky-50 text-sky-600 ring-1 ring-sky-200"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-display text-3xl font-extrabold tracking-tight sm:text-4xl ${
          dark ? "text-white" : "text-navy-950"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            dark ? "text-slate-300" : "text-slate-500"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
