"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function AboutSection() {
  return (
    <section className="bg-white py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-[1300px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-x-6 lg:gap-y-12">
          
          {/* Sidebar Label */}
          <div className="lg:col-span-2">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-[11px] font-semibold tracking-[0.2em] text-[#8a8a8a] uppercase pt-3"
            >
              About Us
            </motion.div>
          </div>

          {/* Left Content */}
          <div className="lg:col-span-5 flex flex-col">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.15] font-medium tracking-tight text-[#111111] mb-12 lg:mb-16"
            >
              A Global Trading Partner<br className="hidden sm:block" /> Built on Trust
            </motion.h2>
            
            <motion.div 
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="relative w-full aspect-[4/5] overflow-hidden bg-zinc-100"
            >
              <Image 
                src="/images/Hero_About-02.jpg" 
                alt="Cargo ship at sea" 
                fill 
                referrerPolicy="no-referrer"
                className="object-cover"
              />
            </motion.div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-5 flex flex-col lg:pt-[140px]">
            <motion.div 
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="relative w-full aspect-[16/10] overflow-hidden bg-zinc-100 mb-10 lg:mb-12"
            >
              <Image 
                src="/images/About_Us_Hero.jpg" 
                alt="Logistics operations" 
                fill 
                referrerPolicy="no-referrer"
                className="object-cover"
              />
            </motion.div>

            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl md:text-[1.35rem] font-medium leading-[1.4] text-[#111111] mb-5"
            >
              Established in 2021, Global High Trend General Trading L.L.C is a dynamic, multi-sector trading company built on global vision and local expertise.
            </motion.h3>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-[#555555] leading-[1.6] text-base mb-8"
            >
              With a base in Business Bay, Dubai and operations in Sharjah, we bridge supply and demand across sectors — from eco-friendly fuel and oil & gas to construction machinery, food ingredients, and renewable energy. We serve manufacturers, distributors, and enterprises seeking a dependable trading partner with strong compliance and operational standards.
            </motion.p>

            <motion.a 
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="group flex items-center gap-2 text-[#ff4a17] text-sm font-medium w-fit transition-colors hover:text-[#e03e00]"
            >
              Learn more about us 
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </motion.a>
          </div>

        </div>
      </div>
    </section>
  );
}