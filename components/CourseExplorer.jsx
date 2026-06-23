"use client";
import { useState } from "react";
import CourseCard from "@/components/CourseCard";
import { courses } from "@/lib/data";

const categories = [
  { id: "all", label: "All Courses" },
  { id: "foundation", label: "Foundation" },
  { id: "business-it", label: "Business IT" },
  { id: "software-development", label: "Software Development" },
  { id: "cybersecurity", label: "Cybersecurity" },
];

export default function CourseExplorer() {
  const [active, setActive] = useState("all");

  const visible =
    active === "all" ? courses : courses.filter((c) => c.category === active);

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
                ? "bg-sky-500 text-white shadow-lg shadow-sky-500/30"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-navy-950"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Course grid */}
      <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}
