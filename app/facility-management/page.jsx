'use client'

import ServicePage from '../components/Service'
import {
  Building2,
  Wrench,
  ShieldCheck,
  Users,
  CheckCircle2,
  Clock3,
  BadgeCheck,
  Settings,
  Leaf,
  Activity,
  ClipboardCheck,
  Award,
} from 'lucide-react'

export default function Page() {
  return (
    <ServicePage
      title="Facility Management"
      subtitle="Integrated Operations, Maintenance & Asset Performance"
      description="Our Facility Management division provides comprehensive hard and soft services that protect asset value, ensure operational continuity and enhance occupant experience. From planned preventive maintenance and technical operations to cleaning, security, energy management and helpdesk support, we deliver integrated facility solutions that keep buildings performing efficiently, safely and sustainably throughout their lifecycle."
      badge="Integrated Facility Services"
      label="Facility Management"
      heroImage="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1800&q=90"
      heroImageAlt="Professional facility management and building operations"
      imagePosition="right"
      layout="corporate"
      theme="light"
      animationPreset="premium"
      buttonText="Request Consultation"
      buttonLink="/contact"
      secondaryButtonText="Our Projects"
      secondaryButtonLink="/projects"
      highlights={[
        'Hard Services & Technical Maintenance',
        'Soft Services & Occupant Support',
        'Energy & Sustainability Management',
        'Integrated Helpdesk & CAFM',
        'Compliance & Risk Management',
      ]}
      statistics={[
        {
          value: 16,
          suffix: '+',
          label: 'Years of Experience',
          description:
            'Managing complex facilities across commercial, industrial and institutional portfolios.',
        },
        {
          value: 85,
          suffix: '+',
          label: 'Facilities Under Management',
          description:
            'Office towers, campuses, industrial sites and mixed-use developments.',
        },
        {
          value: 99,
          suffix: '%',
          label: 'Service Availability',
          description:
            'Achieved through disciplined preventive maintenance and rapid response.',
        },
        {
          value: 420,
          suffix: '+',
          label: 'FM Professionals',
          description:
            'Technicians, engineers, supervisors and soft-services teams on continuous duty.',
        },
      ]}
      benefits={[
        {
          icon: <Wrench />,
          title: 'Hard Services & Technical Maintenance',
          description:
            'Planned preventive and corrective maintenance of MEP systems, elevators, fire protection, structural elements and building fabric to maximise uptime and extend asset life.',
        },
        {
          icon: <Users />,
          title: 'Soft Services & Occupant Experience',
          description:
            'Professional cleaning, waste management, landscaping, pest control, reception and concierge services that maintain a high-quality environment for occupants and visitors.',
        },
        {
          icon: <Leaf />,
          title: 'Energy & Sustainability Management',
          description:
            'Energy monitoring, optimisation programmes, utility management and sustainability initiatives that reduce operating costs and support environmental performance targets.',
        },
        {
          icon: <Activity />,
          title: 'Integrated Helpdesk & CAFM',
          description:
            'Centralised helpdesk, computer-aided facility management platforms and mobile work-order systems that provide transparency, rapid response and measurable service levels.',
        },
        {
          icon: <ShieldCheck />,
          title: 'Compliance & Risk Management',
          description:
            'Statutory inspections, health and safety compliance, fire-safety management and risk assessments that protect people, assets and organisational reputation.',
        },
        {
          icon: <Settings />,
          title: 'Lifecycle & Asset Planning',
          description:
            'Condition surveys, capital planning support and lifecycle strategies that help owners make informed decisions about maintenance, upgrades and long-term investment.',
        },
      ]}
      whyChooseUs={[
        {
          number: '01',
          title: 'Construction-Informed FM',
          description:
            'Our facility teams understand how buildings were designed and built, enabling more effective maintenance strategies and faster resolution of technical issues.',
        },
        {
          number: '02',
          title: 'Integrated Hard & Soft Services',
          description:
            'One accountable provider for technical operations and occupant services, eliminating coordination gaps and improving overall service consistency.',
        },
        {
          number: '03',
          title: 'Data-Driven Performance',
          description:
            'CAFM systems, KPI dashboards and regular reporting give clients full visibility of service delivery, costs and asset condition.',
        },
        {
          number: '04',
          title: 'Proactive Risk & Compliance Focus',
          description:
            'We prioritise statutory compliance, safety and preventive action so facilities remain safe, legal and operationally resilient.',
        },
      ]}
      deliverables={[
        {
          icon: <CheckCircle2 />,
          title: 'Service Mobilisation',
          description:
            'Site surveys, mobilisation plans, staffing and transition management.',
        },
        {
          icon: <ClipboardCheck />,
          title: 'Planned Maintenance',
          description:
            'PPM schedules, technical inspections and compliance programmes.',
        },
        {
          icon: <Wrench />,
          title: 'Reactive & Corrective Works',
          description:
            'Helpdesk response, fault rectification and emergency support.',
        },
        {
          icon: <BadgeCheck />,
          title: 'Quality & Auditing',
          description:
            'Service audits, KPI tracking and continuous improvement reviews.',
        },
        {
          icon: <Clock3 />,
          title: 'Reporting & Governance',
          description:
            'Monthly performance reports, cost transparency and client reviews.',
        },
        {
          icon: <Users />,
          title: 'Occupant Support',
          description:
            'Helpdesk, soft services and day-to-day facility coordination.',
        },
      ]}
      serviceHighlights={[
        {
          title: 'Proactive Technical Operations',
          description:
            'Effective facility management begins with disciplined preventive maintenance. Our technical teams plan, execute and document every critical system check to minimise downtime and protect asset value.',
          image:
            'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=90',
        },
        {
          title: 'Integrated Service Delivery',
          description:
            'Hard and soft services operate under one management system and shared helpdesk, ensuring coordinated response, consistent standards and a seamless experience for building occupants.',
          image:
            'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1400&q=90',
        },
        {
          title: 'Measurable Performance & Insight',
          description:
            'Through CAFM platforms, KPI reporting and regular client reviews, we provide clear visibility of service levels, costs and asset condition so owners can make informed decisions.',
          image:
            'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=90',
        },
      ]}
      industries={[
        { name: 'Commercial Office Towers' },
        { name: 'Corporate Campuses' },
        { name: 'Industrial Facilities' },
        { name: 'Healthcare Buildings' },
        { name: 'Educational Institutions' },
        { name: 'Mixed-Use Developments' },
        { name: 'Retail & Lifestyle Centres' },
        { name: 'Data Centres' },
      ]}
      gallery={[
        {
          src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=90',
          alt: 'Professional facility management operations',
        },
        {
          src: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1200&q=90',
          alt: 'Technical maintenance and building systems',
        },
        {
          src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=90',
          alt: 'Modern commercial facility under management',
        },
      ]}
      ctaTitle="Ready to optimise your facility operations?"
      ctaDescription="Our facility management team is prepared to deliver reliable, efficient and fully integrated services that protect your assets and support your occupants."
      ctaButtonText="Request Consultation"
      ctaButtonLink="/contact"
      ctaSecondaryText="Our Projects"
      ctaSecondaryLink="/projects"
    />
  )
}