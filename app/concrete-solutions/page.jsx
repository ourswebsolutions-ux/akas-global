'use client'

import ServicePage from '../components/Service'
import {
  Layers,
  Hammer,
  Ruler,
  ShieldCheck,
  Award,
  Users,
  CheckCircle2,
  Clock3,
  BadgeCheck,
  Building2,
  Settings,
  Droplets,
} from 'lucide-react'

export default function Page() {
  return (
    <ServicePage
      title="Concrete Solutions"
      subtitle="Structural Concrete Engineering & Construction"
      description="Our Concrete Solutions division specialises in the design, supply, placement and finishing of high-performance structural concrete for commercial, industrial, infrastructure and residential projects. From foundations and structural frames to specialised mixes, post-tensioning, architectural concrete and industrial flooring, we deliver durable, precise and code-compliant concrete works that form the backbone of every successful building and civil structure."
      badge="Structural & Architectural Concrete"
      label="Concrete Solutions"
      heroImage="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1800&q=90"
      heroImageAlt="Structural concrete construction and formwork on major project"
      imagePosition="right"
      layout="luxury"
      theme="light"
      animationPreset="premium"
      buttonText="Request Consultation"
      buttonLink="/contact"
      secondaryButtonText="Our Projects"
      secondaryButtonLink="/projects"
      highlights={[
        'Structural Concrete Frames',
        'Foundations & Substructure',
        'Post-Tensioned Systems',
        'Architectural Concrete',
        'Industrial Flooring Solutions',
      ]}
      statistics={[
        {
          value: 18,
          suffix: '+',
          label: 'Years of Experience',
          description:
            'Delivering complex structural concrete packages across major developments.',
        },
        {
          value: 240,
          suffix: '+',
          label: 'Concrete Projects',
          description:
            'Commercial, industrial, infrastructure and residential concrete works completed.',
        },
        {
          value: 98,
          suffix: '%',
          label: 'Quality Compliance',
          description:
            'Maintained through rigorous mix design, testing and site quality control.',
        },
        {
          value: 650,
          suffix: '+',
          label: 'Specialist Crew',
          description:
            'Concrete engineers, supervisors, formwork carpenters and finishing teams.',
        },
      ]}
      benefits={[
        {
          icon: <Building2 />,
          title: 'Structural Concrete Frames',
          description:
            'Complete reinforced and post-tensioned concrete frames including columns, beams, slabs, cores and shear walls designed and constructed for strength, durability and constructability.',
        },
        {
          icon: <Layers />,
          title: 'Foundations & Substructure',
          description:
            'Raft foundations, pile caps, retaining walls, basements and underground structures executed with precise formwork, reinforcement and concrete placement under strict quality regimes.',
        },
        {
          icon: <Settings />,
          title: 'Post-Tensioned Systems',
          description:
            'Design and installation of bonded and unbonded post-tensioning systems that reduce structural depth, improve span capability and enhance long-term performance.',
        },
        {
          icon: <Hammer />,
          title: 'Architectural Concrete',
          description:
            'Fair-faced, exposed and specially finished concrete elements that combine structural function with refined visual quality for architectural expression.',
        },
        {
          icon: <Droplets />,
          title: 'Specialised Mix Designs',
          description:
            'High-strength, high-performance, self-compacting, waterproof and fibre-reinforced concrete mixes tailored to project requirements and environmental conditions.',
        },
        {
          icon: <ShieldCheck />,
          title: 'Quality Control & Testing',
          description:
            'Comprehensive material testing, cube strength monitoring, non-destructive testing and documented quality assurance throughout every stage of concrete works.',
        },
      ]}
      whyChooseUs={[
        {
          number: '01',
          title: 'Engineering-Led Concrete Delivery',
          description:
            'Our teams combine structural engineering insight with practical construction expertise to optimise mix design, formwork systems and placement methods.',
        },
        {
          number: '02',
          title: 'Advanced Formwork & Methods',
          description:
            'We deploy modern formwork systems, climbing technology and precise sequencing that improve safety, speed and surface quality on complex structures.',
        },
        {
          number: '03',
          title: 'Rigorous Quality Systems',
          description:
            'From batch plant control through placement and curing, every concrete element is subject to documented testing and inspection protocols.',
        },
        {
          number: '04',
          title: 'Integrated Project Coordination',
          description:
            'Concrete packages are fully coordinated with structural design, MEP penetrations and subsequent trades to minimise interfaces and rework.',
        },
      ]}
      deliverables={[
        {
          icon: <CheckCircle2 />,
          title: 'Concrete Engineering',
          description:
            'Mix design, structural detailing, formwork design and method statements.',
        },
        {
          icon: <Ruler />,
          title: 'Formwork & Reinforcement',
          description:
            'Precision formwork systems, rebar fabrication and placement control.',
        },
        {
          icon: <Hammer />,
          title: 'Concrete Placement',
          description:
            'Controlled placement, vibration, finishing and curing operations.',
        },
        {
          icon: <BadgeCheck />,
          title: 'Testing & Inspection',
          description:
            'Cube testing, NDT, surface quality checks and compliance records.',
        },
        {
          icon: <Clock3 />,
          title: 'Post-Tensioning',
          description:
            'Stressing operations, grouting and long-term performance verification.',
        },
        {
          icon: <Users />,
          title: 'Handover Documentation',
          description:
            'As-built records, test certificates and maintenance recommendations.',
        },
      ]}
      serviceHighlights={[
        {
          title: 'Precision Structural Concrete',
          description:
            'Successful concrete structures begin with rigorous engineering and planning. Our teams develop optimised mix designs, formwork strategies and placement sequences that deliver strength, durability and dimensional accuracy.',
          image:
            'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=90',
        },
        {
          title: 'Controlled Site Execution',
          description:
            'Concrete works are directed by experienced supervisors who manage formwork, reinforcement, placement and curing under continuous quality surveillance and strict safety protocols.',
          image:
            'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1400&q=90',
        },
        {
          title: 'Verified Strength & Durability',
          description:
            'Before acceptance, every structural element undergoes systematic testing, inspection and documentation to confirm that design strength, durability and finish quality have been achieved.',
          image:
            'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1400&q=90',
        },
      ]}
      industries={[
        { name: 'Commercial Buildings' },
        { name: 'Industrial Facilities' },
        { name: 'Infrastructure Projects' },
        { name: 'Residential Towers' },
        { name: 'Healthcare Facilities' },
        { name: 'Data Centres' },
        { name: 'Mixed-Use Developments' },
        { name: 'Civil Engineering Works' },
      ]}
      gallery={[
        {
          src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=90',
          alt: 'Structural concrete frame construction',
        },
        {
          src: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=90',
          alt: 'Formwork and concrete placement operations',
        },
        {
          src: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=90',
          alt: 'High-rise concrete structure under construction',
        },
      ]}
      ctaTitle="Ready to discuss your concrete project?"
      ctaDescription="Our structural concrete team is prepared to deliver durable, precise and high-performance concrete solutions with engineering excellence and site discipline."
      ctaButtonText="Request Consultation"
      ctaButtonLink="/contact"
      ctaSecondaryText="Our Projects"
      ctaSecondaryLink="/projects"
    />
  )
}