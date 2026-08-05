'use client'
import CTASection from "../components/homecomponents/CTASection";
import PriceSection from "../components/homecomponents/PricingSection";
import FAQSection from "../components/homecomponents/FAQSection";
import Testimonials from "../components/homecomponents/TestimonialsSection";
import HeroSection from "../components/pricing/hero";
export default function Dashboard() {
 
    return (
        <>
            <HeroSection />
            <PriceSection />
           <FAQSection />
          <Testimonials />
        <CTASection />
        </>
    );
}