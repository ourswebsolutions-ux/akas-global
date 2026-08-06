'use client'

import ServicePage from '../../components/Service'
import {
  Shield,
  Layers,
  ShieldCheck,
  Wrench,
  CheckCircle2,
  Clock3,
  BadgeCheck,
  Settings,
  Target,
  FileText,
  Camera,
  Users,
  KeyRound,
  Building2,
} from 'lucide-react'

export default function Page() {
  return (
    <ServicePage
      title="Security"
      subtitle="Integrated Facility Security for People, Assets and Operations"
      description="Our Security service provides trained personnel, access control, CCTV monitoring and coordinated response procedures that protect people, property and operations. From manned guarding and visitor management to electronic systems and emergency protocols, we deliver a layered security approach tailored to each facility’s risk profile and occupancy needs."
      badge="Facility Management"
      label="Security"
      heroImage="https://images.unsplash.com/photo-1557597774-9c82b82f714e?auto=format&fit=crop&w=1800&q=90"
      heroImageAlt="Facility security systems and monitoring"
      imagePosition="right"
      layout="modern"
      theme="light"
      animationPreset="premium"
      buttonText="Request Consultation"
      buttonLink="/contact"
      secondaryButtonText="Our Projects"
      secondaryButtonLink="/projects"
      highlights={[
        'Manned Guarding & Patrols',
        'Access Control & Visitor Management',
        'CCTV Monitoring',
        'Incident Response Protocols',
        'Integrated Security Systems',
      ]}
      statistics={[
        {
          value: 16,
          suffix: '+',
          label: 'Years of Experience',
          description:
            'Providing security services for commercial, residential and institutional facilities.',
        },
        {
          value: 80,
          suffix: '+',
          label: 'Sites Protected',
          description:
            'Facilities under manned and systems-based security coverage.',
        },
        {
          value: 24,
          suffix: '/7',
          label: 'Monitoring Capability',
          description:
            'Round-the-clock coverage options for critical and high-occupancy sites.',
        },
        {
          value: 99,
          suffix: '%',
          label: 'Incident Logging',
          description:
            'Events recorded and reported according to agreed protocols.',
        },
      ]}
      benefits={[
        {
          icon: <Users />,
          title: 'Manned Guarding',
          description:
            'Trained security personnel for access points, patrols and on-site presence that deter risk and provide immediate human response.',
        },
        {
          icon: <KeyRound />,
          title: 'Access Control',
          description:
            'Card, biometric and visitor systems that manage who enters, when and where — with audit trails for accountability.',
        },
        {
          icon: <Camera />,
          title: 'CCTV & Monitoring',
          description:
            'Camera coverage and monitoring arrangements that support detection, investigation and operational oversight.',
        },
        {
          icon: <Shield />,
          title: 'Incident Response',
          description:
            'Defined procedures for alarms, medical events, fire and security incidents coordinated with building management and emergency services.',
        },
        {
          icon: <ShieldCheck />,
          title: 'Risk-Based Design',
          description:
            'Security measures scaled to the facility’s location, occupancy, asset value and operational profile.',
        },
        {
          icon: <Building2 />,
          title: 'Integration with FM',
          description:
            'Security aligned with hard and soft services for unified site operations and clearer accountability.',
        },
      ]}
      whyChooseUs={[
        {
          number: '01',
          title: 'Layered Protection',
          description:
            'People, procedures and technology combined so no single point of failure leaves the site exposed.',
        },
        {
          number: '02',
          title: 'Professional Personnel',
          description:
            'Screened, trained and supervised teams who understand both security and customer-facing conduct.',
        },
        {
          number: '03',
          title: 'Clear Protocols',
          description:
            'Documented response paths for common and critical incidents so action is consistent and auditable.',
        },
        {
          number: '04',
          title: 'Transparent Reporting',
          description:
            'Incident logs, access reports and performance summaries that keep facility and asset managers informed.',
        },
      ]}
      deliverables={[
        {
          icon: <FileText />,
          title: 'Security Assessment',
          description:
            'Risk review and recommended manning and systems mix.',
        },
        {
          icon: <Settings />,
          title: 'Manned Services',
          description:
            'Guarding, patrols and visitor control as agreed.',
        },
        {
          icon: <CheckCircle2 />,
          title: 'Access & CCTV Support',
          description:
            'Operation and first-line support for electronic systems.',
        },
        {
          icon: <BadgeCheck />,
          title: 'Incident Management',
          description:
            'Response, logging and escalation per site protocols.',
        },
        {
          icon: <Clock3 />,
          title: 'Shift & Coverage Plans',
          description:
            'Rosters matched to peak periods and critical zones.',
        },
        {
          icon: <Target />,
          title: 'Performance Reports',
          description:
            'Regular summaries of incidents, access and service levels.',
        },
      ]}
      serviceHighlights={[
        {
          title: 'Security That Fits the Site',
          description:
            'Effective security is proportionate. We design manning and systems around real risks and occupancy patterns rather than generic templates.',
          image:
            'https://images.unsplash.com/photo-1557597774-9c82b82f714e?auto=format&fit=crop&w=1400&q=90',
        },
        {
          title: 'People and Technology Together',
          description:
            'Guards, access control and CCTV work best as one system. Our approach integrates all three under clear procedures and supervision.',
          image:
            'https://images.unsplash.com/photo-1558002038-1091a466d1a4?auto=format&fit=crop&w=1400&q=90',
        },
        {
          title: 'Calm, Professional Presence',
          description:
            'Security teams represent the facility. We emphasise conduct, appearance and communication so protection also supports a positive occupant experience.',
          image:
            'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=90',
        },
      ]}
      industries={[
        { name: 'Commercial Offices' },
        { name: 'Residential Communities' },
        { name: 'Retail & Mixed-Use' },
        { name: 'Hotels & Hospitality' },
        { name: 'Healthcare Facilities' },
        { name: 'Educational Campuses' },
        { name: 'Industrial & Logistics' },
        { name: 'Government & Civic' },
      ]}
      gallery={[
        {
          src: 'https://images.unsplash.com/photo-1557597774-9c82b82f714e?auto=format&fit=crop&w=1200&q=90',
          alt: 'Facility security monitoring and systems',
        },
        {
          src: 'https://images.unsplash.com/photo-1558002038-1091a466d1a4?auto=format&fit=crop&w=1200&q=90',
          alt: 'Access control and CCTV security',
        },
        {
          src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=90',
          alt: 'Professional facility security presence',
        },
      ]}
      ctaTitle="Ready for integrated facility security?"
      ctaDescription="Partner with our security team for manned guarding, access control, CCTV support and incident protocols that protect people, assets and operations."
      ctaButtonText="Request Consultation"
      ctaButtonLink="/contact"
      ctaSecondaryText="Our Projects"
      ctaSecondaryLink="/projects"
    />
  )
}