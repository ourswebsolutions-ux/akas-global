"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="absolute top-0 left-0 z-50 w-full px-4 pt-5 sm:px-6 lg:px-12">
      <div className="mx-auto max-w-[1350px]">
        {/* Navbar */}
        <div className="flex h-[78px] items-center  justify-between rounded-2xl border border-[#C8A24A]/20 bg-white/95 px-5 shadow-lg backdrop-blur-lg sm:px-6 lg:px-8">
        <Link href="/" className=" ">
  <Image
    src="/akaslogo.png"
    alt="AKAS Global Connect"
    width={180}
    height={54}
    priority
    className="h-auto w-[140px]  border-[#C8A24A]/20  sm:w-[160px] lg:w-[185px]"
  />
</Link>

          {/* Desktop Menu */}
          <nav className="hidden items-center gap-8 lg:flex">
            <a
              href="/"
              className="font-medium text-[#0B2A5B] transition hover:text-[#C8A24A]"
            >
              Home
            </a>

            <a
              href="/about"
              className="font-medium text-gray-700 transition hover:text-[#C8A24A]"
            >
              About
            </a>

            {/* Services */}
            <div className="relative group">
              <button className="flex items-center gap-1 font-medium text-gray-700 transition hover:text-[#C8A24A]">
                Services
                <ChevronDown size={16} />
              </button>

              <div className="invisible absolute left-0 top-full mt-4 w-56 rounded-xl border border-gray-100 bg-white opacity-0 shadow-xl transition-all duration-300 group-hover:visible group-hover:opacity-100">
                <a
                  href="/our-services"
                  className="block px-5 py-3 hover:bg-[#F8FAFC] hover:text-[#C8A24A]"
                >
                  Our Services
                </a>

                <a
                  href="/services-detail"
                  className="block px-5 py-3 hover:bg-[#F8FAFC] hover:text-[#C8A24A]"
                >
                  Services Details
                </a>

                
              </div>
            </div>

            {/* Projects */}
            <div className="relative group">
              <button className="flex items-center gap-1 font-medium text-gray-700 transition hover:text-[#C8A24A]">
                Projects
                <ChevronDown size={16} />
              </button>

              <div className="invisible absolute left-0 top-full mt-4 w-56 rounded-xl border border-gray-100 bg-white opacity-0 shadow-xl transition-all duration-300 group-hover:visible group-hover:opacity-100">
                <a
                  href="/our-project"
                  className="block px-5 py-3 hover:bg-[#F8FAFC] hover:text-[#C8A24A]"
                >
                  Our Projects
                </a>

                <a
                  href="/project-detail"
                  className="block px-5 py-3 hover:bg-[#F8FAFC] hover:text-[#C8A24A]"
                >
                  Projects Details
                </a>

              
              </div>
            </div>

            {/* Pages */}
            <div className="relative group">
              <button className="flex items-center gap-1 font-medium text-gray-700 transition hover:text-[#C8A24A]">
                Pages
                <ChevronDown size={16} />
              </button>

              <div className="invisible absolute left-0 top-full mt-4 w-56 rounded-xl border border-gray-100 bg-white opacity-0 shadow-xl transition-all duration-300 group-hover:visible group-hover:opacity-100">
                <a
                  href="/pricing"
                  className="block px-5 py-3 hover:bg-[#F8FAFC] hover:text-[#C8A24A]"
                >
                  Pricing
                </a>

                <a
                  href="/team"
                  className="block px-5 py-3 hover:bg-[#F8FAFC] hover:text-[#C8A24A]"
                >
                 Team
                </a>

                <a
                  href="/faqs"
                  className="block px-5 py-3 hover:bg-[#F8FAFC] hover:text-[#C8A24A]"
                >
                  FAQs
                </a>
              </div>
            </div>

            <a
              href="#"
              className="font-medium text-gray-700 transition hover:text-[#C8A24A]"
            >
              Contact
            </a>
          </nav>

          {/* Right */}
          <div className="flex items-center gap-3">
            <button className="hidden rounded-xl bg-[#0B2A5B] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#081F45] sm:flex">
              Get Started →
            </button>

            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="rounded-xl bg-[#0B2A5B]/10 p-2 text-[#0B2A5B] transition hover:bg-[#0B2A5B] hover:text-white lg:hidden"
            >
              {mobileMenu ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`overflow-hidden transition-all duration-300 lg:hidden ${
            mobileMenu
              ? "mt-3 max-h-[600px] opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="rounded-2xl border border-[#C8A24A]/20 bg-white shadow-xl">
            <a
              href="/"
              className="block border-b px-6 py-4 font-medium text-[#0B2A5B]"
            >
              Home
            </a>

            <a
              href="/about"
              className="block border-b px-6 py-4 hover:bg-gray-50"
            >
              About
            </a>

            <details className="border-b">
              <summary className="flex cursor-pointer list-none items-center justify-between px-6 py-4">
                Services
                <ChevronDown size={18} />
              </summary>

              <div className="bg-[#F8FAFC]">
                <a
                  href="/our-services"
                  className="block px-10 py-3 hover:text-[#C8A24A]"
                >
                  Our Services
                </a>

                <a
                  href="/service-details"
                  className="block px-10 py-3 hover:text-[#C8A24A]"
                >
                  Services Details
                </a>

               
              </div>
            </details>

            <details className="border-b">
              <summary className="flex cursor-pointer list-none items-center justify-between px-6 py-4">
                Projects
                <ChevronDown size={18} />
              </summary>

              <div className="bg-[#F8FAFC]">
                <a
                  href="/our-projects"
                  className="block px-10 py-3 hover:text-[#C8A24A]"
                >
                  Our Projects
                </a>

                <a
                  href="/project-details"
                  className="block px-10 py-3 hover:text-[#C8A24A]"
                >
                  Projects Details
                </a>

              
              </div>
            </details>

            <details className="border-b">
              <summary className="flex cursor-pointer list-none items-center justify-between px-6 py-4">
                Pages
                <ChevronDown size={18} />
              </summary>

              <div className="bg-[#F8FAFC]">
                <a
                  href="#"
                  className="block px-10 py-3 hover:text-[#C8A24A]"
                >
                  Pricing
                </a>

                <a
                  href="#"
                  className="block px-10 py-3 hover:text-[#C8A24A]"
                >
                  Team
                </a>

                <a
                  href="/faqs"
                  className="block px-10 py-3 hover:text-[#C8A24A]"
                >
                  FAQs
                </a>
              </div>
            </details>

            <a
              href="/contact"
              className="block border-b px-6 py-4 hover:bg-gray-50"
            >
              Contact
            </a>

            <div className="p-5">
              <button className="w-full rounded-xl bg-[#0B2A5B] py-3 font-semibold text-white transition hover:bg-[#081F45]">
                Get Started →
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}