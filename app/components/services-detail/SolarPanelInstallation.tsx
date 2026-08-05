// components/SolarPanelInstallation.jsx
// or app/solar-panel-installation/page.jsx

export default function SolarPanelInstallation() {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-[1320px] px-6 py-10 lg:py-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_320px] xl:grid-cols-[1fr_340px] lg:gap-10">
          
          {/* ================= LEFT COLUMN ================= */}
          <div className="min-w-0">
            {/* Heading */}
            <h1 className="text-[32px] font-bold leading-tight tracking-tight text-[#1a2332] sm:text-[36px] lg:text-[40px]">
              Solar Panel Installation
            </h1>

            {/* Intro paragraph */}
            <p className="mt-4 max-w-[640px] text-[15px] leading-[1.65] text-[#6b7c93]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>

            {/* Featured Image + Overlay Card */}
            <div className="relative mt-7">
              <div className="overflow-hidden rounded-[20px] sm:rounded-[24px]">
                <img
                  src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=80"
                  alt="Solar Panel Installation"
                  className="h-[280px] w-full object-cover object-center sm:h-[340px] lg:h-[380px]"
                />
              </div>

              {/* Green Overlay Card - sits ON TOP of the image */}
              <div className="absolute bottom-[18px] left-[18px] right-[18px] sm:bottom-6 sm:left-6 sm:right-auto sm:w-[78%] md:w-[72%]">
                <div className="rounded-[18px] border-[5px] border-white bg-[#7bb661] px-6 py-5 shadow-[0_4px_20px_rgba(0,0,0,0.12)] sm:rounded-[20px] sm:px-8 sm:py-6">
                  <h2 className="text-[22px] font-bold leading-none text-white sm:text-[26px] lg:text-[28px]">
                    Why Choose This Service
                  </h2>
                </div>
              </div>
            </div>

            {/* Two paragraphs below image */}
            <div className="mt-8 space-y-5 text-[15px] leading-[1.7] text-[#5a6b7d]">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a
                nibh non elit lobortis pretium. Fusce massa mauris, mollis maximus
                lectus quis, interdum accumsan augue. Pellentesque suscipit
                iaculis nulla et bibendum. Aenean eu ligula justo. Aliquam quis
                metus nulla. Duis porta eleifend rutrum. Pellentesque habitant
                morbi tristique senectus et netus et malesuada fames ac turpis
                egestas. Vivamus in tincidunt neque, bibendum consectetur elit.
                Nunc eu ultricies est.
              </p>
              <p>
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Donec sed dapibus ipsum,
                euismod sodales lacus. Phasellus a elit purus. Cras at
                pellentesque odio. Donec feugiat lectus non nisl viverra, ut
                sagittis massa luctus. Vivamus id odio id neque tincidunt varius
                et quis odio. Etiam fermentum tortor nec molestie sagittis.
              </p>
            </div>
          </div>

          {/* ================= RIGHT SIDEBAR ================= */}
          <div className="flex flex-col gap-6">
            
            {/* ===== Pricing Card ===== */}
            <div className="rounded-[24px] bg-[#2e7d32] p-6 shadow-sm">
              {/* START FROM label */}
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#e8c547]">
                Start From
              </p>

              {/* Price */}
              <p className="mt-1 text-[42px] font-bold leading-none tracking-tight text-white sm:text-[48px]">
                $4,500
              </p>

              {/* White inner card - Package Inclusions */}
              <div className="mt-6 rounded-[16px] bg-[#faf9f6] px-5 py-5">
                <h3 className="mb-4 text-[15px] font-bold text-[#1a2332]">
                  Package Inclusions :
                </h3>

                <ul className="space-y-[11px]">
                  {[
                    "Site survey & consultation",
                    "Solar panel & inverter",
                    "Mounting structure",
                    "Installation & wiring",
                    "System testing & commissioning",
                    "Warranty (10–25 years)",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-[14px] leading-snug text-[#2d3748]"
                    >
                      <span className="mt-[1px] flex-shrink-0 text-[15px] font-bold text-[#2e7d32]">
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Book Now button */}
              <button
                type="button"
                className="mt-5 flex w-full items-center justify-center gap-1.5 rounded-full bg-white py-[14px] text-[15px] font-medium text-[#2e7d32] transition-opacity hover:opacity-95"
              >
                Book Now
                <span className="text-[18px] leading-none">›</span>
              </button>
            </div>

            {/* ===== Our Services Card ===== */}
            <div className="rounded-[20px] bg-[#f7f6f3] px-6 py-6">
              <h3 className="mb-5 text-[17px] font-bold text-[#1a2332]">
                Our Services
              </h3>

              <ul className="space-y-[14px]">
                {[
                  "Energy Consultation",
                  "Solar Panel Installation",
                  "Solar System Design",
                  "Maintenance & Performance Optimization",
                  "Battery Storage Solutions",
                  "Hybrid & Off-Grid Systems",
                ].map((service) => (
                  <li
                    key={service}
                    className="flex items-center gap-3 text-[14px] leading-snug text-[#3d4a5c]"
                  >
                    <span className="h-[18px] w-[18px] flex-shrink-0 rounded-full border-[1.5px] border-[#9ca3af]" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}