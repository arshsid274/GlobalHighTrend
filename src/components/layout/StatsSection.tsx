"use client";

import { motion } from "motion/react";
import { Building2, MessageSquare, Network, Calendar } from "lucide-react";

const STATS = [
  {
    icon: Building2,
    value: "GCC",
    label: "Market Access",
  },
  {
    icon: MessageSquare,
    value: "🌍",
    label: "Multilingual Team",
  },
  {
    icon: Network,
    value: "50+",
    label: "Global Supplier Network",
  },
  {
    icon: Calendar,
    value: "2021",
    label: "Est. in Dubai",
  },
];

export function StatsSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-12 max-w-[1300px]">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full">
          {STATS.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center text-center w-full lg:w-1/4 py-8 relative"
            >
              {/* Desktop Divider */}
              {i !== STATS.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-24 bg-zinc-200" />
              )}
              {/* Mobile Divider */}
              {i !== STATS.length - 1 && (
                <div className="lg:hidden absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-24 bg-zinc-200" />
              )}

              <stat.icon className="w-[30px] h-[30px] text-[#111111] mb-5 stroke-[1]" />
              <div className="text-4xl md:text-[2.75rem] font-normal text-[#111111] mb-3 tracking-tight leading-none">
                {stat.value}
              </div>
              <div className="text-[13px] text-[#555555]">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
