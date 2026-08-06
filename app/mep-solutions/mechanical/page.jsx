'use client'

import ServicePage from '../../components/Service'
import {
  Settings,
  Cog,
  ShieldCheck,
  Wrench,
  CheckCircle2,
  Clock3,
  BadgeCheck,
  Layers,
  Activity,
  FileText,
  Gauge,
  Target,
} from 'lucide-react'

export default function Page() {
  return (
    <ServicePage
      title="Mechanical"
      subtitle="Precision Mechanical Systems for Building Performance"
      description="Our Mechanical service delivers complete design, installation and commissioning of building mechanical systems including HVAC, plumbing, drainage, firefighting and specialised mechanical packages. From central plant and distribution networks to terminal units and controls, we provide reliable, energy-efficient mechanical solutions that support comfort, safety and operational efficiency throughout the building lifecycle."
      badge="MEP Solutions"
      label="Mechanical"
      heroImage="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1800&q=90"
      heroImageAlt="Mechanical systems and HVAC installation"
      imagePosition="right"
      layout="modern"
      theme="light"
      animationPreset="premium"
      buttonText="Request Consultation"
      buttonLink="/contact"
      secondaryButtonText="Our Projects"
      secondaryButtonLink="/projects"
      highlights={[
        'HVAC & Air Conditioning',
        'Plumbing & Drainage',
        'Firefighting Systems',
        'Central Plant & Distribution',
        'Controls & Commissioning',
      ]}
      statistics={[
        {
          value: 16,
          suffix: '+',
          label: 'Years of Experience',
          description:
            'Delivering mechanical systems for commercial, industrial, healthcare and institutional buildings.',
        },
        {
          value: 130,
          suffix: '+',
          label: 'Mechanical Projects',
          description:
            'Completed HVAC, plumbing and firefighting installations across major developments.',
        },
        {
          value: 25,
          suffix: '%',
          label: 'Average Energy Optimisation',
          description:
            'Achieved through efficient equipment selection, system design and controls integration.',
        },
        {
          value: 99,
          suffix: '%',
          label: 'Commissioning Success',
          description:
            'Systems handed over fully tested, balanced and operating to design intent.',
        },
      ]}
      benefits={[
        {
          icon: <Settings />,
          title: 'HVAC Systems',
          description:
            'Complete heating, ventilation and air-conditioning solutions including chillers, AHUs, FCUs, ductwork, refrigeration and specialised environmental control.',
        },
        {
          icon: <Cog />,
          title: 'Plumbing & Drainage',
          description:
            'Potable water, hot water, soil and waste systems, rainwater drainage and specialised plumbing for kitchens, laboratories and medical facilities.',
        },
        {
          icon: <ShieldCheck />,
          title: 'Firefighting Systems',
          description:
            'Fire hydrant networks, sprinkler systems, hose reels, fire pumps and associated controls designed and installed to local and international codes.',
        },
        {
          icon: <Layers />,
          title: 'Central Plant & Distribution',
          description:
            'Chiller plants, boiler rooms, pump sets, risers and horizontal distribution networks engineered for capacity, redundancy and maintainability.',
        },
        {
          icon: <Gauge />,
          title: 'Controls & BMS Integration',
          description:
            'Intelligent controls, sensors and building management system interfaces that optimise performance, energy use and remote monitoring.',
        },
        {
          icon: <Activity />,
          title: 'Testing & Commissioning',
          description:
            'Systematic flushing, pressure testing, air and water balancing, functional testing and documentation to verify design performance.',
        },
      ]}
      whyChooseUs={[
        {
          number: '01',
          title: 'Integrated MEP Coordination',
          description:
            'Mechanical systems are developed and installed in close coordination with electrical and ELV packages, minimising clashes and rework.',
        },
        {
          number: '02',
          title: 'Energy & Performance Focus',
          description:
            'Equipment selection, system sizing and control strategies prioritise long-term efficiency and occupant comfort.',
        },
        {
          number: '03',
          title: 'Code Compliance & Safety',
          description:
            'All systems are designed and installed to meet applicable building codes, fire regulations and authority requirements.',
        },
        {
          number: '04',
          title: 'Maintainable Design',
          description:
            'Access, isolation, valve arrangements and plant layout are planned for efficient ongoing operation and maintenance.',
        },
      ]}
      deliverables={[
        {
          icon: <FileText />,
          title: 'Design & Shop Drawings',
          description:
            'Detailed mechanical layouts, schematics and equipment schedules.',
        },
        {
          icon: <Wrench />,
          title: 'Installation & Fabrication',
          description:
            'Ductwork, pipework, equipment setting and associated works.',
        },
        {
          icon: <CheckCircle2 />,
          title: 'Testing & Balancing',
          description:
            'Pressure tests, flushing, air/water balancing and adjustments.',
        },
        {
          icon: <BadgeCheck />,
          title: 'Commissioning & Handover',
          description:
            'Functional testing, training and complete documentation packages.',
        },
        {
          icon: <Clock3 />,
          title: 'Authority Approvals',
          description:
            'Coordination for inspections and final acceptance by authorities.',
        },
        {
          icon: <Target />,
          title: 'O&M Manuals',
          description:
            'Operating procedures, maintenance schedules and as-built records.',
        },
      ]}
      serviceHighlights={[
        {
          title: 'Comfort, Safety & Efficiency',
          description:
            'Mechanical systems determine how a building feels, how safely it operates and how much energy it consumes. We design and install solutions that deliver reliable performance across all three dimensions.',
          image:
            'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1400&q=90',
        },
        {
          title: 'From Plant Room to Terminal Unit',
          description:
            'Our scope covers the complete mechanical chain — central generation, distribution networks and terminal devices — ensuring every component works as an integrated system.',
          image:
            'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=90',
        },
        {
          title: 'Commissioned for Real Performance',
          description:
            'Installation is only complete when systems are tested, balanced and proven to meet design intent. Our commissioning process closes the gap between drawings and actual operation.',
          image:
            'https://images.unsplash.com/photo-1581094271901-8022df4466f9?auto=format&fit=crop&w=1400&q=90',
        },
      ]}
      industries={[
        { name: 'Commercial Office Buildings' },
        { name: 'Healthcare Facilities' },
        { name: 'Educational Institutions' },
        { name: 'Industrial & Logistics' },
        { name: 'Hospitality & Leisure' },
        { name: 'Mixed-Use Developments' },
        { name: 'Data Centres' },
        { name: 'Residential Towers' },
      ]}
      gallery={[
        {
          src: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=90',
          alt: 'Mechanical plant and HVAC systems',
        },
        {
          src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=90',
          alt: 'Mechanical installation and pipework',
        },
        {
          src: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?auto=format&fit=crop&w=1200&q=90',
          alt: 'Building mechanical services coordination',
        },
      ]}
      ctaTitle="Ready to deliver high-performance mechanical systems?"
      ctaDescription="Partner with our mechanical team to design, install and commission HVAC, plumbing and firefighting solutions that deliver comfort, safety and long-term efficiency."
      ctaButtonText="Request Consultation"
      ctaButtonLink="/contact"
      ctaSecondaryText="Our Projects"
      ctaSecondaryLink="/projects"
    />
  )
}