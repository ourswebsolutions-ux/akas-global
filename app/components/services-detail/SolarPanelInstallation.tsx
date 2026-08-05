"use client";

import { motion, type Variants } from "framer-motion";

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 90, damping: 18, mass: 0.8 },
  },
};

const slideFromLeft = {
  hidden: { opacity: 0, x: -48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring" as const, stiffness: 85, damping: 18, mass: 0.85 },
  },
};

const slideFromRight = {
  hidden: { opacity: 0, x: 48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring" as const, stiffness: 85, damping: 18, mass: 0.85 },
  },
};

const imageReveal = {
  hidden: { opacity: 0, scale: 1.06 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 70, damping: 20, mass: 1 },
  },
};

const scaleFade = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 110, damping: 16 },
  },
};

const listItem = {
  hidden: { opacity: 0, x: -16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring" as const, stiffness: 100, damping: 18 },
  },
};

const iconPop = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 220, damping: 14 },
  },
};

export default function SolarPanelInstallation() {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-[1320px] px-4 py-8 sm:px-6 sm:py-10 lg:py-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_320px] xl:grid-cols-[1fr_340px] lg:gap-10">
          
          {/* ================= LEFT COLUMN ================= */}
          <div className="min-w-0">
            {/* Heading */}
            <motion.h1
              className="text-[28px] font-bold leading-tight tracking-tight text-[#102A43] sm:text-[36px] lg:text-[40px]"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
            >
              Solar Panel Installation
            </motion.h1>

            {/* Intro paragraph */}
            <motion.p
              className="mt-3 max-w-[640px] text-[14px] leading-[1.65] text-[#102A43]/90 sm:mt-4 sm:text-[15px]"
              variants={slideFromLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </motion.p>

            {/* Featured Image + Overlay Card */}
            <div className="relative mt-6 sm:mt-7">
              <motion.div
                className="overflow-hidden rounded-[16px] sm:rounded-[24px]"
                variants={imageReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=80"
                  alt="Solar Panel Installation"
                  className="h-[240px] w-full object-cover object-center sm:h-[340px] lg:h-[380px]"
                />
              </motion.div>

              {/* Overlay Card */}
              <motion.div
                className="absolute bottom-[12px] left-[12px] right-[12px] sm:bottom-6 sm:left-6 sm:right-auto sm:w-[78%] md:w-[72%]"
                variants={slideFromLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="rounded-[14px] border-[4px] border-white bg-gradient-to-r from-[#0B2A5B] to-[#0B2A5B]/95 px-4 py-4 shadow-[0_8px_30px_rgba(11,42,91,0.25)] sm:rounded-[20px] sm:border-[5px] sm:px-8 sm:py-6">
                  <h2 className="text-[18px] font-bold leading-none text-white sm:text-[26px] lg:text-[28px]">
                    Why Choose This Service
                  </h2>
                </div>
              </motion.div>
            </div>

            {/* Content paragraphs */}
            <motion.div
              className="mt-6 space-y-4 text-[14px] leading-[1.7] text-[#102A43]/85 sm:mt-8 sm:space-y-5 sm:text-[15px]"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.p variants={fadeUp}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a
                nibh non elit lobortis pretium. Fusce massa mauris, mollis maximus
                lectus quis, interdum accumsan augue. Pellentesque suscipit
                iaculis nulla et bibendum. Aenean eu ligula justo. Aliquam quis
                metus nulla. Duis porta eleifend rutrum. Pellentesque habitant
                morbi tristique senectus et netus et malesuada fames ac turpis
                egestas. Vivamus in tincidunt neque, bibendum consectetur elit.
                Nunc eu ultricies est.
              </motion.p>
              <motion.p variants={fadeUp}>
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Donec sed dapibus ipsum,
                euismod sodales lacus. Phasellus a elit purus. Cras at
                pellentesque odio. Donec feugiat lectus non nisl viverra, ut
                sagittis massa luctus. Vivamus id odio id neque tincidunt varius
                et quis odio. Etiam fermentum tortor nec molestie sagittis.
              </motion.p>
            </motion.div>
          </div>

          {/* ================= RIGHT SIDEBAR ================= */}
          <div className="flex flex-col gap-5 sm:gap-6">
            
            {/* Pricing Card */}
            <motion.div
              className="rounded-[20px] bg-gradient-to-br from-[#0B2A5B] to-[#0B2A5B]/90 p-5 shadow-[0_10px_40px_rgba(11,42,91,0.18)] sm:rounded-[24px] sm:p-6"
              variants={slideFromRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#D8B868]">
                Start From
              </p>

              <p className="mt-1 text-[36px] font-bold leading-none tracking-tight text-white sm:text-[48px]">
                $4,500
              </p>

              <div className="mt-5 rounded-[14px] bg-[#F8FAFC] px-4 py-4 sm:mt-6 sm:rounded-[16px] sm:px-5 sm:py-5">
                <h3 className="mb-3 text-[14px] font-bold text-[#102A43] sm:mb-4 sm:text-[15px]">
                  Package Inclusions :
                </h3>

                <motion.ul
                  className="space-y-[10px] sm:space-y-[11px]"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  {[
                    "Site survey & consultation",
                    "Solar panel & inverter",
                    "Mounting structure",
                    "Installation & wiring",
                    "System testing & commissioning",
                    "Warranty (10–25 years)",
                  ].map((item) => (
                    <motion.li
                      key={item}
                      className="flex items-start gap-2.5 text-[13px] leading-snug text-[#102A43] sm:text-[14px]"
                      variants={listItem}
                    >
                      <motion.span
                        className="mt-[1px] flex-shrink-0 text-[15px] font-bold text-[#C8A24A]"
                        variants={iconPop}
                      >
                        ✓
                      </motion.span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>

              <motion.button
                type="button"
                className="mt-4 flex w-full items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-[#C8A24A] to-[#D8B868] py-[13px] text-[14px] font-medium text-[#0B2A5B] shadow-[0_4px_16px_rgba(200,162,74,0.35)] transition-all duration-300 hover:shadow-[0_6px_22px_rgba(200,162,74,0.45)] sm:mt-5 sm:py-[14px] sm:text-[15px]"
                variants={scaleFade}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                Book Now
                <span className="text-[18px] leading-none">›</span>
              </motion.button>
            </motion.div>

            {/* Our Services Card */}
            <motion.div
              className="rounded-[16px] border border-[#E5E7EB] bg-[#F8FAFC] px-5 py-5 sm:rounded-[20px] sm:px-6 sm:py-6"
              variants={slideFromRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
            >
              <h3 className="mb-4 text-[16px] font-bold text-[#102A43] sm:mb-5 sm:text-[17px]">
                Our Services
              </h3>

              <motion.ul
                className="space-y-[12px] sm:space-y-[14px]"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                {[
                  "Energy Consultation",
                  "Solar Panel Installation",
                  "Solar System Design",
                  "Maintenance & Performance Optimization",
                  "Battery Storage Solutions",
                  "Hybrid & Off-Grid Systems",
                ].map((service) => (
                  <motion.li
                    key={service}
                    className="flex items-center gap-3 text-[13px] leading-snug text-[#102A43]/90 sm:text-[14px]"
                    variants={listItem}
                  >
                    <motion.span
                      className="h-[16px] w-[16px] flex-shrink-0 rounded-full border-[1.5px] border-[#C8A24A] bg-gradient-to-br from-[#C8A24A]/20 to-transparent sm:h-[18px] sm:w-[18px]"
                      variants={iconPop}
                    />
                    <span>{service}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}