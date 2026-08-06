'use client'

import ServicePage from '../../components/Service'
import {
  Thermometer,
  Layers,
  ShieldCheck,
  Wrench,
  CheckCircle2,
  Clock3,
  BadgeCheck,
  Settings,
  Target,
  FileText,
  Droplets,
  Building2,
  Snowflake,
} from 'lucide-react'

export default function Page() {
  return (
    <ServicePage
      title="Insulation"
      subtitle="Floor Insulation Systems for Thermal, Acoustic and Energy Performance"
      description="Our Floor Insulation service supplies and installs high-performance thermal and acoustic insulation solutions for concrete and raised floor systems. From under-slab and floating-floor build-ups to impact-sound reduction and cold-store applications, we deliver systems that improve comfort, energy efficiency and compliance while integrating cleanly with structural and finishing layers."
      badge="Flooring Solutions"
      label="Insulation"
      heroImage="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1800&q=90"
      heroImageAlt="Floor insulation installation and thermal systems"
      imagePosition="right"
      layout="modern"
      theme="light"
      animationPreset="premium"
      buttonText="Request Consultation"
      buttonLink="/contact"
      secondaryButtonText="Our Projects"
      secondaryButtonLink="/projects"
      highlights={[
        'Thermal Under-Slab Insulation',
        'Acoustic & Impact Sound Control',
        'Floating Floor Systems',
        'Cold Store & Special Applications',
        'Integrated Build-Up Design',
      ]}
      statistics={[
        {
          value: 16,
          suffix: '+',
          label: 'Years of Experience',
          description:
            'Installing floor insulation for commercial, residential and specialised environments.',
        },
        {
          value: 140,
          suffix: '+',
          label: 'Insulation Projects',
          description:
            'Completed thermal and acoustic floor packages across sectors.',
        },
        {
          value: 520000,
          suffix: '+',
          label: 'Square Metres Insulated',
          description:
            'High-performance floor insulation installed to design and code requirements.',
        },
        {
          value: 97,
          suffix: '%',
          label: 'Performance Compliance',
          description:
            'Systems verified against thermal and acoustic specification targets.',
        },
      ]}
      benefits={[
        {
          icon: <Thermometer />,
          title: 'Thermal Performance',
          description:
            'Under-slab and perimeter insulation that reduces heat loss, improves energy efficiency and supports comfort in occupied spaces.',
        },
        {
          icon: <Snowflake />,
          title: 'Acoustic & Impact Control',
          description:
            'Resilient layers and floating-floor systems that reduce impact sound transmission between levels and adjacent spaces.',
        },
        {
          icon: <Layers />,
          title: 'System Build-Ups',
          description:
            'Coordinated insulation, screed and finish layers designed for load, thickness and long-term stability.',
        },
        {
          icon: <Droplets />,
          title: 'Moisture & Condensation Management',
          description:
            'Details and materials selected to manage vapour and moisture risk in ground-bearing and intermediate floors.',
        },
        {
          icon: <ShieldCheck />,
          title: 'Durability Under Load',
          description:
            'Insulation grades chosen for compressive strength so performance is maintained under screeds, finishes and traffic.',
        },
        {
          icon: <Wrench />,
          title: 'Clean Integration',
          description:
            'Installation coordinated with waterproofing, services and structural elements to avoid thermal bridges and gaps.',
        },
      ]}
      whyChooseUs={[
        {
          number: '01',
          title: 'Performance-Led Specification',
          description:
            'Products and thicknesses selected to meet thermal U-values, acoustic criteria and structural load requirements.',
        },
        {
          number: '02',
          title: 'Detail-Oriented Installation',
          description:
            'Joints, edges and penetrations detailed and sealed so the insulation layer performs as a continuous system.',
        },
        {
          number: '03',
          title: 'Compatibility Assured',
          description:
            'Systems chosen to work with specified screeds, membranes and floor finishes without adverse interaction.',
        },
        {
          number: '04',
          title: 'Documented Compliance',
          description:
            'Product data, installation records and, where required, performance verification for project handover.',
        },
      ]}
      deliverables={[
        {
          icon: <FileText />,
          title: 'System Specification',
          description:
            'Product selection, thicknesses and build-up drawings.',
        },
        {
          icon: <Settings />,
          title: 'Material Supply',
          description:
            'Insulation boards, resilient layers and accessories.',
        },
        {
          icon: <CheckCircle2 />,
          title: 'Installation',
          description:
            'Accurate laying, jointing and edge detailing.',
        },
        {
          icon: <BadgeCheck />,
          title: 'Acoustic Solutions',
          description:
            'Impact-sound and floating-floor systems as specified.',
        },
        {
          icon: <Clock3 />,
          title: 'Coordination Support',
          description:
            'Interfaces with waterproofing, services and screeds.',
        },
        {
          icon: <Target />,
          title: 'Handover Records',
          description:
            'Installation logs, certificates and care guidance.',
        },
      ]}
      serviceHighlights={[
        {
          title: 'Comfort and Efficiency Underfoot',
          description:
            'Floor insulation is often unseen but critical. Correct specification and installation reduce energy demand and improve acoustic privacy for occupants.',
          image:
            'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=90',
        },
        {
          title: 'Continuous Performance, Not Just Coverage',
          description:
            'Gaps, crushed edges and poor detailing undermine insulation. Our teams focus on continuity and correct grade selection under real site conditions.',
          image:
            'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=90',
        },
        {
          title: 'Built for the Full Floor Build-Up',
          description:
            'Insulation is only one layer. We design and install it to work with membranes, screeds and finishes so the complete system performs as intended.',
          image:
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=90',
        },
      ]}
      industries={[
        { name: 'Residential Developments' },
        { name: 'Commercial Offices' },
        { name: 'Hotels & Hospitality' },
        { name: 'Healthcare Facilities' },
        { name: 'Educational Buildings' },
        { name: 'Cold Storage & Industrial' },
        { name: 'Retail & Mixed-Use' },
        { name: 'Government & Civic' },
      ]}
      gallery={[
        {
          src: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=90',
          alt: 'Floor insulation installation works',
        },
        {
          src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=90',
          alt: 'Thermal and acoustic floor systems',
        },
        {
          src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=90',
          alt: 'Completed insulated floor build-up',
        },
      ]}
      ctaTitle="Ready to improve floor thermal and acoustic performance?"
      ctaDescription="Partner with our insulation team for correctly specified and carefully installed floor insulation systems that deliver comfort, efficiency and compliance."
      ctaButtonText="Request Consultation"
      ctaButtonLink="/contact"
      ctaSecondaryText="Our Projects"
      ctaSecondaryLink="/projects"
    />
  )
}