'use client'

import ServicePage from '../../components/Service'
import {
  ClipboardList,
  Ruler,
  FileSearch,
  CalendarClock,
  Users,
  CheckCircle2,
  ShieldCheck,
  BarChart3,
  Layers,
  Target,
  FileText,
  BadgeCheck,
} from 'lucide-react'

export default function Page() {
  return (
    <ServicePage
      title="Pre-Construction Planning"
      subtitle="Strategic Foundation for Successful Project Delivery"
      description="Our Pre-Construction Planning service establishes the critical foundation for every turnkey project. Through detailed feasibility studies, cost planning, risk assessment, constructability reviews and programme development, we align design intent with commercial reality and operational requirements. This disciplined front-end approach minimises downstream change, protects budgets and sets clear pathways for seamless construction execution."
      badge="Turnkey Contracting"
      label="Pre-Construction Planning"
      heroImage="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1800&q=90"
      heroImageAlt="Pre-construction planning and project strategy meeting"
      imagePosition="right"
      layout="corporate"
      theme="light"
      animationPreset="premium"
      buttonText="Request Consultation"
      buttonLink="/contact"
      secondaryButtonText="Our Projects"
      secondaryButtonLink="/projects"
      highlights={[
        'Feasibility & Concept Development',
        'Cost Planning & Value Engineering',
        'Risk Identification & Mitigation',
        'Constructability Reviews',
        'Programme & Logistics Strategy',
      ]}
      statistics={[
        {
          value: 16,
          suffix: '+',
          label: 'Years of Experience',
          description:
            'Delivering structured pre-construction services across complex multi-discipline projects.',
        },
        {
          value: 120,
          suffix: '+',
          label: 'Projects Planned',
          description:
            'Commercial, industrial, infrastructure and mixed-use developments guided from concept to mobilisation.',
        },
        {
          value: 92,
          suffix: '%',
          label: 'Budget Accuracy',
          description:
            'Achieved through rigorous early-stage cost modelling and continuous value engineering.',
        },
        {
          value: 35,
          suffix: '%',
          label: 'Average Risk Reduction',
          description:
            'Measured reduction in critical risks identified and mitigated during the pre-construction phase.',
        },
      ]}
      benefits={[
        {
          icon: <FileSearch />,
          title: 'Feasibility & Site Analysis',
          description:
            'Comprehensive evaluation of site conditions, regulatory constraints, infrastructure capacity and market drivers to confirm project viability before major investment.',
        },
        {
          icon: <Ruler />,
          title: 'Cost Planning & Benchmarking',
          description:
            'Detailed elemental cost plans, market benchmarking and cash-flow forecasting that give owners clear commercial visibility from the earliest stages.',
        },
        {
          icon: <Layers />,
          title: 'Constructability Reviews',
          description:
            'Multi-disciplinary reviews that test design intent against buildability, logistics, temporary works and sequence, reducing change orders during construction.',
        },
        {
          icon: <Target />,
          title: 'Value Engineering Workshops',
          description:
            'Structured workshops that challenge specifications, materials and systems to optimise performance, cost and programme without compromising quality or intent.',
        },
        {
          icon: <ShieldCheck />,
          title: 'Risk & Opportunity Registers',
          description:
            'Systematic identification, quantification and mitigation planning of technical, commercial, programme and stakeholder risks before works commence.',
        },
        {
          icon: <CalendarClock />,
          title: 'Master Programme Development',
          description:
            'Realistic, logic-linked programmes that integrate design completion, procurement lead times, approvals, logistics and construction sequencing.',
        },
      ]}
      whyChooseUs={[
        {
          number: '01',
          title: 'Construction-Led Insight',
          description:
            'Our planners work alongside delivery teams who understand how designs translate into real site activity, producing more accurate and actionable plans.',
        },
        {
          number: '02',
          title: 'Integrated Commercial Control',
          description:
            'Cost, programme and risk are managed as a single system rather than separate silos, giving owners coherent decision-making data.',
        },
        {
          number: '03',
          title: 'Early Stakeholder Alignment',
          description:
            'We facilitate structured engagement with clients, designers, authorities and key suppliers so expectations and constraints are clarified before commitment.',
        },
        {
          number: '04',
          title: 'Seamless Transition to Construction',
          description:
            'Pre-construction outputs are structured to feed directly into mobilisation, procurement and site setup, eliminating the typical information gap.',
        },
      ]}
      deliverables={[
        {
          icon: <FileText />,
          title: 'Feasibility Report',
          description:
            'Site appraisal, regulatory overview, high-level cost and programme assessment.',
        },
        {
          icon: <BarChart3 />,
          title: 'Cost Plan & Benchmarks',
          description:
            'Elemental cost plan, market comparisons and cash-flow projections.',
        },
        {
          icon: <ClipboardList />,
          title: 'Risk Register',
          description:
            'Prioritised risks with quantified impact and recommended mitigation actions.',
        },
        {
          icon: <Layers />,
          title: 'Constructability Report',
          description:
            'Buildability findings, logistics strategy and temporary works considerations.',
        },
        {
          icon: <CalendarClock />,
          title: 'Master Programme',
          description:
            'Logic-linked programme covering design, approvals, procurement and construction.',
        },
        {
          icon: <BadgeCheck />,
          title: 'Mobilisation Roadmap',
          description:
            'Clear handover package ready for construction team and supply chain engagement.',
        },
      ]}
      serviceHighlights={[
        {
          title: 'Clarity Before Commitment',
          description:
            'The most expensive decisions are made early. Our pre-construction process brings commercial, technical and programme clarity before major contracts are awarded, protecting both capital and programme integrity.',
          image:
            'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=90',
        },
        {
          title: 'Integrated Multi-Disciplinary Planning',
          description:
            'Cost planners, programme specialists, design coordinators and construction managers work as one team. This eliminates the fragmented advice that often leads to conflicting recommendations.',
          image:
            'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1400&q=90',
        },
        {
          title: 'Actionable Outputs, Not Just Reports',
          description:
            'Every deliverable is structured for immediate use by the project team — cost plans ready for tender packages, programmes ready for baseline tracking, and risk registers ready for ongoing governance.',
          image:
            'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=90',
        },
      ]}
      industries={[
        { name: 'Commercial Developments' },
        { name: 'Industrial & Logistics' },
        { name: 'Healthcare Facilities' },
        { name: 'Educational Campuses' },
        { name: 'Mixed-Use Projects' },
        { name: 'Infrastructure Schemes' },
        { name: 'Hospitality & Leisure' },
        { name: 'Data Centre Campuses' },
      ]}
      gallery={[
        {
          src: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=90',
          alt: 'Project planning and coordination meeting',
        },
        {
          src: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=90',
          alt: 'Cost planning and commercial analysis',
        },
        {
          src: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=90',
          alt: 'Strategic project workshop',
        },
      ]}
      ctaTitle="Ready to de-risk your next project?"
      ctaDescription="Engage our pre-construction team early to lock in cost certainty, programme realism and clear risk ownership before construction begins."
      ctaButtonText="Request Consultation"
      ctaButtonLink="/contact"
      ctaSecondaryText="Our Projects"
      ctaSecondaryLink="/projects"
    />
  )
}