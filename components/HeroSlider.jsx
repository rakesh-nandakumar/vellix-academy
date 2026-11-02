"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Image from "next/image";
import Icon from "@/components/Icon";
import Button from "@/components/Button";
import { heroSlides } from "@/lib/data";

const features = [
  { icon: "code", title: "Build Real Systems", text: "Not just tutorials" },
  { icon: "users", title: "Learn from Experts", text: "Industry veterans" },
  { icon: "briefcase", title: "Career Ready", text: "Job-focused skills" },
  { icon: "laptop", title: "Learn Your Way", text: "Campus or online" },
  { icon: "brain", title: "AI & Automation", text: "Future skills now", highlight: true },
];

export default function HeroSlider() {
  const [swiper, setSwiper] = useState(null);

  return (
    <section className="relative">
      <div className="relative">
        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          effect="fade"
          autoplay={{ delay: 5500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop
          onSwiper={setSwiper}
          className="hero-swiper"
        >
          {heroSlides.map((slide, i) => {
            const [line1, line2] = slide.title.split("\n");
            return (
              <SwiperSlide key={i}>
                <div className="relative flex min-h-[600px] items-center lg:min-h-[680px]">
                  <Image
                    src={slide.img}
                    alt=""
                    fill
                    priority={i === 0}
                    sizes="100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/80 to-navy-900/40" />
                  <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-navy-950/60 to-transparent" />

                  <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-28 pt-16 sm:px-6 lg:px-8">
                    <div className="max-w-full relative">
                      {/* Glass card effect */}
                      <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-3xl blur-2xl"></div>
                      <div className="relative rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-8 sm:p-10">
                        {/* Decorative corner accent */}
                        <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-amber-400/30 rounded-tl-2xl"></div>
                        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-amber-400/30 rounded-br-2xl"></div>

                        {/* Unique stylized badge */}
                        <div className="mb-6 inline-flex items-center gap-2">
                          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-orange-500 text-white text-xs font-black">
                            V
                          </span>
                          <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-300">
                            Career Launchpad
                          </span>
                        </div>

                        <h1 className="font-display text-4xl font-black leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
                          {line1}
                          {line2 && (
                            <>
                              <br />
                              <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-400 bg-clip-text text-transparent">
                                {line2}
                              </span>
                            </>
                          )}
                        </h1>

                        {/* Decorative divider */}
                        <div className="my-6 flex items-center gap-4">
                          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-400/50 to-transparent"></div>
                          <span className="text-amber-400/50 text-xs">✦</span>
                          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-400/50 to-transparent"></div>
                        </div>

                        <p className="text-base leading-relaxed text-slate-300 sm:text-lg">
                          {slide.subtitle}
                        </p>

                        <div className="mt-8 flex flex-wrap gap-3">
                          <Button href={slide.btnLink} size="lg" className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 border-0 shadow-lg shadow-amber-500/25">
                            {slide.btnText}
                            <Icon name="arrow-right" className="h-4 w-4" />
                          </Button>
                          <Button href="/contact" variant="outline-light" size="lg">
                            Talk to Us
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* Custom slider arrows */}
        <div className="absolute bottom-8 right-8 z-20 hidden gap-3 md:flex">
          <button
            onClick={() => swiper?.slidePrev()}
            aria-label="Previous slide"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/25 backdrop-blur-sm transition hover:bg-sky-500 hover:ring-sky-500"
          >
            <Icon name="chevron-left" className="h-5 w-5" />
          </button>
          <button
            onClick={() => swiper?.slideNext()}
            aria-label="Next slide"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/25 backdrop-blur-sm transition hover:bg-sky-500 hover:ring-sky-500"
          >
            <Icon name="chevron-right" className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Overlapping feature bar */}
      <div className="relative z-10 mx-auto -mt-14 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-5 overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-2xl shadow-navy-950/10">
          {features.map((f) => (
            <div
              key={f.title}
              className={`flex flex-col items-center gap-2 border-b border-slate-100 p-3 text-center transition hover:bg-sky-50/60 last:border-b-0 sm:flex-row sm:gap-4 sm:border-r sm:border-b-0 sm:p-6 sm:text-left lg:border-b-0 ${f.highlight ? 'relative' : ''}`}
            >
              <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-white shadow-lg sm:h-12 sm:w-12 ${f.icon === 'brain' ? 'bg-gradient-to-br from-amber-400 to-orange-500 shadow-amber-500/30 animate-pulse' : 'bg-gradient-to-br from-sky-400 to-sky-600 shadow-sky-500/30'}`}>
                <Icon name={f.icon} className="h-5 w-5 sm:h-5.5 sm:w-5.5" />
              </span>
              {f.highlight && (
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
                </span>
              )}
              <div>
                <p className="text-xs font-bold text-navy-950 sm:text-sm">{f.title}</p>
                <p className="text-[10px] text-slate-500 sm:text-xs">{f.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
