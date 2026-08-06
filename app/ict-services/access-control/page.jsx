'use client'

import ServicePage from '../../components/Service'
import {
  KeyRound,
  Lock,
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
      title="Access Control"
      subtitle="Secure, Flexible Entry Management for Modern Facilities"
      description="Our Access Control service designs, installs and commissions electronic access systems that manage who can enter, when and where. From card, biometric and mobile credentials to door controllers, turnstiles and visitor management, we deliver secure, scalable solutions that protect people and assets while supporting smooth daily operations and clear audit trails."
      badge="ICT Services"
      label="Access Control"
      heroImage="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1800&q=90"
      heroImageAlt="Access control and secure entry systems"
      imagePosition="right"
      layout="corporate"
      theme="light"
      animationPreset="premium"
      buttonText="Request Consultation"
      buttonLink="/contact"
      secondaryButtonText="Our Projects"
      secondaryButtonLink="/projects"
      highlights={[
        'Card, Biometric & Mobile Credentials',
        'Door Controllers & Readers',
        'Turnstiles & Barriers',
        'Visitor Management',
        'Integration with Security Systems',
      ]}
      statistics={[
        {
          value: 16,
          suffix: '+',
          label: 'Years of Experience',
          description:
            'Delivering access control systems for commercial, residential, industrial and critical facilities.',
        },
        {
          value: 110,
          suffix: '+',
          label: 'Access Control Projects',
          description:
            'Completed secure entry systems across offices, communities, campuses and specialised sites.',
        },
        {
          value: 25000,
          suffix: '+',
          label: 'Doors & Readers',
          description:
            'Controlled doors, readers and devices installed and commissioned.',
        },
        {
          value: 99,
          suffix: '%',
          label: 'System Reliability',
          description:
            'Achieved through quality hardware, proper installation and structured testing.',
        },
      ]}
      benefits={[
        {
          icon: <KeyRound />,
          title: 'Multi-Credential Solutions',
          description:
            'Card, PIN, biometric fingerprint/face and mobile credential options that match security requirements and user convenience for each zone.',
        },
        {
          icon: <Lock />,
          title: 'Door Controllers & Readers',
          description:
            'Intelligent controllers, readers and locking hardware designed for reliable offline operation, anti-passback and flexible access schedules.',
        },
        {
          icon: <Layers />,
          title: 'Turnstiles, Gates & Barriers',
          description:
            'Full-height and waist-height turnstiles, speed gates and vehicle barriers integrated into the same access platform for pedestrian and vehicle control.',
        },
        {
          icon: <Settings />,
          title: 'Visitor & Contractor Management',
          description:
            'Temporary credential issuance, host approval workflows and time-limited access that keep visitors and contractors controlled without disrupting operations.',
        },
        {
          icon: <ShieldCheck />,
          title: 'Integration with CCTV & Alarms',
          description:
            'Event-driven camera call-up, alarm interfaces and unified security platforms that give operators a single view of access and video events.',
        },
        {
          icon: <Activity />,
          title: 'Audit Trails & Reporting',
          description:
            'Complete logs of entry and exit events, exception reports and management dashboards that support compliance and investigation needs.',
        },
      ]}
      whyChooseUs={[
        {
          number: '01',
          title: 'Security Matched to Risk',
          description:
            'Credential types, door hardware and system architecture are selected according to the actual risk profile of each area rather than a one-size-fits-all approach.',
        },
        {
          number: '02',
          title: 'Smooth Daily Experience',
          description:
            'Systems are designed so that legitimate users move freely while unauthorised access is blocked — balancing security with operational efficiency.',
        },
        {
          number: '03',
          title: 'Scalable Architecture',
          description:
            'Controllers, software and licensing are planned for growth so that additional doors, buildings or sites can be added without major redesign.',
        },
        {
          number: '04',
          title: 'Clear Operational Handover',
          description:
            'User accounts, access levels, schedules and reports are configured and documented so that facility and security teams can manage the system confidently.',
        },
      ]}
      deliverables={[
        {
          icon: <FileText />,
          title: 'System Design Packages',
          description:
            'Door schedules, network diagrams, credential strategy and specifications.',
        },
        {
          icon: <Wrench />,
          title: 'Installation & Hardware',
          description:
            'Readers, controllers, locks, turnstiles and associated cabling.',
        },
        {
          icon: <CheckCircle2 />,
          title: 'Programming & Configuration',
          description:
            'Access levels, schedules, anti-passback and user database setup.',
        },
        {
          icon: <BadgeCheck />,
          title: 'Testing & Commissioning',
          description:
            'Door-by-door testing, fail-safe/fail-secure verification and system checks.',
        },
        {
          icon: <Clock3 />,
          title: 'Integration Verification',
          description:
            'Confirmation of links with CCTV, fire alarm and other security systems.',
        },
        {
          icon: <Target />,
          title: 'O&M & Training',
          description:
            'As-builts, admin manuals and hands-on training for operators.',
        },
      ]}
      serviceHighlights={[
        {
          title: 'Control Without Friction',
          description:
            'Effective access control protects assets and people while allowing authorised movement to remain fast and intuitive. We design systems that enforce policy without creating operational bottlenecks.',
          image:
            'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1400&q=90',
        },
        {
          title: 'One Platform, Many Entry Points',
          description:
            'Doors, turnstiles, vehicle barriers and visitor desks operate under a single management platform, giving security teams consistent control and a complete audit history.',
          image:
            'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=90',
        },
        {
          title: 'Ready for Daily Management',
          description:
            'Handover includes configured access levels, clear reporting and trained administrators so that the system becomes a practical tool rather than a technical burden.',
          image:
            'https://images.unsplash.com/photo-1544197150-b99a580bb7a2?auto=format&fit=crop&w=1400&q=90',
        },
      ]}
      industries={[
        { name: 'Commercial Office Buildings' },
        { name: 'Residential Communities' },
        { name: 'Industrial & Logistics' },
        { name: 'Healthcare Facilities' },
        { name: 'Educational Campuses' },
        { name: 'Hotels & Hospitality' },
        { name: 'Data Centres' },
        { name: 'Mixed-Use Developments' },
      ]}
      gallery={[
        {
          src: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1200&q=90',
          alt: 'Access control readers and secure entry',
        },
        {
          src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=90',
          alt: 'Security management and access monitoring',
        },
        {
          src: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a2?auto=format&fit=crop&w=1200&q=90',
          alt: 'Integrated access control infrastructure',
        },
      ]}
      ctaTitle="Ready to secure your facility intelligently?"
      ctaDescription="Partner with our access control team to design, install and commission flexible, reliable entry management systems that protect people and assets while supporting smooth daily operations."
      ctaButtonText="Request Consultation"
      ctaButtonLink="/contact"
      ctaSecondaryText="Our Projects"
      ctaSecondaryLink="/projects"
    />
  )
}