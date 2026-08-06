'use client'

import ServicePage from '../../components/Service'
import {
  ClipboardCheck,
  Users,
  BarChart3,
  ShieldCheck,
  Clock3,
  Target,
  FileText,
  Settings,
  CheckCircle2,
  BadgeCheck,
  Layers,
  Activity,
} from 'lucide-react'

export default function Page() {
  return (
    <ServicePage
      title="Project Management"
      subtitle="Disciplined Control Across the Full Project Lifecycle"
      description="Our Project Management service provides independent, end-to-end leadership for complex construction and development projects. From inception through design, procurement, construction and handover, we establish clear governance, control cost and programme, manage risk and align all stakeholders so that projects are delivered on time, within budget and to the required quality standards."
      badge="Turnkey Contracting"
      label="Project Management"
      heroImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1800&q=90"
      heroImageAlt="Professional project management and construction oversight"
      imagePosition="right"
      layout="corporate"
      theme="light"
      animationPreset="premium"
      buttonText="Request Consultation"
      buttonLink="/contact"
      secondaryButtonText="Our Projects"
      secondaryButtonLink="/projects"
      highlights={[
        'End-to-End Project Leadership',
        'Cost, Time & Quality Control',
        'Risk & Change Management',
        'Stakeholder Coordination',
        'Transparent Reporting & Governance',
      ]}
      statistics={[
        {
          value: 16,
          suffix: '+',
          label: 'Years of Experience',
          description:
            'Leading multi-disciplinary projects across commercial, industrial and infrastructure sectors.',
        },
        {
          value: 140,
          suffix: '+',
          label: 'Projects Managed',
          description:
            'Successfully delivered under structured project management frameworks and governance models.',
        },
        {
          value: 96,
          suffix: '%',
          label: 'On-Time Delivery',
          description:
            'Projects completed within agreed programme baselines through proactive control and early intervention.',
        },
        {
          value: 45,
          suffix: '+',
          label: 'Project Managers',
          description:
            'Experienced professionals with proven track records in complex, high-value developments.',
        },
      ]}
      benefits={[
        {
          icon: <ClipboardCheck />,
          title: 'Full Lifecycle Leadership',
          description:
            'Single point of project leadership from brief development and design coordination through procurement, construction and final handover.',
        },
        {
          icon: <BarChart3 />,
          title: 'Cost & Commercial Control',
          description:
            'Robust cost planning, budget tracking, variation management and forecasting that protect the client’s commercial position at every stage.',
        },
        {
          icon: <Clock3 />,
          title: 'Programme Management',
          description:
            'Logic-linked master programmes, progress monitoring, critical-path analysis and recovery planning to maintain delivery certainty.',
        },
        {
          icon: <ShieldCheck />,
          title: 'Risk & Change Governance',
          description:
            'Structured risk registers, change control procedures and contingency management that prevent uncontrolled scope or cost growth.',
        },
        {
          icon: <Users />,
          title: 'Stakeholder Alignment',
          description:
            'Clear communication protocols, regular reporting and facilitated decision forums that keep clients, designers, contractors and authorities aligned.',
        },
        {
          icon: <Activity />,
          title: 'Quality & HSE Oversight',
          description:
            'Independent monitoring of quality systems, inspection regimes and health & safety performance throughout the delivery phase.',
        },
      ]}
      whyChooseUs={[
        {
          number: '01',
          title: 'Independent yet Integrated',
          description:
            'We act solely in the client’s interest while working seamlessly with design and construction teams to drive collaborative outcomes.',
        },
        {
          number: '02',
          title: 'Data-Driven Decision Support',
          description:
            'Real-time dashboards, earned-value tracking and clear exception reporting give owners the visibility needed for timely decisions.',
        },
        {
          number: '03',
          title: 'Proven Governance Frameworks',
          description:
            'Standardised yet adaptable processes for stage-gate reviews, change control and risk management reduce ambiguity and dispute potential.',
        },
        {
          number: '04',
          title: 'Construction-Informed Leadership',
          description:
            'Our project managers bring direct site experience, enabling realistic planning and rapid resolution of technical and commercial issues.',
        },
      ]}
      deliverables={[
        {
          icon: <FileText />,
          title: 'Project Execution Plan',
          description:
            'Governance structure, roles, reporting lines and control procedures.',
        },
        {
          icon: <BarChart3 />,
          title: 'Cost & Commercial Reports',
          description:
            'Monthly cost reports, forecasts and variation registers.',
        },
        {
          icon: <Clock3 />,
          title: 'Master Programme & Updates',
          description:
            'Baseline programme with regular progress and recovery analysis.',
        },
        {
          icon: <ShieldCheck />,
          title: 'Risk & Issue Registers',
          description:
            'Live risk tracking with mitigation status and escalation paths.',
        },
        {
          icon: <CheckCircle2 />,
          title: 'Quality & HSE Audits',
          description:
            'Independent reviews of compliance and performance on site.',
        },
        {
          icon: <BadgeCheck />,
          title: 'Handover Management',
          description:
            'Snagging coordination, documentation and defect liability support.',
        },
      ]}
      serviceHighlights={[
        {
          title: 'Clarity of Accountability',
          description:
            'Effective project management begins with unambiguous ownership. We establish clear roles, decision rights and reporting lines so that every stakeholder knows where responsibility sits and how progress is measured.',
          image:
            'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=90',
        },
        {
          title: 'Proactive Control, Not Reactive Firefighting',
          description:
            'Through early warning indicators, structured risk reviews and disciplined change control, we identify and resolve issues before they impact cost or programme.',
          image:
            'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=90',
        },
        {
          title: 'Transparent Performance Reporting',
          description:
            'Clients receive concise, decision-ready reports covering cost, programme, risk, quality and safety — enabling informed governance without information overload.',
          image:
            'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1400&q=90',
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
        { name: 'Data Centre Developments' },
      ]}
      gallery={[
        {
          src: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=90',
          alt: 'Project management team reviewing plans',
        },
        {
          src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=90',
          alt: 'Collaborative project coordination meeting',
        },
        {
          src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=90',
          alt: 'Project performance tracking and reporting',
        },
      ]}
      ctaTitle="Ready for disciplined project leadership?"
      ctaDescription="Engage our project management team to establish clear control, protect your investment and deliver outcomes that meet time, cost and quality objectives."
      ctaButtonText="Request Consultation"
      ctaButtonLink="/contact"
      ctaSecondaryText="Our Projects"
      ctaSecondaryLink="/projects"
    />
  )
}