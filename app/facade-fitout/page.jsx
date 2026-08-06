'use client'

import ServicePage from '../components/Service'
import {
  Building,
  Layers,
  Paintbrush,
  Ruler,
  ShieldCheck,
  Award,
  Users,
  CheckCircle2,
  Hammer,
  Clock3,
  BadgeCheck,
  Sparkles,
} from 'lucide-react'

export default function Page() {
  return (
    <ServicePage
      title="Façade & Fitout"
      subtitle="Premium Exterior Cladding & Interior Fit-Out Solutions"
      description="Our Façade & Fitout division delivers high-performance building envelopes and refined interior environments. From advanced curtain wall systems, unitised façades and external cladding to complete interior fit-out packages, we integrate architectural intent with precise engineering, quality craftsmanship and rigorous project controls to create buildings that perform, protect and impress."
      badge="Building Envelope & Interiors"
      label="Façade & Fitout"
      heroImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=90"
      heroImageAlt="Modern glass façade and premium building exterior"
      imagePosition="right"
      layout="premium"
      theme="light"
      animationPreset="premium"
      buttonText="Request Consultation"
      buttonLink="/contact"
      secondaryButtonText="Our Projects"
      secondaryButtonLink="/projects"
      highlights={[
        'Curtain Wall & Unitised Façades',
        'External Cladding Systems',
        'High-Performance Glazing',
        'Complete Interior Fit-Out',
        'Architectural Finishes',
      ]}
      statistics={[
        {
          value: 16,
          suffix: '+',
          label: 'Years of Experience',
          description:
            'Delivering complex façade and interior packages across landmark projects.',
        },
        {
          value: 180,
          suffix: '+',
          label: 'Façade & Fitout Projects',
          description:
            'Commercial, hospitality, residential and institutional buildings completed.',
        },
        {
          value: 97,
          suffix: '%',
          label: 'On-Time Delivery',
          description:
            'Achieved through disciplined coordination and advanced installation methods.',
        },
        {
          value: 320,
          suffix: '+',
          label: 'Specialist Workforce',
          description:
            'Façade engineers, installers, interior specialists and project supervisors.',
        },
      ]}
      benefits={[
        {
          icon: <Building />,
          title: 'Curtain Wall & Unitised Systems',
          description:
            'Design, engineering and installation of stick and unitised curtain wall systems that deliver weather tightness, thermal performance, structural integrity and refined architectural expression.',
        },
        {
          icon: <Layers />,
          title: 'External Cladding Solutions',
          description:
            'Complete cladding packages including aluminium composite panels, natural stone, terracotta, metal rainscreens and specialised finishes coordinated with the primary structure.',
        },
        {
          icon: <ShieldCheck />,
          title: 'High-Performance Glazing',
          description:
            'Specification and installation of advanced glazing systems focused on solar control, thermal efficiency, acoustic performance and long-term durability.',
        },
        {
          icon: <Paintbrush />,
          title: 'Interior Fit-Out Packages',
          description:
            'Full interior fit-out covering partitions, ceilings, flooring, joinery, wet areas, specialist finishes and integrated services coordination for ready-to-occupy spaces.',
        },
        {
          icon: <Ruler />,
          title: 'Precision Engineering & Detailing',
          description:
            'Detailed façade and interior engineering, interface detailing, thermal modelling and constructability reviews that protect design intent and construction quality.',
        },
        {
          icon: <Sparkles />,
          title: 'Quality Assurance & Testing',
          description:
            'Material testing, mock-up reviews, site inspections, water and air infiltration testing, and final quality verification before handover.',
        },
      ]}
      whyChooseUs={[
        {
          number: '01',
          title: 'Integrated Envelope & Interior Expertise',
          description:
            'One team responsible for both the building envelope and interior fit-out, ensuring seamless interfaces, consistent quality and simplified coordination.',
        },
        {
          number: '02',
          title: 'Engineering-Led Delivery',
          description:
            'Façade and fit-out solutions are driven by rigorous engineering, performance analysis and constructability planning rather than pure aesthetics alone.',
        },
        {
          number: '03',
          title: 'Craftsmanship & Finish Standards',
          description:
            'Installation teams are selected and supervised for precision workmanship that meets the exacting visual and technical standards of premium developments.',
        },
        {
          number: '04',
          title: 'Programme Certainty',
          description:
            'Detailed sequencing, logistics planning and progressive quality control keep façade and fit-out packages aligned with overall project milestones.',
        },
      ]}
      deliverables={[
        {
          icon: <CheckCircle2 />,
          title: 'Design & Engineering',
          description:
            'Façade engineering, detailing, thermal analysis and shop drawings.',
        },
        {
          icon: <Layers />,
          title: 'Material Procurement',
          description:
            'Specification, sourcing and quality control of cladding, glazing and finishes.',
        },
        {
          icon: <Hammer />,
          title: 'Installation Works',
          description:
            'Curtain wall, cladding, glazing and complete interior fit-out execution.',
        },
        {
          icon: <BadgeCheck />,
          title: 'Quality Control',
          description:
            'Mock-ups, inspections, testing and compliance documentation.',
        },
        {
          icon: <Clock3 />,
          title: 'Testing & Commissioning',
          description:
            'Performance testing, interface verification and final acceptance.',
        },
        {
          icon: <Users />,
          title: 'Handover',
          description:
            'As-built records, warranties, maintenance manuals and client training.',
        },
      ]}
      serviceHighlights={[
        {
          title: 'Performance-Driven Façade Design',
          description:
            'Successful façades balance architectural vision with structural, thermal, acoustic and weather-performance requirements. Our engineering teams develop detailed solutions that protect the building and elevate its presence.',
          image:
            'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=90',
        },
        {
          title: 'Precision Installation Excellence',
          description:
            'Façade and fit-out works are executed by specialised teams under continuous supervision, ensuring accurate alignment, clean interfaces, waterproofing integrity and exceptional finish quality.',
          image:
            'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=90',
        },
        {
          title: 'Verified Quality & Handover',
          description:
            'Before completion, every system and finish undergoes systematic inspection, performance testing and documentation so the completed envelope and interiors meet both design intent and operational requirements.',
          image:
            'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=90',
        },
      ]}
      industries={[
        { name: 'Commercial Towers' },
        { name: 'Hospitality & Hotels' },
        { name: 'Residential Developments' },
        { name: 'Corporate Headquarters' },
        { name: 'Mixed-Use Complexes' },
        { name: 'Healthcare Facilities' },
        { name: 'Educational Buildings' },
        { name: 'Retail & Lifestyle Centres' },
      ]}
      gallery={[
        {
          src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=90',
          alt: 'Modern glass curtain wall façade',
        },
        {
          src: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=90',
          alt: 'Premium building exterior cladding',
        },
        {
          src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=90',
          alt: 'High-end interior fit-out and finishes',
        },
      ]}
      ctaTitle="Ready to discuss your façade and fit-out project?"
      ctaDescription="Our specialist team is prepared to deliver high-performance envelopes and refined interiors with precision, quality and accountability."
      ctaButtonText="Request Consultation"
      ctaButtonLink="/contact"
      ctaSecondaryText="Our Projects"
      ctaSecondaryLink="/projects"
    />
  )
}