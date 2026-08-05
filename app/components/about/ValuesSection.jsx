'use client';

import { Leaf, Zap, Handshake, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';

const values = [
  {
    icon: Leaf,
    title: 'Sustainability',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
  },
  {
    icon: Zap,
    title: 'Innovation',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
  },
  {
    icon: Handshake,
    title: 'Integrity',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
  },
  {
    icon: Wrench,
    title: 'Quality',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 70, damping: 18, mass: 0.8 },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -36 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring', stiffness: 70, damping: 18, mass: 0.8 },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 36 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring', stiffness: 70, damping: 18, mass: 0.8 },
  },
};

const cardContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
};

export default function ValuesSection() {
  return (
    <section className="bg-white py-[60px] sm:py-[90px] px-4 sm:px-6 overflow-x-hidden">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col items-center text-center">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-[11px] sm:text-[12px] font-bold tracking-[0.12em] sm:tracking-[0.15em] uppercase text-[#102A43] mb-5 sm:mb-[26px]"
          >
            OUR VALUES
          </motion.p>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-[28px] sm:text-[40px] md:text-[54px] font-bold leading-[1.15] sm:leading-[1.05] tracking-[-0.03em] text-[#102A43] max-w-[1150px] px-2"
          >
            Where Innovation Meets Responsibility
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-[14px] sm:text-[16px] font-normal leading-[1.7] sm:leading-[1.8] text-[#102A43]/80 max-w-[900px] mt-5 sm:mt-[30px] mb-10 sm:mb-[70px] px-2"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </motion.p>
        </div>

        <motion.div
          variants={cardContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-[26px]"
        >
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                variants={index % 2 === 0 ? fadeLeft : fadeRight}
                className="bg-[#F8FAFC] rounded-[20px] sm:rounded-[24px] p-7 sm:p-[40px] min-h-[300px] sm:min-h-[370px] flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-[6px]"
              >
                <Icon
                  size={48}
                  strokeWidth={1.6}
                  className="text-[#0B2A5B] mb-7 sm:mb-[34px] sm:w-[58px] sm:h-[58px]"
                />
                <h3 className="text-[20px] sm:text-[24px] font-bold leading-[1.2] text-[#0B2A5B] mb-5 sm:mb-[24px]">
                  {value.title}
                </h3>
                <p className="text-[14px] sm:text-[15px] font-normal leading-[1.7] sm:leading-[1.8] text-[#102A43]/70 max-w-[260px]">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}