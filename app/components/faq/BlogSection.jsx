"use client";

import Image from "next/image";
import { Calendar } from "lucide-react";
import { Manrope } from "next/font/google";
import { motion } from "framer-motion";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const blogPosts = [
  {
    id: 1,
    date: "AUGUST 11, 2025",
    title: "Solar ROI Explained: When Will You Break Even?",
    image: "/blog1.jpg",
    alt: "Workers inspecting solar panels at a wind farm",
  },
  {
    id: 2,
    date: "AUGUST 11, 2025",
    title: "Next-Gen Solar Technologies to Watch in 2025",
    image: "/blog2.jpg",
    alt: "Engineers examining solar panels and wind turbines",
  },
  {
    id: 3,
    date: "AUGUST 11, 2025",
    title: "How Solar Can Cut Your Business Energy Costs",
    image: "/blog3.jpg",
    alt: "Team celebrating with wind turbines in background",
  },
];

function BlogCard({ post, index }) {
  const slideDirection = index % 2 === 0 ? -48 : 48;

  const cardVariants = {
    hidden: { opacity: 0, x: slideDirection, y: 24 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 18,
        mass: 0.85,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 1.08 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 20,
        mass: 1,
      },
    },
  };

  const contentStagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15,
      },
    },
  };

  const itemFade = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 18 },
    },
  };

  const iconPop = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 220, damping: 14 },
    },
  };

  const buttonScale = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 120, damping: 16 },
    },
  };

  return (
    <motion.article
      className="group flex h-full w-full flex-col overflow-hidden rounded-[16px] bg-gradient-to-br from-[#0B2A5B] to-[#0B2A5B]/95 shadow-[0_8px_30px_rgba(11,42,91,0.15)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(11,42,91,0.22)] sm:rounded-[20px]"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      {/* Image */}
      <motion.div
        className="relative h-[200px] w-full overflow-hidden rounded-t-[16px] sm:h-[245px] sm:rounded-t-[20px]"
        variants={imageVariants}
      >
        <Image
          src={post.image}
          alt={post.alt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority
        />
      </motion.div>

      {/* Content */}
      <motion.div
        className="flex flex-1 flex-col px-5 pb-6 pt-5 sm:px-9 sm:pb-9 sm:pt-[26px]"
        variants={contentStagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Date */}
        <motion.div className="flex items-center gap-2.5" variants={itemFade}>
          <motion.span variants={iconPop}>
            <Calendar
              className="h-[14px] w-[14px] stroke-[1.5] text-[#C8A24A]"
              strokeWidth={1.75}
            />
          </motion.span>
          <span className="text-[12px] font-semibold uppercase tracking-[1.5px] text-[#D8B868] sm:text-[13px]">
            {post.date}
          </span>
        </motion.div>

        {/* Title */}
        <motion.h3
          className="mt-4 text-[18px] font-bold leading-[1.3] text-white sm:mt-[22px] sm:text-[24px] lg:text-[16px] xl:text-[20px]"
          variants={itemFade}
        >
          {post.title}
        </motion.h3>

        {/* Button */}
        <motion.div className="mt-auto pt-6 sm:pt-[30px]" variants={buttonScale}>
          <motion.button
            type="button"
            className="inline-flex h-[44px] w-[130px] items-center justify-center rounded-[10px] bg-gradient-to-r from-[#C8A24A] to-[#D8B868] text-[14px] font-semibold text-[#0B2A5B] shadow-[0_4px_14px_rgba(200,162,74,0.35)] transition-all duration-300 hover:shadow-[0_6px_20px_rgba(200,162,74,0.45)] sm:h-[50px] sm:w-[140px] sm:text-[16px]"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            Learn More
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.article>
  );
}

export default function BlogSection() {
  const fadeUp = {
    hidden: { opacity: 0, y: 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 90, damping: 18, mass: 0.8 },
    },
  };

  const fadeUpSlow = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 18,
        delay: 0.08,
      },
    },
  };

  const labelReveal = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 110, damping: 16 },
    },
  };

  return (
    <section
      className={`${manrope.className} w-full bg-white px-4 py-16 sm:px-8 sm:py-[100px] lg:px-10`}
    >
      <div className="mx-auto max-w-[1240px]">
        {/* Top Label */}
        <motion.p
          className="mb-3 text-center text-[12px] font-bold uppercase tracking-[2px] text-[#C8A24A]"
          variants={labelReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
        >
          BLOG
        </motion.p>

        {/* Main Heading */}
        <motion.h2
          className="mx-auto max-w-[900px] text-center text-[24px] font-extrabold leading-[1.15] text-[#102A43] sm:text-[42px] lg:text-[50px] xl:text-[50px]"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          Bright Ideas for a Greener Tomorrow.
        </motion.h2>

        {/* Description */}
        <motion.p
          className="mx-auto mt-4 max-w-[850px] text-center text-[14px] font-normal leading-[1.8] text-[#102A43]/75 sm:mt-5 sm:text-[15px]"
          variants={fadeUpSlow}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </motion.p>

        {/* Cards Grid */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-[60px] sm:grid-cols-2 sm:gap-7 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}