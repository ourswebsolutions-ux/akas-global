"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      {/* Background Hero Image */}
      <div className="relative w-full min-h-[520px] sm:min-h-[650px] text-white">
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ opacity: 0, scale: 1.08 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 1.4,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <Image
            src="/homehero.png"
            alt="Hero Background Wind Turbine"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center brightness-90"
          />

          {/* Subtle dark overlay with navy tint */}
          <div className="absolute inset-0 bg-[#0B2A5B]/35" />
        </motion.div>

        {/* Main Hero Text */}
        <div className="relative z-10 mx-auto max-w-[1350px] px-4 sm:px-6 pt-24 pb-[260px] sm:pt-52 sm:pb-[440px] lg:pt-56 lg:pb-[470px]">
          <motion.div
            className="flex flex-col items-center text-center max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                  delayChildren: 0.2,
                },
              },
            }}
          >
            <motion.h1
              className="text-[28px] sm:text-[60px] lg:text-[76px] font-bold tracking-tight text-white mb-3 sm:mb-5 leading-[1.2] sm:leading-[1.1] drop-shadow-sm"
              variants={{
                hidden: { opacity: 0, y: 36 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 18,
                    mass: 0.85,
                  },
                },
              }}
            >
              Powering a Greener Tomorrow.
            </motion.h1>

            <motion.p
              className="text-[13px] sm:text-[16px] lg:text-[17px] text-white/90 max-w-6xl mb-5 sm:mb-8 font-normal leading-relaxed px-1"
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    stiffness: 110,
                    damping: 18,
                    mass: 0.9,
                  },
                },
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </motion.p>

            <motion.button
              type="button"
              className="inline-flex items-center gap-2 rounded-xl bg-[#C8A24A] px-5 py-2.5 sm:px-7 sm:py-3.5 text-[13px] sm:text-[14px] font-bold text-[#0B2A5B] shadow-[0_4px_20px_rgba(11,42,91,0.25)] transition-all hover:bg-[#D8B868] hover:shadow-[0_6px_28px_rgba(200,162,74,0.35)] active:scale-[0.98]"
              variants={{
                hidden: { opacity: 0, y: 20, scale: 0.92 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 130,
                    damping: 15,
                    mass: 0.8,
                  },
                },
              }}
              whileHover={{
                y: -3,
                scale: 1.03,
                transition: { type: "spring", stiffness: 400, damping: 16 },
              }}
              whileTap={{ scale: 0.97 }}
            >
              <span>Book A Consultation</span>
              <span className="text-[11px]">▼</span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}