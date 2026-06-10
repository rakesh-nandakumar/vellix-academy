import Image from "next/image";
import Button from "@/components/Button";

export default function CtaBanner({
  title,
  text,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}) {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl px-6 py-16 text-center sm:px-12 sm:py-20">
          <Image
            src="/images/about-bg.jpg"
            alt=""
            fill
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-navy-950/95 via-navy-900/90 to-sky-900/80" />
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-sky-500/25 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-2xl">
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
              {text}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button href={primaryHref} size="lg">
                {primaryLabel}
              </Button>
              {secondaryLabel && (
                <Button href={secondaryHref} variant="outline-light" size="lg">
                  {secondaryLabel}
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
