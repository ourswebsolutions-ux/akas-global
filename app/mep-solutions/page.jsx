'use client'

import ServicePage from '../components/Service'
import {
  Wrench,
  Zap,
  Droplets,
  Wind,
  ShieldCheck,
  Award,
  Users,
  CheckCircle2,
  Settings,
  Clock3,
  BadgeCheck,
  Activity,
} from 'lucide-react'

export default function Page() {
  return (
    <ServicePage
      title="MEP Solutions"
      subtitle="Mechanical, Electrical & Plumbing Engineering Systems"
      description="Our MEP Solutions division provides complete design, supply, installation, testing and commissioning of mechanical, electrical and plumbing systems for commercial, industrial, residential and institutional buildings. From HVAC and fire protection to power distribution, lighting, water supply and drainage, we deliver fully coordinated, energy-efficient and code-compliant building services that ensure comfort, safety and operational reliability."
      badge="Building Services Engineering"
      label="MEP Solutions"
      heroImage="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1800&q=90"
      heroImageAlt="Mechanical electrical and plumbing systems installation in modern building"
      imagePosition="right"
      layout="premium"
      theme="light"
      animationPreset="premium"
      buttonText="Request Consultation"
      buttonLink="/contact"
      secondaryButtonText="Our Projects"
      secondaryButtonLink="/projects"
      highlights={[
        'HVAC & Climate Control',
        'Electrical Power & Lighting',
        'Plumbing & Drainage Systems',
        'Fire Protection & Life Safety',
        'Building Management Systems',
      ]}
      statistics={[
        {
          value: 15,
          suffix: '+',
          label: 'Years of Experience',
          description:
            'Delivering integrated MEP systems across diverse building typologies.',
        },
        {
          value: 320,
          suffix: '+',
          label: 'MEP Projects',
          description:
            'Commercial, industrial, healthcare and residential installations completed.',
        },
        {
          value: 98,
          suffix: '%',
          label: 'System Reliability',
          description:
            'Achieved through rigorous testing, commissioning and quality control.',
        },
        {
          value: 480,
          suffix: '+',
          label: 'Technical Specialists',
          description:
            'MEP engineers, supervisors, electricians, plumbers and commissioning teams.',
        },
      ]}
      benefits={[
        {
          icon: <Wind />,
          title: 'HVAC & Climate Control',
          description:
            'Complete heating, ventilation and air-conditioning systems including chillers, air handling units, ductwork, VRF systems and energy recovery solutions designed for optimal comfort and efficiency.',
        },
        {
          icon: <Zap />,
          title: 'Electrical Power & Distribution',
          description:
            'Medium and low voltage power systems, transformers, switchgear, distribution boards, emergency generators, UPS systems and comprehensive lighting design and installation.',
        },
        {
          icon: <Droplets />,
          title: 'Plumbing & Water Systems',
          description:
            'Domestic water supply, hot water generation, drainage, sewage treatment, rainwater harvesting and specialised systems for healthcare, hospitality and industrial applications.',
        },
        {
          icon: <ShieldCheck />,
          title: 'Fire Protection & Life Safety',
          description:
            'Fire detection and alarm systems, sprinkler and hydrant networks, smoke control, emergency lighting and complete life-safety integration meeting international codes.',
        },
        {
          icon: <Settings />,
          title: 'Building Management Systems',
          description:
            'Centralised BMS and automation platforms that monitor, control and optimise HVAC, lighting, power and security systems for energy efficiency and operational insight.',
        },
        {
          icon: <Activity />,
          title: 'Testing, Commissioning & Handover',
          description:
            'Systematic functional testing, performance verification, balancing, documentation and client training to ensure every system operates as designed from day one.',
        },
      ]}
      whyChooseUs={[
        {
          number: '01',
          title: 'Fully Coordinated Design',
          description:
            'Our multidisciplinary MEP teams work with BIM coordination to eliminate clashes, optimise routes and deliver conflict-free installation packages.',
        },
        {
          number: '02',
          title: 'Energy-Efficient Solutions',
          description:
            'We prioritise high-efficiency equipment, intelligent controls and system designs that reduce operational costs and support sustainability targets.',
        },
        {
          number: '03',
          title: 'Code Compliance & Safety',
          description:
            'All systems are engineered and installed to meet or exceed international electrical, mechanical, plumbing and fire-safety codes and standards.',
        },
        {
          number: '04',
          title: 'Single-Source Accountability',
          description:
            'From design through installation, testing and commissioning, one experienced team remains responsible for the complete MEP delivery.',
        },
      ]}
      deliverables={[
        {
          icon: <CheckCircle2 />,
          title: 'MEP Design & Coordination',
          description:
            'Concept, detailed design, BIM coordination and shop drawings.',
        },
        {
          icon: <Wrench />,
          title: 'Equipment Procurement',
          description:
            'Specification, vendor qualification and supply of major plant and systems.',
        },
        {
          icon: <Settings />,
          title: 'Installation & Integration',
          description:
            'Mechanical, electrical and plumbing installation with full site supervision.',
        },
        {
          icon: <BadgeCheck />,
          title: 'Quality & Compliance',
          description:
            'Inspections, material testing, code verification and documentation.',
        },
        {
          icon: <Clock3 />,
          title: 'Testing & Commissioning',
          description:
            'Functional testing, performance balancing and system validation.',
        },
        {
          icon: <Users />,
          title: 'Handover & Training',
          description:
            'As-built records, O&M manuals and operator training programmes.',
        },
      ]}
      serviceHighlights={[
        {
          title: 'Coordinated MEP Engineering',
          description:
            'Successful building services begin with precise engineering. Our teams develop fully coordinated mechanical, electrical and plumbing designs using BIM to resolve conflicts early and streamline construction.',
          image:
            'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1400&q=90',
        },
        {
          title: 'Professional Installation Excellence',
          description:
            'Installation works are managed by experienced MEP supervisors and specialised trades who execute ductwork, piping, cabling and equipment placement to exacting quality and safety standards.',
          image:
            'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1400&q=90',
        },
        {
          title: 'Verified Performance Delivery',
          description:
            'Before handover, every system undergoes rigorous testing, commissioning and documentation to confirm operational readiness, energy performance and full compliance with design intent.',
          image:
            'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1400&q=90',
        },
      ]}
      industries={[
        { name: 'Commercial Buildings' },
        { name: 'Industrial Facilities' },
        { name: 'Healthcare Facilities' },
        { name: 'Hospitality & Hotels' },
        { name: 'Educational Institutions' },
        { name: 'Residential Developments' },
        { name: 'Data Centres' },
        { name: 'Mixed-Use Complexes' },
      ]}
      gallery={[
        {
          src: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=90',
          alt: 'MEP systems installation in commercial building',
        },
        {
          src: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=90',
          alt: 'Electrical and mechanical engineering works',
        },
        {
          src: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1200&q=90',
          alt: 'Building services and HVAC installation',
        },
      ]}
      ctaTitle="Ready to discuss your MEP project?"
      ctaDescription="Our building services team is prepared to deliver efficient, reliable and fully coordinated MEP systems with precision and accountability."
      ctaButtonText="Request Consultation"
      ctaButtonLink="/contact"
      ctaSecondaryText="Our Projects"
      ctaSecondaryLink="/projects"
    />
  )
}