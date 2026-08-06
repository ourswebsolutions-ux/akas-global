"use client";

import Image from "next/image";
import { ArrowRight, Zap, Building2, Sun } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=900&auto=format&fit=crop",
    capacity: "12,500 m²",
    type: "Corporate",
    system: "Reinforced Concrete Frame",
    title: "Corporate Headquarters",
    location: "Jakarta, Indonesia",
    description: "Complete structural and fit-out delivery for a modern corporate campus built to exacting standards.",
  },
  {
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=900&auto=format&fit=crop",
    capacity: "8,400 m²",
    type: "Private Hospitality",
    system: "Full Turnkey Construction",
    title: "Eco-Luxury Resort",
    location: "Nusa Penida, Indonesia",
    description: "Seamless resort construction delivering refined spaces with durable materials and precise detailing.",
  },
  {
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=900&auto=format&fit=crop",
    capacity: "18,000 m²",
    type: "Corporate",
    system: "Steel Frame Construction",
    title: "Industrial Complex Build",
    location: "Cikarang, Indonesia",
    description: "Large-scale industrial facility engineered for efficiency, safety, and long-term operational strength.",
  },
  {
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=900&auto=format&fit=crop",
    capacity: "25,000 m²",
    type: "Commercial",
    system: "Complete Structural Build",
    title: "Shopping Mall Development",
    location: "Osaka, Japan",
    description: "Integrated commercial construction delivering high-traffic spaces with robust structural performance.",
  },
];

export default function ProjectsSection() {
  return (
    <section className="relative w-full min-h-[700px] sm:min-h-[900px] flex items-center justify-center py-14 sm:py-20 overflow-hidden">
    
      {/* Content Container - same width as Navbar (max-w-[1350px]) */}
      <div className="relative w-full max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-12 flex flex-col items-center">
        {/* Top Content - Centered */}
        <motion.div
          className="flex flex-col items-center text-center w-full max-w-[900px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.16,
                delayChildren: 0.1,
              },
            },
          }}
        >
          <motion.span
            className="text-[11px] sm:text-[12px] font-medium tracking-[0.25em] uppercase text-[#C8A24A] mb-4 sm:mb-5"
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
            OUR PROJECTS
          </motion.span>

          <motion.h2
            className="text-[28px] sm:text-[40px] md:text-[40px] lg:text-[42px] font-bold text-black leading-[1.15] sm:leading-[1.05] mb-4 sm:mb-5"
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
            Turning Bold Ideas into Strong Structures.
          </motion.h2>

          <motion.p
            className="text-[13px] sm:text-[15px] text-black/60 max-w-[560px] leading-relaxed mb-6 sm:mb-8 px-1"
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
            Expert construction and engineering projects delivered with precision across commercial and industrial sites.
          </motion.p>

          <motion.button
            className="inline-flex items-center gap-2 bg-[#C8A24A] text-[#0B2A5B] text-[13px] sm:text-[14px] font-semibold px-5 py-2.5 sm:px-6 sm:py-2.5 rounded-[12px] shadow-[0_4px_16px_rgba(200,162,74,0.3)] hover:bg-[#D8B868] hover:shadow-[0_6px_24px_rgba(200,162,74,0.4)] transition-colors duration-200"
            variants={{
              hidden: { opacity: 0, y: 16, scale: 0.94 },
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
              y: -2,
              transition: { type: "spring", stiffness: 400, damping: 16 },
            }}
            whileTap={{ scale: 0.97 }}
          >
            More Projects
            <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
          </motion.button>
        </motion.div>

        {/* Project Grid - full navbar width so cards are wider */}
        <motion.div
          className="mt-10 sm:mt-14 w-full grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.14,
                delayChildren: 0.15,
              },
            },
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-[#0B2A5B] rounded-[18px] p-[6px] sm:p-[8px] shadow-[0_4px_24px_rgba(11,42,91,0.25)] border border-[#C8A24A]/15"
              variants={{
                hidden: {
                  opacity: 0,
                  x: index % 2 === 0 ? -40 : 40,
                  y: 20,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                  y: 0,
                  transition: {
                    type: "spring",
                    stiffness: 95,
                    damping: 18,
                    mass: 0.9,
                  },
                },
              }}
              whileHover={{
                y: -5,
                boxShadow: "0 12px 36px rgba(11,42,91,0.3)",
                transition: { type: "spring", stiffness: 300, damping: 18 },
              }}
            >
              {/* Project Image - taller to match wider cards */}
              <motion.div
                className="relative w-full h-[220px] sm:h-[280px] md:h-[320px] rounded-[14px] overflow-hidden"
                variants={{
                  hidden: { opacity: 0, scale: 1.06 },
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
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 640px"
                />
              </motion.div>

              {/* Gold Info Strip */}
              <div className="bg-[#C8A24A] rounded-[10px] px-2.5 sm:px-3.5 py-[7px] sm:py-[8px] mt-2 flex items-center justify-between gap-1.5 sm:gap-2">
                <div className="flex items-center gap-1 sm:gap-1.5 min-w-0">
                  <Zap className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white shrink-0" strokeWidth={2.5} />
                  <span className="text-[10px] sm:text-[11px] font-medium text-white whitespace-nowrap">
                    {project.capacity}
                  </span>
                </div>
                <div className="flex items-center gap-1 sm:gap-1.5 min-w-0">
                  <Building2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white shrink-0" strokeWidth={2.5} />
                  <span className="text-[10px] sm:text-[11px] font-medium text-white whitespace-nowrap">
                    {project.type}
                  </span>
                </div>
                <div className="flex items-center gap-1 sm:gap-1.5 min-w-0">
                  <Sun className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white shrink-0" strokeWidth={2.5} />
                  <span className="text-[10px] sm:text-[11px] font-medium text-white whitespace-nowrap truncate">
                    {project.system}
                  </span>
                </div>
              </div>

              {/* White Content Box */}
              <div className="bg-white rounded-b-[14px] rounded-t-[6px] px-4 sm:px-5 pt-3.5 sm:pt-4 pb-4 sm:pb-5 mt-2 relative min-h-[100px] sm:min-h-[110px]">
                <h3 className="text-[14px] sm:text-[16px] font-semibold text-[#0B2A5B] leading-snug pr-8">
                  {project.title}{" "}
                  <span className="text-[12px] sm:text-[13px] font-medium text-[#C8A24A]">
                    | Location: {project.location}
                  </span>
                </h3>
                <p className="text-[12px] sm:text-[13px] text-[#102A43]/70 leading-relaxed mt-1.5 sm:mt-2 line-clamp-2 pr-10">
                  {project.description}
                </p>
                <motion.button
                  className="absolute bottom-[14px] sm:bottom-[18px] right-[14px] sm:right-[18px] w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#0B2A5B] flex items-center justify-center shadow-[0_4px_12px_rgba(11,42,91,0.2)]"
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "#C8A24A",
                    transition: { type: "spring", stiffness: 400, damping: 16 },
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" strokeWidth={2.5} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}