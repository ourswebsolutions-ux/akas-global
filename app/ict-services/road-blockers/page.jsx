'use client'

import ServicePage from '../../components/Service'
import {
  Shield,
  Ban,
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
      title="Road Blockers"
      subtitle="High-Security Vehicle Access Control Barriers"
      description="Our Road Blockers service designs, supplies and installs high-security vehicle barrier systems that provide positive physical protection against unauthorised vehicle entry. From rising arm barriers and bollards to heavy-duty road blockers and crash-rated systems, we deliver reliable, fast-acting solutions that integrate with access control and security platforms for critical sites and high-risk facilities."
      badge="ICT Services"
      label="Road Blockers"
      heroImage="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1800&q=90"
      heroImageAlt="High-security road blocker and vehicle barrier"
      imagePosition="right"
      layout="editorial"
      theme="light"
      animationPreset="premium"
      buttonText="Request Consultation"
      buttonLink="/contact"
      secondaryButtonText="Our Projects"
      secondaryButtonLink="/projects"
      highlights={[
        'Rising Arm Barriers',
        'Crash-Rated Road Blockers',
        'Automatic Bollards',
        'Access Control Integration',
        'High-Security Vehicle Denial',
      ]}
      statistics={[
        {
          value: 16,
          suffix: '+',
          label: 'Years of Experience',
          description:
            'Delivering vehicle access control and high-security barrier systems for critical and commercial sites.',
        },
        {
          value: 70,
          suffix: '+',
          label: 'Barrier Projects',
          description:
            'Completed road blocker, bollard and barrier installations across high-security and controlled-access facilities.',
        },
        {
          value: 450,
          suffix: '+',
          label: 'Barriers Installed',
          description:
            'Rising arms, blockers and bollards commissioned and integrated with access systems.',
        },
        {
          value: 99,
          suffix: '%',
          label: 'Operational Reliability',
          description:
            'Achieved through quality equipment, proper installation and structured maintenance regimes.',
        },
      ]}
      benefits={[
        {
          icon: <Ban />,
          title: 'Rising Arm Barriers',
          description:
            'Fast-acting automatic and manual rising arm barriers for controlled vehicle entry at commercial, residential and industrial sites.',
        },
        {
          icon: <Shield />,
          title: 'Crash-Rated Road Blockers',
          description:
            'Heavy-duty rising road blockers engineered and certified to stop hostile vehicle threats at designated security perimeters.',
        },
        {
          icon: <Layers />,
          title: 'Automatic & Static Bollards',
          description:
            'Retractable and fixed bollards that provide flexible or permanent vehicle denial while maintaining pedestrian permeability.',
        },
        {
          icon: <Settings />,
          title: 'Access Control Integration',
          description:
            'Full integration with card readers, ANPR, intercoms and security management platforms for seamless authorised vehicle entry.',
        },
        {
          icon: <ShieldCheck />,
          title: 'Safety & Interlocks',
          description:
            'Safety loops, photocells, traffic lights and interlock logic that prevent accidental closure and protect vehicles and pedestrians.',
        },
        {
          icon: <Activity />,
          title: 'Monitoring & Maintenance',
          description:
            'Status monitoring, fault reporting and structured maintenance programmes that keep barriers available and secure.',
        },
      ]}
      whyChooseUs={[
        {
          number: '01',
          title: 'Threat-Matched Specification',
          description:
            'Barrier type, rating and performance are selected according to the actual security risk and operational requirements of each access point.',
        },
        {
          number: '02',
          title: 'Reliable Daily Operation',
          description:
            'Systems are engineered for high cycle rates and continuous use while retaining the ability to provide positive physical denial when required.',
        },
        {
          number: '03',
          title: 'Seamless Security Integration',
          description:
            'Barriers work as part of the wider access control and CCTV ecosystem, giving security teams a single coherent vehicle entry process.',
        },
        {
          number: '04',
          title: 'Safety Without Compromise',
          description:
            'Detection loops, safety edges and clear signalling protect authorised traffic while maintaining the security integrity of the barrier.',
        },
      ]}
      deliverables={[
        {
          icon: <FileText />,
          title: 'System Design Packages',
          description:
            'Layout plans, civil requirements, control logic and specifications.',
        },
        {
          icon: <Wrench />,
          title: 'Civil & Mechanical Works',
          description:
            'Foundations, drainage, barrier installation and mechanical setup.',
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
            'Cycle testing, safety verification and access integration checks.',
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
          title: 'Positive Physical Protection',
          description:
            'When vehicle-borne threats are a concern, only a physical barrier provides certainty. We specify and install systems that deliver certified stopping performance while remaining practical for daily authorised traffic.',
          image:
            'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1400&q=90',
        },
        {
          title: 'Security That Fits Operations',
          description:
            'High-security barriers are only effective if they work smoothly with the site’s access procedures. Our designs integrate with credentials, ANPR and control rooms so that security and operations remain aligned.',
          image:
            'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1400&q=90',
        },
        {
          title: 'Built for Continuous Duty',
          description:
            'From foundations to control logic, every element is selected for reliability under high cycle rates and harsh outdoor conditions, with clear maintenance pathways to sustain long-term performance.',
          image:
            'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=90',
        },
      ]}
      industries={[
        { name: 'Government & Critical Infrastructure' },
        { name: 'Data Centres' },
        { name: 'Industrial & Energy Sites' },
        { name: 'Airports & Transport Hubs' },
        { name: 'Corporate Headquarters' },
        { name: 'Residential Communities' },
        { name: 'Financial Institutions' },
        { name: 'Mixed-Use Developments' },
      ]}
      gallery={[
        {
          src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=90',
          alt: 'High-security road blocker installation',
        },
        {
          src: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1200&q=90',
          alt: 'Vehicle access control and barrier systems',
        },
        {
          src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=90',
          alt: 'Security perimeter and vehicle denial',
        },
      ]}
      ctaTitle="Ready to secure your vehicle access points?"
      ctaDescription="Partner with our road blocker team to design and install high-security vehicle barriers that deliver certified physical protection while supporting efficient authorised entry."
      ctaButtonText="Request Consultation"
      ctaButtonLink="/contact"
      ctaSecondaryText="Our Projects"
      ctaSecondaryLink="/projects"
    />
  )
}