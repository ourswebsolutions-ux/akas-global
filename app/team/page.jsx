'use client'
import CTASection from "../components/homecomponents/CTASection";
import HeroSection from "../components/team/hero";
import ServicesSection from "../components/homecomponents/ServicesSection";
import TeamSection from "../components/homecomponents/TeamSection";
import ValuesSection from "../components/about/ValuesSection";
export default function Dashboard() {
 
    return (
        <>
            <HeroSection />
            <TeamSection />
            <ValuesSection />
            <ServicesSection />
        <CTASection />
        </>
    );
}