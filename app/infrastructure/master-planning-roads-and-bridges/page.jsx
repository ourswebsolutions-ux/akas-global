'use client'

import ServicePage from '../../components/Service'
import {
  Route,
  Badge,
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
      title="Roads & Bridges"
      subtitle="Durable Transport Infrastructure Built for Performance"
      description="Our Roads & Bridges service delivers complete design, construction and rehabilitation of highways, urban roads, interchanges and bridge structures. From earthworks and pavement layers to structural concrete, expansion joints and safety systems, we provide resilient transport infrastructure that meets design life requirements, traffic demands and stringent quality standards."
      badge="Infrastructure"
      label="Roads & Bridges"
      heroImage="https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=1800&q=90"
      heroImageAlt="Modern highway and bridge infrastructure"
      imagePosition="right"
      layout="premium"
      theme="light"
      animationPreset="premium"
      buttonText="Request Consultation"
      buttonLink="/contact"
      secondaryButtonText="Our Projects"
      secondaryButtonLink="/projects"
      highlights={[
        'Highway & Urban Road Construction',
        'Bridge & Structural Works',
        'Pavement Design & Layers',
        'Interchanges & Junctions',
        'Safety & Traffic Systems',
      ]}
      statistics={[
        {
          value: 16,
          suffix: '+',
          label: 'Years of Experience',
          description:
            'Delivering roads, bridges and transport infrastructure across major developments and public projects.',
        },
        {
          value: 65,
          suffix: '+',
          label: 'Road & Bridge Projects',
          description:
            'Completed highway sections, urban roads, interchanges and structural crossings.',
        },
        {
          value: 420,
          suffix: '+',
          label: 'Kilometres of Roadway',
          description:
            'Constructed and rehabilitated under rigorous quality and testing regimes.',
        },
        {
          value: 98,
          suffix: '%',
          label: 'On-Time Delivery',
          description:
            'Projects completed within agreed programme through disciplined planning and execution.',
        },
      ]}
      benefits={[
        {
          icon: <Route />,
          title: 'Highway & Road Construction',
          description:
            'Full-scope construction of dual carriageways, arterial roads, collector streets and internal development roads to approved geometric and pavement standards.',
        },
        {
          icon: <Badge />,
          title: 'Bridge & Structural Works',
          description:
            'Design and construction of reinforced concrete and composite bridges, culverts, underpasses and overpasses engineered for load capacity and durability.',
        },
        {
          icon: <Layers />,
          title: 'Pavement Engineering',
          description:
            'Flexible and rigid pavement systems including sub-base, base course, asphalt layers and concrete pavements designed for traffic loading and climate conditions.',
        },
        {
          icon: <Settings />,
          title: 'Interchanges & Junctions',
          description:
            'Grade-separated interchanges, roundabouts and signalised junctions that optimise traffic flow, safety and long-term operational performance.',
        },
        {
          icon: <ShieldCheck />,
          title: 'Safety & Roadside Systems',
          description:
            'Guardrails, crash barriers, signage, road markings, lighting and pedestrian facilities installed to international and local safety standards.',
        },
        {
          icon: <Activity />,
          title: 'Rehabilitation & Upgrading',
          description:
            'Structural assessment, pavement rehabilitation, widening and strengthening works that extend service life and improve capacity of existing assets.',
        },
      ]}
      whyChooseUs={[
        {
          number: '01',
          title: 'Integrated Civil & Structural Capability',
          description:
            'Roads, bridges and associated earthworks are delivered under unified leadership, ensuring seamless coordination between pavement, structural and drainage packages.',
        },
        {
          number: '02',
          title: 'Quality-Driven Construction',
          description:
            'Material testing, layer control, compaction verification and as-built surveying form part of every project, protecting design life and performance.',
        },
        {
          number: '03',
          title: 'Programme Certainty',
          description:
            'Detailed method statements, resource planning and weather contingency measures keep major road and bridge packages on track.',
        },
        {
          number: '04',
          title: 'Authority & Stakeholder Alignment',
          description:
            'Close coordination with transport authorities, municipalities and utility providers streamlines approvals, inspections and traffic management.',
        },
      ]}
      deliverables={[
        {
          icon: <FileText />,
          title: 'Design & Shop Drawings',
          description:
            'Geometric design, pavement structures and bridge detailing packages.',
        },
        {
          icon: <Wrench />,
          title: 'Earthworks & Pavement',
          description:
            'Formation, sub-base, base and surfacing layers to specification.',
        },
        {
          icon: <CheckCircle2 />,
          title: 'Structural Construction',
          description:
            'Bridge decks, abutments, piers and associated concrete works.',
        },
        {
          icon: <BadgeCheck />,
          title: 'Testing & Quality Control',
          description:
            'Material testing, compaction records and structural inspections.',
        },
        {
          icon: <Clock3 />,
          title: 'Traffic Management',
          description:
            'Temporary works, diversions and safety measures during construction.',
        },
        {
          icon: <Target />,
          title: 'As-Built & Handover',
          description:
            'Survey records, O&M manuals and final authority documentation.',
        },
      ]}
      serviceHighlights={[
        {
          title: 'Infrastructure That Endures',
          description:
            'Roads and bridges are long-life assets. We focus on correct pavement design, durable materials and precise construction so that infrastructure performs reliably under traffic and environmental loads for decades.',
          image:
            'https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=1400&q=90',
        },
        {
          title: 'Precision from Formation to Finish',
          description:
            'Every layer — from subgrade preparation through base courses to final surfacing — is controlled, tested and documented. Structural elements receive the same disciplined attention to detail.',
          image:
            'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=90',
        },
        {
          title: 'Safe, Efficient Delivery',
          description:
            'Comprehensive traffic management, temporary works design and safety systems protect both the workforce and the travelling public throughout the construction period.',
          image:
            'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1400&q=90',
        },
      ]}
      industries={[
        { name: 'Highway Authorities' },
        { name: 'Municipal Road Networks' },
        { name: 'Mixed-Use Developments' },
        { name: 'Industrial Parks' },
        { name: 'Logistics Corridors' },
        { name: 'Residential Communities' },
        { name: 'Airport & Port Access' },
        { name: 'Public Infrastructure' },
      ]}
      gallery={[
        {
          src: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=1200&q=90',
          alt: 'Highway and bridge infrastructure',
        },
        {
          src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=90',
          alt: 'Road construction and pavement works',
        },
        {
          src: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=90',
          alt: 'Civil infrastructure construction',
        },
      ]}
      ctaTitle="Ready to deliver lasting transport infrastructure?"
      ctaDescription="Partner with our roads and bridges team to design and construct durable, high-performance roadways and structures that meet traffic demands and design life requirements."
      ctaButtonText="Request Consultation"
      ctaButtonLink="/contact"
      ctaSecondaryText="Our Projects"
      ctaSecondaryLink="/projects"
    />
  )
}