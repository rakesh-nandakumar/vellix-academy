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
  { icon: "code", title: "Enterprise Projects", text: "Real-world deliverables" },
  { icon: "users", title: "Expert Instructors", text: "Industry practitioners" },
  { icon: "briefcase", title: "Career Placement", text: "For top performers" },
  { icon: "laptop", title: "Flexible Learning", text: "Campus & online" },
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
                    <div className="max-w-2xl">
                      <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-sky-300 ring-1 ring-white/20 backdrop-blur-sm">
                        <Icon name="zap" className="h-3.5 w-3.5" />
                        Enterprise IT Education
                      </span>
                      <h1 className="font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
                        {line1}
                        {line2 && (
                          <>
                            <br />
                            <span className="bg-gradient-to-r from-sky-300 to-sky-500 bg-clip-text text-transparent">
                              {line2}
                            </span>
                          </>
                        )}
                      </h1>
                      <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
                        {slide.subtitle}
                      </p>
                      <div className="mt-8 flex flex-wrap gap-4">
                        <Button href={slide.btnLink} size="lg">
                          {slide.btnText}
                          <Icon name="arrow-right" className="h-4 w-4" />
                        </Button>
                        <Button href="/contact" variant="outline-light" size="lg">
                          Get in Touch
                        </Button>
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
      <div className="relative z-10 mx-auto -mt-14 max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-2xl shadow-navy-950/10 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="flex items-center gap-4 border-b border-slate-100 p-6 transition hover:bg-sky-50/60 last:border-b-0 sm:border-r sm:[&:nth-child(2n)]:border-r-0 lg:border-b-0 lg:[&:nth-child(2n)]:border-r lg:last:border-r-0"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 to-sky-600 text-white shadow-lg shadow-sky-500/30">
                <Icon name={f.icon} className="h-5.5 w-5.5" />
              </span>
              <div>
                <p className="text-sm font-bold text-navy-950">{f.title}</p>
                <p className="text-xs text-slate-500">{f.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
