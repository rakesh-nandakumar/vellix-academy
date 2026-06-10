import Icon from "@/components/Icon";

export default function TestimonialCard({ testimonial }) {
  return (
    <article className="relative flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-xl hover:shadow-navy-950/10">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-6 top-2 select-none font-serif text-7xl leading-none text-sky-100"
      >
        &ldquo;
      </span>

      <div className="flex gap-1 text-amber-400">
        {[...Array(5)].map((_, i) => (
          <Icon key={i} name="star" className="h-4 w-4" />
        ))}
      </div>

      <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-600">
        &ldquo;{testimonial.text}&rdquo;
      </p>

      <div className="mt-6 flex items-center gap-3.5 border-t border-slate-100 pt-5">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 to-sky-600 font-display text-base font-bold text-white">
          {testimonial.name.charAt(0)}
        </span>
        <div>
          <p className="text-sm font-bold text-navy-950">{testimonial.name}</p>
          <p className="text-xs text-slate-500">{testimonial.role}</p>
        </div>
      </div>
    </article>
  );
}
