'use client'

import ServicePage from '../../components/Service'
import {
  Camera,
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
      title="CCTV"
      subtitle="Intelligent Video Surveillance for Security & Operations"
      description="Our CCTV service designs, installs and commissions complete IP video surveillance systems that deliver clear, reliable visual coverage for security, operations and incident management. From camera selection and network design to NVR/VMS platforms, storage and remote monitoring, we provide scalable surveillance solutions that enhance safety and situational awareness across any facility."
      badge="ICT Services"
      label="CCTV"
      heroImage="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1800&q=90"
      heroImageAlt="CCTV and video surveillance system"
      imagePosition="right"
      layout="modern"
      theme="light"
      animationPreset="premium"
      buttonText="Request Consultation"
      buttonLink="/contact"
      secondaryButtonText="Our Projects"
      secondaryButtonLink="/projects"
      highlights={[
        'IP Camera Networks',
        'NVR & VMS Platforms',
        'Storage & Retention',
        'Remote Monitoring',
        'Analytics & Integration',
      ]}
      statistics={[
        {
          value: 16,
          suffix: '+',
          label: 'Years of Experience',
          description:
            'Delivering video surveillance systems for commercial, industrial, residential and public facilities.',
        },
        {
          value: 120,
          suffix: '+',
          label: 'CCTV Projects',
          description:
            'Completed IP camera and recording systems across diverse environments and security requirements.',
        },
        {
          value: 15000,
          suffix: '+',
          label: 'Cameras Installed',
          description:
            'Fixed, PTZ and specialised cameras commissioned and integrated into monitoring platforms.',
        },
        {
          value: 99,
          suffix: '%',
          label: 'System Uptime',
          description:
            'Achieved through quality components, proper network design and structured maintenance.',
        },
      ]}
      benefits={[
        {
          icon: <Camera />,
          title: 'IP Camera Selection & Placement',
          description:
            'Fixed, PTZ, panoramic and specialised cameras selected and positioned for optimal coverage, image quality and operational usefulness.',
        },
        {
          icon: <Monitor />,
          title: 'NVR & VMS Platforms',
          description:
            'Network video recorders and video management systems that provide live viewing, playback, user management and scalable multi-site capability.',
        },
        {
          icon: <Layers />,
          title: 'Storage & Retention Design',
          description:
            'Storage architecture sized for required retention periods, frame rates and resolution, with options for on-premise, hybrid or cloud recording.',
        },
        {
          icon: <Settings />,
          title: 'Network & Power Infrastructure',
          description:
            'Dedicated or shared network design, PoE planning and backup power provisions that keep cameras and recorders online continuously.',
        },
        {
          icon: <ShieldCheck />,
          title: 'Analytics & Smart Features',
          description:
            'Motion detection, intrusion, line-crossing, people counting and other analytics that turn video into actionable operational intelligence.',
        },
        {
          icon: <Activity />,
          title: 'Integration & Remote Access',
          description:
            'Interfaces with access control, alarm systems and mobile/web clients for unified security management and remote situational awareness.',
        },
      ]}
      whyChooseUs={[
        {
          number: '01',
          title: 'Coverage with Purpose',
          description:
            'Camera layouts are designed around actual security and operational needs — entrances, assets, circulation routes and high-risk zones — not generic grid coverage.',
        },
        {
          number: '02',
          title: 'Image Quality That Matters',
          description:
            'Resolution, low-light performance and lens selection are matched to the identification and recognition requirements of each viewing zone.',
        },
        {
          number: '03',
          title: 'Scalable & Maintainable',
          description:
            'Systems are built on open or widely supported platforms with clear documentation so that expansion and ongoing support remain straightforward.',
        },
        {
          number: '04',
          title: 'Operational Readiness',
          description:
            'Handover includes configured views, user accounts, retention settings and operator training so that the system is usable from day one.',
        },
      ]}
      deliverables={[
        {
          icon: <FileText />,
          title: 'System Design Packages',
          description:
            'Camera layouts, network diagrams, storage calculations and specifications.',
        },
        {
          icon: <Wrench />,
          title: 'Installation & Cabling',
          description:
            'Camera mounting, network cabling, PoE switches and recorder installation.',
        },
        {
          icon: <CheckCircle2 />,
          title: 'Configuration & Programming',
          description:
            'Camera setup, VMS configuration, user rights and recording schedules.',
        },
        {
          icon: <BadgeCheck />,
          title: 'Testing & Commissioning',
          description:
            'Coverage verification, image quality checks and system functionality tests.',
        },
        {
          icon: <Clock3 />,
          title: 'Integration Verification',
          description:
            'Confirmation of links with access control, alarms and remote clients.',
        },
        {
          icon: <Target />,
          title: 'O&M & Training',
          description:
            'As-builts, operator manuals and hands-on training for security teams.',
        },
      ]}
      serviceHighlights={[
        {
          title: 'See What Matters, When It Matters',
          description:
            'Effective CCTV is not about the number of cameras — it is about clear, reliable images of the places and events that affect security and operations. We design coverage that supports real decision-making.',
          image:
            'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1400&q=90',
        },
        {
          title: 'From Camera to Control Room',
          description:
            'Our scope covers the complete chain — cameras, network, recording, viewing and remote access — so that operators have a coherent, dependable surveillance platform.',
          image:
            'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=90',
        },
        {
          title: 'Ready for Daily Use',
          description:
            'Systems are handed over fully configured with clear views, logical camera naming and trained operators, ensuring the investment delivers value from the first shift.',
          image:
            'https://images.unsplash.com/photo-1544197150-b99a580bb7a2?auto=format&fit=crop&w=1400&q=90',
        },
      ]}
      industries={[
        { name: 'Commercial Office Buildings' },
        { name: 'Industrial & Logistics' },
        { name: 'Residential Communities' },
        { name: 'Retail & Mixed-Use' },
        { name: 'Healthcare Facilities' },
        { name: 'Educational Campuses' },
        { name: 'Hotels & Hospitality' },
        { name: 'Data Centres & Critical Sites' },
      ]}
      gallery={[
        {
          src: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1200&q=90',
          alt: 'CCTV camera and surveillance system',
        },
        {
          src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=90',
          alt: 'Security monitoring and control room',
        },
        {
          src: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a2?auto=format&fit=crop&w=1200&q=90',
          alt: 'Network video surveillance infrastructure',
        },
      ]}
      ctaTitle="Ready to strengthen your visual security?"
      ctaDescription="Partner with our CCTV team to design, install and commission intelligent video surveillance systems that deliver clear coverage, reliable recording and actionable operational insight."
      ctaButtonText="Request Consultation"
      ctaButtonLink="/contact"
      ctaSecondaryText="Our Projects"
      ctaSecondaryLink="/projects"
    />
  )
}