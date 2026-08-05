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
                src="/porjectdetail.jpg" // replace with your actual image path
                alt="Workers installing solar panels on corporate rooftop"
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
                  <span className="w-[138px] shrink-0 text-[#6B7280]">System Type</span>
                  <span className="text-[#6B7280] mr-1.5">:</span>
                  <span className="text-[#374151]">On-Grid Solar PV System</span>
                </div>

                <div className="flex">
                  <span className="w-[138px] shrink-0 text-[#6B7280]">Panel Capacity</span>
                  <span className="text-[#6B7280] mr-1.5">:</span>
                  <span className="text-[#374151]">550W per panel</span>
                </div>

                <div className="flex">
                  <span className="w-[138px] shrink-0 text-[#6B7280]">Number of Panels</span>
                  <span className="text-[#6B7280] mr-1.5">:</span>
                  <span className="text-[#374151]">320 panels</span>
                </div>

                <div className="flex">
                  <span className="w-[138px] shrink-0 text-[#6B7280]">Battery Storage</span>
                  <span className="text-[#6B7280] mr-1.5">:</span>
                  <span className="text-[#374151]">200 kWh Lithium-Ion Storage System</span>
                </div>

                <div className="flex">
                  <span className="w-[138px] shrink-0 text-[#6B7280]">Estimated Savings</span>
                  <span className="text-[#6B7280] mr-1.5">:</span>
                  <span className="text-[#374151]">± $45,000/year on electricity costs</span>
                </div>

                <div className="flex">
                  <span className="w-[138px] shrink-0 text-[#6B7280]">Installation Time</span>
                  <span className="text-[#6B7280] mr-1.5">:</span>
                  <span className="text-[#374151]">6 Weeks</span>
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a nibh non elit lobortis pretium. Fusce massa mauris, mollis maximus lectus quis, interdum accumsan augue. Pellentesque suscipit iaculis nulla et bibendum. Aenean eu ligula justo. Aliquam quis metus nulla. Duis porta eleifend rutrum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus in tincidunt neque, bibendum consectetur elit.
            </p>
          </div>

          {/* Project Implementation */}
          <div className="mb-12 sm:mb-14">
            <h2 className="text-[22px] sm:text-[23px] font-bold text-[#111827] mb-3.5">
              Project Implementation
            </h2>
            <p className="text-[15px] sm:text-[15.5px] leading-[1.65] text-[#6B7280] max-w-4xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a nibh non elit lobortis pretium. Fusce massa mauris, mollis maximus lectus quis, interdum accumsan augue. Pellentesque suscipit iaculis nulla et bibendum. Aenean eu ligula justo. Aliquam quis metus nulla. Duis porta eleifend rutrum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus in tincidunt neque, bibendum consectetur elit.
            </p>
          </div>

          {/* Sustainability Impact + Client Experience */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
            
            {/* Left column */}
            <div>
              <h2 className="text-[22px] sm:text-[23px] font-bold text-[#111827] mb-3.5">
                Sustainability Impact
              </h2>
              <p className="text-[15px] sm:text-[15.5px] leading-[1.65] text-[#6B7280]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a nibh non elit lobortis pretium. Fusce massa mauris, mollis maximus lectus quis, interdum accumsan augue. Pellentesque suscipit iaculis nulla et bibendum. Aenean eu ligula justo. Aliquam quis metus nulla. Duis porta eleifend rutrum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus in tincidunt neque, bibendum consectetur elit.
              </p>
            </div>

            {/* Vertical divider + Right column */}
            <div className="md:border-l md:border-[#E5E7EB] md:pl-8 lg:pl-10">
              <h2 className="text-[22px] sm:text-[23px] font-bold text-[#111827] mb-3.5">
                Client Experience
              </h2>
              <p className="text-[15px] sm:text-[15.5px] leading-[1.65] text-[#6B7280]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a nibh non elit lobortis pretium. Fusce massa mauris, mollis maximus lectus quis, interdum accumsan augue. Pellentesque suscipit iaculis nulla et bibendum. Aenean eu ligula justo. Aliquam quis metus nulla. Duis porta eleifend rutrum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus in tincidunt neque, bibendum consectetur elit.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}