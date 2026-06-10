"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import InstructorCard from "@/components/InstructorCard";
import CarouselArrows from "@/components/CarouselArrows";
import { instructors } from "@/lib/data";

export default function InstructorCarousel() {
  const [swiper, setSwiper] = useState(null);

  return (
    <div>
      <div className="mb-8 flex justify-end">
        <CarouselArrows swiper={swiper} />
      </div>
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        loop
        onSwiper={setSwiper}
        slidesPerView={1}
        spaceBetween={28}
        breakpoints={{
          480: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1200: { slidesPerView: 4 },
        }}
      >
        {instructors.map((ins) => (
          <SwiperSlide key={ins.slug} className="!h-auto">
            <InstructorCard instructor={ins} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
