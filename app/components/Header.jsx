"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="absolute top-0 left-0 z-50 w-full px-3 pt-3 sm:px-6 sm:pt-5 lg:px-12">
      <div className="mx-auto max-w-[1350px]">
        {/* Navbar */}
        <div className="flex h-[64px] items-center justify-between rounded-2xl border border-[#C8A24A]/20 bg-white/95 px-4 shadow-lg backdrop-blur-lg sm:h-[78px] sm:px-6 lg:px-8">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/akaslogo.png"
              alt="AKAS Global Connect"
              width={180}
              height={54}
              priority
              className="h-auto w-[110px] border-[#C8A24A]/20 sm:w-[160px] lg:w-[185px]"
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

              <div className="invisible absolute left-0 top-full mt-4 w-56 text-gray-700 rounded-xl border border-gray-100 bg-white opacity-0 shadow-xl transition-all duration-300 group-hover:visible group-hover:opacity-100">
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

              <div className="invisible absolute text-gray-700 left-0 top-full mt-4 w-56 rounded-xl border border-gray-100 bg-white opacity-0 shadow-xl transition-all duration-300 group-hover:visible group-hover:opacity-100">
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

              <div className="invisible absolute text-gray-700 left-0 top-full mt-4 w-56 rounded-xl border border-gray-100 bg-white opacity-0 shadow-xl transition-all duration-300 group-hover:visible group-hover:opacity-100">
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
              href="/contact"
              className="font-medium text-gray-700 transition hover:text-[#C8A24A]"
            >
              Contact
            </a>
          </nav>

          {/* Right */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button className="hidden rounded-xl bg-[#0B2A5B] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#081F45] sm:flex">
              Get Started →
            </button>

            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0B2A5B]/10 text-[#0B2A5B] transition hover:bg-[#0B2A5B] hover:text-white lg:hidden"
              aria-label="Toggle menu"
            >
              {mobileMenu ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${
            mobileMenu
              ? "mt-2 max-h-[70vh] opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="max-h-[70vh] overflow-y-auto rounded-2xl border border-[#C8A24A]/20 bg-white shadow-xl">
            <a
              href="/"
              className="block border-b border-gray-100 px-5 py-3.5 text-[15px] font-medium text-[#0B2A5B] transition active:bg-gray-50"
            >
              Home
            </a>

            <a
              href="/about"
              className="block border-b border-gray-100 px-5 py-3.5 text-[15px] font-medium text-[#0B2A5B] transition active:bg-gray-50"
            >
              About
            </a>

            <details className="border-b border-gray-100 group">
              <summary className="flex cursor-pointer list-none items-center justify-between px-5 py-3.5 text-[15px] font-medium text-[#0B2A5B]">
                Services
                <ChevronDown size={18} className="transition-transform duration-200 group-open:rotate-180" />
              </summary>

              <div className="bg-[#F8FAFC]">
                <a
                  href="/our-service"
                  className="block px-8 py-3 text-[14px] font-medium text-[#0B2A5B] transition hover:text-[#C8A24A] active:bg-gray-100"
                >
                  Our Services
                </a>

                <a
                  href="/service-details"
                  className="block px-8 py-3 text-[14px] font-medium text-[#0B2A5B] transition hover:text-[#C8A24A] active:bg-gray-100"
                >
                  Services Details
                </a>
              </div>
            </details>

            <details className="border-b border-gray-100 group">
              <summary className="flex cursor-pointer list-none items-center justify-between px-5 py-3.5 text-[15px] font-medium text-[#0B2A5B]">
                Projects
                <ChevronDown size={18} className="transition-transform duration-200 group-open:rotate-180" />
              </summary>

              <div className="bg-[#F8FAFC]">
                <a
                  href="/our-projects"
                  className="block px-8 py-3 text-[14px] font-medium text-[#0B2A5B] transition hover:text-[#C8A24A] active:bg-gray-100"
                >
                  Our Projects
                </a>

                <a
                  href="/project-details"
                  className="block px-8 py-3 text-[14px] font-medium text-[#0B2A5B] transition hover:text-[#C8A24A] active:bg-gray-100"
                >
                  Projects Details
                </a>
              </div>
            </details>

            <details className="border-b border-gray-100 group">
              <summary className="flex cursor-pointer list-none items-center justify-between px-5 py-3.5 text-[15px] font-medium text-[#0B2A5B]">
                Pages
                <ChevronDown size={18} className="transition-transform duration-200 group-open:rotate-180" />
              </summary>

              <div className="bg-[#F8FAFC]">
                <a
                  href="/pricing"
                  className="block px-8 py-3 text-[14px] font-medium text-[#0B2A5B] transition hover:text-[#C8A24A] active:bg-gray-100"
                >
                  Pricing
                </a>

                <a
                  href="/team"
                  className="block px-8 py-3 text-[14px] font-medium text-[#0B2A5B] transition hover:text-[#C8A24A] active:bg-gray-100"
                >
                  Team
                </a>

                <a
                  href="/faqs"
                  className="block px-8 py-3 text-[14px] font-medium text-[#0B2A5B] transition hover:text-[#C8A24A] active:bg-gray-100"
                >
                  FAQs
                </a>
              </div>
            </details>

            <a
              href="/contact"
              className="block border-b border-gray-100 px-5 py-3.5 text-[15px] font-medium text-[#0B2A5B] transition active:bg-gray-50"
            >
              Contact
            </a>

            <div className="p-4">
              <button className="w-full rounded-xl bg-[#0B2A5B] py-3.5 text-[15px] font-semibold text-white transition hover:bg-[#081F45] active:bg-[#061830]">
                Get Started →
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}