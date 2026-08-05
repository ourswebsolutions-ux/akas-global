'use client';

import { useState } from 'react';
import { Phone, MapPin, Mail, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

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

const cardContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const cardItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 80, damping: 18 },
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
      detail: 'eco@wattservice.com',
    },
    {
      icon: Clock,
      title: 'Availability Hours',
      detail: 'Monday-Friday, 9 AM - 5 PM',
    },
  ];

  return (
    <section className="bg-white py-[60px] sm:py-[90px] px-4 sm:px-6 overflow-x-hidden">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-5 sm:gap-6 items-start">
          {/* LEFT COLUMN - Form */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="w-full lg:w-[54%] bg-[#0B2A5B] rounded-[20px] sm:rounded-[24px] p-6 sm:p-12"
          >
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 sm:gap-x-[30px] gap-y-5 sm:gap-y-6">
                <div>
                  <label className="block text-[12px] sm:text-[13px] font-bold tracking-[0.08em] uppercase text-white mb-2.5 sm:mb-3">
                    YOUR NAME <span className="text-[#FF3B30]">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g John Doe"
                    className="w-full h-[50px] sm:h-[56px] bg-white rounded-[10px] px-5 sm:px-6 text-[15px] sm:text-[16px] text-[#102A43] placeholder:text-[#8B95A5] outline-none focus:ring-2 focus:ring-[#C8A24A]/50 transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-[12px] sm:text-[13px] font-bold tracking-[0.08em] uppercase text-white mb-2.5 sm:mb-3">
                    PHONE <span className="text-[#FF3B30]">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g +086-2468-3881"
                    className="w-full h-[50px] sm:h-[56px] bg-white rounded-[10px] px-5 sm:px-6 text-[15px] sm:text-[16px] text-[#102A43] placeholder:text-[#8B95A5] outline-none focus:ring-2 focus:ring-[#C8A24A]/50 transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-[12px] sm:text-[13px] font-bold tracking-[0.08em] uppercase text-white mb-2.5 sm:mb-3">
                    EMAIL ADDRESS <span className="text-[#FF3B30]">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g johndoe@gmail.com"
                    className="w-full h-[50px] sm:h-[56px] bg-white rounded-[10px] px-5 sm:px-6 text-[15px] sm:text-[16px] text-[#102A43] placeholder:text-[#8B95A5] outline-none focus:ring-2 focus:ring-[#C8A24A]/50 transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-[12px] sm:text-[13px] font-bold tracking-[0.08em] uppercase text-white mb-2.5 sm:mb-3">
                    SUBJECT <span className="text-[#FF3B30]">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g Solar Panel Installation"
                    className="w-full h-[50px] sm:h-[56px] bg-white rounded-[10px] px-5 sm:px-6 text-[15px] sm:text-[16px] text-[#102A43] placeholder:text-[#8B95A5] outline-none focus:ring-2 focus:ring-[#C8A24A]/50 transition-all duration-300"
                  />
                </div>
              </div>

              <div className="mt-5 sm:mt-6">
                <label className="block text-[12px] sm:text-[13px] font-bold tracking-[0.08em] uppercase text-white mb-2.5 sm:mb-3">
                  QUESTIONS <span className="text-[#FF3B30]">*</span>
                </label>
                <textarea
                  name="questions"
                  value={formData.questions}
                  onChange={handleChange}
                  placeholder="Questions"
                  rows={6}
                  className="w-full h-[150px] sm:h-[180px] bg-white rounded-[10px] p-5 sm:p-6 text-[15px] sm:text-[16px] text-[#102A43] placeholder:text-[#8B95A5] outline-none focus:ring-2 focus:ring-[#C8A24A]/50 transition-all duration-300 resize-none"
                />
              </div>

              <button
                type="submit"
                className="mt-6 sm:mt-7 h-[48px] sm:h-[54px] w-[130px] sm:w-[140px] bg-white text-[#0B2A5B] text-[15px] sm:text-[16px] font-bold rounded-[12px] transition-all duration-300 hover:bg-[#F5F5F5] hover:-translate-y-[2px]"
              >
                Submit
              </button>
            </form>
          </motion.div>

          {/* RIGHT COLUMN */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="w-full lg:w-[46%] flex flex-col items-start"
          >
            <motion.p
              variants={fadeUp}
              className="text-[11px] sm:text-[12px] font-bold tracking-[0.25em] sm:tracking-[0.35em] uppercase text-[#102A43] mb-4 sm:mb-6"
            >
              GET IN TOUCH
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="text-[28px] sm:text-[40px] md:text-[50px] font-bold leading-[1.15] sm:leading-[1.05] tracking-[-0.03em] text-[#0B2A5B] max-w-[560px]"
            >
              Start Your Solar
              <br />
              Journey Today
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-[14px] sm:text-[16px] font-normal leading-[1.7] sm:leading-[1.8] text-[#102A43]/80 max-w-[520px] mt-5 sm:mt-[30px] mb-5 sm:mb-7"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, pulvinar dapibus leo.
            </motion.p>

            <div className="w-full h-[240px] sm:h-[320px] rounded-[16px] sm:rounded-[18px] overflow-hidden">
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
            </div>
          </motion.div>
        </div>

        {/* Contact Info Cards - Below */}
        <motion.div
          variants={cardContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5"
        >
          {contactCards.map((card) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                variants={cardItem}
                className="flex items-start gap-3 sm:gap-4 bg-[#F8FAFC] border border-[#0B2A5B] rounded-[14px] sm:rounded-[16px] px-4 sm:px-5 py-4 sm:py-5"
              >
                <Icon
                  size={24}
                  strokeWidth={1.8}
                  className="text-[#0B2A5B] shrink-0 mt-0.5 sm:w-[28px] sm:h-[28px]"
                />
                <div>
                  <h4 className="text-[16px] sm:text-[18px] font-bold text-[#0B2A5B] leading-tight">
                    {card.title}
                  </h4>
                  <p className="text-[14px] sm:text-[15px] text-[#102A43]/70 mt-1 leading-snug">
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