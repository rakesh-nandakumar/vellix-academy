import Link from "next/link";
import Icon from "@/components/Icon";

export default function ProgrammeCard({ programme, detailed = false }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-transparent hover:shadow-xl hover:shadow-navy-950/10 sm:p-8">
      <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-sky-400 to-sky-600 transition-transform duration-300 group-hover:scale-x-100" />

      <span className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50 text-sky-600 ring-1 ring-sky-100 transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-sky-400 group-hover:to-sky-600 group-hover:text-white group-hover:ring-transparent">
        <Icon name={programme.icon} className="h-6.5 w-6.5" />
      </span>

      <h3 className="font-display text-xl font-bold text-navy-950">
        {programme.title}
      </h3>
      <p className="mt-2.5 text-sm leading-relaxed text-slate-500">
        {programme.description}
      </p>

      {detailed && (
        <ul className="mt-5 space-y-2.5">
          {programme.highlights.map((h, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600">
              <Icon name="check-circle" className="mt-0.5 h-4 w-4 shrink-0 text-sky-500" />
              {h}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-5 flex flex-1 items-end justify-between gap-4 border-t border-slate-100 pt-5">
        <div className="flex items-center gap-4 text-xs font-medium text-slate-500">
          <span className="flex items-center gap-1.5">
            <Icon name="clock" className="h-3.5 w-3.5 text-sky-500" />
            {programme.duration}
          </span>
          <span className="flex items-center gap-1.5">
            <Icon name="graduation-cap" className="h-3.5 w-3.5 text-sky-500" />
            {programme.type}
          </span>
        </div>
        <Link
          href={programme.link}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-sky-600 transition-all hover:gap-2.5"
        >
          Details
          <Icon name="arrow-right" className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
