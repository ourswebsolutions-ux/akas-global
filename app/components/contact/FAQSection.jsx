"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How long does it take to install a solar system?",
    answer:
      "Most residential solar installations are completed in 1 to 3 days once permits are approved. The exact timeline depends on system size, roof complexity, and local inspection schedules. Our team handles all paperwork so you can enjoy clean energy with minimal disruption.",
  },
  {
    question: "Will solar panels work during cloudy or rainy days?",
    answer:
      "Yes. Solar panels still generate electricity on cloudy and rainy days, though at a reduced output. Modern panels are highly efficient and continue producing power even in diffuse light. Over the course of a year, weather variations are already factored into your system’s performance estimates.",
  },
  {
    question: "What’s the lifespan of solar panels?",
    answer:
      "Quality solar panels are designed to last 25 to 30 years or more. Most manufacturers provide a 25-year performance warranty guaranteeing at least 80–85% of original output. With proper care, many systems continue producing clean energy well beyond three decades.",
  },
  {
    question: "How much can I save with solar?",
    answer:
      "Savings vary based on your energy usage, local electricity rates, and available incentives. Most homeowners see a significant reduction in monthly utility bills and achieve full payback within 6–10 years. After that, the electricity your system produces is essentially free for the remaining life of the panels.",
  },
  {
    question: "Do I need batteries for my solar system?",
    answer:
      "Batteries are optional. A grid-tied system without storage still offsets your daytime usage and can earn credits through net metering. Adding batteries provides backup power during outages and greater energy independence, but is not required for a fully functional solar installation.",
  },
  {
    question: "Can I expand my system later?",
    answer:
      "Yes. Most systems are designed with future expansion in mind. Additional panels can usually be added to the same inverter or with a second inverter, provided your roof space and electrical service can support the increased capacity. We’ll help you plan for growth from day one.",
  },
  {
    question: "What kind of maintenance is required?",
    answer:
      "Solar panels require very little maintenance. Occasional rain usually keeps them clean, though a gentle rinse a couple of times a year can help in dusty areas. We recommend an annual visual inspection and professional check-up to ensure optimal performance and catch any issues early.",
  },
];

const headerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const subHeaderVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.12,
    },
  },
};

const descriptionVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.22,
    },
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: (i) => ({
    opacity: 0,
    x: i % 2 === 0 ? -48 : 48,
    y: 16,
  }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 90,
      damping: 18,
      mass: 0.8,
    },
  },
};

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="bg-white w-full overflow-x-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 pt-[60px] sm:pt-[90px] pb-[60px] sm:pb-[90px]">
        <motion.div
          className="flex flex-col items-center text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p
            variants={headerVariants}
            className="text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.35em] text-[#0B2A5B] mb-[18px] sm:mb-[26px]"
          >
            FAQs
          </motion.p>
          <motion.h2
            variants={subHeaderVariants}
            className="text-[26px] sm:text-[32px] md:text-[42px] lg:text-[52px] font-extrabold leading-[1.15] sm:leading-[1.05] tracking-[-0.03em] text-[#102A43] max-w-[1100px] px-1"
          >
            Your Solar Journey, Made Simple
          </motion.h2>
          <motion.p
            variants={descriptionVariants}
            className="text-[15px] sm:text-[18px] font-normal leading-[1.7] sm:leading-[1.8] text-[#102A43]/80 max-w-[900px] mt-[20px] sm:mt-[28px] mb-[48px] sm:mb-[70px] px-1"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </motion.p>
        </motion.div>

        <motion.div
          className="w-full max-w-[920px] mx-auto flex flex-col gap-[8px] sm:gap-[10px]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                className="w-full"
                custom={index}
                variants={itemVariants}
              >
                <motion.button
                  onClick={() => toggle(index)}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.985 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className={`w-full min-h-[56px] sm:h-[66px] rounded-[10px] px-4 sm:px-[28px] py-3 sm:py-0 flex items-center justify-between transition-colors duration-300 shadow-sm ${
                    isOpen
                      ? "bg-gradient-to-r from-[#0B2A5B] to-[#0B2A5B] shadow-[0_4px_20px_rgba(11,42,91,0.18)]"
                      : "bg-[#0B2A5B] hover:bg-[#0d326b]"
                  }`}
                >
                  <span className="text-white text-[15px] sm:text-[20px] font-bold leading-[1.35] sm:leading-[1.3] text-left pr-3">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{
                      rotate: isOpen ? 180 : 0,
                    }}
                    whileHover={!isOpen ? { rotate: 12, scale: 1.1 } : {}}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown
                      size={20}
                      strokeWidth={2}
                      className={`sm:w-[22px] sm:h-[22px] ${
                        isOpen ? "text-[#D8B868]" : "text-[#C8A24A]"
                      }`}
                    />
                  </motion.div>
                </motion.button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        height: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
                        opacity: { duration: 0.3, ease: "easeOut" },
                      }}
                      className="overflow-hidden"
                    >
                      <div className="bg-[#F8FAFC] px-4 sm:px-[28px] py-5 sm:py-[28px] rounded-b-[10px] border border-t-0 border-[#E5E7EB]">
                        <p className="text-[15px] sm:text-[18px] leading-[1.7] sm:leading-[1.8] text-[#102A43]/85">
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
    </section>
  );
}