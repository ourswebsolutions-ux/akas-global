'use client'

import ServicePage from '../../components/Service'
import {
  Server,
  Cpu,
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
      title="Data Centers"
      subtitle="Mission-Critical Infrastructure for Continuous Uptime"
      description="Our Data Centers service delivers complete MEP design, installation and commissioning for high-availability data centre environments. From precision cooling, redundant power distribution and fire suppression to structured cabling, monitoring and environmental controls, we provide resilient, efficient infrastructure that supports continuous operation and stringent uptime requirements."
      badge="MEP Solutions"
      label="Data Centers"
      heroImage="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1800&q=90"
      heroImageAlt="Data centre infrastructure and server environment"
      imagePosition="right"
      layout="immersive"
      theme="light"
      animationPreset="premium"
      buttonText="Request Consultation"
      buttonLink="/contact"
      secondaryButtonText="Our Projects"
      secondaryButtonLink="/projects"
      highlights={[
        'Precision Cooling Systems',
        'Redundant Power Distribution',
        'Fire Detection & Suppression',
        'Environmental Monitoring',
        'Structured Cabling & Containment',
      ]}
      statistics={[
        {
          value: 16,
          suffix: '+',
          label: 'Years of Experience',
          description:
            'Delivering MEP infrastructure for data centres and mission-critical facilities.',
        },
        {
          value: 25,
          suffix: '+',
          label: 'Data Centre Projects',
          description:
            'Completed critical environment installations across enterprise and colocation facilities.',
        },
        {
          value: 99.99,
          suffix: '%',
          label: 'Target Availability',
          description:
            'Infrastructure designed and commissioned to support high-availability operational goals.',
        },
        {
          value: 30,
          suffix: '%',
          label: 'Average PUE Improvement',
          description:
            'Achieved through efficient cooling, power architecture and environmental controls.',
        },
      ]}
      benefits={[
        {
          icon: <Server />,
          title: 'Precision Cooling',
          description:
            'CRAC/CRAH units, in-row cooling, containment strategies and free-cooling solutions engineered for high-density loads and tight temperature/humidity control.',
        },
        {
          icon: <Cpu />,
          title: 'Redundant Power Systems',
          description:
            'UPS, generators, PDUs, STS and dual-path distribution designed for concurrent maintainability and continuous power to critical loads.',
        },
        {
          icon: <ShieldCheck />,
          title: 'Fire Detection & Suppression',
          description:
            'Early-warning aspiration systems, clean-agent or water-mist suppression and integrated alarm sequences tailored to data hall requirements.',
        },
        {
          icon: <Layers />,
          title: 'Structured Cabling & Containment',
          description:
            'High-density fibre and copper pathways, overhead or underfloor routing and hot/cold aisle containment for organised, scalable infrastructure.',
        },
        {
          icon: <Settings />,
          title: 'Environmental & BMS Monitoring',
          description:
            'Continuous monitoring of temperature, humidity, power, water and security with alarming and integration into the facility management platform.',
        },
        {
          icon: <Activity />,
          title: 'Commissioning & Integrated Systems Testing',
          description:
            'Level 1–5 commissioning processes including integrated systems testing under simulated failure scenarios to prove resilience.',
        },
      ]}
      whyChooseUs={[
        {
          number: '01',
          title: 'Uptime-Focused Engineering',
          description:
            'Every system is designed around concurrent maintainability, fault tolerance and the specific availability tier required by the operator.',
        },
        {
          number: '02',
          title: 'Efficiency Without Compromise',
          description:
            'Cooling and power architectures are optimised for low PUE while preserving the redundancy and resilience demanded by critical environments.',
        },
        {
          number: '03',
          title: 'Integrated MEP Delivery',
          description:
            'Mechanical, electrical and ELV packages are developed and installed as a single coordinated scope, eliminating interface gaps that threaten uptime.',
        },
        {
          number: '04',
          title: 'Proven Commissioning Discipline',
          description:
            'Full integrated systems testing validates that the facility behaves correctly under power loss, cooling failure and other critical scenarios before handover.',
        },
      ]}
      deliverables={[
        {
          icon: <FileText />,
          title: 'Critical Systems Design',
          description:
            'Cooling, power, fire and monitoring design packages with redundancy analysis.',
        },
        {
          icon: <Wrench />,
          title: 'Installation & Fit-Out',
          description:
            'Plant installation, distribution, containment and cabling works.',
        },
        {
          icon: <CheckCircle2 />,
          title: 'Factory & Site Testing',
          description:
            'Equipment FAT, SAT and sequential systems testing.',
        },
        {
          icon: <BadgeCheck />,
          title: 'Integrated Systems Testing',
          description:
            'Full failure-mode and integrated operational scenario testing.',
        },
        {
          icon: <Clock3 />,
          title: 'Documentation & Training',
          description:
            'As-builts, SOPs, emergency procedures and operator training.',
        },
        {
          icon: <Target />,
          title: 'Handover & Support',
          description:
            'Structured handover with optional ongoing maintenance frameworks.',
        },
      ]}
      serviceHighlights={[
        {
          title: 'Infrastructure Built for Continuity',
          description:
            'Data centres demand infrastructure that never stops. We engineer cooling, power and protection systems with the redundancy, maintainability and monitoring required for continuous operation.',
          image:
            'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=90',
        },
        {
          title: 'Efficiency Meets Resilience',
          description:
            'High availability does not have to mean high energy waste. Our designs balance concurrent maintainability with efficient cooling strategies and intelligent power distribution.',
          image:
            'https://images.unsplash.com/photo-1544197150-b99a580bb7a2?auto=format&fit=crop&w=1400&q=90',
        },
        {
          title: 'Proven Under Failure Scenarios',
          description:
            'Integrated systems testing puts the complete facility through simulated power and cooling failures so that performance is demonstrated, not assumed, before live loads are introduced.',
          image:
            'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=90',
        },
      ]}
      industries={[
        { name: 'Enterprise Data Centres' },
        { name: 'Colocation Facilities' },
        { name: 'Hyperscale Campuses' },
        { name: 'Financial Services' },
        { name: 'Healthcare & Research' },
        { name: 'Government & Defence' },
        { name: 'Telecommunications' },
        { name: 'Cloud & Edge Facilities' },
      ]}
      gallery={[
        {
          src: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=90',
          alt: 'Data centre server hall and infrastructure',
        },
        {
          src: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a2?auto=format&fit=crop&w=1200&q=90',
          alt: 'Data centre power and cooling systems',
        },
        {
          src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=90',
          alt: 'Mission-critical facility monitoring',
        },
      ]}
      ctaTitle="Ready to build mission-critical infrastructure?"
      ctaDescription="Partner with our data centre team to design, install and commission resilient cooling, power and protection systems that support continuous uptime and efficient operation."
      ctaButtonText="Request Consultation"
      ctaButtonLink="/contact"
      ctaSecondaryText="Our Projects"
      ctaSecondaryLink="/projects"
    />
  )
}