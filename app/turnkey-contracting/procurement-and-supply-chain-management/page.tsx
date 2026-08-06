'use client'

import ServicePage from '../../components/Service'
import {
  ShoppingCart,
  Package,
  FileSearch,
  ShieldCheck,
  BarChart3,
  Users,
  CheckCircle2,
  Clock3,
  BadgeCheck,
  Layers,
  Target,
  FileText,
} from 'lucide-react'

export default function Page() {
  return (
    <ServicePage
      title="Procurement"
      subtitle="Strategic Sourcing & Supply Chain Excellence"
      description="Our Procurement service delivers structured, transparent and value-driven sourcing for construction and development projects. From package strategy and tender management through evaluation, negotiation and contract award, we secure the right suppliers, materials and subcontractors at competitive terms while protecting programme, quality and risk exposure throughout the supply chain."
      badge="Turnkey Contracting"
      label="Procurement"
      heroImage="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1800&q=90"
      heroImageAlt="Construction procurement and supply chain management"
      imagePosition="right"
      layout="corporate"
      theme="light"
      animationPreset="premium"
      buttonText="Request Consultation"
      buttonLink="/contact"
      secondaryButtonText="Our Projects"
      secondaryButtonLink="/projects"
      highlights={[
        'Package Strategy & Market Engagement',
        'Competitive Tender Management',
        'Supplier Evaluation & Due Diligence',
        'Contract Negotiation & Award',
        'Supply Chain Risk Management',
      ]}
      statistics={[
        {
          value: 16,
          suffix: '+',
          label: 'Years of Experience',
          description:
            'Managing procurement for complex multi-package construction and infrastructure projects.',
        },
        {
          value: 320,
          suffix: '+',
          label: 'Packages Awarded',
          description:
            'Successfully tendered and placed across structural, architectural, MEP and specialist works.',
        },
        {
          value: 18,
          suffix: '%',
          label: 'Average Cost Saving',
          description:
            'Achieved through competitive tendering, value engineering and strategic negotiation.',
        },
        {
          value: 95,
          suffix: '%',
          label: 'On-Time Package Award',
          description:
            'Procurement milestones met to support overall project programme integrity.',
        },
      ]}
      benefits={[
        {
          icon: <FileSearch />,
          title: 'Package Strategy Development',
          description:
            'Logical packaging of works aligned with design maturity, market capacity, programme logic and risk allocation to maximise competition and control.',
        },
        {
          icon: <ShoppingCart />,
          title: 'Competitive Tender Management',
          description:
            'Structured tender processes including prequalification, invitation, query management and compliant bid evaluation against clear commercial and technical criteria.',
        },
        {
          icon: <Users />,
          title: 'Supplier Due Diligence',
          description:
            'Financial, technical and HSE capability assessments that confirm suppliers can deliver the required quality, capacity and programme performance.',
        },
        {
          icon: <Target />,
          title: 'Negotiation & Value Capture',
          description:
            'Commercial negotiations focused on price, terms, programme commitments and risk transfer to secure optimum value without compromising quality.',
        },
        {
          icon: <ShieldCheck />,
          title: 'Contract Formation & Risk Allocation',
          description:
            'Clear, balanced contract documents that define scope, responsibilities, payment mechanisms and dispute pathways with appropriate risk ownership.',
        },
        {
          icon: <Layers />,
          title: 'Supply Chain Oversight',
          description:
            'Ongoing monitoring of key suppliers, material lead times and subcontractor performance to protect programme and quality during delivery.',
        },
      ]}
      whyChooseUs={[
        {
          number: '01',
          title: 'Market Intelligence',
          description:
            'Deep knowledge of local and regional supply markets enables realistic pricing, informed package strategy and early identification of capacity constraints.',
        },
        {
          number: '02',
          title: 'Transparent Process',
          description:
            'Documented evaluation criteria, audit trails and clear recommendation reports give clients full visibility and confidence in every award decision.',
        },
        {
          number: '03',
          title: 'Programme-Led Procurement',
          description:
            'Tender and award sequences are driven by the master programme, ensuring long-lead items and critical packages are secured in time to protect the critical path.',
        },
        {
          number: '04',
          title: 'Integrated with Delivery',
          description:
            'Procurement teams work alongside project managers and construction teams so commercial decisions remain aligned with buildability and site realities.',
        },
      ]}
      deliverables={[
        {
          icon: <FileText />,
          title: 'Procurement Strategy',
          description:
            'Package plan, market approach and tender programme aligned to project needs.',
        },
        {
          icon: <Package />,
          title: 'Prequalification Reports',
          description:
            'Capability, financial and HSE assessments of potential suppliers.',
        },
        {
          icon: <BarChart3 />,
          title: 'Tender Evaluation',
          description:
            'Scored technical and commercial comparisons with clear recommendations.',
        },
        {
          icon: <CheckCircle2 />,
          title: 'Award Recommendations',
          description:
            'Formal reports supporting client decision and contract placement.',
        },
        {
          icon: <BadgeCheck />,
          title: 'Contract Documentation',
          description:
            'Agreed forms of contract, schedules and supporting commercial papers.',
        },
        {
          icon: <Clock3 />,
          title: 'Supply Chain Tracking',
          description:
            'Lead-time monitoring and performance reporting for critical packages.',
        },
      ]}
      serviceHighlights={[
        {
          title: 'Right Package, Right Supplier',
          description:
            'Effective procurement starts with intelligent packaging. We structure work packages to attract the strongest market response while retaining appropriate control and risk allocation for the client.',
          image:
            'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=90',
        },
        {
          title: 'Competition with Clarity',
          description:
            'Transparent tender processes and objective evaluation criteria produce competitive pricing while ensuring selected suppliers have the technical capability and capacity to perform.',
          image:
            'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=90',
        },
        {
          title: 'Protecting the Critical Path',
          description:
            'Long-lead materials and key subcontract packages are identified early and progressed on accelerated tracks so that procurement never becomes the constraint on overall programme.',
          image:
            'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=90',
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
        { name: 'Data Centre Projects' },
      ]}
      gallery={[
        {
          src: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=90',
          alt: 'Warehouse and supply chain operations',
        },
        {
          src: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=90',
          alt: 'Procurement negotiation and contract review',
        },
        {
          src: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=90',
          alt: 'Tender evaluation and commercial analysis',
        },
      ]}
      ctaTitle="Ready to optimise your project supply chain?"
      ctaDescription="Engage our procurement specialists to structure competitive packages, secure the right partners and protect both cost and programme from the earliest stages."
      ctaButtonText="Request Consultation"
      ctaButtonLink="/contact"
      ctaSecondaryText="Our Projects"
      ctaSecondaryLink="/projects"
    />
  )
}