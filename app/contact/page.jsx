'use client'
import HeroSection from "../components/contact/hero";
import ContactForm from "../components/contact/ContactSection";
import FaQSection from "../components/contact/FAQSection";
export default function Dashboard() {
 
    return (
        <>
            <HeroSection />
            <ContactForm />
            <FaQSection />
        </>
    );
}