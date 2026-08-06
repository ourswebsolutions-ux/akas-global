'use client'

import ServicePage from '../../components/Service'
import {
  Droplets,
  Waves,
  ShieldCheck,
  Wrench,
  CheckCircle2,
  Clock3,
  BadgeCheck,
  Layers,
  Activity,
  FileText,
  Settings,
  Target,
} from 'lucide-react'

export default function Page() {
  return (
    <ServicePage
      title="Wet Utilities"
      subtitle="Reliable Water, Sewerage & Stormwater Infrastructure"
      description="Our Wet Utilities service delivers complete design, installation and commissioning of potable water networks, sewerage systems, stormwater drainage and associated treatment infrastructure. From trunk mains and pumping stations to internal distribution and sustainable drainage solutions, we provide robust, compliant and maintainable wet utility networks that support long-term operational performance."
      badge="Infrastructure"
      label="Wet Utilities"
      heroImage="https://images.unsplash.com/photo-1581094271901-8022df4466f9?auto=format&fit=crop&w=1800&q=90"
      heroImageAlt="Wet utilities and water infrastructure installation"
      imagePosition="right"
      layout="corporate"
      theme="light"
      animationPreset="premium"
      buttonText="Request Consultation"
      buttonLink="/contact"
      secondaryButtonText="Our Projects"
      secondaryButtonLink="/projects"
      highlights={[
        'Potable Water Networks',
        'Sewerage & Wastewater Systems',
        'Stormwater Drainage',
        'Pumping Stations & Treatment',
        'Sustainable Drainage Solutions',
      ]}
      statistics={[
        {
          value: 16,
          suffix: '+',
          label: 'Years of Experience',
          description:
            'Delivering wet utility networks for residential, commercial and industrial developments.',
        },
        {
          value: 85,
          suffix: '+',
          label: 'Networks Completed',
          description:
            'Potable water, sewerage and stormwater systems installed and commissioned across major projects.',
        },
        {
          value: 1200,
          suffix: '+',
          label: 'Kilometres of Pipeline',
          description:
            'Installed and tested under rigorous quality and pressure regimes.',
        },
        {
          value: 99,
          suffix: '%',
          label: 'System Integrity',
          description:
            'Achieved through disciplined testing, commissioning and handover procedures.',
        },
      ]}
      benefits={[
        {
          icon: <Droplets />,
          title: 'Potable Water Networks',
          description:
            'Design and installation of distribution mains, service connections, valves, hydrants and metering systems that meet regulatory and operational standards.',
        },
        {
          icon: <Waves />,
          title: 'Sewerage & Wastewater',
          description:
            'Gravity and pumped sewer networks, manholes, rising mains and connections to treatment facilities, engineered for capacity, durability and ease of maintenance.',
        },
        {
          icon: <Layers />,
          title: 'Stormwater Drainage',
          description:
            'Surface water collection, attenuation, conveyance and discharge systems designed to manage peak flows and support sustainable drainage principles.',
        },
        {
          icon: <Settings />,
          title: 'Pumping Stations & Controls',
          description:
            'Complete pumping station packages including civil works, mechanical equipment, electrical controls and telemetry for reliable remote operation.',
        },
        {
          icon: <ShieldCheck />,
          title: 'Compliance & Quality Assurance',
          description:
            'Full adherence to local authority standards, pressure testing, disinfection protocols and as-built documentation for regulatory acceptance.',
        },
        {
          icon: <Activity />,
          title: 'Sustainable & Resilient Design',
          description:
            'Integration of SuDS principles, water efficiency measures and climate-resilient detailing to reduce long-term operational and environmental impact.',
        },
      ]}
      whyChooseUs={[
        {
          number: '01',
          title: 'End-to-End Capability',
          description:
            'From preliminary design and authority coordination through installation, testing and commissioning, we manage the full wet utilities lifecycle under one accountable team.',
        },
        {
          number: '02',
          title: 'Authority-Approved Standards',
          description:
            'Our designs and installations are developed to meet the specific requirements of local municipalities and utility providers, reducing approval delays.',
        },
        {
          number: '03',
          title: 'Integrated with Dry Utilities',
          description:
            'Wet and dry utility packages are coordinated at design and construction stages to minimise clashes, optimise trenching and protect programme.',
        },
        {
          number: '04',
          title: 'Long-Term Maintainability',
          description:
            'Networks are designed and built with access, isolation and future expansion in mind, supporting efficient operation and lower whole-life costs.',
        },
      ]}
      deliverables={[
        {
          icon: <FileText />,
          title: 'Network Design Packages',
          description:
            'Hydraulic design, layout drawings and material specifications.',
        },
        {
          icon: <Wrench />,
          title: 'Installation & Construction',
          description:
            'Pipe laying, manholes, chambers and associated civil works.',
        },
        {
          icon: <CheckCircle2 />,
          title: 'Pressure Testing & Disinfection',
          description:
            'Full hydrostatic testing, sterilisation and water quality verification.',
        },
        {
          icon: <BadgeCheck />,
          title: 'Commissioning & Handover',
          description:
            'System start-up, performance validation and as-built records.',
        },
        {
          icon: <Clock3 />,
          title: 'Authority Approvals',
          description:
            'Coordination and documentation for municipal and utility acceptance.',
        },
        {
          icon: <Target />,
          title: 'O&M Documentation',
          description:
            'Operating manuals, maintenance schedules and asset registers.',
        },
      ]}
      serviceHighlights={[
        {
          title: 'Robust Networks Built for Performance',
          description:
            'Wet utility systems form the hidden backbone of every development. We focus on hydraulic capacity, material durability and construction quality so that networks perform reliably for decades with minimal intervention.',
          image:
            'https://images.unsplash.com/photo-1581094271901-8022df4466f9?auto=format&fit=crop&w=1400&q=90',
        },
        {
          title: 'Coordinated Installation, Reduced Risk',
          description:
            'By integrating wet utilities with overall site infrastructure planning, we minimise rework, protect adjacent services and maintain programme integrity across multi-discipline packages.',
          image:
            'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=90',
        },
        {
          title: 'From Design to Authority Acceptance',
          description:
            'Our teams manage the full process — design development, material approval, installation supervision, testing and final handover documentation — ensuring a smooth path to operational status.',
          image:
            'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1400&q=90',
        },
      ]}
      industries={[
        { name: 'Residential Developments' },
        { name: 'Commercial & Mixed-Use' },
        { name: 'Industrial Parks' },
        { name: 'Healthcare Campuses' },
        { name: 'Educational Facilities' },
        { name: 'Infrastructure Corridors' },
        { name: 'Logistics & Warehousing' },
        { name: 'Hospitality Projects' },
      ]}
      gallery={[
        {
          src: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?auto=format&fit=crop&w=1200&q=90',
          alt: 'Wet utilities pipeline installation',
        },
        {
          src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=90',
          alt: 'Infrastructure trench and utility works',
        },
        {
          src: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=90',
          alt: 'Water infrastructure and civil works',
        },
      ]}
      ctaTitle="Ready to deliver reliable wet utility networks?"
      ctaDescription="Partner with our infrastructure team to design, install and commission potable water, sewerage and stormwater systems that meet regulatory standards and long-term performance requirements."
      ctaButtonText="Request Consultation"
      ctaButtonLink="/contact"
      ctaSecondaryText="Our Projects"
      ctaSecondaryLink="/projects"
    />
  )
}