"use client";

import Image from "next/image";
import { Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="bg-white py-14 sm:py-20 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-[1280px] mx-auto">
        <motion.div
          className="relative overflow-hidden rounded-[24px] sm:rounded-[30px] min-h-[420px] sm:min-h-[520px] flex items-center justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0, y: 28 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                type: "spring",
                stiffness: 90,
                damping: 18,
                mass: 0.95,
              },
            },
          }}
        >
          {/* Fixed background layer */}
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: "url('/ctabg.jpg')",
              backgroundAttachment: "fixed",
              backgroundSize: "cover",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
            }}
          />
          {/* Optimized next/image fallback layer for loading */}
          <div className="absolute inset-0 z-0 pointer-events-none opacity-0">
            <Image
              src="/cta-bg.png"
              alt="Solar farm aerial view"
              fill
              priority
              className="object-cover object-center"
              sizes="1280px"
            />
          </div>

          {/* Navy overlay with subtle gradient */}
          <div
            className="absolute inset-0 z-[1]"
            style={{
              background:
                "linear-gradient(to bottom, rgba(11,42,91,0.55) 0%, rgba(11,42,91,0.62) 50%, rgba(11,42,91,0.68) 100%)",
            }}
          />

          {/* Floating content - perfectly centered */}
          <motion.div
            className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 py-12 sm:py-16 w-full max-w-[900px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.16,
                  delayChildren: 0.15,
                },
              },
            }}
          >
            {/* SMALL LABEL */}
            <motion.p
              className="text-[11px] sm:text-[12px] font-bold tracking-[0.35em] uppercase text-[#C8A24A] mb-4 sm:mb-6"
              variants={{
                hidden: { opacity: 0, y: 18 },
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
              GET STARTED
            </motion.p>

            {/* MAIN HEADING - three balanced lines */}
            <motion.h2
              className="text-[26px] sm:text-[42px] md:text-[56px] lg:text-[48px] font-bold leading-[1.15] sm:leading-[1.05] text-white mb-7 sm:mb-10"
              variants={{
                hidden: { opacity: 0, y: 32 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 18,
                    mass: 0.9,
                  },
                },
              }}
            >
              Save Money.
              <br />
              Save the Planet.
              <br />
              Start with EcoWatts.
            </motion.h2>

            {/* FEATURE LIST */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-6 sm:gap-10 mb-8 sm:mb-10"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.12,
                    delayChildren: 0.05,
                  },
                },
              }}
            >
              <motion.div
                className="flex items-center gap-2"
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
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#C8A24A] shrink-0" strokeWidth={2.5} />
                <span className="text-white text-[13px] sm:text-[18px] lg:text-[18px] 2xl:text-[22px] whitespace-nowrap">
                  Cost Savings
                </span>
              </motion.div>
              <motion.div
                className="flex items-center gap-2 sm:gap-2.5"
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
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#C8A24A] shrink-0" strokeWidth={2.5} />
                <span className="text-white text-[13px] sm:text-[18px] lg:text-[18px] 2xl:text-[22px] whitespace-nowrap">
                  Sustainable Technology
                </span>
              </motion.div>
              <motion.div
                className="flex items-center gap-2 sm:gap-2.5"
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
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#C8A24A] shrink-0" strokeWidth={2.5} />
                <span className="text-white text-[13px] sm:text-[18px] lg:text-[18px] 2xl:text-[22px] whitespace-nowrap">
                  Free Installation
                </span>
              </motion.div>
            </motion.div>

            {/* BUTTON */}
            <motion.button
              className="inline-flex items-center justify-center gap-2 bg-[#C8A24A] text-[#0B2A5B] font-semibold text-[14px] sm:text-[16px] rounded-[14px] h-[48px] sm:h-[56px] px-6 sm:px-8 min-w-[150px] sm:min-w-[160px] max-w-[280px] w-full sm:w-auto shadow-[0_4px_20px_rgba(200,162,74,0.35)] transition-all duration-300 hover:bg-[#D8B868] hover:shadow-[0_8px_28px_rgba(200,162,74,0.45)]"
              variants={{
                hidden: { opacity: 0, y: 18, scale: 0.94 },
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
                y: -3,
                transition: { type: "spring", stiffness: 400, damping: 16 },
              }}
              whileTap={{ scale: 0.97 }}
            >
              Get Started
              <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}