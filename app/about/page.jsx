'use client'
 import HeroSection from "../components/about/hero";
import About from "../components/homecomponents/about";
// import Vision from "../components/about/visionmissionsection";
import Team from "../components/homecomponents/TeamSection";
import CTASection from "../components/homecomponents/CTASection";
import TestimonialsSection from "../components/homecomponents/TestimonialsSection";
import Vision from "../components/about/VisionMissionSection";
import ValuesSection from "../components/about/ValuesSection";
export default function Dashboard() {
 
    return (
        <>
            <HeroSection />
            <About />
            <Vision />
            <ValuesSection />
            <Team />
            <CTASection />
            <TestimonialsSection />
        </>
    );
}