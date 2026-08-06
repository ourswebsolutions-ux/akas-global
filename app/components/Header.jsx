"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ChevronDown,
  Menu,
  X,
  Building2,
  Globe,
  TreePine,
  Zap,
  Camera,
  Building,
  BrickWall,
  Layers,
  Home,
  Wrench,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const servicesData = [
  {
    id: "turnkey-contracting",
    title: "Turnkey Contracting",
    icon: Building2,
    description:
      "Complete end-to-end construction solutions delivering projects from concept to handover with precision and accountability.",
    items: [
      { label: "Pre-Construction Planning", slug: "pre-construction-planning" },
      { label: "Design and Build", slug: "design-and-build" },
      { label: "Project Management", slug: "project-management" },
      {
        label: "Procurement and Supply Chain Management",
        slug: "procurement-and-supply-chain-management",
      },
    ],
  },
  {
    id: "infrastructure",
    title: "Infrastructure",
    icon: Globe,
    description:
      "Robust infrastructure development and utility works that form the foundation of sustainable communities and cities.",
    items: [
      { label: "Wet Utilities", slug: "wet-utilities" },
      { label: "Dry Utilities", slug: "dry-utilities" },
      {
        label: "Master Planning Roads and Bridges",
        slug: "master-planning-roads-and-bridges",
      },
      { label: "Earthworks", slug: "earthworks" },
    ],
  },
  {
    id: "landscaping-plantation",
    title: "Landscaping & Plantation",
    icon: TreePine,
    description:
      "Thoughtful outdoor landscape and plantation solutions that enhance environments and create lasting natural beauty.",
    items: [
      { label: "Softscape", slug: "softscape" },
      { label: "Hardscape", slug: "hardscape" },
      { label: "Plantations", slug: "plantations" },
      { label: "Irrigation Systems", slug: "irrigation-systems" },
      {
        label: "Lighting Design & Installation",
        slug: "lighting-design-installation",
      },
      { label: "Water Features", slug: "water-features" },
    ],
  },
  {
    id: "mep-solutions",
    title: "MEP Solutions",
    icon: Zap,
    description:
      "Integrated mechanical, electrical and plumbing engineering systems engineered for performance, safety and efficiency.",
    items: [
      {
        label: "Mechanical, Electrical & Plumbing Systems",
        slug: "mechanical-electrical-plumbing-systems",
      },
      { label: "HVAC Systems", slug: "hvac-systems" },
      {
        label: "Fire Alarm & Fire Fighting Systems",
        slug: "fire-alarm-fire-fighting-systems",
      },
      { label: "ELV Systems", slug: "elv-systems" },
      { label: "Data Centers", slug: "data-centers" },
    ],
  },
  {
    id: "low-current-ict-services",
    title: "Low Current / ICT Services",
    icon: Camera,
    description:
      "Advanced security and intelligent technology systems that protect assets and enable smarter building operations.",
    items: [
      { label: "CCTV", slug: "cctv" },
      { label: "Access Control", slug: "access-control" },
      {
        label: "Security and Automation Systems",
        slug: "security-and-automation-systems",
      },
      { label: "Public Address Systems", slug: "public-address-systems" },
      {
        label: "Video Wall & Conferencing Solutions",
        slug: "video-wall-conferencing-solutions",
      },
      { label: "Road Blockers", slug: "road-blockers" },
      { label: "Bollards", slug: "bollards" },
      { label: "Gate Barriers", slug: "gate-barriers" },
    ],
  },
  {
    id: "facade-fitout-solutions",
    title: "Façade & Fitout Solutions",
    icon: Building,
    description:
      "Refined interior and exterior architectural solutions that define identity, comfort and lasting quality.",
    items: [
      { label: "Façade Solutions", slug: "facade-solutions" },
      { label: "Interior Fit Out", slug: "interior-fit-out" },
      { label: "Office Design and Build", slug: "office-design-and-build" },
      { label: "Kitchen Interiors", slug: "kitchen-interiors" },
      {
        label: "Retail Furniture & Homeware",
        slug: "retail-furniture-homeware",
      },
      { label: "FF&E Services", slug: "ffe-services" },
    ],
  },
  {
    id: "concrete-solutions",
    title: "Concrete Solutions",
    icon: BrickWall,
    description:
      "Precision concrete manufacturing and construction services supporting structural integrity and design excellence.",
    items: [
      { label: "On-site Batching Plants", slug: "on-site-batching-plants" },
      { label: "Ready-mix Concrete", slug: "ready-mix-concrete" },
      { label: "Precast Concrete", slug: "precast-concrete" },
      { label: "Decorative Concrete", slug: "decorative-concrete" },
      {
        label: "Concrete Testing & Quality Control",
        slug: "concrete-testing-quality-control",
      },
      { label: "Shotcrete Services", slug: "shotcrete-services" },
      { label: "Concrete Blocks", slug: "concrete-blocks" },
    ],
  },
  {
    id: "flooring-solutions",
    title: "Flooring Solutions",
    icon: Layers,
    description:
      "High-performance industrial and decorative flooring systems engineered for durability, safety and aesthetics.",
    items: [
      { label: "Insulation Works", slug: "insulation-works" },
      { label: "Protection Works", slug: "protection-works" },
      { label: "Concrete Flooring Works", slug: "concrete-flooring-works" },
      { label: "Repairing Works", slug: "repairing-works" },
      { label: "Expansion Joints", slug: "expansion-joints" },
      {
        label: "Specialized Flooring Solutions",
        slug: "specialized-flooring-solutions",
      },
      { label: "Micro Topping Floors", slug: "micro-topping-floors" },
      { label: "Decorative Patterned Floors", slug: "decorative-patterned-floors" },
    ],
  },
  {
    id: "real-estate-investment-developments",
    title: "Real Estate Investment & Developments",
    icon: Home,
    description:
      "End-to-end real estate solutions spanning investment strategy, development execution and long-term value creation.",
    items: [
      { label: "Investment", slug: "investment" },
      { label: "Development", slug: "development" },
      { label: "Management", slug: "management" },
    ],
  },
  {
    id: "facility-management",
    title: "Facility Management",
    icon: Wrench,
    description:
      "Professional property and facility management services that maintain operational excellence and asset value.",
    items: [
      { label: "Hard & Soft Services", slug: "hard-soft-services" },
      { label: "QHSE Services", slug: "qhse-services" },
      { label: "Security Services", slug: "security-services" },
      {
        label: "Property Management Services",
        slug: "property-management-services",
      },
    ],
  },
];

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeService, setActiveService] = useState(servicesData[0].id);
  const [mobileServiceOpen, setMobileServiceOpen] = useState(null);

  const activeCategory =
    servicesData.find((s) => s.id === activeService) || servicesData[0];

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

            {/* Services Mega Menu */}
            <div className="relative group">
              <button className="flex items-center gap-1 font-medium text-gray-700 transition hover:text-[#C8A24A]">
                Services
                <ChevronDown size={16} />
              </button>

              <div className="invisible absolute left-1/2 top-full z-50 mt-3 w-[1080px] -translate-x-1/2 overflow-hidden rounded-2xl border border-gray-200/80 bg-white opacity-0 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] transition-all duration-300 ease-out group-hover:visible group-hover:opacity-100 group-hover:mt-4">
                <div className="flex h-[440px]">
                  {/* Left Panel – Categories */}
                  <div className="flex w-[280px] flex-shrink-0 flex-col border-r border-gray-100 bg-[#FAFBFC] py-4">
                    <p className="mb-2 px-5 text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                      Categories
                    </p>
                    <div className="flex-1 overflow-y-auto">
                      {servicesData.map((service) => {
                        const Icon = service.icon;
                        const isActive = activeService === service.id;
                        return (
                          <button
                            key={service.id}
                            onMouseEnter={() => setActiveService(service.id)}
                            onFocus={() => setActiveService(service.id)}
                            className={`group/item relative flex w-full items-center gap-3 px-5 py-2.5 text-left transition-all duration-200 ${
                              isActive
                                ? "bg-white text-[#0B2A5B]"
                                : "text-gray-600 hover:bg-white/80 hover:text-[#0B2A5B]"
                            }`}
                          >
                            {/* Active indicator bar */}
                            <span
                              className={`absolute left-0 top-1/2 h-5 w-[3px] -translate-y-1/2 rounded-r-full bg-[#C8A24A] transition-all duration-200 ${
                                isActive
                                  ? "opacity-100"
                                  : "opacity-0 group-hover/item:opacity-40"
                              }`}
                            />
                            <Icon
                              size={17}
                              strokeWidth={isActive ? 2 : 1.75}
                              className={`flex-shrink-0 transition-colors duration-200 ${
                                isActive
                                  ? "text-[#C8A24A]"
                                  : "text-gray-400 group-hover/item:text-gray-500"
                              }`}
                            />
                            <span
                              className={`text-[13px] leading-snug transition-all duration-200 ${
                                isActive ? "font-semibold" : "font-medium"
                              }`}
                            >
                              {service.title}
                            </span>
                            <ChevronRight
                              size={14}
                              className={`ml-auto flex-shrink-0 transition-all duration-200 ${
                                isActive
                                  ? "translate-x-0 opacity-100 text-[#C8A24A]"
                                  : "-translate-x-1 opacity-0"
                              }`}
                            />
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Right Panel – Dynamic Content */}
                  <div className="relative flex flex-1 flex-col overflow-hidden p-8">
                    <div
                      key={activeCategory.id}
                      className="flex h-full flex-col"
                      style={{
                        animation: "megaFade 0.22s ease-out",
                      }}
                    >
                      {/* Header */}
                      <div className="mb-5 flex items-start gap-4">
                        <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-[#0B2A5B]/5">
                          <activeCategory.icon
                            size={22}
                            className="text-[#0B2A5B]"
                            strokeWidth={1.75}
                          />
                        </div>
                        <div>
                          <h3 className="text-[17px] font-semibold tracking-tight text-[#0B2A5B]">
                            {activeCategory.title}
                          </h3>
                          <p className="mt-1 max-w-[420px] text-[13px] leading-relaxed text-gray-500">
                            {/* {activeCategory.description} */}
                          </p>
                        </div>
                      </div>

                      {/* Sub-services grid */}
                      <div className="flex-1">
                        <p className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                          Capabilities
                        </p>
                        <ul className="grid grid-cols-2 gap-x-6 gap-y-1">
                          {activeCategory.items.map((item) => (
                            <li key={item.slug}>
                              <Link
                                href={`/services/${activeCategory.id}/${item.slug}`}
                                className="group/link flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-[13.5px] text-gray-700 transition-all duration-150 hover:bg-[#F8FAFC] hover:text-[#0B2A5B]"
                              >
                                <span className="h-1 w-1 flex-shrink-0 rounded-full bg-gray-300 transition-colors duration-150 group-hover/link:bg-[#C8A24A]" />
                                <span className="leading-snug">
                                  {item.label}
                                </span>
                                <ArrowRight
                                  size={12}
                                  className="ml-auto flex-shrink-0 -translate-x-1 opacity-0 transition-all duration-150 group-hover/link:translate-x-0 group-hover/link:opacity-100 text-[#C8A24A]"
                                />
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Footer action */}
                      <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-5">
                        <Link
                          href={`/our-services/`}
                          className="inline-flex items-center gap-2 rounded-lg bg-[#0B2A5B] px-5 py-2.5 text-[13px] font-semibold text-white transition-all duration-200 hover:bg-[#081F45] hover:shadow-md"
                        >
                          Explore Services
                          <ArrowRight size={14} />
                        </Link>
                        <span className="text-[12px] text-gray-400">
                          {/* {activeCategory.items.length} capabilities */}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
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

            {/* Mobile Services */}
            <details className="border-b border-gray-100 group">
              <summary className="flex cursor-pointer list-none items-center justify-between px-5 py-3.5 text-[15px] font-medium text-[#0B2A5B]">
                Services
                <ChevronDown
                  size={18}
                  className="transition-transform duration-200 group-open:rotate-180"
                />
              </summary>

              <div className="bg-[#F8FAFC]">
                {servicesData.map((service) => {
                  const Icon = service.icon;
                  const isOpen = mobileServiceOpen === service.id;
                  return (
                    <div
                      key={service.id}
                      className="border-b border-gray-100 last:border-0"
                    >
                      <button
                        onClick={() =>
                          setMobileServiceOpen(isOpen ? null : service.id)
                        }
                        className="flex w-full items-center justify-between px-5 py-3 text-left"
                      >
                        <div className="flex items-center gap-3">
                          <Icon size={16} className="text-[#C8A24A]" />
                          <span className="text-[14px] font-medium text-[#0B2A5B]">
                            {service.title}
                          </span>
                        </div>
                        <ChevronDown
                          size={16}
                          className={`text-gray-400 transition-transform duration-200 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="bg-white px-5 pb-4 pt-1">
                         
                          <ul className="mb-3 space-y-0.5">
                            {service.items.map((item) => (
                              <li key={item.slug}>
                                <Link
                                  href={`/services/${service.id}/${item.slug}`}
                                  className="flex items-center gap-2 rounded-md px-1 py-1.5 text-[13px] text-gray-600 transition hover:text-[#0B2A5B]"
                                >
                                  <span className="h-1 w-1 flex-shrink-0 rounded-full bg-[#C8A24A]" />
                                  {item.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                          <Link
                            href={`/services/${service.id}`}
                            className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#0B2A5B] transition hover:text-[#C8A24A]"
                          >
                            View all
                            <ArrowRight size={13} />
                          </Link>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </details>

            <details className="border-b border-gray-100 group">
              <summary className="flex cursor-pointer list-none items-center justify-between px-5 py-3.5 text-[15px] font-medium text-[#0B2A5B]">
                Projects
                <ChevronDown
                  size={18}
                  className="transition-transform duration-200 group-open:rotate-180"
                />
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
                <ChevronDown
                  size={18}
                  className="transition-transform duration-200 group-open:rotate-180"
                />
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

      <style jsx>{`
        @keyframes megaFade {
          from {
            opacity: 0;
            transform: translateY(6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </header>
  );
}