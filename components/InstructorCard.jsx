import Image from "next/image";
import Icon from "@/components/Icon";

export default function InstructorCard({ instructor, showQualifications = false }) {
  return (
    <article className="group h-full overflow-hidden rounded-2xl border border-slate-200 bg-white text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-transparent hover:shadow-xl hover:shadow-navy-950/10">
      <div className="relative aspect-square overflow-hidden bg-slate-100">
        <Image
          src={instructor.img}
          alt={instructor.name}
          fill
          sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-navy-950/85 via-navy-950/20 to-transparent pb-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="flex gap-2.5">
            <a
              href="#"
              aria-label={`${instructor.name} on LinkedIn`}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white ring-1 ring-white/25 backdrop-blur-sm transition hover:bg-sky-500 hover:ring-sky-500"
            >
              <Icon name="linkedin" className="h-4 w-4" />
            </a>
            <a
              href="#"
              aria-label={`Email ${instructor.name}`}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white ring-1 ring-white/25 backdrop-blur-sm transition hover:bg-sky-500 hover:ring-sky-500"
            >
              <Icon name="mail" className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-display text-base font-bold text-navy-950">
          {instructor.name}
        </h3>
        <p className="mt-1 text-sm text-slate-500">{instructor.subject}</p>
        <span className="mt-2.5 inline-block rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-600 ring-1 ring-sky-100">
          {instructor.role}
        </span>
        {showQualifications && (
          <p className="mt-3 text-xs leading-relaxed text-slate-400">
            {instructor.qualifications}
          </p>
        )}
      </div>
    </article>
  );
}
