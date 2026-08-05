"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function TestimonialsSection() {
  return (
    <section className="bg-white pt-14 sm:pt-20 pb-14 sm:pb-20 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-[1280px] mx-auto">
        <motion.div
          className="flex flex-col lg:flex-row gap-10 sm:gap-14 items-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.18,
                delayChildren: 0.1,
              },
            },
          }}
        >
          {/* LEFT COLUMN - Image */}
          <motion.div
            className="w-full lg:w-[33%]"
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
              src="/testimonial.jpg"
              alt="Solar facility supervisor"
              width={400}
              height={450}
              className="w-full h-[320px] sm:h-[450px] object-cover rounded-[28px]"
              priority
            />
          </motion.div>

          {/* RIGHT COLUMN - Content */}
          <motion.div
            className="w-full lg:w-[67%] flex flex-col items-start"
            variants={{
              hidden: { opacity: 0, x: 40 },
              visible: {
                opacity: 1,
                x: 0,
                transition: {
                  type: "spring",
                  stiffness: 95,
                  damping: 18,
                  mass: 0.9,
                },
              },
            }}
          >
            {/* SMALL LABEL */}
            <motion.p
              className="text-[11px] sm:text-[12px] font-bold uppercase text-[#C8A24A] mb-2.5 sm:mb-3 tracking-[0.2em]"
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
              TESTIMONIALS
            </motion.p>

            {/* MAIN HEADING */}
            <motion.h2
              className="text-[28px] sm:text-[42px] lg:text-[54px] font-bold leading-[1.15] sm:leading-[1.05] text-[#0B2A5B] mb-4 sm:mb-6"
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
              Solar Success Stories
            </motion.h2>

            {/* DESCRIPTION */}
            <motion.p
              className="text-[14px] sm:text-[16px] leading-[1.7] text-[#102A43]/70 max-w-[760px] mb-8 sm:mb-12"
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </motion.p>

            {/* TESTIMONIAL CARD */}
            <motion.div
              className="w-full bg-[#0B2A5B] rounded-[22px] sm:rounded-[26px] p-6 sm:p-10 shadow-[0_12px_40px_rgba(11,42,91,0.15)] border border-[#C8A24A]/15"
              variants={{
                hidden: { opacity: 0, y: 32 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    stiffness: 95,
                    damping: 18,
                  },
                },
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
                {/* Left Testimonial */}
                <motion.div
                  className="flex flex-col"
                  variants={{
                    hidden: { opacity: 0, x: -24 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: {
                        type: "spring",
                        stiffness: 110,
                        damping: 17,
                      },
                    },
                  }}
                >
                  <p className="text-white text-[14px] sm:text-[16px] leading-[1.8] font-normal mb-6 sm:mb-8">
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                  </p>
                  <div className="flex items-center gap-3 sm:gap-4 mt-auto">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.75 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        type: "spring",
                        stiffness: 160,
                        damping: 14,
                        delay: 0.2,
                      }}
                    >
                      <Image
                        src="/teste.jpg"
                        alt="Sarah Lefèvre"
                        width={60}
                        height={60}
                        className="w-[48px] h-[48px] sm:w-[60px] sm:h-[60px] rounded-full object-cover border-2 border-[#C8A24A]/40"
                      />
                    </motion.div>
                    <div>
                      <p className="text-white text-[16px] sm:text-[20px] font-bold leading-tight">
                        Sarah Lefèvre
                      </p>
                      <p className="text-[#D8B868] text-[10px] sm:text-[12px] font-bold tracking-[0.2em] uppercase mt-1">
                        FACILITY SUPERVISOR
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Right Testimonial */}
                <motion.div
                  className="flex flex-col"
                  variants={{
                    hidden: { opacity: 0, x: 24 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: {
                        type: "spring",
                        stiffness: 110,
                        damping: 17,
                      },
                    },
                  }}
                >
                  <p className="text-white text-[14px] sm:text-[16px] leading-[1.8] font-normal mb-6 sm:mb-8">
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                  </p>
                  <div className="flex items-center gap-3 sm:gap-4 mt-auto">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.75 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        type: "spring",
                        stiffness: 160,
                        damping: 14,
                        delay: 0.25,
                      }}
                    >
                      <Image
                        src="/testi2.jpg"
                        alt="Sofia Müller"
                        width={60}
                        height={60}
                        className="w-[48px] h-[48px] sm:w-[60px] sm:h-[60px] rounded-full object-cover border-2 border-[#C8A24A]/40"
                      />
                    </motion.div>
                    <div>
                      <p className="text-white text-[16px] sm:text-[20px] font-bold leading-tight">
                        Sofia Müller
                      </p>
                      <p className="text-[#D8B868] text-[10px] sm:text-[12px] font-bold tracking-[0.2em] uppercase mt-1">
                        CEO
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}