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

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="bg-white w-full">
      <div className="max-w-[1280px] mx-auto px-6 pt-[90px] pb-[90px]">
        <div className="flex flex-col items-center text-center">
          <p className="text-[12px] font-bold uppercase tracking-[0.35em] text-[#16291E] mb-[26px]">
            FAQs
          </p>
          <h2 className="text-[32px] md:text-[42px] lg:text-[52px] font-extrabold leading-[1.05] tracking-[-0.03em] text-[#16291E] max-w-[1100px]">
            Your Solar Journey, Made Simple
          </h2>
          <p className="text-[18px] font-normal leading-[1.8] text-[#6B7280] max-w-[900px] mt-[28px] mb-[70px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>

        <div className="w-full max-w-[920px] mx-auto flex flex-col gap-[10px]">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="w-full">
                <button
                  onClick={() => toggle(index)}
                  className={`w-full h-[66px] rounded-[10px] px-[28px] flex items-center justify-between transition-colors duration-300 ${
                    isOpen
                      ? "bg-[#83B95F]"
                      : "bg-[#83B95F] hover:bg-[#72A852]"
                  }`}
                >
                  <span className="text-white text-[20px] font-bold leading-[1.3] text-left">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{
                      rotate: isOpen ? 180 : 0,
                    }}
                    whileHover={!isOpen ? { rotate: 15 } : {}}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown
                      size={22}
                      strokeWidth={2}
                      className="text-white"
                    />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="bg-white px-[28px] py-[28px] rounded-b-[10px]">
                        <p className="text-[18px] leading-[1.8] text-[#6B7280]">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}