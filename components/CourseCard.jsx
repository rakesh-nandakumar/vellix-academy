import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";

export default function CourseCard({ course }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1.5 hover:border-transparent hover:shadow-xl hover:shadow-navy-950/10">
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
        <Image
          src={course.thumbnail}
          alt={course.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-navy-950/85 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-sky-300 backdrop-blur-sm">
          {course.categoryLabel}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex flex-wrap items-center gap-3 text-xs font-medium text-slate-500">
          <span className="flex items-center gap-1.5">
            <Icon name="clock" className="h-3.5 w-3.5 text-sky-500" />
            {course.duration}
          </span>
          {course.schedule && (
            <span className="flex items-center gap-1.5">
              <Icon name="calendar" className="h-3.5 w-3.5 text-sky-500" />
              {course.schedule}
            </span>
          )}
          {course.level && (
            <span className="flex items-center gap-1.5">
              <Icon name="graduation-cap" className="h-3.5 w-3.5 text-sky-500" />
              {course.level}
            </span>
          )}
        </div>

        <h3 className="font-display text-lg font-bold text-navy-950">
          <Link href={course.link} className="transition hover:text-sky-600">
            {course.title}
          </Link>
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">
          {course.description}
        </p>

        <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
          <div className="flex items-center gap-2.5">
            {course.lecturers && course.lecturers.length > 0 ? (
              <>
                <span className="text-xs font-medium text-slate-600">
                  {course.lecturers.length === 1 ? course.lecturers[0] : `${course.lecturers[0]} +${course.lecturers.length - 1}`}
                </span>
              </>
            ) : course.instructor ? (
              <>
                <span className="relative h-8 w-8 overflow-hidden rounded-full bg-slate-100">
                  <Image
                    src={course.instructorImg}
                    alt={course.instructor}
                    fill
                    sizes="32px"
                    className="object-cover"
                  />
                </span>
                <span className="text-xs font-medium text-slate-600">
                  {course.instructor}
                </span>
              </>
            ) : null}
          </div>
          <Link
            href={course.link}
            aria-label={`View ${course.title}`}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-navy-950 transition group-hover:bg-sky-500 group-hover:text-white"
          >
            <Icon name="arrow-right" className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}
