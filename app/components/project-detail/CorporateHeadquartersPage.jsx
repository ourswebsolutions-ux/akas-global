"use client"
// app/page.tsx  (Next.js App Router)
import Image from "next/image";

export default function CorporateHeadquartersPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-14">
        
        {/* ========== TOP SECTION ========== */}
        <section>
          <h1 className="text-[28px] sm:text-[30px] font-bold tracking-tight text-[#111827] mb-6 sm:mb-7">
            Corporate Headquarters
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_1fr] gap-6 lg:gap-8 items-start">
            
            {/* LEFT — Image */}
            <div className="relative w-full overflow-hidden rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
                alt="Workers on corporate headquarters construction site"
                width={800}
                height={500}
                className="w-full h-auto object-cover rounded-2xl"
                priority
              />
            </div>

            {/* RIGHT — Project Details Card */}
            <div className="bg-[#F9FAFB] rounded-2xl p-6 sm:p-7 lg:p-8">
              <h2 className="text-[18px] sm:text-[19px] font-bold text-[#111827] mb-5">
                Project Details
              </h2>

              <div className="space-y-3.5 text-[14.5px] leading-relaxed">
                <div className="flex">
                  <span className="w-[138px] shrink-0 text-[#6B7280]">Structure Type</span>
                  <span className="text-[#6B7280] mr-1.5">:</span>
                  <span className="text-[#374151]">Reinforced Concrete Frame</span>
                </div>

                <div className="flex">
                  <span className="w-[138px] shrink-0 text-[#6B7280]">Total Area</span>
                  <span className="text-[#6B7280] mr-1.5">:</span>
                  <span className="text-[#374151]">12,500 m²</span>
                </div>

                <div className="flex">
                  <span className="w-[138px] shrink-0 text-[#6B7280]">Number of Floors</span>
                  <span className="text-[#6B7280] mr-1.5">:</span>
                  <span className="text-[#374151]">8 floors</span>
                </div>

                <div className="flex">
                  <span className="w-[138px] shrink-0 text-[#6B7280]">Foundation Type</span>
                  <span className="text-[#6B7280] mr-1.5">:</span>
                  <span className="text-[#374151]">Deep Pile Foundation System</span>
                </div>

                <div className="flex">
                  <span className="w-[138px] shrink-0 text-[#6B7280]">Estimated Value</span>
                  <span className="text-[#6B7280] mr-1.5">:</span>
                  <span className="text-[#374151]">± $12,500,000 total project cost</span>
                </div>

                <div className="flex">
                  <span className="w-[138px] shrink-0 text-[#6B7280]">Construction Time</span>
                  <span className="text-[#6B7280] mr-1.5">:</span>
                  <span className="text-[#374151]">18 Months</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== BOTTOM CONTENT ========== */}
        <section className="mt-14 sm:mt-16 lg:mt-20">
          
          {/* Project Overview */}
          <div className="mb-10 sm:mb-12">
            <h2 className="text-[22px] sm:text-[23px] font-bold text-[#111827] mb-3.5">
              Project Overview
            </h2>
            <p className="text-[15px] sm:text-[15.5px] leading-[1.65] text-[#6B7280] max-w-4xl">
              A modern corporate headquarters delivered with precision engineering and quality materials. The project combines efficient floor plates, durable structural systems, and carefully planned circulation for long-term operational performance and comfort.
            </p>
          </div>

          {/* Project Implementation */}
          <div className="mb-12 sm:mb-14">
            <h2 className="text-[22px] sm:text-[23px] font-bold text-[#111827] mb-3.5">
              Project Implementation
            </h2>
            <p className="text-[15px] sm:text-[15.5px] leading-[1.65] text-[#6B7280] max-w-4xl">
              Works progressed through coordinated phases of foundation, structure, envelope, and fit-out. Strict quality control, safety protocols, and schedule management ensured on-time delivery while meeting the client’s technical and design requirements throughout.
            </p>
          </div>

          {/* Sustainability Impact + Client Experience */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
            
            {/* Left column */}
            <div>
              <h2 className="text-[22px] sm:text-[23px] font-bold text-[#111827] mb-3.5">
                Quality Impact
              </h2>
              <p className="text-[15px] sm:text-[15.5px] leading-[1.65] text-[#6B7280]">
                High-grade materials and rigorous testing delivered a robust, low-maintenance building. Efficient systems and durable finishes support reduced lifecycle costs and reliable performance for decades of corporate use.
              </p>
            </div>

            {/* Vertical divider + Right column */}
            <div className="md:border-l md:border-[#E5E7EB] md:pl-8 lg:pl-10">
              <h2 className="text-[22px] sm:text-[23px] font-bold text-[#111827] mb-3.5">
                Client Experience
              </h2>
              <p className="text-[15px] sm:text-[15.5px] leading-[1.65] text-[#6B7280]">
                Clear communication, transparent progress reporting, and responsive coordination kept stakeholders aligned. The client received a finished headquarters that matched expectations for quality, timeline, and overall project value.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}