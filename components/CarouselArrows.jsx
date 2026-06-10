"use client";
import Icon from "@/components/Icon";

export default function CarouselArrows({ swiper, className = "" }) {
  return (
    <div className={`flex gap-2.5 ${className}`}>
      <button
        onClick={() => swiper?.slidePrev()}
        aria-label="Previous"
        className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-navy-950 shadow-sm transition hover:border-sky-500 hover:bg-sky-500 hover:text-white"
      >
        <Icon name="chevron-left" className="h-4.5 w-4.5" />
      </button>
      <button
        onClick={() => swiper?.slideNext()}
        aria-label="Next"
        className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-navy-950 shadow-sm transition hover:border-sky-500 hover:bg-sky-500 hover:text-white"
      >
        <Icon name="chevron-right" className="h-4.5 w-4.5" />
      </button>
    </div>
  );
}
