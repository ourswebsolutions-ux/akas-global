'use client'
import HeroSection from "../components/our-services/hero";
import ServicesSection from "../components/homecomponents/ServicesSection";
import ProjectsSection from "../components/homecomponents/ProjectsSection";
import CTASection from "../components/homecomponents/CTASection";
import TestimonialsSection from "../components/homecomponents/TestimonialsSection";
import PricingSection from "../components/homecomponents/PricingSection";
import OurServicesPage from "../components/our-services/ServiceCard";

export default function Dashboard() {
 
    return (
        <>
            <HeroSection />
            <OurServicesPage />

            <ProjectsSection />
            <CTASection />
            <PricingSection />

            <TestimonialsSection />
            
        </>
    );
}