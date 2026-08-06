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
  Users,
  BarChart3,
  Key,
  ClipboardList,
} from 'lucide-react'

export default function Page() {
  return (
    <ServicePage
      title="Property Management"
      subtitle="Complete Property Management for Operational Excellence and Asset Value"
      description="Our Property Management service provides end-to-end oversight of residential, commercial and mixed-use properties. From day-to-day operations, tenant relations and maintenance coordination to financial administration, compliance and owner reporting, we deliver a single point of accountability that keeps properties performing, occupied and well maintained in line with owner objectives."
      badge="Facility Management"
      label="Property Management"
      heroImage="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1800&q=90"
      heroImageAlt="Property management and commercial residential assets"
      imagePosition="right"
      layout="modern"
      theme="light"
      animationPreset="premium"
      buttonText="Request Consultation"
      buttonLink="/contact"
      secondaryButtonText="Our Projects"
      secondaryButtonLink="/projects"
      highlights={[
        'Full Operational Oversight',
        'Tenant & Occupant Relations',
        'Maintenance & Vendor Coordination',
        'Financial Administration',
        'Owner Reporting & Compliance',
      ]}
      statistics={[
        {
          value: 16,
          suffix: '+',
          label: 'Years of Experience',
          description:
            'Managing residential, commercial and mixed-use properties end to end.',
        },
        {
          value: 130,
          suffix: '+',
          label: 'Properties Managed',
          description:
            'Assets under active property management programmes.',
        },
        {
          value: 3.6,
          suffix: 'M+',
          label: 'Square Metres Overseen',
          description:
            'Operational area under professional property management.',
        },
        {
          value: 96,
          suffix: '%',
          label: 'Owner Satisfaction',
          description:
            'Clients who rate our management as meeting or exceeding expectations.',
        },
      ]}
      benefits={[
        {
          icon: <Key />,
          title: 'Operational Control',
          description:
            'Day-to-day running of the property — access, common areas, services and incident handling — under clear procedures and supervision.',
        },
        {
          icon: <Users />,
          title: 'Tenant & Occupant Relations',
          description:
            'Responsive communication, service request management and relationship handling that support retention and satisfaction.',
        },
        {
          icon: <Wrench />,
          title: 'Maintenance Coordination',
          description:
            'Planning and oversight of hard and soft services, vendors and works so the property remains in good condition and compliant.',
        },
        {
          icon: <BarChart3 />,
          title: 'Financial Administration',
          description:
            'Service charge, rent collection support, budgeting, expense control and transparent financial reporting to owners.',
        },
        {
          icon: <ClipboardList />,
          title: 'Compliance & Documentation',
          description:
            'Tracking of statutory obligations, insurance, certifications and records required for safe and lawful operation.',
        },
        {
          icon: <Building2 />,
          title: 'Asset-Focused Advice',
          description:
            'Recommendations on improvements, cost optimisation and operational changes that protect and enhance long-term value.',
        },
      ]}
      whyChooseUs={[
        {
          number: '01',
          title: 'Single Point of Accountability',
          description:
            'One team coordinates operations, maintenance, finance and reporting — reducing fragmentation and gaps.',
        },
        {
          number: '02',
          title: 'Owner-Aligned Decisions',
          description:
            'Management priorities and spend recommendations structured around owner return, risk and hold-period goals.',
        },
        {
          number: '03',
          title: 'Integrated Capability',
          description:
            'Access to hard services, soft services and security within the same group for faster resolution and consistent standards.',
        },
        {
          number: '04',
          title: 'Transparent Reporting',
          description:
            'Clear, timely operational and financial reports that give owners full visibility without chasing information.',
        },
      ]}
      deliverables={[
        {
          icon: <FileText />,
          title: 'Management Agreement & Plans',
          description:
            'Agreed scope, service levels and operational strategies.',
        },
        {
          icon: <Settings />,
          title: 'Day-to-Day Operations',
          description:
            'Site oversight, incident handling and service coordination.',
        },
        {
          icon: <CheckCircle2 />,
          title: 'Tenant Management',
          description:
            'Relations, requests and lease-related administration support.',
        },
        {
          icon: <BadgeCheck />,
          title: 'Maintenance Oversight',
          description:
            'Planned and reactive works coordination with vendors.',
        },
        {
          icon: <Clock3 />,
          title: 'Financial Administration',
          description:
            'Budgets, collections support and expense control.',
        },
        {
          icon: <Target />,
          title: 'Owner Reporting',
          description:
            'Periodic operational and financial performance packs.',
        },
      ]}
      serviceHighlights={[
        {
          title: 'Management That Runs Itself — With Oversight',
          description:
            'Effective property management is largely invisible when it works. We put the systems, people and reporting in place so owners can focus on outcomes, not day-to-day firefighting.',
          image:
            'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1400&q=90',
        },
        {
          title: 'One Team Across Operations',
          description:
            'When hard services, soft services, security and administration sit under one property management approach, issues are resolved faster and accountability is clear.',
          image:
            'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=90',
        },
        {
          title: 'Value Protected Over Time',
          description:
            'Consistent maintenance, controlled costs and strong occupant relations support occupancy, reputation and long-term asset performance.',
          image:
            'https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=1400&q=90',
        },
      ]}
      industries={[
        { name: 'Residential Communities' },
        { name: 'Commercial Offices' },
        { name: 'Retail & Mixed-Use' },
        { name: 'Build-to-Rent' },
        { name: 'Industrial & Logistics' },
        { name: 'Hotels & Serviced Assets' },
        { name: 'Institutional Portfolios' },
        { name: 'Private Owner Properties' },
      ]}
      gallery={[
        {
          src: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=90',
          alt: 'Property management of commercial assets',
        },
        {
          src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=90',
          alt: 'Managed commercial and mixed-use properties',
        },
        {
          src: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=1200&q=90',
          alt: 'Residential property management communities',
        },
      ]}
      ctaTitle="Ready for complete property management?"
      ctaDescription="Partner with our property management team for operational oversight, tenant relations, maintenance coordination and transparent reporting that protect asset performance and owner value."
      ctaButtonText="Request Consultation"
      ctaButtonLink="/contact"
      ctaSecondaryText="Our Projects"
      ctaSecondaryLink="/projects"
    />
  )
}