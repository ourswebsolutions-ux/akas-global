'use client'

import ServicePage from '../../components/Service'
import {
  PenTool,
  Building2,
  Layers,
  Users,
  CheckCircle2,
  Clock3,
  ShieldCheck,
  Ruler,
  FileCheck,
  Settings,
  Target,
  BadgeCheck,
} from 'lucide-react'

export default function Page() {
  return (
    <ServicePage
      title="Design and Build"
      subtitle="Single-Point Accountability from Concept to Completion"
      description="Our Design and Build service delivers fully integrated project solutions under one accountable contract. By combining design development, engineering coordination, procurement and construction delivery, we eliminate interface risks, accelerate decision-making and maintain clear ownership of cost, quality and programme from the earliest concept through to handover."
      badge="Turnkey Contracting"
      label="Design and Build"
      heroImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=90"
      heroImageAlt="Modern design and build construction project"
      imagePosition="right"
      layout="corporate"
      theme="light"
      animationPreset="premium"
      buttonText="Request Consultation"
      buttonLink="/contact"
      secondaryButtonText="Our Projects"
      secondaryButtonLink="/projects"
      highlights={[
        'Single Contract Accountability',
        'Integrated Design Development',
        'Value-Driven Engineering',
        'Accelerated Project Delivery',
        'Cost & Programme Certainty',
      ]}
      statistics={[
        {
          value: 16,
          suffix: '+',
          label: 'Years of Experience',
          description:
            'Delivering integrated design-and-build solutions across commercial, industrial and institutional projects.',
        },
        {
          value: 85,
          suffix: '+',
          label: 'D&B Projects Completed',
          description:
            'From concept design through construction and final handover under single-point responsibility.',
        },
        {
          value: 28,
          suffix: '%',
          label: 'Average Time Saving',
          description:
            'Achieved through concurrent design and procurement activities compared with traditional sequential models.',
        },
        {
          value: 98,
          suffix: '%',
          label: 'Client Retention',
          description:
            'Clients who return for subsequent design-and-build commissions based on delivery performance.',
        },
      ]}
      benefits={[
        {
          icon: <PenTool />,
          title: 'Integrated Design Development',
          description:
            'In-house and partner design teams work directly with construction managers so buildability, cost and programme inform every design decision from the outset.',
        },
        {
          icon: <Building2 />,
          title: 'Single-Point Responsibility',
          description:
            'One contract, one team and one point of accountability for design quality, construction standards, programme and final performance.',
        },
        {
          icon: <Ruler />,
          title: 'Value Engineering Continuum',
          description:
            'Continuous evaluation of materials, systems and methods throughout design development to protect budget while enhancing long-term performance.',
        },
        {
          icon: <Layers />,
          title: 'Coordinated Multi-Discipline Delivery',
          description:
            'Architectural, structural, MEP and specialist systems are developed and coordinated under unified leadership, reducing clashes and redesign cycles.',
        },
        {
          icon: <Clock3 />,
          title: 'Fast-Track Capability',
          description:
            'Overlapping design, procurement and early works packages compress overall project duration without compromising quality or compliance.',
        },
        {
          icon: <ShieldCheck />,
          title: 'Risk Ownership & Transparency',
          description:
            'Design and construction risks sit with a single entity, providing clearer commercial terms and more predictable outcomes for the client.',
        },
      ]}
      whyChooseUs={[
        {
          number: '01',
          title: 'True Integration, Not Just Coordination',
          description:
            'Design and construction teams share the same commercial objectives and performance metrics, creating genuine alignment rather than contractual interfaces.',
        },
        {
          number: '02',
          title: 'Early Cost Certainty',
          description:
            'Target cost or guaranteed maximum price options are developed with full design input, giving owners confidence before major expenditure begins.',
        },
        {
          number: '03',
          title: 'Streamlined Decision Pathways',
          description:
            'Fewer parties and clearer authority lines accelerate approvals, reduce RFIs and keep the project moving at the required pace.',
        },
        {
          number: '04',
          title: 'Handover-Ready Quality',
          description:
            'Because the same team designs and builds, as-built information, O&M documentation and commissioning records are complete and consistent at practical completion.',
        },
      ]}
      deliverables={[
        {
          icon: <FileCheck />,
          title: 'Concept & Schematic Design',
          description:
            'Aligned with client brief, budget envelope and programme constraints.',
        },
        {
          icon: <PenTool />,
          title: 'Detailed Design Packages',
          description:
            'Fully coordinated architectural, structural and MEP documentation.',
        },
        {
          icon: <Settings />,
          title: 'Procurement & Supply Chain',
          description:
            'Early package definition, tendering and award under D&B control.',
        },
        {
          icon: <Building2 />,
          title: 'Construction Delivery',
          description:
            'Site execution, quality control and programme management to completion.',
        },
        {
          icon: <CheckCircle2 />,
          title: 'Testing & Commissioning',
          description:
            'Systematic verification of all systems prior to handover.',
        },
        {
          icon: <BadgeCheck />,
          title: 'As-Built & Handover',
          description:
            'Complete documentation, training and defect liability support.',
        },
      ]}
      serviceHighlights={[
        {
          title: 'One Team, One Outcome',
          description:
            'Design-and-build removes the traditional split between those who design and those who build. Decisions are made with full visibility of cost, programme and constructability, producing more efficient and predictable results.',
          image:
            'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=90',
        },
        {
          title: 'Accelerated yet Controlled Delivery',
          description:
            'By progressing design packages in parallel with early procurement and enabling works, overall project duration is reduced while maintaining rigorous quality and safety standards.',
          image:
            'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1400&q=90',
        },
        {
          title: 'Commercial Clarity from Day One',
          description:
            'Clients receive transparent cost plans, clear risk allocation and defined performance criteria. Changes are managed within an agreed framework rather than through adversarial claims processes.',
          image:
            'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=90',
        },
      ]}
      industries={[
        { name: 'Commercial Office Developments' },
        { name: 'Industrial & Logistics Facilities' },
        { name: 'Healthcare & Clinical Buildings' },
        { name: 'Educational Institutions' },
        { name: 'Mixed-Use & Residential' },
        { name: 'Hospitality & Leisure' },
        { name: 'Data Centres' },
        { name: 'Public Sector Facilities' },
      ]}
      gallery={[
        {
          src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=90',
          alt: 'Completed design and build commercial project',
        },
        {
          src: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=90',
          alt: 'Construction progress on design-build site',
        },
        {
          src: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=90',
          alt: 'Design coordination and project planning',
        },
      ]}
      ctaTitle="Ready to deliver under single-point accountability?"
      ctaDescription="Partner with our Design and Build team to convert your vision into a completed asset with clear ownership of cost, quality and programme from concept to handover."
      ctaButtonText="Request Consultation"
      ctaButtonLink="/contact"
      ctaSecondaryText="Our Projects"
      ctaSecondaryLink="/projects"
    />
  )
}