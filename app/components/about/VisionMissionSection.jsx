'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const fadeLeft = {
  hidden: { opacity: 0, x: -42 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring', stiffness: 70, damping: 18, mass: 0.8 },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 42 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring', stiffness: 70, damping: 18, mass: 0.8 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 75, damping: 18 },
  },
};

const imageReveal = {
  hidden: { opacity: 0, scale: 1.04 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 65, damping: 18 },
  },
};

const cardContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

export default function VisionMissionSection() {
  return (
    <section className="bg-white pt-[60px] sm:pt-[90px] pb-[60px] sm:pb-[90px] px-4 sm:px-6 overflow-x-hidden">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col md:flex-row gap-5 sm:gap-6 items-stretch">
          {/* Left Column - Cards */}
          <motion.div
            variants={cardContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="w-full md:w-[36%] flex flex-col gap-5 sm:gap-6"
          >
            {/* Vision Card */}
            <motion.div
              variants={fadeLeft}
              className="bg-[#C8A24A] rounded-[20px] sm:rounded-[22px] p-6 sm:p-9 min-h-[160px] sm:min-h-[188px] flex flex-col justify-start"
            >
              <h2 className="text-[20px] sm:text-[18px] md:text-[24px] lg:text-[36px] font-extrabold text-[#102A43] leading-[1.15] sm:leading-[1.1]">
                Our Vision
              </h2>
              <p className="mt-5 sm:mt-[26px] text-[14px] font-normal leading-[1.7] sm:leading-[1.75] text-[#102A43] max-w-[95%] sm:max-w-[90%]">
                To create a world powered by clean, renewable energy—where every home, business, and community thrives sustainably.
              </p>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              variants={fadeLeft}
              className="bg-[#0B2A5B] rounded-[20px] sm:rounded-[22px] p-6 sm:p-9 min-h-[180px] sm:min-h-[208px] flex flex-col justify-start"
            >
              <h2 className="text-[20px] sm:text-[18px] md:text-[16px] lg:text-[18px] font-extrabold text-white leading-[1.15] sm:leading-[1.1]">
                Our Mission
              </h2>
              <p className="mt-5 sm:mt-[26px] text-[14px] font-normal leading-[1.7] sm:leading-[1.75] text-white max-w-[98%] sm:max-w-[95%]">
                To deliver innovative, efficient, and reliable solar solutions that empower individuals and organizations to reduce their carbon footprint, save on energy costs, and contribute to a greener planet.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="w-full md:w-[64%] relative min-h-[280px] sm:min-h-[420px] md:min-h-0 rounded-[20px] sm:rounded-[22px] overflow-hidden"
          >
            <motion.div
              variants={imageReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="absolute inset-0"
            >
              <Image
                src="/value.jpg"
                alt="Clean energy planning with solar panels and wind turbines"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 64vw"
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}