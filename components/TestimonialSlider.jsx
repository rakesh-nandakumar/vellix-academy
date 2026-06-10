"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import TestimonialCard from "@/components/TestimonialCard";
import { testimonials } from "@/lib/data";

export default function TestimonialSlider() {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      loop
      slidesPerView={1}
      spaceBetween={28}
      breakpoints={{
        768: { slidesPerView: 2 },
        1200: { slidesPerView: 3 },
      }}
      className="!px-1 !pb-14"
    >
      {testimonials.map((t, i) => (
        <SwiperSlide key={i} className="!h-auto">
          <TestimonialCard testimonial={t} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
