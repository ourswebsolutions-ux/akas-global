"use client";

import Image from "next/image";
import { Play, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Stats() {
  return (
    <section className="relative z-10 -mt-16 sm:-mt-28 md:-mt-36 lg:-mt-40 px-4 sm:px-6 lg:px-12">
      <div className="mx-auto max-w-[1350px]">
        <motion.div
          className="flex flex-col items-center gap-6 sm:gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.18,
                delayChildren: 0.12,
              },
            },
          }}
        >
          
          {/* LEFT COLUMN - Floating White Card */}
          <motion.div
            className="w-full max-w-[470px] shrink-0 rounded-[28px] bg-white p-5 sm:p-8 shadow-[0_20px_50px_-12px_rgba(11,42,91,0.12)] -mt-6 sm:-mt-16 lg:-mt-22 mb-3 sm:mb-6 lg:mb-12 border border-[#E5E7EB]/80"
            variants={{
              hidden: { opacity: 0, x: -48, y: 20 },
              visible: {
                opacity: 1,
                x: 0,
                y: 0,
                transition: {
                  type: "spring",
                  stiffness: 95,
                  damping: 18,
                  mass: 0.9,
                },
              },
            }}
            whileHover={{
              y: -5,
              boxShadow: "0 28px 60px -12px rgba(11,42,91,0.16)",
              transition: { type: "spring", stiffness: 300, damping: 18 },
            }}
          >
            <motion.h2
              className="text-[24px] sm:text-[32px] font-bold leading-[1.15] tracking-tight text-[#102A43]"
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    stiffness: 110,
                    damping: 17,
                  },
                },
              }}
            >
              Empowering with Clean Energy
            </motion.h2>
            <motion.p
              className="mt-2.5 sm:mt-4 text-[13px] sm:text-sm leading-relaxed text-[#102A43]/70"
              variants={{
                hidden: { opacity: 0, y: 16 },
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </motion.p>

            <motion.div
              className="relative mt-4 sm:mt-6 h-[160px] sm:h-[200px] w-full overflow-hidden rounded-[24px]"
              variants={{
                hidden: { opacity: 0, scale: 1.06 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 90,
                    damping: 18,
                    mass: 0.95,
                  },
                },
              }}
            >
              <Image
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1000&auto=format&fit=crop"
                alt="Solar panels under blue sky"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 470px"
                priority
              />
              {/* Centered Play Button */}
              <motion.button
                type="button"
                className="absolute left-1/2 top-1/2 flex h-12 w-12 sm:h-16 sm:w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-[#C8A24A] shadow-[0_8px_24px_rgba(11,42,91,0.25)] transition-colors duration-300 hover:bg-[#D8B868]"
                aria-label="Play video"
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 160,
                  damping: 14,
                  delay: 0.3,
                }}
                whileHover={{
                  scale: 1.12,
                  transition: { type: "spring", stiffness: 400, damping: 14 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="ml-1 h-5 w-5 sm:h-7 sm:w-7 fill-white text-white" />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* CENTER COLUMN - Statistics */}
          <motion.div
            className="flex flex-1 flex-col lg:mt-12 items-center justify-center gap-6 sm:gap-12 self-center sm:flex-row sm:gap-[70px] lg:pt-16"
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
            <motion.div
              className="text-center"
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: {
                    type: "spring",
                    stiffness: 120,
                    damping: 16,
                  },
                },
              }}
            >
              <p className="text-[28px] sm:text-[36px] font-bold leading-none text-[#0B2A5B]">
                12K+
              </p>
              <p className="mt-2 sm:mt-3 text-[11px] lg:text-[10px] md:text-[10px] sm:text-[10px] font-semibold uppercase tracking-wide text-[#102A43]/70">
                Solar Panels Installed
              </p>
            </motion.div>
            <motion.div
              className="text-center"
              variants={{
                hidden: { opacity: 0, x: 20 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: {
                    type: "spring",
                    stiffness: 120,
                    damping: 16,
                  },
                },
              }}
            >
              <p className="text-[28px] sm:text-[36px] font-bold leading-none text-[#0B2A5B]">
                25M+
              </p>
              <p className="mt-2 sm:mt-3 text-[11px] lg:text-[10px] md:text-[10px] sm:text-[10px] font-semibold uppercase tracking-wide text-[#102A43]/70">
                kWh Energy Generated
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN - Green CTA Card */}
          <motion.div
            className="w-full max-w-[340px] shrink-0 self-center rounded-3xl bg-[#0B2A5B] p-5 sm:p-8 shadow-[0_20px_50px_-12px_rgba(11,42,91,0.25)] lg:mt-10 lg:self-start border border-[#C8A24A]/20"
            variants={{
              hidden: { opacity: 0, x: 48, y: 20 },
              visible: {
                opacity: 1,
                x: 0,
                y: 0,
                transition: {
                  type: "spring",
                  stiffness: 95,
                  damping: 18,
                  mass: 0.9,
                },
              },
            }}
            whileHover={{
              y: -5,
              boxShadow: "0 28px 60px -12px rgba(11,42,91,0.3)",
              transition: { type: "spring", stiffness: 300, damping: 18 },
            }}
          >
            <motion.h3
              className="text-[24px] sm:text-[36px] font-bold leading-[1.15] text-white"
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    stiffness: 110,
                    damping: 17,
                  },
                },
              }}
            >
              Explore the
              <br />
              Future of Solar
              <br />
              Energy
            </motion.h3>
            <motion.button
              type="button"
              className="mt-5 sm:mt-8 inline-flex items-center gap-2 rounded-full bg-[#C8A24A] px-5 py-2.5 sm:px-6 sm:py-3.5 text-[14px] sm:text-base font-semibold text-[#0B2A5B] shadow-[0_4px_16px_rgba(200,162,74,0.35)] transition-colors duration-300 hover:bg-[#D8B868] hover:shadow-[0_6px_24px_rgba(200,162,74,0.45)]"
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
                scale: 1.06,
                y: -2,
                transition: { type: "spring", stiffness: 400, damping: 14 },
              }}
              whileTap={{ scale: 0.97 }}
            >
              Explore Energy
              <ArrowRight className="h-5 w-5" />
            </motion.button>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}