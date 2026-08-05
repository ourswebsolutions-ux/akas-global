'use client'
import HeroSection from "../components/our-services/hero";
import ServicesSection from "../components/homecomponents/ServicesSection";
import ProjectsSection from "../components/homecomponents/ProjectsSection";
import CTASection from "../components/homecomponents/CTASection";
import TestimonialsSection from "../components/homecomponents/TestimonialsSection";
import PricingSection from "../components/homecomponents/PricingSection";

export default function Dashboard() {
 
    return (
        <>
            <HeroSection />
            <ServicesSection />
            <ProjectsSection />
            <CTASection />
            <PricingSection />

            <TestimonialsSection />
        </>
    );
}