'use client';

import Image from 'next/image';
import { Facebook, Twitter, Instagram, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: 'Anaïs Dubois',
    role: 'CLIENT RELATIONS SPECIALIST',
    image: '/anais.jpg',
    alt: 'Anaïs Dubois',
  },
  {
    name: 'Rafael Moretti',
    role: 'HEAD OF ENGINEERING',
    image: '/rafael.jpg',
    alt: 'Rafael Moretti',
  },
  {
    name: 'Greta Kowalska',
    role: 'ENVIRONMENTAL IMPACT ANALYST',
    image: '/greta.jpg',
    alt: 'Greta Kowalska',
  },
  {
    name: 'Tomás Müller',
    role: 'Quality Assurance Specialist',
    image: '/Tomás.jpg',
    alt: 'Tomás Müller',
  },
  {
    name: 'Lukas van Dijk',
    role: 'Operations Coordinator',
    image: '/lukas.jpg',
    alt: 'Lukas van Dijk',
  },
  {
    name: 'Sophie Lindgren',
    role: 'Senior Solar Design Engineer',
    image: '/sophie.jpg',
    alt: 'Sophie Lindgren',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 80, damping: 18 },
  },
};

const fadeScale = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 90, damping: 16 },
  },
};

const slideLeft = {
  hidden: { opacity: 0, x: -36 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring', stiffness: 80, damping: 18 },
  },
};

const slideRight = {
  hidden: { opacity: 0, x: 36 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring', stiffness: 80, damping: 18 },
  },
};

const imageReveal = {
  hidden: { opacity: 0, scale: 1.04 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 70, damping: 20 },
  },
};

export default function TeamSection() {
  return (
    <section className="bg-white w-full overflow-x-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 pt-[60px] sm:pt-[90px] pb-[60px] sm:pb-[90px]">
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <motion.span
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-[11px] sm:text-[12px] font-bold tracking-[0.10em] text-[#102A43] uppercase mb-4 sm:mb-6"
          >
            OUR TEAM
          </motion.span>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-[28px] sm:text-[40px] md:text-[50px] font-bold leading-[1.15] sm:leading-[1.05] tracking-tight text-[#102A43] max-w-[1050px] px-2"
          >
            People Who Make Solar Possible
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-[14px] sm:text-[16px] leading-[1.7] sm:leading-[1.8] text-[#102A43]/80 max-w-[900px] mt-4 sm:mt-[26px] px-2"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </motion.p>

          <motion.button
            variants={fadeScale}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-8 sm:mt-10 h-12 sm:h-14 px-6 sm:px-7 bg-[#0B2A5B] text-white text-[15px] sm:text-[16px] font-medium rounded-xl flex items-center gap-2 transition-all duration-300 hover:bg-[#081f42] hover:-translate-y-0.5 group"
          >
            More Team
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </motion.button>
        </div>

        {/* Team Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-[34px]">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={index % 2 === 0 ? slideLeft : slideRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="group relative flex flex-col transition-transform duration-300 hover:-translate-y-[6px]"
            >
              {/* Image Container */}
              <div className="bg-[#F8FAFC] p-3 sm:p-4 rounded-[22px] sm:rounded-[26px] h-[340px] sm:h-[430px] overflow-hidden">
                <motion.div
                  variants={imageReveal}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  className="relative w-full h-full rounded-[16px] sm:rounded-[20px] overflow-hidden"
                >
                  <Image
                    src={member.image}
                    alt={member.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </motion.div>
              </div>

              {/* Social Media Panel - Floating */}
              <div className="absolute left-1/2 -translate-x-1/2 mb-4 sm:mb-6 bottom-[calc(100%-340px-24px)] sm:bottom-[calc(100%-430px-34px)] z-10 w-[160px] sm:w-[190px] h-[56px] sm:h-[68px] bg-white rounded-[14px] sm:rounded-[18px] shadow-[0_4px_20px_rgba(0,0,0,0.06)] flex items-center justify-center gap-3 sm:gap-4">
                <a
                  href="#"
                  className="w-[26px] h-[26px] sm:w-[30px] sm:h-[30px] bg-[#C8A24A] rounded-[8px] sm:rounded-[10px] flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-[#D8B868]"
                >
                  <Facebook className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" strokeWidth={2.5} />
                </a>
                <a
                  href="#"
                  className="w-[26px] h-[26px] sm:w-[30px] sm:h-[30px] bg-[#C8A24A] rounded-[8px] sm:rounded-[10px] flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-[#D8B868]"
                >
                  <Twitter className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" strokeWidth={2.5} />
                </a>
                <a
                  href="#"
                  className="w-[26px] h-[26px] sm:w-[30px] sm:h-[30px] bg-[#C8A24A] rounded-[8px] sm:rounded-[10px] flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-[#D8B868]"
                >
                  <Instagram className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" strokeWidth={2.5} />
                </a>
              </div>

              {/* Bottom Information Card */}
              <div className="bg-[#F8FAFC] rounded-[18px] sm:rounded-[22px] pt-[44px] sm:pt-[52px] pb-5 sm:pb-7 px-4 sm:px-6 text-center -mt-[24px] sm:-mt-[34px]">
                <h3 className="text-[20px] sm:text-[24px] font-bold text-[#102A43]">
                  {member.name}
                </h3>
                <p className="text-[11px] sm:text-[12px] font-bold tracking-[0.12em] sm:tracking-[0.15em] text-[#102A43]/70 uppercase mt-2 sm:mt-2.5">
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}