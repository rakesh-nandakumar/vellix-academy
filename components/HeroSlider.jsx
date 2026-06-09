"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Link from "next/link";
import { heroSlides } from "@/lib/data";

export default function HeroSlider() {
  return (
    <section className="hero-slider">
      <Swiper
        modules={[Autoplay, Navigation, Pagination, EffectFade]}
        effect="fade"
        autoplay={{ delay: 5500, disableOnInteraction: false }}
        navigation
        pagination={{ clickable: true }}
        loop
        className="hero-swiper"
      >
        {heroSlides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div
              className="hero-slide"
              style={{ backgroundImage: `url(${slide.img})` }}
            >
              <div className="hero-overlay" />
              <div className="hero-content">
                <h1 className="hero-title">
                  {slide.title.split("\n").map((line, j) => (
                    <span key={j}>
                      {line}
                      {j === 0 && <br />}
                    </span>
                  ))}
                </h1>
                <p className="hero-subtitle">{slide.subtitle}</p>
                <div className="hero-btns">
                  <Link href={slide.btnLink} className="btn-hero-primary">
                    {slide.btnText}
                  </Link>
                  <Link href="/contact" className="btn-hero-outline">
                    Get in Touch
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Feature boxes */}
      <div className="hero-features">
        <div className="hero-feature">
          <i className="fas fa-code"></i>
          <div>
            <strong>Enterprise Projects</strong>
            <span>Real-world deliverables</span>
          </div>
        </div>
        <div className="hero-feature">
          <i className="fas fa-chalkboard-teacher"></i>
          <div>
            <strong>Expert Instructors</strong>
            <span>Industry practitioners</span>
          </div>
        </div>
        <div className="hero-feature">
          <i className="fas fa-briefcase"></i>
          <div>
            <strong>Career Placement</strong>
            <span>For top performers</span>
          </div>
        </div>
        <div className="hero-feature">
          <i className="fas fa-laptop-code"></i>
          <div>
            <strong>Flexible Learning</strong>
            <span>Campus &amp; online</span>
          </div>
        </div>
      </div>
    </section>
  );
}
