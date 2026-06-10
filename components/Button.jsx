import Link from "next/link";

const VARIANTS = {
  primary:
    "bg-sky-500 text-white shadow-lg shadow-sky-500/30 hover:bg-sky-600 hover:shadow-sky-600/30",
  dark: "bg-navy-950 text-white hover:bg-navy-800",
  outline:
    "border border-slate-300 bg-white text-navy-950 hover:border-sky-500 hover:text-sky-600",
  "outline-light":
    "border border-white/40 bg-white/5 text-white backdrop-blur-sm hover:bg-white hover:text-navy-950",
  ghost: "text-navy-950 hover:bg-slate-100",
};

const SIZES = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-7 py-3.5 text-base",
};

export default function Button({
  href,
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 ${VARIANTS[variant]} ${SIZES[size]} ${className}`;

  if (href) {
    const external = href.startsWith("http");
    if (external) {
      return (
        <a href={href} className={cls} target="_blank" rel="noopener noreferrer" {...props}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={cls} {...props}>
        {children}
      </Link>
    );
  }
  return (
    <button className={cls} {...props}>
      {children}
    </button>
  );
}
