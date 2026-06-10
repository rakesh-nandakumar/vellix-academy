"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import CourseCard from "@/components/CourseCard";
import CarouselArrows from "@/components/CarouselArrows";
import { courses } from "@/lib/data";

export default function CourseCarousel() {
  const [swiper, setSwiper] = useState(null);

  return (
    <div>
      <div className="mb-8 flex justify-end">
        <CarouselArrows swiper={swiper} />
      </div>
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        onSwiper={setSwiper}
        slidesPerView={1}
        spaceBetween={28}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {courses.map((course) => (
          <SwiperSlide key={course.id} className="!h-auto">
            <CourseCard course={course} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
