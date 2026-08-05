"use client";

import Image from "next/image";
import { ArrowRight, Leaf, Sun, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function ServicesSection() {
  return (
    <section className="bg-white pt-[50px] sm:pt-[70px] pb-[60px] sm:pb-[80px] px-4 sm:px-6 overflow-hidden">
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <motion.div
          className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 sm:gap-10 mb-10 sm:mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
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
          {/* Left */}
          <motion.div
            className="max-w-[620px]"
            variants={{
              hidden: { opacity: 0, x: -40 },
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
            <p className="text-[11px] sm:text-[12px] font-bold tracking-[0.35em] uppercase text-[#C8A24A] mb-4 sm:mb-5">
              OUR SERVICES
            </p>
            <h2 className="text-[26px] sm:text-[32px] lg:text-[40px] font-extrabold leading-[1.1] sm:leading-[1.05] text-[#0B2A5B]">
              Smarter Energy Starts
              <br />
              with Smarter Service.
            </h2>
          </motion.div>

          {/* Right */}
          <motion.div
            className="lg:max-w-[630px] lg:pt-10 flex flex-col items-start lg:items-end"
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
            <p className="text-[#102A43]/70 text-[14px] sm:text-[16px] leading-[1.7] mb-5 sm:mb-6 text-left lg:text-right">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus .
            </p>
            <motion.button
              className="inline-flex items-center gap-2 bg-[#0B2A5B] hover:bg-[#102A43] text-white text-[14px] sm:text-[15px] font-semibold px-5 py-2.5 sm:px-6 sm:py-[11px] rounded-full shadow-[0_4px_16px_rgba(11,42,91,0.2)] transition-colors"
              whileHover={{
                scale: 1.04,
                y: -2,
                transition: { type: "spring", stiffness: 400, damping: 16 },
              }}
              whileTap={{ scale: 0.97 }}
            >
              More Services
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Services Grid - First Row */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-5 sm:mb-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.12,
              },
            },
          }}
        >
          {/* Card 1 → Left */}
          <motion.div
            className="relative group"
            variants={{
              hidden: { opacity: 0, x: -36, y: 16 },
              visible: {
                opacity: 1,
                x: 0,
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
              className="relative h-[360px] sm:h-[430px] rounded-[22px] overflow-hidden"
              variants={{
                hidden: { opacity: 0, scale: 1.05 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 90,
                    damping: 18,
                  },
                },
              }}
            >
              <Image
                src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&q=80"
                alt="Energy Consultation"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </motion.div>
            <motion.div
              className="absolute -top-3 bg-white rounded-sm p-3 sm:p-4 z-10 shadow-[0_4px_12px_rgba(11,42,91,0.08)] border border-[#E5E7EB]/60"
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 160,
                damping: 14,
                delay: 0.25,
              }}
            >
              <Zap className="w-7 h-7 sm:w-8 sm:h-8 text-[#C8A24A]" strokeWidth={1.5} />
            </motion.div>
            <motion.div
              className="absolute bottom-4 sm:bottom-5 left-1/2 -translate-x-1/2 w-[90%] bg-white rounded-[22px] p-4 sm:p-[22px] shadow-[0_8px_30px_rgba(11,42,91,0.08)] border border-[#E5E7EB]/50"
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
              <h3 className="text-[20px] sm:text-[28px] lg:text-[34px] font-bold text-[#0B2A5B] mb-2 leading-tight">
                Energy Consultation
              </h3>
              <p className="text-[#102A43]/70 text-[14px] sm:text-[16px] leading-[1.7] mb-3 sm:mb-4 max-w-[280px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <div className="flex justify-end">
                <motion.button
                  className="w-[36px] h-[36px] sm:w-[38px] sm:h-[38px] rounded-full bg-[#0B2A5B] flex items-center justify-center shadow-[0_4px_12px_rgba(11,42,91,0.2)]"
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "#C8A24A",
                    transition: { type: "spring", stiffness: 400, damping: 16 },
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ArrowRight className="w-4 h-4 text-white" />
                </motion.button>
              </div>
            </motion.div>
          </motion.div>

          {/* Card 2 → Right */}
          <motion.div
            className="relative group"
            variants={{
              hidden: { opacity: 0, x: 36, y: 16 },
              visible: {
                opacity: 1,
                x: 0,
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
              className="relative h-[360px] sm:h-[430px] rounded-[22px] overflow-hidden"
              variants={{
                hidden: { opacity: 0, scale: 1.05 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 90,
                    damping: 18,
                  },
                },
              }}
            >
              <Image
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80"
                alt="Solar Panel Installation"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </motion.div>
            <motion.div
              className="absolute -top-3 bg-white rounded-sm p-3 sm:p-4 z-10 shadow-[0_4px_12px_rgba(11,42,91,0.08)] border border-[#E5E7EB]/60"
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 160,
                damping: 14,
                delay: 0.3,
              }}
            >
              <Sun className="w-7 h-7 sm:w-8 sm:h-8 text-[#C8A24A]" strokeWidth={1.5} />
            </motion.div>
            <motion.div
              className="absolute bottom-4 sm:bottom-5 left-1/2 -translate-x-1/2 w-[90%] bg-white rounded-[22px] p-4 sm:p-[22px] shadow-[0_8px_30px_rgba(11,42,91,0.08)] border border-[#E5E7EB]/50"
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
              <h3 className="text-[20px] sm:text-[28px] lg:text-[34px] font-bold text-[#0B2A5B] mb-2 leading-tight">
                Solar Panel Installation
              </h3>
              <p className="text-[#102A43]/70 text-[14px] sm:text-[16px] leading-[1.7] mb-3 sm:mb-4 max-w-[280px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <div className="flex justify-end">
                <motion.button
                  className="w-[36px] h-[36px] sm:w-[38px] sm:h-[38px] rounded-full bg-[#0B2A5B] flex items-center justify-center shadow-[0_4px_12px_rgba(11,42,91,0.2)]"
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "#C8A24A",
                    transition: { type: "spring", stiffness: 400, damping: 16 },
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ArrowRight className="w-4 h-4 text-white" />
                </motion.button>
              </div>
            </motion.div>
          </motion.div>

          {/* Card 3 → Left */}
          <motion.div
            className="relative group"
            variants={{
              hidden: { opacity: 0, x: -36, y: 16 },
              visible: {
                opacity: 1,
                x: 0,
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
              className="relative h-[360px] sm:h-[430px] rounded-[22px] overflow-hidden"
              variants={{
                hidden: { opacity: 0, scale: 1.05 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 90,
                    damping: 18,
                  },
                },
              }}
            >
              <Image
                src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&q=80"
                alt="Solar System Design"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </motion.div>
            <motion.div
              className="absolute -top-3 bg-white rounded-sm p-3 sm:p-4 z-10 shadow-[0_4px_12px_rgba(11,42,91,0.08)] border border-[#E5E7EB]/60"
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 160,
                damping: 14,
                delay: 0.35,
              }}
            >
              <Leaf className="w-7 h-7 sm:w-8 sm:h-8 text-[#C8A24A]" strokeWidth={1.5} />
            </motion.div>
            <motion.div
              className="absolute bottom-4 sm:bottom-5 left-1/2 -translate-x-1/2 w-[90%] bg-white rounded-[22px] p-4 sm:p-[22px] shadow-[0_8px_30px_rgba(11,42,91,0.08)] border border-[#E5E7EB]/50"
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
              <h3 className="text-[20px] sm:text-[28px] lg:text-[34px] font-bold text-[#0B2A5B] mb-2 leading-tight">
                Solar System Design
              </h3>
              <p className="text-[#102A43]/70 text-[14px] sm:text-[16px] leading-[1.7] mb-3 sm:mb-4 max-w-[280px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <div className="flex justify-end">
                <motion.button
                  className="w-[36px] h-[36px] sm:w-[38px] sm:h-[38px] rounded-full bg-[#0B2A5B] flex items-center justify-center shadow-[0_4px_12px_rgba(11,42,91,0.2)]"
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "#C8A24A",
                    transition: { type: "spring", stiffness: 400, damping: 16 },
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ArrowRight className="w-4 h-4 text-white" />
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Second Row - Full Width */}
        <motion.div
          className="relative group sm:justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: { opacity: 0, y: 36 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                type: "spring",
                stiffness: 95,
                damping: 18,
                mass: 0.9,
              },
            },
          }}
        >
          <motion.div
            className="relative h-[300px] sm:h-[360px] rounded-[22px] overflow-hidden"
            variants={{
              hidden: { opacity: 0, scale: 1.04 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: {
                  type: "spring",
                  stiffness: 90,
                  damping: 18,
                },
              },
            }}
          >
            <Image
              src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=1200&q=80"
              alt="Maintenance & Performance Optimization"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </motion.div>
          <motion.div
            className="absolute -top-3 bg-white rounded-sm p-3 sm:p-4 z-10 shadow-[0_4px_12px_rgba(11,42,91,0.08)] border border-[#E5E7EB]/60"
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 160,
              damping: 14,
              delay: 0.25,
            }}
          >
            <Leaf className="w-7 h-7 sm:w-8 sm:h-8 text-[#C8A24A]" strokeWidth={1.5} />
          </motion.div>
          <motion.div
            className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 sm:left-auto sm:translate-x-0 sm:right-8 w-[90%] sm:w-[380px] max-w-[420px] bg-white rounded-[22px] p-4 sm:p-[22px] shadow-[0_8px_30px_rgba(11,42,91,0.08)] border border-[#E5E7EB]/50"
            variants={{
              hidden: { opacity: 0, x: 32, y: 16 },
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
          >
            <h3 className="text-[20px] sm:text-[28px] lg:text-[34px] font-bold text-[#0B2A5B] mb-2 leading-tight">
              Maintenance &
              <br />
              Performance
              <br />
              Optimization
            </h3>
            <p className="text-[#102A43]/70 text-[14px] sm:text-[16px] leading-[1.7] mb-3 sm:mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="flex justify-end">
              <motion.button
                className="w-[36px] h-[36px] sm:w-[38px] sm:h-[38px] rounded-full bg-[#0B2A5B] flex items-center justify-center shadow-[0_4px_12px_rgba(11,42,91,0.2)]"
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "#C8A24A",
                  transition: { type: "spring", stiffness: 400, damping: 16 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowRight className="w-4 h-4 text-white" />
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}