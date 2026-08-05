"use client";

import React from "react";
import Image from "next/image";
import { FaPlay, FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <section className="relative w-full bg-white pt-12 sm:pt-20 lg:pt-24 pb-12 sm:pb-20 lg:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-[1280px] mx-auto">
        {/* Top 3-column layout */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-7 items-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.16,
                delayChildren: 0.1,
              },
            },
          }}
        >
          {/* Left Image */}
          <motion.div
            className="relative w-full h-[280px] sm:h-[480px] lg:h-[540px] rounded-[28px] overflow-hidden z-0"
            variants={{
              hidden: { opacity: 0, x: -48, scale: 1.04 },
              visible: {
                opacity: 1,
                x: 0,
                scale: 1,
                transition: {
                  type: "spring",
                  stiffness: 90,
                  damping: 18,
                  mass: 0.9,
                },
              },
            }}
          >
            <Image
              src="/about1.jpg"
              alt="Engineers at wind turbine site"
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover object-center"
              priority
            />
          </motion.div>

          {/* Center Content */}
          <motion.div
            className="flex flex-col items-center justify-center text-center px-2 sm:px-4 lg:px-2 py-2 sm:py-4 lg:py-8 order-first lg:order-none"
            variants={{
              hidden: { opacity: 0, y: 32 },
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
            <motion.span
              className="text-[11px] sm:text-xs font-bold tracking-[0.25em] text-[#C8A24A] uppercase mb-3 sm:mb-4"
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    stiffness: 120,
                    damping: 16,
                  },
                },
              }}
            >
              ABOUT US
            </motion.span>
            <motion.h2
              className="text-[26px] sm:text-[42px] lg:text-[48px] font-bold text-[#0B2A5B] leading-[1.15] tracking-tight mb-3 sm:mb-5"
              variants={{
                hidden: { opacity: 0, y: 28 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 18,
                  },
                },
              }}
            >
              Green energy,
              <br />
              made easy.
            </motion.h2>
            <motion.p
              className="text-[#102A43]/70 text-[13px] sm:text-[15px] leading-relaxed max-w-[320px] mx-auto mb-5 sm:mb-8"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    stiffness: 110,
                    damping: 18,
                  },
                },
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Ut elit tellus, luctus nec ullamcorper mattis,
              pulvinar dapibus leo.
            </motion.p>
            <motion.a
              href="#more-about-us"
              className="inline-flex items-center gap-2 bg-[#0B2A5B] hover:bg-[#102A43] text-white text-sm font-medium px-5 py-2.5 sm:px-6 sm:py-3.5 rounded-xl transition-colors shadow-[0_4px_16px_rgba(11,42,91,0.2)]"
              variants={{
                hidden: { opacity: 0, y: 16, scale: 0.94 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 130,
                    damping: 15,
                  },
                },
              }}
              whileHover={{
                scale: 1.04,
                y: -2,
                transition: { type: "spring", stiffness: 400, damping: 16 },
              }}
              whileTap={{ scale: 0.97 }}
            >
              More About Us
              <FaChevronRight className="w-3 h-3" />
            </motion.a>
          </motion.div>

          {/* Right Image + Play Button */}
          <motion.div
            className="relative w-full h-[280px] sm:h-[480px] lg:h-[540px] rounded-[28px] overflow-visible"
            variants={{
              hidden: { opacity: 0, x: 48, scale: 1.04 },
              visible: {
                opacity: 1,
                x: 0,
                scale: 1,
                transition: {
                  type: "spring",
                  stiffness: 90,
                  damping: 18,
                  mass: 0.9,
                },
              },
            }}
          >
            <div className="relative w-full h-[280px] sm:h-[480px] lg:h-[400px] rounded-[28px] overflow-hidden">
              <Image
                src="/about2.jpg"
                alt="Solar panels and wind farm"
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover object-center"
              />
            </div>

            {/* Floating Play Button - top center, half outside */}
            <div className="absolute -top-5 sm:-top-7 left-1/2 -translate-x-1/2 z-20">
              <motion.div
                className="relative flex items-center justify-center w-[56px] h-[56px] sm:w-[72px] sm:h-[72px]"
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 160,
                  damping: 14,
                  delay: 0.35,
                }}
                whileHover={{
                  scale: 1.1,
                  transition: { type: "spring", stiffness: 400, damping: 14 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 rounded-full bg-[#F8FAFC] shadow-[0_4px_20px_rgba(11,42,91,0.12)] border border-[#E5E7EB]" />
                <div className="absolute inset-[5px] sm:inset-[6px] rounded-full bg-white" />
                <div className="absolute inset-[10px] sm:inset-[12px] rounded-full bg-[#C8A24A] flex items-center justify-center shadow-[0_2px_10px_rgba(200,162,74,0.35)]">
                  <FaPlay className="w-3 h-3 sm:w-4 sm:h-4 text-white ml-0.5" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Stats Cards - start from right side of left image, end at right image */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 -mt-6 sm:-mt-12 lg:-mt-32 relative z-10 w-full lg:w-[78%] lg:ml-[22%]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.12,
                delayChildren: 0.15,
              },
            },
          }}
        >
          {/* Card 1 → Left */}
          <motion.div
            className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-[16px] pt-4 pb-3.5 sm:pt-7 sm:pb-5 px-2 sm:px-4 text-center shadow-[0_4px_16px_rgba(11,42,91,0.06)]"
            variants={{
              hidden: { opacity: 0, x: -28, y: 16 },
              visible: {
                opacity: 1,
                x: 0,
                y: 0,
                transition: {
                  type: "spring",
                  stiffness: 110,
                  damping: 17,
                },
              },
            }}
            whileHover={{
              y: -4,
              boxShadow: "0 10px 28px rgba(11,42,91,0.1)",
              transition: { type: "spring", stiffness: 300, damping: 18 },
            }}
          >
            <div className="text-[28px] sm:text-[48px] lg:text-[56px] font-bold text-[#0B2A5B] leading-none tracking-tight mb-1 sm:mb-1.5">
              15+
            </div>
            <p className="text-[8px] sm:text-[10px] lg:text-[11px] font-semibold tracking-[0.12em] sm:tracking-[0.16em] text-[#102A43]/70 uppercase">
              YEARS OF EXPERIENCE
            </p>
          </motion.div>

          {/* Card 2 → Right */}
          <motion.div
            className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-[16px] pt-4 pb-3.5 sm:pt-7 sm:pb-5 px-2 sm:px-4 text-center shadow-[0_4px_16px_rgba(11,42,91,0.06)]"
            variants={{
              hidden: { opacity: 0, x: 28, y: 16 },
              visible: {
                opacity: 1,
                x: 0,
                y: 0,
                transition: {
                  type: "spring",
                  stiffness: 110,
                  damping: 17,
                },
              },
            }}
            whileHover={{
              y: -4,
              boxShadow: "0 10px 28px rgba(11,42,91,0.1)",
              transition: { type: "spring", stiffness: 300, damping: 18 },
            }}
          >
            <div className="text-[28px] sm:text-[48px] lg:text-[56px] font-bold text-[#0B2A5B] leading-none tracking-tight mb-1 sm:mb-1.5">
              10+
            </div>
            <p className="text-[8px] sm:text-[10px] lg:text-[11px] font-semibold tracking-[0.12em] sm:tracking-[0.16em] text-[#102A43]/70 uppercase">
              TONS CARBON REDUCE
            </p>
          </motion.div>

          {/* Card 3 → Left */}
          <motion.div
            className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-[16px] pt-4 pb-3.5 sm:pt-7 sm:pb-5 px-2 sm:px-4 text-center shadow-[0_4px_16px_rgba(11,42,91,0.06)]"
            variants={{
              hidden: { opacity: 0, x: -28, y: 16 },
              visible: {
                opacity: 1,
                x: 0,
                y: 0,
                transition: {
                  type: "spring",
                  stiffness: 110,
                  damping: 17,
                },
              },
            }}
            whileHover={{
              y: -4,
              boxShadow: "0 10px 28px rgba(11,42,91,0.1)",
              transition: { type: "spring", stiffness: 300, damping: 18 },
            }}
          >
            <div className="text-[28px] sm:text-[48px] lg:text-[56px] font-bold text-[#0B2A5B] leading-none tracking-tight mb-1 sm:mb-1.5">
              2K+
            </div>
            <p className="text-[8px] sm:text-[10px] lg:text-[11px] font-semibold tracking-[0.12em] sm:tracking-[0.16em] text-[#102A43]/70 uppercase">
              APP USERS
            </p>
          </motion.div>

          {/* Card 4 → Right */}
          <motion.div
            className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-[16px] pt-4 pb-3.5 sm:pt-7 sm:pb-5 px-2 sm:px-4 text-center shadow-[0_4px_16px_rgba(11,42,91,0.06)]"
            variants={{
              hidden: { opacity: 0, x: 28, y: 16 },
              visible: {
                opacity: 1,
                x: 0,
                y: 0,
                transition: {
                  type: "spring",
                  stiffness: 110,
                  damping: 17,
                },
              },
            }}
            whileHover={{
              y: -4,
              boxShadow: "0 10px 28px rgba(11,42,91,0.1)",
              transition: { type: "spring", stiffness: 300, damping: 18 },
            }}
          >
            <div className="text-[28px] sm:text-[48px] lg:text-[56px] font-bold text-[#0B2A5B] leading-none tracking-tight mb-1 sm:mb-1.5">
              &lt;24
            </div>
            <p className="text-[8px] sm:text-[10px] lg:text-[11px] font-semibold tracking-[0.12em] sm:tracking-[0.16em] text-[#102A43]/70 uppercase">
              HOURS OF RESPONSE
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}