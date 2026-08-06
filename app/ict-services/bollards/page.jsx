'use client'

import ServicePage from '../../components/Service'
import {
  Cylinder,
  Shield,
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
      title="Bollards"
      subtitle="Flexible & Fixed Vehicle Control Solutions"
      description="Our Bollards service supplies and installs automatic, semi-automatic and fixed bollard systems that provide effective vehicle control while preserving pedestrian access and visual openness. From shallow-foundation retractable bollards to high-security crash-rated models, we deliver reliable solutions for perimeter protection, traffic management and architectural vehicle denial across commercial, residential and critical sites."
      badge="ICT Services"
      label="Bollards"
      heroImage="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1800&q=90"
      heroImageAlt="Security bollards and vehicle control systems"
      imagePosition="right"
      layout="signature"
      theme="light"
      animationPreset="premium"
      buttonText="Request Consultation"
      buttonLink="/contact"
      secondaryButtonText="Our Projects"
      secondaryButtonLink="/projects"
      highlights={[
        'Automatic Retractable Bollards',
        'Fixed & Removable Bollards',
        'Crash-Rated Security Bollards',
        'Access Control Integration',
        'Architectural & Landscape Finishes',
      ]}
      statistics={[
        {
          value: 16,
          suffix: '+',
          label: 'Years of Experience',
          description:
            'Delivering bollard systems for commercial, residential, public and high-security environments.',
        },
        {
          value: 95,
          suffix: '+',
          label: 'Bollard Projects',
          description:
            'Completed automatic, fixed and crash-rated bollard installations across diverse sites.',
        },
        {
          value: 3200,
          suffix: '+',
          label: 'Bollards Installed',
          description:
            'Retractable, fixed and security bollards commissioned and integrated with access systems.',
        },
        {
          value: 99,
          suffix: '%',
          label: 'Operational Reliability',
          description:
            'Achieved through quality products, correct foundation design and structured maintenance.',
        },
      ]}
      benefits={[
        {
          icon: <Cylinder />,
          title: 'Automatic Retractable Bollards',
          description:
            'Hydraulic and electromechanical retractable bollards that rise and lower on demand for controlled vehicle access while remaining flush when not in use.',
        },
        {
          icon: <Shield />,
          title: 'Crash-Rated Security Bollards',
          description:
            'High-security bollards tested and certified to stop hostile vehicle threats, available in both fixed and automatic configurations for critical perimeters.',
        },
        {
          icon: <Layers />,
          title: 'Fixed & Removable Bollards',
          description:
            'Permanent and socketed removable bollards that define vehicle-free zones, protect facades and allow occasional authorised access when required.',
        },
        {
          icon: <Settings />,
          title: 'Access Control Integration',
          description:
            'Seamless connection to card readers, ANPR, intercoms and security platforms so that bollard operation forms part of a unified entry process.',
        },
        {
          icon: <ShieldCheck />,
          title: 'Safety & Detection Systems',
          description:
            'Induction loops, photocells and safety edges that prevent accidental operation and protect vehicles and pedestrians during movement.',
        },
        {
          icon: <Activity />,
          title: 'Architectural Finishes',
          description:
            'Stainless steel, powder-coated and custom finishes that allow bollards to complement landscape and architectural design language.',
        },
      ]}
      whyChooseUs={[
        {
          number: '01',
          title: 'Right Bollard for the Risk',
          description:
            'Specification ranges from simple traffic management to certified crash ratings, ensuring the solution matches the actual threat and operational need.',
        },
        {
          number: '02',
          title: 'Foundation & Civil Expertise',
          description:
            'Correct foundation design, drainage and shallow-mount options are critical to long-term performance — we manage the full civil interface.',
        },
        {
          number: '03',
          title: 'Integrated Access Logic',
          description:
            'Bollards are programmed and interlocked with the wider access control system so that authorised entry remains smooth and unauthorised entry is blocked.',
        },
        {
          number: '04',
          title: 'Maintainable Longevity',
          description:
            'Service access, spare parts availability and clear maintenance schedules keep automatic bollards reliable under continuous outdoor duty.',
        },
      ]}
      deliverables={[
        {
          icon: <FileText />,
          title: 'System Design Packages',
          description:
            'Layout plans, foundation details, control logic and specifications.',
        },
        {
          icon: <Wrench />,
          title: 'Civil & Installation Works',
          description:
            'Foundations, drainage, bollard installation and mechanical setup.',
        },
        {
          icon: <CheckCircle2 />,
          title: 'Electrical & Control',
          description:
            'Power, control panels, safety devices and access system interfaces.',
        },
        {
          icon: <BadgeCheck />,
          title: 'Testing & Commissioning',
          description:
            'Cycle testing, safety verification and integration checks.',
        },
        {
          icon: <Clock3 />,
          title: 'Training & Handover',
          description:
            'Operator instruction and emergency override procedures.',
        },
        {
          icon: <Target />,
          title: 'O&M Documentation',
          description:
            'As-builts, maintenance schedules and support contacts.',
        },
      ]}
      serviceHighlights={[
        {
          title: 'Control Without Visual Barriers',
          description:
            'Bollards provide effective vehicle denial while preserving open sightlines and pedestrian movement. We select and install systems that protect without creating a fortress aesthetic.',
          image:
            'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1400&q=90',
        },
        {
          title: 'From Traffic Management to Hostile Vehicle Mitigation',
          description:
            'Whether the need is simple access control or certified crash resistance, our range and engineering approach deliver the correct performance level for each location.',
          image:
            'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1400&q=90',
        },
        {
          title: 'Reliable Under Continuous Use',
          description:
            'Automatic bollards operate many times per day in all weather. Correct foundation design, quality equipment and structured maintenance keep them available and secure year after year.',
          image:
            'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=90',
        },
      ]}
      industries={[
        { name: 'Corporate Headquarters' },
        { name: 'Residential Communities' },
        { name: 'Government & Critical Sites' },
        { name: 'Retail & Mixed-Use' },
        { name: 'Hotels & Hospitality' },
        { name: 'Data Centres' },
        { name: 'Educational Campuses' },
        { name: 'Public Realm & Civic Spaces' },
      ]}
      gallery={[
        {
          src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=90',
          alt: 'Security bollards and vehicle control',
        },
        {
          src: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1200&q=90',
          alt: 'Automatic bollard access control',
        },
        {
          src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=90',
          alt: 'Perimeter security and bollard installation',
        },
      ]}
      ctaTitle="Ready to control vehicle access with precision?"
      ctaDescription="Partner with our bollards team to design and install automatic, fixed or crash-rated bollard systems that deliver effective vehicle control while preserving openness and pedestrian flow."
      ctaButtonText="Request Consultation"
      ctaButtonLink="/contact"
      ctaSecondaryText="Our Projects"
      ctaSecondaryLink="/projects"
    />
  )
}