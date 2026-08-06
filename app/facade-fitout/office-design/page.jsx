'use client'

import ServicePage from '../../components/Service'
import {
  Layout,
  PencilRuler,
  Sofa,
  Users,
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
  Lightbulb,
} from 'lucide-react'

export default function Page() {
  return (
    <ServicePage
      title="Office Design"
      subtitle="Workplaces Designed for Performance, Comfort and Brand"
      description="Our Office Design service creates functional, inspiring and brand-aligned workplaces. From space planning and zoning to material selection, lighting concepts and detailed interior specifications, we deliver design solutions that support productivity, collaboration and well-being while meeting programme, budget and technical requirements."
      badge="Façade & Fitout"
      label="Office Design"
      heroImage="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=90"
      heroImageAlt="Modern office design and workplace interior"
      imagePosition="right"
      layout="modern"
      theme="light"
      animationPreset="premium"
      buttonText="Request Consultation"
      buttonLink="/contact"
      secondaryButtonText="Our Projects"
      secondaryButtonLink="/projects"
      highlights={[
        'Space Planning & Zoning',
        'Workplace Strategy',
        'Material & Finish Selection',
        'Lighting & Acoustic Design',
        'Brand-Integrated Interiors',
      ]}
      statistics={[
        {
          value: 16,
          suffix: '+',
          label: 'Years of Experience',
          description:
            'Designing corporate, co-working and institutional office environments.',
        },
        {
          value: 95,
          suffix: '+',
          label: 'Office Projects',
          description:
            'Completed workplace design and fitout packages across sectors.',
        },
        {
          value: 420000,
          suffix: '+',
          label: 'Square Metres Designed',
          description:
            'Functional, brand-aligned office spaces delivered to brief.',
        },
        {
          value: 98,
          suffix: '%',
          label: 'Client Satisfaction',
          description:
            'Designs that balance aesthetics, performance and practical delivery.',
        },
      ]}
      benefits={[
        {
          icon: <Layout />,
          title: 'Space Planning & Zoning',
          description:
            'Efficient layouts that optimise circulation, collaboration zones, focus areas and support spaces according to headcount and work patterns.',
        },
        {
          icon: <PencilRuler />,
          title: 'Concept & Detailed Design',
          description:
            'From mood boards and 3D visualisations to coordinated drawings and specifications ready for tender and construction.',
        },
        {
          icon: <Sofa />,
          title: 'Furniture & FF&E Strategy',
          description:
            'Selection and specification of workstations, meeting furniture, soft seating and storage aligned with brand and ergonomic standards.',
        },
        {
          icon: <Lightbulb />,
          title: 'Lighting & Acoustics',
          description:
            'Layered lighting schemes and acoustic treatments that improve comfort, concentration and overall workplace quality.',
        },
        {
          icon: <ShieldCheck />,
          title: 'Compliance & Performance',
          description:
            'Designs that meet fire, accessibility, ventilation and building-code requirements without compromising the intended aesthetic.',
        },
        {
          icon: <Users />,
          title: 'User-Centred Approach',
          description:
            'Solutions informed by how teams actually work — supporting hybrid models, collaboration and well-being.',
        },
      ]}
      whyChooseUs={[
        {
          number: '01',
          title: 'Design That Delivers',
          description:
            'We design with construction and programme in mind, reducing costly changes and ensuring the finished space matches the approved vision.',
        },
        {
          number: '02',
          title: 'Brand & Culture Alignment',
          description:
            'Interiors that express organisational identity while remaining practical, durable and easy to maintain.',
        },
        {
          number: '03',
          title: 'Integrated Fitout Path',
          description:
            'Seamless transition from design into our fitout and MEP coordination teams for single-point accountability.',
        },
        {
          number: '04',
          title: 'Evidence-Based Decisions',
          description:
            'Material, lighting and layout choices grounded in performance data, user feedback and whole-life cost considerations.',
        },
      ]}
      deliverables={[
        {
          icon: <FileText />,
          title: 'Space Plans & Concepts',
          description:
            'Zoning diagrams, furniture layouts and design concepts.',
        },
        {
          icon: <PencilRuler />,
          title: 'Detailed Drawings',
          description:
            'Partitions, ceilings, finishes and joinery packages.',
        },
        {
          icon: <CheckCircle2 />,
          title: 'Material Specifications',
          description:
            'Approved finishes, samples and performance criteria.',
        },
        {
          icon: <BadgeCheck />,
          title: 'FF&E Schedules',
          description:
            'Furniture, fixtures and equipment selection lists.',
        },
        {
          icon: <Clock3 />,
          title: 'Lighting & Acoustic Plans',
          description:
            'Layered lighting and acoustic treatment strategies.',
        },
        {
          icon: <Target />,
          title: 'Tender & Construction Support',
          description:
            'Documentation and clarifications through to handover.',
        },
      ]}
      serviceHighlights={[
        {
          title: 'Workplaces That Work',
          description:
            'Good office design balances density, collaboration and focus. We create environments that support how teams operate today and adapt as needs change.',
          image:
            'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=90',
        },
        {
          title: 'From Vision to Buildable Reality',
          description:
            'Concepts are developed into coordinated packages that contractors can price and build accurately, protecting both design intent and programme.',
          image:
            'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=90',
        },
        {
          title: 'Detail That Defines the Experience',
          description:
            'Joinery, lighting, materials and acoustic treatments receive equal attention so the finished workplace feels intentional and enduring.',
          image:
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=90',
        },
      ]}
      industries={[
        { name: 'Corporate Headquarters' },
        { name: 'Regional Offices' },
        { name: 'Co-Working & Flex Spaces' },
        { name: 'Professional Services' },
        { name: 'Technology & Start-ups' },
        { name: 'Government & Institutional' },
        { name: 'Healthcare Administration' },
        { name: 'Educational Campuses' },
      ]}
      gallery={[
        {
          src: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=90',
          alt: 'Modern open-plan office design',
        },
        {
          src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=90',
          alt: 'Professional workplace interior',
        },
        {
          src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=90',
          alt: 'High-quality office finishes and detailing',
        },
      ]}
      ctaTitle="Ready to design a workplace that performs?"
      ctaDescription="Partner with our office design team to create functional, brand-aligned environments that support productivity, collaboration and long-term value."
      ctaButtonText="Request Consultation"
      ctaButtonLink="/contact"
      ctaSecondaryText="Our Projects"
      ctaSecondaryLink="/projects"
    />
  )
}