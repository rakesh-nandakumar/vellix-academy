import Image from "next/image";
import Icon from "@/components/Icon";

export default function InstructorCard({ instructor, showQualifications = false }) {
  return (
    <article className="group h-full overflow-hidden rounded-2xl border border-slate-200 bg-white text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-transparent hover:shadow-xl hover:shadow-navy-950/10">
      <div className="relative aspect-[3/4] overflow-hidden bg-slate-100">
        <Image
          src={instructor.img}
          alt={instructor.name}
          fill
          sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
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
