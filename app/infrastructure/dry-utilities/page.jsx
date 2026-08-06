'use client'

import ServicePage from '../../components/Service'
import {
  Zap,
  Cable,
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
      title="Dry Utilities"
      subtitle="Power, Telecom & Gas Infrastructure Networks"
      description="Our Dry Utilities service covers the complete design, installation and commissioning of electrical power distribution, telecommunications, fibre optic networks and gas infrastructure. From high-voltage connections and substations to low-voltage distribution, street lighting and communications ducting, we deliver coordinated dry utility packages that meet authority standards and support reliable long-term performance."
      badge="Infrastructure"
      label="Dry Utilities"
      heroImage="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1800&q=90"
      heroImageAlt="Dry utilities power and telecom infrastructure"
      imagePosition="right"
      layout="corporate"
      theme="light"
      animationPreset="premium"
      buttonText="Request Consultation"
      buttonLink="/contact"
      secondaryButtonText="Our Projects"
      secondaryButtonLink="/projects"
      highlights={[
        'Electrical Power Distribution',
        'Telecommunications & Fibre',
        'Gas Networks',
        'Street Lighting Systems',
        'Ducting & Jointing Chambers',
      ]}
      statistics={[
        {
          value: 16,
          suffix: '+',
          label: 'Years of Experience',
          description:
            'Delivering dry utility networks for residential, commercial and industrial developments.',
        },
        {
          value: 90,
          suffix: '+',
          label: 'Networks Completed',
          description:
            'Power, telecom and gas systems installed and commissioned across major projects.',
        },
        {
          value: 850,
          suffix: '+',
          label: 'Kilometres of Cabling',
          description:
            'Power and communications cables installed and tested under rigorous quality regimes.',
        },
        {
          value: 99,
          suffix: '%',
          label: 'System Acceptance',
          description:
            'Achieved through disciplined testing, commissioning and authority handover procedures.',
        },
      ]}
      benefits={[
        {
          icon: <Zap />,
          title: 'Electrical Power Distribution',
          description:
            'HV/MV/LV networks, substations, transformers, switchgear and distribution panels designed and installed to utility and regulatory standards.',
        },
        {
          icon: <Cable />,
          title: 'Telecommunications & Fibre',
          description:
            'Fibre optic backbone, copper networks, duct banks, jointing chambers and last-mile connections supporting high-speed communications.',
        },
        {
          icon: <Layers />,
          title: 'Gas Infrastructure',
          description:
            'Medium and low-pressure gas networks, service connections, valves and metering installations coordinated with local gas authorities.',
        },
        {
          icon: <Settings />,
          title: 'Street Lighting & Controls',
          description:
            'Complete street lighting systems including poles, luminaires, cabling, control cabinets and smart lighting integration where required.',
        },
        {
          icon: <ShieldCheck />,
          title: 'Compliance & Safety',
          description:
            'Full adherence to electrical codes, utility specifications, earthing systems and safety protocols throughout design and installation.',
        },
        {
          icon: <Activity />,
          title: 'Coordinated Multi-Utility Delivery',
          description:
            'Dry utilities integrated with wet services and civil works to minimise clashes, optimise trenching sequences and protect overall programme.',
        },
      ]}
      whyChooseUs={[
        {
          number: '01',
          title: 'Utility Authority Coordination',
          description:
            'Established working relationships with power, telecom and gas providers streamline approvals, inspections and final connections.',
        },
        {
          number: '02',
          title: 'Clash-Free Installation',
          description:
            '3D coordination and detailed method statements ensure dry utilities are installed without conflict with wet services or structural elements.',
        },
        {
          number: '03',
          title: 'Future-Ready Infrastructure',
          description:
            'Networks are designed with spare capacity, accessible jointing points and expansion pathways to support future growth and technology upgrades.',
        },
        {
          number: '04',
          title: 'End-to-End Accountability',
          description:
            'From design development and material procurement through installation, testing and authority handover, one team owns the complete dry utilities package.',
        },
      ]}
      deliverables={[
        {
          icon: <FileText />,
          title: 'Network Design Packages',
          description:
            'Electrical, telecom and gas layout drawings with material specifications.',
        },
        {
          icon: <Wrench />,
          title: 'Installation & Construction',
          description:
            'Cable laying, duct banks, chambers, poles and associated civil works.',
        },
        {
          icon: <CheckCircle2 />,
          title: 'Testing & Commissioning',
          description:
            'Insulation resistance, continuity, pressure and functional testing.',
        },
        {
          icon: <BadgeCheck />,
          title: 'Authority Handover',
          description:
            'Inspection coordination, as-built records and final connection support.',
        },
        {
          icon: <Clock3 />,
          title: 'Programme Integration',
          description:
            'Sequenced delivery aligned with overall site infrastructure programme.',
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
          title: 'Power, Communications & Gas — Delivered Together',
          description:
            'Dry utilities form the essential energy and connectivity backbone of every development. We design and install coordinated networks that meet current demand while providing capacity for future growth.',
          image:
            'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1400&q=90',
        },
        {
          title: 'Precision Installation, Zero Compromise',
          description:
            'From trench excavation and duct laying to cable pulling, jointing and termination, every activity follows approved method statements and rigorous quality checks.',
          image:
            'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=90',
        },
        {
          title: 'Authority-Ready from Day One',
          description:
            'Our documentation, testing regimes and construction standards are aligned with the specific requirements of power, telecom and gas authorities, ensuring smooth inspection and acceptance.',
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
        { name: 'Data Centre Campuses' },
      ]}
      gallery={[
        {
          src: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=90',
          alt: 'Power and electrical infrastructure',
        },
        {
          src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=90',
          alt: 'Utility trench and cable installation',
        },
        {
          src: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=90',
          alt: 'Infrastructure civil and utility works',
        },
      ]}
      ctaTitle="Ready to deliver reliable dry utility networks?"
      ctaDescription="Partner with our infrastructure team to design, install and commission power, telecommunications and gas systems that meet authority standards and long-term performance requirements."
      ctaButtonText="Request Consultation"
      ctaButtonLink="/contact"
      ctaSecondaryText="Our Projects"
      ctaSecondaryLink="/projects"
    />
  )
}
