"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { stats } from "@/lib/data";

function Counter({ target, suffix, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
            else setCount(target);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function StatsCounter() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      <Image
        src="/images/counter-bg.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-navy-950/90" />
      <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-sky-500/20 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-sky-400/15 blur-3xl" />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-2 gap-10 px-4 text-center sm:px-6 lg:grid-cols-4 lg:px-8">
        {stats.map((s, i) => (
          <div key={i}>
            <p className="font-display text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
              <Counter target={s.number} suffix={s.suffix} />
            </p>
            <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-sky-200/80 sm:text-sm">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
