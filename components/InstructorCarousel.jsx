"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { instructors } from "@/lib/data";

export default function InstructorCarousel() {
  return (
    <Swiper
      modules={[Autoplay, Navigation]}
      autoplay={{ delay: 3500, disableOnInteraction: false }}
      navigation
      loop
      slidesPerView={1}
      spaceBetween={24}
      breakpoints={{
        480: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1200: { slidesPerView: 4 },
      }}
      className="instructor-swiper"
    >
      {instructors.map((ins) => (
        <SwiperSlide key={ins.slug}>
          <div className="instructor-card">
            <div className="instructor-img-wrap">
              <Image
                src={ins.img}
                alt={ins.name}
                fill
                sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 25vw"
                style={{ objectFit: "cover" }}
              />
              <div className="instructor-overlay">
                <div className="instructor-socials">
                  <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                  <a href="#" aria-label="Email"><i className="fas fa-envelope"></i></a>
                </div>
              </div>
            </div>
            <div className="instructor-info">
              <h3>{ins.name}</h3>
              <p>{ins.subject}</p>
              <span className="instructor-role">{ins.role}</span>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
