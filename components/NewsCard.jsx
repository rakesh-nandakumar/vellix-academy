import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";

export default function NewsCard({ article }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1.5 hover:border-transparent hover:shadow-xl hover:shadow-navy-950/10">
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
        <Image
          src={article.img}
          alt={article.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <span className="flex items-center gap-2 text-xs font-semibold text-sky-600">
          <Icon name="calendar" className="h-3.5 w-3.5" />
          {article.date}
        </span>
        <h3 className="mt-2.5 font-display text-lg font-bold leading-snug text-navy-950">
          <Link href={article.link} className="transition hover:text-sky-600">
            {article.title}
          </Link>
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">
          {article.excerpt}
        </p>
        <Link
          href={article.link}
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-sky-600 transition-all hover:gap-2.5"
        >
          Read More
          <Icon name="arrow-right" className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
