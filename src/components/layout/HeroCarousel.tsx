"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowDownRight, Plus, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const VIDEOS = [
  "/videos/Hero_Video.mp4",
];

export function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (VIDEOS.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % VIDEOS.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-zinc-950 text-white">
      {/* Background Videos */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <AnimatePresence initial={false}>
          <motion.video
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
            src={VIDEOS[currentIndex]}
          />
        </AnimatePresence>
      </div>

      {/* Content */}
      <div className="relative z-20 flex min-h-screen flex-col justify-end px-6 py-8 md:px-12 md:py-12">
        {/* Top Section — pinned to top */}
        <div className="absolute top-0 left-0 right-0 flex w-full flex-col gap-6 px-6 pt-8 md:px-12 md:pt-12">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center md:gap-6">
            <div className="flex items-center gap-3 text-[10px] font-medium tracking-widest uppercase sm:text-xs md:text-sm">
              <Plus className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="font-mono">Est. 2021 — Business Bay, Dubai</span>
            </div>

            {/* Carousel Controls */}
            <div className="flex items-center gap-3 sm:gap-4">
              <button
                onClick={() =>
                  setCurrentIndex(
                    (prev) => (prev - 1 + VIDEOS.length) % VIDEOS.length
                  )
                }
                className="rounded-full border border-white/20 p-1.5 sm:p-2 transition-colors hover:bg-white/10"
                aria-label="Previous video"
              >
                <ChevronLeft className="h-3 w-3 sm:h-4 sm:w-4" />
              </button>
              <div className="font-mono text-[10px] sm:text-xs font-medium tracking-widest">
                0{currentIndex + 1} / 0{VIDEOS.length}
              </div>
              <button
                onClick={() =>
                  setCurrentIndex((prev) => (prev + 1) % VIDEOS.length)
                }
                className="rounded-full border border-white/20 p-1.5 sm:p-2 transition-colors hover:bg-white/10"
                aria-label="Next video"
              >
                <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
              </button>
            </div>
          </div>
          <div className="h-px w-full bg-white/20" />
        </div>

        {/* Bottom Section */}
        <div className="mb-4 grid grid-cols-1 gap-8 sm:mb-8 sm:gap-12 lg:mb-12 lg:grid-cols-12 lg:gap-8">
          {/* Headline */}
          <div className="lg:col-span-7 xl:col-span-8">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="text-[2.25rem] font-medium leading-[1.1] tracking-tight sm:text-5xl md:text-[3.5rem] lg:text-[4.25rem] xl:text-[5rem]"
            >
              Connecting Global Supply
              <br className="hidden sm:block" />
              {" "}to Regional Demand
            </motion.h1>
          </div>

          {/* Right Content */}
          <div className="flex flex-col justify-end gap-6 sm:gap-8 lg:col-span-5 xl:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              className="flex gap-3 sm:gap-4"
            >
              <ArrowDownRight className="mt-1 sm:mt-1.5 h-4 w-4 sm:h-5 sm:w-5 shrink-0 text-white/70" />
              <p className="text-sm leading-relaxed text-white/80 sm:text-base md:text-lg">
                UAE-based multi-sector trading specialists in eco-friendly fuel,
                oil &amp; gas, industrial machinery, food ingredients, and
                renewable energy. Headquartered in Business Bay, Dubai.
                Operating across the GCC and MENA.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
              className="flex flex-row flex-wrap items-center gap-3 sm:gap-4"
            >
              <Link
                href="/contact"
                className="group relative overflow-hidden rounded-none border border-white/30 bg-white/10 px-6 py-3 sm:px-8 sm:py-4 backdrop-blur-md transition-all hover:bg-white hover:text-black text-center"
              >
                <span className="relative z-10 text-[10px] sm:text-xs font-semibold uppercase tracking-widest">
                  Request a Quote
                </span>
              </Link>
              <Link
                href="/services"
                className="group relative overflow-hidden rounded-none border border-white/30 sm:border-transparent px-6 py-3 sm:px-8 sm:py-4 transition-all hover:border-white/30 hover:bg-white/5 text-center"
              >
                <span className="relative z-10 text-[10px] sm:text-xs font-semibold uppercase tracking-widest">
                  Our Services
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
