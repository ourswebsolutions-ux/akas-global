'use client'
import HeroSection from "../components/faqs/hero";
import FAQSection from "../components/homecomponents/FAQSection";
import FAQCta from "../components/faq/FaqCta";
import BlogSection from "../components/faq/BlogSection";
export default function Dashboard() {
 
    return (
        <>
            <HeroSection />
            <FAQSection />
            <FAQCta />
            <BlogSection />
        </>
    );
}