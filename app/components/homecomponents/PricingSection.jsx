
'use client';

import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 70, damping: 18, mass: 0.8 },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring', stiffness: 70, damping: 18, mass: 0.8 },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring', stiffness: 70, damping: 18, mass: 0.8 },
  },
};

const fadeScale = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 80, damping: 16 },
  },
};

const listContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

const listItem = {
  hidden: { opacity: 0, x: -16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring', stiffness: 90, damping: 18 },
  },
};

export default function PricingSection() {
  const plans = [
    {
      name: 'GREEN START',
      description: 'Affordable entry to clean energy',
      price: '1,999',
      button: 'Choose Green Start',
      featuresTitle: 'Green Start Plan Include:',
      features: [
        '2-4 kWp solar panels',
        'Grid-connected system',
        'Mobile monitoring access',
        '1-year warranty & maintenance',
      ],
    },
    {
      name: 'SOLAR PLUS',
      description: 'Balanced power & savings',
      price: '4,999',
      button: 'Choose Solar Plus',
      featuresTitle: 'Solar Plus Plan Include:',
      features: [
        '5-8 kWp solar panels',
        'Hybrid system with battery backup',
        'Smart energy management app',
        '3-year warranty & maintenance',
      ],
    },
    {
      name: 'ECO MAX',
      description: 'Maximum efficiency for big savings',
      price: '8,999',
      button: 'Choose Eco Max',
      featuresTitle: 'Eco Max Plan Include:',
      features: [
        '10-15 kWp solar panels',
        'High-capacity battery storage',
        'AI powered performance optimization',
        '5-year premium maintenance',
      ],
    },
  ];

  return (
    <section className="bg-white py-[60px] sm:py-[90px] overflow-x-hidden">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
        <div className="flex flex-col items-center text-center">
          <motion.span
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mb-5 sm:mb-[28px] text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.25em] sm:tracking-[0.35em] text-[#102A43]"
          >
            PRICING PLAN
          </motion.span>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="max-w-[1150px] text-[28px] sm:text-[40px] md:text-[50px] font-bold leading-[1.15] sm:leading-[1.05] tracking-[-0.02em] text-[#102A43] px-2"
          >
            Choose the Plan That Powers Your Future
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-5 sm:mt-[24px] mb-10 sm:mb-[60px] max-w-[900px] text-[14px] sm:text-[16px] leading-[1.7] sm:leading-[1.8] text-[#102A43]/80 px-2"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:gap-[22px] md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              variants={index % 2 === 0 ? fadeLeft : fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className={`flex h-full flex-col rounded-[20px] sm:rounded-[24px] border border-[#C8A24A] bg-[#F8FAFC] p-5 sm:p-[26px] transition-transform duration-200 hover:-translate-y-1 ${
                index === 2
                  ? 'md:col-span-2 md:mx-auto md:w-full md:max-w-[calc(50%-11px)] lg:col-span-1 lg:mx-0 lg:max-w-none'
                  : ''
              }`}
            >
              <span className="text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.15em] sm:tracking-[0.18em] text-[#102A43]">
                {plan.name}
              </span>

              <p className="mt-5 sm:mt-[26px] text-[14px] sm:text-[16px] leading-[1.6] text-[#102A43]/80">
                {plan.description}
              </p>

              <div className="mt-8 sm:mt-[48px] mb-7 sm:mb-[40px] flex items-baseline gap-2">
                <span className="text-[16px] sm:text-[20px] font-bold text-[#102A43]/70">
                  From
                </span>
                <span className="text-[36px] sm:text-[50px] font-extrabold leading-none text-[#0B2A5B]">
                  ${plan.price}
                </span>
              </div>

              <motion.button
                variants={fadeScale}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="h-[46px] sm:h-[50px] w-full rounded-[12px] bg-[#0B2A5B] text-[15px] sm:text-[16px] font-bold text-white transition-colors hover:bg-[#081f42]"
              >
                {plan.button}
              </motion.button>

              <h3 className="mt-7 sm:mt-[36px] text-[18px] sm:text-[22px] font-bold text-[#102A43]">
                {plan.featuresTitle}
              </h3>

              <motion.ul
                variants={listContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="mt-4 sm:mt-[20px] flex flex-col gap-3 sm:gap-4"
              >
                {plan.features.map((feature) => (
                  <motion.li
                    key={feature}
                    variants={listItem}
                    className="flex items-start gap-3"
                  >
                    <Check
                      className="mt-[3px] shrink-0 text-[#C8A24A]"
                      size={18}
                      strokeWidth={2.5}
                    />
                    <span className="text-[14px] sm:text-[16px] leading-[1.7] text-[#102A43]/80">
                      {feature}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
