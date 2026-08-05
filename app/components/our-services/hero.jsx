"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* Hero Background */}
      <div className="relative h-[280px] w-full sm:h-[360px] lg:h-[420px] text-white">
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ opacity: 0, scale: 1.08 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 1.4,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <Image
            src="/abouthero.jpg"
            alt="Hero Background"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center brightness-90"
          />

          {/* Navy Overlay */}
          <div className="absolute inset-0 bg-[#0B2A5B]/45" />
        </motion.div>

        {/* Content */}
        <div className="relative z-10 flex h-full items-center justify-center">
          <div className="mx-auto flex max-w-[1350px] flex-col items-center px-4 text-center sm:px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2,
                    delayChildren: 0.2,
                  },
                },
              }}
            >
              <motion.h1
                className="mb-3 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      type: "spring",
                      stiffness: 120,
                      damping: 18,
                    },
                  },
                }}
              >
                Services
              </motion.h1>

              <motion.p
                className="text-sm text-white/90 sm:text-base lg:text-lg"
                variants={{
                  hidden: { opacity: 0, y: 25 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      type: "spring",
                      stiffness: 120,
                      damping: 18,
                    },
                  },
                }}
              >
                Home <span className="mx-2">/</span> Services Us
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}