'use client';

import { useState } from 'react';
import { Phone, MapPin, Mail, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 85, damping: 18, mass: 0.8 },
  },
};

const slideFromLeft = {
  hidden: { opacity: 0, x: -48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring', stiffness: 80, damping: 18, mass: 0.85 },
  },
};

const slideFromRight = {
  hidden: { opacity: 0, x: 48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring', stiffness: 80, damping: 18, mass: 0.85 },
  },
};

const mapReveal = {
  hidden: { opacity: 0, scale: 1.06 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 70, damping: 20, mass: 1 },
  },
};

const scaleFade = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 110, damping: 16 },
  },
};

const cardContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.12,
    },
  },
};

const cardItem = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 90, damping: 18 },
  },
};

const iconPop = {
  hidden: { opacity: 0, scale: 0.55 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 220, damping: 14 },
  },
};

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    questions: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const contactCards = [
    {
      icon: Phone,
      title: 'Call Now',
      detail: '+123 678 901',
    },
    {
      icon: MapPin,
      title: 'Location',
      detail: '12 Pemuda Streets, Jakarta, Indonesia',
    },
    {
      icon: Mail,
      title: 'Email',
      detail: 'info@akas.com',
    },
    {
      icon: Clock,
      title: 'Availability Hours',
      detail: 'Monday-Friday, 9 AM - 5 PM',
    },
  ];

  return (
    <section className="bg-white py-12 sm:py-[90px] px-4 sm:px-6 overflow-x-hidden">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-5 sm:gap-6 items-start">
          {/* LEFT COLUMN - Form */}
          <motion.div
            variants={slideFromLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="w-full lg:w-[54%] bg-gradient-to-br from-[#0B2A5B] to-[#0B2A5B]/95 rounded-[16px] sm:rounded-[24px] p-5 sm:p-12 shadow-[0_12px_40px_rgba(11,42,91,0.18)]"
          >
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 sm:gap-x-[30px] gap-y-4 sm:gap-y-6">
                <div>
                  <label className="block text-[11px] sm:text-[13px] font-bold tracking-[0.08em] uppercase text-white mb-2 sm:mb-3">
                    YOUR NAME <span className="text-[#D8B868]">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g John Doe"
                    className="w-full h-[48px] sm:h-[56px] bg-white rounded-[10px] px-4 sm:px-6 text-[14px] sm:text-[16px] text-[#102A43] placeholder:text-[#8B95A5] outline-none focus:ring-2 focus:ring-[#C8A24A]/50 transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-[11px] sm:text-[13px] font-bold tracking-[0.08em] uppercase text-white mb-2 sm:mb-3">
                    PHONE <span className="text-[#D8B868]">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g +086-2468-3881"
                    className="w-full h-[48px] sm:h-[56px] bg-white rounded-[10px] px-4 sm:px-6 text-[14px] sm:text-[16px] text-[#102A43] placeholder:text-[#8B95A5] outline-none focus:ring-2 focus:ring-[#C8A24A]/50 transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-[11px] sm:text-[13px] font-bold tracking-[0.08em] uppercase text-white mb-2 sm:mb-3">
                    EMAIL ADDRESS <span className="text-[#D8B868]">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g johndoe@gmail.com"
                    className="w-full h-[48px] sm:h-[56px] bg-white rounded-[10px] px-4 sm:px-6 text-[14px] sm:text-[16px] text-[#102A43] placeholder:text-[#8B95A5] outline-none focus:ring-2 focus:ring-[#C8A24A]/50 transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-[11px] sm:text-[13px] font-bold tracking-[0.08em] uppercase text-white mb-2 sm:mb-3">
                    SUBJECT <span className="text-[#D8B868]">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g Building Construction"
                    className="w-full h-[48px] sm:h-[56px] bg-white rounded-[10px] px-4 sm:px-6 text-[14px] sm:text-[16px] text-[#102A43] placeholder:text-[#8B95A5] outline-none focus:ring-2 focus:ring-[#C8A24A]/50 transition-all duration-300"
                  />
                </div>
              </div>

              <div className="mt-4 sm:mt-6">
                <label className="block text-[11px] sm:text-[13px] font-bold tracking-[0.08em] uppercase text-white mb-2 sm:mb-3">
                  QUESTIONS <span className="text-[#D8B868]">*</span>
                </label>
                <textarea
                  name="questions"
                  value={formData.questions}
                  onChange={handleChange}
                  placeholder="Questions"
                  rows={6}
                  className="w-full h-[140px] sm:h-[180px] bg-white rounded-[10px] p-4 sm:p-6 text-[14px] sm:text-[16px] text-[#102A43] placeholder:text-[#8B95A5] outline-none focus:ring-2 focus:ring-[#C8A24A]/50 transition-all duration-300 resize-none"
                />
              </div>

              <motion.button
                type="submit"
                variants={scaleFade}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="mt-5 sm:mt-7 h-[46px] sm:h-[54px] w-[120px] sm:w-[140px] bg-gradient-to-r from-[#C8A24A] to-[#D8B868] text-[#0B2A5B] text-[14px] sm:text-[16px] font-bold rounded-[12px] shadow-[0_4px_16px_rgba(200,162,74,0.35)] transition-all duration-300 hover:shadow-[0_6px_22px_rgba(200,162,74,0.45)]"
              >
                Submit
              </motion.button>
            </form>
          </motion.div>

          {/* RIGHT COLUMN */}
          <motion.div
            variants={slideFromRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="w-full lg:w-[46%] flex flex-col items-start"
          >
            <motion.p
              variants={fadeUp}
              className="text-[11px] sm:text-[12px] font-bold tracking-[0.2em] sm:tracking-[0.35em] uppercase text-[#C8A24A] mb-3 sm:mb-6"
            >
              GET IN TOUCH
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="text-[24px] sm:text-[40px] md:text-[50px] font-bold leading-[1.15] sm:leading-[1.05] tracking-[-0.03em] text-[#0B2A5B] max-w-[560px]"
            >
              Start Your Building
              <br />
              Journey Today
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-[14px] sm:text-[16px] font-normal leading-[1.7] sm:leading-[1.8] text-[#102A43]/80 max-w-[520px] mt-4 sm:mt-[30px] mb-4 sm:mb-7"
            >
              Reach out for expert construction advice, project planning, and reliable delivery support.
            </motion.p>

            <motion.div
              variants={mapReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              className="w-full h-[220px] sm:h-[320px] rounded-[14px] sm:rounded-[18px] overflow-hidden shadow-[0_8px_30px_rgba(11,42,91,0.12)] border border-[#E5E7EB]"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.548847489!2d-0.119543!3d51.503324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b900d26973%3A0x4291f3172409ea92!2sLondon%20Eye!5e0!3m2!1sen!2suk!4v1710000000000!5m2!1sen!2suk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="London Eye Map"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Contact Info Cards - Below */}
        <motion.div
          variants={cardContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          className="mt-6 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5"
        >
          {contactCards.map((card, index) => {
            const Icon = card.icon;
            const direction = index % 2 === 0 ? -28 : 28;
            return (
              <motion.div
                key={card.title}
                variants={{
                  hidden: { opacity: 0, x: direction, y: 16 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    transition: { type: 'spring', stiffness: 90, damping: 18 },
                  },
                }}
                className="flex items-start gap-3 sm:gap-4 bg-[#F8FAFC] border border-[#E5E7EB] rounded-[12px] sm:rounded-[16px] px-4 sm:px-5 py-4 sm:py-5 shadow-[0_4px_16px_rgba(11,42,91,0.06)] hover:border-[#C8A24A]/40 hover:shadow-[0_6px_22px_rgba(11,42,91,0.1)] transition-all duration-300"
              >
                <motion.div variants={iconPop}>
                  <Icon
                    size={22}
                    strokeWidth={1.8}
                    className="text-[#C8A24A] shrink-0 mt-0.5 sm:w-[28px] sm:h-[28px]"
                  />
                </motion.div>
                <div>
                  <h4 className="text-[15px] sm:text-[18px] font-bold text-[#0B2A5B] leading-tight">
                    {card.title}
                  </h4>
                  <p className="text-[13px] sm:text-[15px] text-[#102A43]/70 mt-1 leading-snug">
                    {card.detail}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}