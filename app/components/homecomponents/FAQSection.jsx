'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: 'How long does it take to install a solar system?',
    answer:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast',
  },
  {
    question: 'Will solar panels work during cloudy or rainy days?',
    answer:
      'Yes, solar panels still generate electricity on cloudy and rainy days, though at reduced efficiency. Modern panels are designed to capture diffuse light effectively.',
  },
  {
    question: "What's the lifespan of solar panels?",
    answer:
      'Most solar panels come with a 25–30 year performance warranty and can continue producing electricity well beyond that period with proper care.',
  },
  {
    question: 'How much can I save with solar?',
    answer:
      'Savings depend on your location, energy usage, and system size. Many homeowners reduce their electricity bills by 50–90% after switching to solar.',
  },
  {
    question: 'Do I need batteries for my solar system?',
    answer:
      'Batteries are optional. They provide backup power and energy independence, but a grid-tied system without batteries still delivers significant savings.',
  },
  {
    question: 'Can I expand my system later?',
    answer:
      'Yes. Most systems are designed to be expandable. You can add more panels or battery storage as your energy needs grow.',
  },
  {
    question: 'What kind of maintenance is required?',
    answer:
      'Solar systems require minimal maintenance. Occasional cleaning and an annual inspection are usually sufficient to keep them performing optimally.',
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

const imageReveal = {
  hidden: { opacity: 0, scale: 1.04 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 65, damping: 18 },
  },
};

const accordionItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 80, damping: 18 },
  },
};

const accordionContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.1,
    },
  },
};

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="bg-white pt-[60px] sm:pt-[90px] pb-[60px] sm:pb-[90px] px-4 sm:px-6 overflow-x-hidden">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 items-start">
          {/* LEFT COLUMN */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col items-start"
          >
            {/* SMALL LABEL */}
            <motion.p
              variants={fadeUp}
              className="text-[14px] sm:text-[16px] font-bold tracking-[0.25em] sm:tracking-[0.35em] uppercase text-[#102A43] mb-5 sm:mb-7"
            >
              FAQs
            </motion.p>

            {/* MAIN HEADING */}
            <motion.h2
              variants={fadeUp}
              className="text-[28px] sm:text-[42px] md:text-[56px] lg:text-[38px] font-extrabold leading-[1.15] sm:leading-[1.02] text-[#102A43] max-w-[580px] mb-5 sm:mb-6"
            >
              Your Solar Journey,
              <br />
              Made Simple
            </motion.h2>

            {/* DESCRIPTION */}
            <motion.p
              variants={fadeUp}
              className="text-[15px] sm:text-[18px] leading-[1.7] sm:leading-[1.75] text-[#102A43]/80 max-w-[620px] mb-8 sm:mb-12"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
              ullamcorper mattis, pulvinar dapibus leo.
            </motion.p>

            {/* IMAGE */}
            <motion.div
              variants={imageReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="w-full mt-2"
            >
              <Image
                src="/faq.jpg"
                alt="Solar installation team"
                width={580}
                height={330}
                className="w-full h-[240px] sm:h-[330px] object-cover rounded-[20px] sm:rounded-[26px]"
                priority
              />
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN - Accordion */}
          <motion.div
            variants={accordionContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="w-full flex flex-col gap-[10px]"
          >
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <motion.div
                  key={index}
                  variants={accordionItem}
                  className="w-full"
                >
                  {/* Question Header */}
                  <button
                    onClick={() => toggle(index)}
                    className={`w-full flex items-center justify-between text-left rounded-[16px] sm:rounded-[18px] transition-colors duration-300 ${
                      isOpen
                        ? 'bg-[#0B2A5B] px-4 py-[18px] sm:py-[20px]'
                        : 'bg-[#0B2A5B] hover:bg-[#081f42] px-4 h-[64px] sm:h-[76px]'
                    }`}
                  >
                    <span className="text-white font-bold pr-2 text-[15px] sm:text-[20px] leading-snug">
                      {faq.question}
                    </span>
                    <span className="shrink-0 text-white">
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2.5} />
                      ) : (
                        <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2.5} />
                      )}
                    </span>
                  </button>

                  {/* Answer */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="bg-white px-4 py-5 sm:py-[24px]">
                          <p className="text-[14px] sm:text-[16px] leading-[1.75] sm:leading-[1.8] text-[#102A43]/80 max-w-[95%] sm:max-w-[90%]">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}