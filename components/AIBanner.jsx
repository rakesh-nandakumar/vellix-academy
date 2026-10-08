"use client";
import { useState } from "react";
import Link from "next/link";
import Icon from "@/components/Icon";

export default function AIBanner() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="relative bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white">
            <Icon name="zap" className="h-4 w-4" />
          </span>
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
            <span className="font-bold">Artificial Intelligence Module — Coming 2027</span>
            <span className="hidden sm:inline text-white/80">|</span>
            <span className="text-sm text-white/90">The Future of Technology</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/programmes/artificial-intelligence"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-white/20 px-4 py-1.5 text-sm font-semibold transition hover:bg-white hover:text-amber-600"
          >
            Learn More
            <Icon name="arrow-right" className="h-3.5 w-3.5" />
          </Link>
          <button
            onClick={() => setDismissed(true)}
            aria-label="Dismiss"
            className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
          >
            <Icon name="x" className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
