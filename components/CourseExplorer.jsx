"use client";
import { useState } from "react";
import CourseCard from "@/components/CourseCard";
import Icon from "@/components/Icon";
import Button from "@/components/Button";
import { courses } from "@/lib/data";

const categories = [
  { id: "all", label: "All Programmes" },
  { id: "foundation", label: "Foundation" },
  { id: "business-it", label: "Business IT" },
  { id: "software-development", label: "Software Development" },
  { id: "cybersecurity", label: "Cybersecurity" },
  { id: "ai", label: "Artificial Intelligence" },
];

export default function CourseExplorer() {
  const [active, setActive] = useState("all");

  const visible =
    active === "all" ? courses : courses.filter((c) => c.category === active);

  const isAI = active === "ai";

  return (
    <div>
      {/* Filter tabs */}
      <div className="mb-12 flex flex-wrap justify-center gap-2.5">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActive(cat.id)}
            className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200 ${
              active === cat.id
                ? cat.id === "ai"
                  ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg shadow-amber-500/30"
                  : "bg-sky-500 text-white shadow-lg shadow-sky-500/30"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-navy-950"
            }`}
          >
            {cat.label}
            {cat.id === "ai" && (
              <span className="ml-2 rounded-full bg-white/20 px-2 py-0.5 text-[10px] uppercase tracking-wider">
                Coming Soon
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Course grid */}
      {isAI ? (
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((course) => (
            <div
              key={course.id}
              className="relative overflow-hidden rounded-2xl border-2 border-amber-400 bg-gradient-to-br from-amber-50 to-orange-50 p-6 shadow-xl shadow-amber-500/20"
            >
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-amber-400/20 blur-3xl" />
              <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-orange-400/20 blur-3xl" />
              <div className="relative">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-700">
                  <Icon name="zap" className="h-3 w-3" />
                  Coming 2027
                </span>
                <h3 className="mt-4 font-display text-xl font-bold text-navy-950">
                  {course.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {course.description}
                </p>
                <div className="mt-4 space-y-2">
                  {course.topics.slice(0, 4).map((topic, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                      <Icon name="check" className="h-4 w-4 text-amber-500" />
                      {topic}
                    </div>
                  ))}
                </div>
                <Button
                  href={course.link}
                  className="mt-6 w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600"
                >
                  Learn More
                  <Icon name="arrow-right" className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      )}
    </div>
  );
}
