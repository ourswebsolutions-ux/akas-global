"use client";

import React from "react";
import Link from "next/link";
import { Baloo_2 } from "next/font/google";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Linkedin,
  Youtube,
  ChevronRight,
} from "lucide-react";

const baloo = Baloo_2({
  subsets: ["latin"],
  weight: ["800"],
});

export default function Footer() {
  return (
    <footer className="w-full bg-[#0B2D5B] text-white pt-16 pb-8 px-4 sm:px-6 lg:px-12 border-t border-[#1D4A85]">
      <div className="mx-auto max-w-[1350px]">
        {/* Top Newsletter / Stay Bright Section */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between pb-12 border-b border-white/10 gap-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-2">
              Stay Solid.
            </h2>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#C9A24B]">
              Stay Updated.
            </h2>
          </div>

          <div className="w-full lg:w-auto flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Email"
              className="h-12 w-full sm:w-[350px] rounded-xl bg-white px-5 text-[15px] text-[#2B2B2B] shadow-lg outline-none focus:ring-2 focus:ring-[#C9A24B]"
            />
            <button
              type="button"
              className="h-12 inline-flex items-center justify-center gap-2 rounded-xl bg-[#C9A24B] px-8 text-sm font-bold text-[#2B2B2B] shadow-lg transition-all hover:bg-[#E3C36F] whitespace-nowrap"
            >
              <span>Subscribe</span>
              <span>&gt;</span>
            </button>
          </div>
        </div>

        {/* Main 4 Columns Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pt-12 pb-12">

          {/* Col 1: Brand Info & Socials */}
          <div>
            {/* Logo */}
            <div className="mb-4 select-none bg-white rounded-lg p-2 w-max">
              <Image
                src="/akaslogo.png"
                alt="Logo"
                width={150}
                height={50}
                priority={true}
              />
            </div>

            <p className="text-xs sm:text-sm text-[#F5F7FA]/80 mb-6 leading-relaxed">
              Expert construction and engineering services delivering quality, precision, and lasting results on every project.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 rounded-xl bg-[#1D4A85] text-white flex items-center justify-center hover:bg-[#C9A24B] hover:text-[#2B2B2B] transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-xl bg-[#1D4A85] text-white flex items-center justify-center hover:bg-[#C9A24B] hover:text-[#2B2B2B] transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="w-9 h-9 rounded-xl bg-[#1D4A85] text-white flex items-center justify-center hover:bg-[#C9A24B] hover:text-[#2B2B2B] transition-colors"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white tracking-wide mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm text-[#F5F7FA]/80">
              <li>
                <Link href="/" className="inline-flex items-center gap-2 hover:text-[#C9A24B] transition-colors">
                  <ChevronRight size={16} className="text-[#C9A24B]" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="inline-flex items-center gap-2 hover:text-[#C9A24B] transition-colors">
                  <ChevronRight size={16} className="text-[#C9A24B]" />
                  <span>About</span>
                </Link>
              </li>
              <li>
                <Link href="/blog" className="inline-flex items-center gap-2 hover:text-[#C9A24B] transition-colors">
                  <ChevronRight size={16} className="text-[#C9A24B]" />
                  <span>Blog</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="inline-flex items-center gap-2 hover:text-[#C9A24B] transition-colors">
                  <ChevronRight size={16} className="text-[#C9A24B]" />
                  <span>Contact Us</span>
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="inline-flex items-center gap-2 hover:text-[#C9A24B] transition-colors">
                  <ChevronRight size={16} className="text-[#C9A24B]" />
                  <span>FAQs</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h3 className="text-lg font-bold text-white tracking-wide mb-6">
              Services
            </h3>
            <ul className="space-y-3 text-sm text-[#F5F7FA]/80">
              <li>
                <Link href="/services/building-construction" className="inline-flex items-center gap-2 hover:text-[#C9A24B] transition-colors">
                  <ChevronRight size={16} className="text-[#C9A24B]" />
                  <span>Building Construction</span>
                </Link>
              </li>
              <li>
                <Link href="/services/project-consultation" className="inline-flex items-center gap-2 hover:text-[#C9A24B] transition-colors">
                  <ChevronRight size={16} className="text-[#C9A24B]" />
                  <span>Project Consultation</span>
                </Link>
              </li>
              <li>
                <Link href="/services/structural-design" className="inline-flex items-center gap-2 hover:text-[#C9A24B] transition-colors">
                  <ChevronRight size={16} className="text-[#C9A24B]" />
                  <span>Structural Design</span>
                </Link>
              </li>
              <li>
                <Link href="/services/site-management" className="inline-flex items-center gap-2 hover:text-[#C9A24B] transition-colors">
                  <ChevronRight size={16} className="text-[#C9A24B]" />
                  <span>Site Management</span>
                </Link>
              </li>
              <li>
                <Link href="/services/maintenance-support" className="inline-flex items-center gap-2 hover:text-[#C9A24B] transition-colors">
                  <ChevronRight size={16} className="text-[#C9A24B]" />
                  <span>Maintenance & Support</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Us */}
          <div>
            <h3 className="text-lg font-bold text-white tracking-wide mb-6">
              Contact Us
            </h3>
            <div className="space-y-4 text-sm text-[#F5F7FA]/80">
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-[#C9A24B] flex-shrink-0" />
                <a href="tel:+123678901" className="hover:text-[#C9A24B] transition-colors">
                  +123 678 901
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-[#C9A24B] mt-0.5 flex-shrink-0" />
                <p className="leading-relaxed">
                  12 Pemuda Streets, Jakarta, Indonesia
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-[#C9A24B] flex-shrink-0" />
                <a href="mailto:info@akas.com" className="hover:text-[#C9A24B] transition-colors">
                  info@akas.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={18} className="text-[#C9A24B] mt-0.5 flex-shrink-0" />
                <p className="leading-relaxed">
                  Monday–Friday, 9 AM – 5 PM
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Sub-footer Copyright */}
        <div className="pt-8 border-t border-white/10 text-center text-xs text-[#F5F7FA]/60">
          © {new Date().getFullYear()} <span className="font-bold text-white">AKAS</span>. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}