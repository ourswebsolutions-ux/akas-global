'use client'
import React from 'react';
import Hero from "./components/homecomponents/hero";
import Stats from "./components/homecomponents/stats";
import About from "./components/homecomponents/about";
import Services from "./components/homecomponents/ServicesSection";
import Projects from "./components/homecomponents/ProjectsSection";
import Testimonials from "./components/homecomponents/TestimonialsSection";
import CTASection from './components/homecomponents/CTASection';
import FAQSection from './components/homecomponents/FAQSection';
import PriceSection from './components/homecomponents/PricingSection';
import TeamSection from './components/homecomponents/TeamSection';
function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100">
      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <Projects />
        <Testimonials />
        <CTASection />
        <TeamSection />
        <PriceSection />
        <FAQSection />
      </main>
    </div>
  );
}

export default App;