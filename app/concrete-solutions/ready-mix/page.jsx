'use client'

import ServicePage from '../../components/Service'
import {
  Concrete,
  Truck,
  Layers,
  ShieldCheck,
  Wrench,
  CheckCircle2,
  Clock3,
  BadgeCheck,
  Settings,
  Target,
  FileText,
  Gauge,
  Building2,
} from 'lucide-react'

export default function Page() {
  return (
    <ServicePage
      title="Ready Mix"
      subtitle="High-Performance Ready-Mix Concrete Delivered to Specification"
      description="Our Ready Mix service supplies quality-controlled concrete for structural, infrastructure and architectural applications. From mix design and batching to timed delivery and on-site support, we provide consistent, workable concrete that meets strength, durability and placement requirements across commercial, residential and civil projects."
      badge="Concrete Solutions"
      label="Ready Mix"
      heroImage="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1800&q=90"
      heroImageAlt="Ready-mix concrete batching and delivery"
      imagePosition="right"
      layout="modern"
      theme="light"
      animationPreset="premium"
      buttonText="Request Consultation"
      buttonLink="/contact"
      secondaryButtonText="Our Projects"
      secondaryButtonLink="/projects"
      highlights={[
        'Custom Mix Designs',
        'Structural & Architectural Grades',
        'Timed Site Delivery',
        'Quality Control & Testing',
        'On-Site Technical Support',
      ]}
      statistics={[
        {
          value: 16,
          suffix: '+',
          label: 'Years of Experience',
          description:
            'Supplying ready-mix concrete for buildings, infrastructure and specialised applications.',
        },
        {
          value: 2.8,
          suffix: 'M+',
          label: 'Cubic Metres Supplied',
          description:
            'High-quality concrete delivered to commercial, residential and civil projects.',
        },
        {
          value: 450,
          suffix: '+',
          label: 'Projects Supported',
          description:
            'Consistent supply across towers, roads, industrial and mixed-use developments.',
        },
        {
          value: 99,
          suffix: '%',
          label: 'Specification Compliance',
          description:
            'Mixes tested and verified to meet strength, workability and durability criteria.',
        },
      ]}
      benefits={[
        {
          icon: <Gauge />,
          title: 'Custom Mix Design',
          description:
            'Mixes engineered for required strength, slump, durability and placement method, including high-performance and specialised formulations.',
        },
        {
          icon: <Truck />,
          title: 'Reliable Timed Delivery',
          description:
            'Scheduled batching and fleet coordination that keep concrete arriving when pours are ready, minimising wait time and waste.',
        },
        {
          icon: <Layers />,
          title: 'Consistent Quality',
          description:
            'Controlled batching, material tracking and laboratory testing that deliver uniform results across large and multi-pour programmes.',
        },
        {
          icon: <ShieldCheck />,
          title: 'Durability & Performance',
          description:
            'Mixes designed for exposure conditions, chemical resistance and long-term structural performance where required.',
        },
        {
          icon: <Wrench />,
          title: 'On-Site Support',
          description:
            'Technical advice during placement, adjustment guidance and coordination with formwork and reinforcement teams.',
        },
        {
          icon: <Building2 />,
          title: 'Broad Application Range',
          description:
            'Structural frames, slabs, foundations, infrastructure and architectural concrete supplied to project specifications.',
        },
      ]}
      whyChooseUs={[
        {
          number: '01',
          title: 'Specification-Led Supply',
          description:
            'Every mix is designed and verified against project requirements rather than generic grades alone.',
        },
        {
          number: '02',
          title: 'Programme Reliability',
          description:
            'Delivery schedules aligned with pour plans, crane availability and site access constraints.',
        },
        {
          number: '03',
          title: 'Transparent Quality Records',
          description:
            'Batch tickets, test results and traceability documentation available for project QA and handover.',
        },
        {
          number: '04',
          title: 'Responsive Technical Backup',
          description:
            'Experienced support when site conditions change or placement challenges arise.',
        },
      ]}
      deliverables={[
        {
          icon: <FileText />,
          title: 'Mix Design & Approvals',
          description:
            'Proposed mixes, trial data and formal submissions.',
        },
        {
          icon: <Settings />,
          title: 'Batching & Production',
          description:
            'Controlled production to approved mix designs.',
        },
        {
          icon: <Truck />,
          title: 'Timed Delivery',
          description:
            'Scheduled truck movements matched to pour windows.',
        },
        {
          icon: <CheckCircle2 />,
          title: 'Quality Testing',
          description:
            'Slump, strength and durability verification as required.',
        },
        {
          icon: <Clock3 />,
          title: 'Placement Support',
          description:
            'On-site coordination and technical guidance.',
        },
        {
          icon: <Target />,
          title: 'Documentation Pack',
          description:
            'Delivery records, certificates and test reports.',
        },
      ]}
      serviceHighlights={[
        {
          title: 'Concrete When and Where You Need It',
          description:
            'Ready-mix success depends on timing as much as strength. We coordinate production and logistics so concrete arrives workable and ready for placement.',
          image:
            'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=90',
        },
        {
          title: 'Quality You Can Verify',
          description:
            'From material control through laboratory testing, our processes give project teams the confidence that each load meets the approved specification.',
          image:
            'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1400&q=90',
        },
        {
          title: 'Support Beyond the Truck',
          description:
            'Technical advice during planning and placement helps avoid common issues with workability, finishing and early-age performance.',
          image:
            'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=90',
        },
      ]}
      industries={[
        { name: 'High-Rise & Commercial' },
        { name: 'Residential Developments' },
        { name: 'Infrastructure & Roads' },
        { name: 'Industrial Facilities' },
        { name: 'Hotels & Hospitality' },
        { name: 'Healthcare Projects' },
        { name: 'Educational Campuses' },
        { name: 'Mixed-Use Developments' },
      ]}
      gallery={[
        {
          src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=90',
          alt: 'Ready-mix concrete production and delivery',
        },
        {
          src: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=90',
          alt: 'Concrete placement on construction site',
        },
        {
          src: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=90',
          alt: 'Structural concrete works in progress',
        },
      ]}
      ctaTitle="Ready for reliable ready-mix supply?"
      ctaDescription="Partner with our concrete team for mix design, quality-controlled production and timed delivery that keeps your pours on programme and on specification."
      ctaButtonText="Request Consultation"
      ctaButtonLink="/contact"
      ctaSecondaryText="Our Projects"
      ctaSecondaryLink="/projects"
    />
  )
}