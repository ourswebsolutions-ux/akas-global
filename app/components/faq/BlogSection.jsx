"use client";

import Image from "next/image";
import { Calendar } from "lucide-react";
import { Manrope } from "next/font/google";

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

function BlogCard({ post }) {
  return (
    <article className="group flex h-full w-full flex-col overflow-hidden rounded-[20px] bg-[#7BB661] shadow-[0_4px_12px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,0,0,0.1)]">
      {/* Image */}
      <div className="relative h-[245px] w-full overflow-hidden rounded-t-[20px]">
        <Image
          src={post.image}
          alt={post.alt}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col px-9 pb-9 pt-[26px]">
        {/* Date */}
        <div className="flex items-center gap-2.5">
          <Calendar
            className="h-[14px] w-[14px] stroke-[1.5] text-[#2E5A2E]"
            strokeWidth={1.75}
          />
          <span className="text-[13px] font-semibold uppercase tracking-[1.5px] text-[#2E5A2E]">
            {post.date}
          </span>
        </div>

        {/* Title */}
        <h3 className="mt-[22px] text-[24px] font-bold leading-[1.25] text-white sm:text-[24px] lg:text-[16px] xl:text-[20px]">
          {post.title}
        </h3>

        {/* Button */}
        <div className="mt-auto pt-[30px]">
          <button
            type="button"
            className="inline-flex h-[50px] w-[140px] items-center justify-center rounded-[10px] bg-[#2E7D32] text-[16px] font-semibold text-white transition-colors duration-300 hover:bg-[#256628]"
          >
            Learn More
          </button>
        </div>
      </div>
    </article>
  );
}

export default function BlogSection() {
  return (
    <section className={`${manrope.className} w-full bg-white px-5 py-[100px] sm:px-8 lg:px-10`}>
      <div className="mx-auto max-w-[1240px]">
        {/* Top Label */}
        <p className="mb-3 text-center text-[12px] font-bold uppercase tracking-[2px] text-[#1F3427]">
          BLOG
        </p>

        {/* Main Heading */}
        <h2 className="mx-auto max-w-[900px] text-center text-[28px] font-extrabold leading-[1.1] text-[#1F3427] sm:text-[42px] lg:text-[50px] xl:text-[50px]">
          Bright Ideas for a Greener Tomorrow.
        </h2>

        {/* Description */}
        <p className="mx-auto mt-5 max-w-[850px] text-center text-[15px] font-normal leading-[1.8] text-[#6B7280]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>

        {/* Cards Grid */}
        <div className="mt-[60px] grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 ">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}