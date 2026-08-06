'use client'

import ServicePage from '../../components/Service'
import {
  Network,
  Monitor,
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
      title="ELV"
      subtitle="Extra Low Voltage Systems for Smart, Connected Buildings"
      description="Our ELV service designs, installs and commissions complete extra-low-voltage systems that enable communication, security, automation and information management across modern buildings. From structured cabling, CCTV and access control to public address, BMS interfaces and specialised systems, we deliver integrated ELV solutions that enhance safety, efficiency and user experience."
      badge="MEP Solutions"
      label="ELV"
      heroImage="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1800&q=90"
      heroImageAlt="ELV systems and structured cabling installation"
      imagePosition="right"
      layout="signature"
      theme="light"
      animationPreset="premium"
      buttonText="Request Consultation"
      buttonLink="/contact"
      secondaryButtonText="Our Projects"
      secondaryButtonLink="/projects"
      highlights={[
        'Structured Cabling & Networks',
        'CCTV & Video Surveillance',
        'Access Control Systems',
        'Public Address & Intercom',
        'BMS & System Integration',
      ]}
      statistics={[
        {
          value: 16,
          suffix: '+',
          label: 'Years of Experience',
          description:
            'Delivering ELV systems for commercial, healthcare, educational and mixed-use developments.',
        },
        {
          value: 100,
          suffix: '+',
          label: 'ELV Projects',
          description:
            'Completed structured cabling, security and communication systems across major buildings.',
        },
        {
          value: 50000,
          suffix: '+',
          label: 'Data Points Installed',
          description:
            'Network outlets, cameras, access readers and devices commissioned and tested.',
        },
        {
          value: 99,
          suffix: '%',
          label: 'System Uptime',
          description:
            'Achieved through quality components, proper installation and structured testing.',
        },
      ]}
      benefits={[
        {
          icon: <Network />,
          title: 'Structured Cabling & Networks',
          description:
            'Category and fibre backbone cabling, data centres, patch panels and horizontal distribution designed for high bandwidth and future expansion.',
        },
        {
          icon: <Monitor />,
          title: 'CCTV & Video Surveillance',
          description:
            'IP camera networks, NVRs, storage and monitoring stations providing clear, reliable visual security across internal and external areas.',
        },
        {
          icon: <ShieldCheck />,
          title: 'Access Control Systems',
          description:
            'Card, biometric and mobile-credential systems that manage entry, track movement and integrate with fire alarm and security platforms.',
        },
        {
          icon: <Layers />,
          title: 'Public Address & Intercom',
          description:
            'Clear voice announcement, emergency paging and intercom systems for day-to-day communication and emergency notification.',
        },
        {
          icon: <Settings />,
          title: 'BMS & System Integration',
          description:
            'Interfaces that bring ELV systems into the building management platform for centralised monitoring, control and reporting.',
        },
        {
          icon: <Activity />,
          title: 'Specialised ELV Systems',
          description:
            'Nurse call, master clock, SMATV, conference systems and other project-specific solutions tailored to building function.',
        },
      ]}
      whyChooseUs={[
        {
          number: '01',
          title: 'True System Integration',
          description:
            'ELV systems are designed to work together and with mechanical and fire systems, creating a coherent digital backbone for the building.',
        },
        {
          number: '02',
          title: 'Future-Ready Infrastructure',
          description:
            'Cabling pathways, backbone capacity and equipment rooms are planned for growth so that technology upgrades remain straightforward.',
        },
        {
          number: '03',
          title: 'Security & Usability Balance',
          description:
            'Access and surveillance solutions are engineered for effective security without creating friction for legitimate users and operations.',
        },
        {
          number: '04',
          title: 'Documented & Maintainable',
          description:
            'Clear labelling, as-built records and structured testing ensure systems remain understandable and serviceable long after handover.',
        },
      ]}
      deliverables={[
        {
          icon: <FileText />,
          title: 'ELV Design Packages',
          description:
            'System schematics, device layouts and cable schedules.',
        },
        {
          icon: <Wrench />,
          title: 'Installation & Termination',
          description:
            'Cabling, device mounting, rack build and system connections.',
        },
        {
          icon: <CheckCircle2 />,
          title: 'Programming & Configuration',
          description:
            'Camera setup, access rules, PA zoning and system parameters.',
        },
        {
          icon: <BadgeCheck />,
          title: 'Testing & Commissioning',
          description:
            'End-to-end testing of every circuit, device and interface.',
        },
        {
          icon: <Clock3 />,
          title: 'Integration Verification',
          description:
            'Confirmation of interfaces with fire, BMS and other systems.',
        },
        {
          icon: <Target />,
          title: 'O&M & Training',
          description:
            'As-builts, manuals and operator training for all ELV systems.',
        },
      ]}
      serviceHighlights={[
        {
          title: 'The Digital Backbone of the Building',
          description:
            'ELV systems carry the information that makes modern buildings safe, efficient and convenient. We design and install the networks and devices that keep people connected and operations visible.',
          image:
            'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=90',
        },
        {
          title: 'Security Without Complexity',
          description:
            'CCTV and access control are implemented with clear operational logic and user-friendly interfaces so that security teams can monitor and respond effectively every day.',
          image:
            'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=90',
        },
        {
          title: 'Ready for Tomorrow’s Technology',
          description:
            'Structured cabling and equipment spaces are planned with spare capacity and flexible pathways, allowing future systems to be added without major disruption.',
          image:
            'https://images.unsplash.com/photo-1544197150-b99a580bb7a2?auto=format&fit=crop&w=1400&q=90',
        },
      ]}
      industries={[
        { name: 'Commercial Office Buildings' },
        { name: 'Healthcare Facilities' },
        { name: 'Educational Institutions' },
        { name: 'Hospitality & Leisure' },
        { name: 'Mixed-Use Developments' },
        { name: 'Industrial Facilities' },
        { name: 'Data Centres' },
        { name: 'Residential Towers' },
      ]}
      gallery={[
        {
          src: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=90',
          alt: 'ELV structured cabling and network infrastructure',
        },
        {
          src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=90',
          alt: 'Security and monitoring systems',
        },
        {
          src: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a2?auto=format&fit=crop&w=1200&q=90',
          alt: 'Data centre and ELV equipment rooms',
        },
      ]}
      ctaTitle="Ready to build a connected, secure building?"
      ctaDescription="Partner with our ELV team to design, install and commission structured cabling, security and communication systems that form the intelligent backbone of your project."
      ctaButtonText="Request Consultation"
      ctaButtonLink="/contact"
      ctaSecondaryText="Our Projects"
      ctaSecondaryLink="/projects"
    />
  )
}