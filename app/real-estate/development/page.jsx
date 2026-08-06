'use client'

import ServicePage from '../../components/Service'
import {
  Building2,
  Layers,
  ShieldCheck,
  Wrench,
  CheckCircle2,
  Clock3,
  BadgeCheck,
  Settings,
  Target,
  FileText,
  Map,
  Ruler,
  Users,
} from 'lucide-react'

export default function Page() {
  return (
    <ServicePage
      title="Development"
      subtitle="End-to-End Real Estate Development from Concept to Delivery"
      description="Our Real Estate Development service takes projects from land and concept through planning, design coordination, construction and handover. We manage residential, commercial and mixed-use developments with a focus on market fit, programme control, quality and long-term asset value — delivering complete projects that meet investor, end-user and regulatory expectations."
      badge="Real Estate"
      label="Development"
      heroImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=90"
      heroImageAlt="Real estate development and construction project"
      imagePosition="right"
      layout="modern"
      theme="light"
      animationPreset="premium"
      buttonText="Request Consultation"
      buttonLink="/contact"
      secondaryButtonText="Our Projects"
      secondaryButtonLink="/projects"
      highlights={[
        'Land & Concept Development',
        'Planning & Approvals',
        'Design & Construction Management',
        'Residential & Commercial Projects',
        'Mixed-Use Delivery',
      ]}
      statistics={[
        {
          value: 16,
          suffix: '+',
          label: 'Years of Experience',
          description:
            'Developing residential, commercial and mixed-use real estate projects.',
        },
        {
          value: 45,
          suffix: '+',
          label: 'Developments Delivered',
          description:
            'Completed projects from concept through construction and handover.',
        },
        {
          value: 2.1,
          suffix: 'M+',
          label: 'Square Metres Developed',
          description:
            'Built area delivered across residential, office and mixed-use schemes.',
        },
        {
          value: 94,
          suffix: '%',
          label: 'On-Programme Delivery',
          description:
            'Projects completed within agreed milestones through disciplined control.',
        },
      ]}
      benefits={[
        {
          icon: <Map />,
          title: 'Land & Concept',
          description:
            'Site evaluation, highest-and-best-use analysis and concept development aligned with market demand and planning parameters.',
        },
        {
          icon: <FileText />,
          title: 'Planning & Approvals',
          description:
            'Coordination of planning applications, authority submissions and statutory approvals to secure a buildable consent.',
        },
        {
          icon: <Ruler />,
          title: 'Design Management',
          description:
            'Leadership of architects, engineers and specialists to produce coordinated designs that balance quality, cost and buildability.',
        },
        {
          icon: <Building2 />,
          title: 'Construction Delivery',
          description:
            'Project and construction management that controls programme, cost, quality and safety through to practical completion.',
        },
        {
          icon: <Users />,
          title: 'Stakeholder Coordination',
          description:
            'Clear communication with investors, authorities, consultants and contractors to keep decisions timely and aligned.',
        },
        {
          icon: <ShieldCheck />,
          title: 'Quality & Handover',
          description:
            'Inspection regimes, snagging and formal handover packages that leave assets ready for occupation or stabilisation.',
        },
      ]}
      whyChooseUs={[
        {
          number: '01',
          title: 'Full-Cycle Capability',
          description:
            'One accountable team from concept and approvals through construction and handover reduces interface risk.',
        },
        {
          number: '02',
          title: 'Market-Informed Design',
          description:
            'Product and specification decisions guided by end-user demand and long-term asset performance, not design in isolation.',
        },
        {
          number: '03',
          title: 'Programme & Cost Discipline',
          description:
            'Realistic programmes, early risk identification and controlled change management protect delivery certainty.',
        },
        {
          number: '04',
          title: 'Integrated Group Strength',
          description:
            'Access to contracting, MEP, fitout and facility capabilities supports smoother execution and consistent quality.',
        },
      ]}
      deliverables={[
        {
          icon: <FileText />,
          title: 'Feasibility & Concept',
          description:
            'Site studies, concept options and investment cases.',
        },
        {
          icon: <Settings />,
          title: 'Planning & Approvals',
          description:
            'Submissions, authority coordination and consent management.',
        },
        {
          icon: <CheckCircle2 />,
          title: 'Design Coordination',
          description:
            'Managed design team and coordinated technical packages.',
        },
        {
          icon: <BadgeCheck />,
          title: 'Construction Management',
          description:
            'Programme, cost, quality and safety control on site.',
        },
        {
          icon: <Clock3 />,
          title: 'Progress Reporting',
          description:
            'Transparent updates for investors and stakeholders.',
        },
        {
          icon: <Target />,
          title: 'Handover & Close-Out',
          description:
            'Snagging, documentation and formal project completion.',
        },
      ]}
      serviceHighlights={[
        {
          title: 'From Vision to Standing Asset',
          description:
            'Development success depends on connecting market insight, planning reality and construction delivery. We manage the full path so concepts become completed projects.',
          image:
            'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=90',
        },
        {
          title: 'Control Without Surprises',
          description:
            'Clear programmes, early risk visibility and disciplined change control keep projects on track for investors and end users alike.',
          image:
            'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1400&q=90',
        },
        {
          title: 'Quality That Holds Value',
          description:
            'Specification and workmanship decisions are made with long-term asset performance in mind — supporting both occupation and future exit or refinance.',
          image:
            'https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=1400&q=90',
        },
      ]}
      industries={[
        { name: 'Residential Communities' },
        { name: 'Commercial Offices' },
        { name: 'Mixed-Use Developments' },
        { name: 'Retail & Lifestyle' },
        { name: 'Hospitality Projects' },
        { name: 'Industrial & Logistics' },
        { name: 'Build-to-Rent' },
        { name: 'Institutional Campuses' },
      ]}
      gallery={[
        {
          src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=90',
          alt: 'Real estate development project skyline',
        },
        {
          src: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=90',
          alt: 'Construction and development site progress',
        },
        {
          src: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=1200&q=90',
          alt: 'Completed residential and commercial development',
        },
      ]}
      ctaTitle="Ready to develop your next real estate project?"
      ctaDescription="Partner with our development team for concept-to-handover delivery that balances market fit, programme certainty, quality and long-term asset value."
      ctaButtonText="Request Consultation"
      ctaButtonLink="/contact"
      ctaSecondaryText="Our Projects"
      ctaSecondaryLink="/projects"
    />
  )
}