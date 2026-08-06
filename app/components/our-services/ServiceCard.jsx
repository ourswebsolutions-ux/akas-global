"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
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
  ArrowRight,
} from "lucide-react";

const mainServices = [
  {
    id: "turnkey-contracting",
    title: "Turnkey Contracting",
    href: "/turnkey-contracting",
    icon: Building2,
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
    description:
      "Complete end-to-end construction solutions delivering projects from concept to handover with precision and accountability.",
    subCount: 4,
  },
  {
    id: "infrastructure",
    title: "Infrastructure",
    href: "/infrastructure",
    icon: Globe,
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80",
    description:
      "Robust infrastructure development and utility works that form the foundation of sustainable communities and cities.",
    subCount: 4,
  },
  {
    id: "landscaping",
    title: "Landscaping",
    href: "/landscaping",
    icon: TreePine,
    image:
      "https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=800&q=80",
    description:
      "Thoughtful outdoor landscape and plantation solutions that enhance environments and create lasting natural beauty.",
    subCount: 6,
  },
  {
    id: "mep-solutions",
    title: "MEP Solutions",
    href: "/mep-solutions",
    icon: Zap,
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
    description:
      "Integrated mechanical, electrical and plumbing engineering systems engineered for performance, safety and efficiency.",
    subCount: 5,
  },
  {
    id: "ict-services",
    title: "ICT Services",
    href: "/ict-services",
    icon: Camera,
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
    description:
      "Advanced security and intelligent technology systems that protect assets and enable smarter building operations.",
    subCount: 6,
  },
  {
    id: "facade-fitout",
    title: "Façade & Fitout",
    href: "/facade-fitout",
    icon: Building,
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    description:
      "Refined interior and exterior architectural solutions that define identity, comfort and lasting quality.",
    subCount: 5,
  },
  {
    id: "concrete-solutions",
    title: "Concrete Solutions",
    href: "/concrete-solutions",
    icon: BrickWall,
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
    description:
      "Precision concrete manufacturing and construction services supporting structural integrity and design excellence.",
    subCount: 5,
  },
  {
    id: "flooring-solutions",
    title: "Flooring Solutions",
    href: "/flooring-solutions",
    icon: Layers,
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
    description:
      "High-performance industrial and decorative flooring systems engineered for durability, safety and aesthetics.",
    subCount: 5,
  },
  {
    id: "real-estate",
    title: "Real Estate",
    href: "/real-estate",
    icon: Home,
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
    description:
      "End-to-end real estate solutions spanning investment strategy, development execution and long-term value creation.",
    subCount: 3,
  },
  {
    id: "facility-management",
    title: "Facility Management",
    href: "/facility-management",
    icon: Wrench,
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    description:
      "Professional property and facility management services that maintain operational excellence and asset value.",
    subCount: 4,
  },
];

export default function OurServicesPage() {
  return (
    <main className="bg-white">
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-[1350px] px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="mb-14 text-center">
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-[#C8A24A]">
              What We Offer
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-[#0B2A5B] sm:text-4xl">
              Our Core Services
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Explore our complete range of specialist capabilities. Click any
              service to discover detailed offerings and capabilities.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {mainServices.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.id}
                  href={service.href}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-[0_4px_24px_-4px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-12px_rgba(11,42,91,0.18)]"
                >
                  {/* Image */}
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B2A5B]/80 via-[#0B2A5B]/30 to-transparent" />
                    {/* Icon badge */}
                    <div className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-xl border border-white/20 bg-white/15 backdrop-blur-md">
                      <Icon size={22} className="text-white" strokeWidth={1.75} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="text-[17px] font-semibold text-[#0B2A5B] transition-colors group-hover:text-[#C8A24A]">
                      {service.title}
                    </h3>
                    <p className="mt-2 flex-1 text-[13.5px] leading-relaxed text-gray-500 line-clamp-3">
                      {service.description}
                    </p>

                    <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4">
                      <span className="text-xs font-medium text-gray-400">
                        {service.subCount} Capabilities
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#0B2A5B] transition-all group-hover:gap-2.5 group-hover:text-[#C8A24A]">
                        Learn More
                        <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}