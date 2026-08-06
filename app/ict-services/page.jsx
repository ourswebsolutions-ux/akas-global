'use client'

import ServicePage from '../components/Service'
import {
  Network,
  Server,
  Wifi,
  Shield,
  Monitor,
  Cpu,
  CheckCircle2,
  Award,
  Users,
  Clock3,
  BadgeCheck,
  Cable,
} from 'lucide-react'

export default function Page() {
  return (
    <ServicePage
      title="ICT Services"
      subtitle="Information & Communication Technology Infrastructure"
      description="Our ICT Services division designs, installs and commissions advanced information and communication technology systems that form the digital backbone of modern buildings and campuses. From structured cabling and data centre infrastructure to enterprise networks, wireless systems, audiovisual solutions, electronic security and smart building platforms, we deliver fully integrated ICT environments that support connectivity, security, collaboration and operational intelligence."
      badge="Digital Infrastructure & Connectivity"
      label="ICT Services"
      heroImage="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1800&q=90"
      heroImageAlt="Modern data centre and ICT infrastructure installation"
      imagePosition="right"
      layout="premium"
      theme="light"
      animationPreset="premium"
      buttonText="Request Consultation"
      buttonLink="/contact"
      secondaryButtonText="Our Projects"
      secondaryButtonLink="/projects"
      highlights={[
        'Structured Cabling Systems',
        'Data Centre Infrastructure',
        'Enterprise Networks & Wi-Fi',
        'Audiovisual & Collaboration',
        'Electronic Security Systems',
      ]}
      statistics={[
        {
          value: 14,
          suffix: '+',
          label: 'Years of Experience',
          description:
            'Delivering mission-critical ICT infrastructure across complex facilities.',
        },
        {
          value: 210,
          suffix: '+',
          label: 'ICT Projects',
          description:
            'Commercial, institutional, healthcare and industrial technology deployments.',
        },
        {
          value: 99,
          suffix: '%',
          label: 'Uptime Focus',
          description:
            'Systems engineered and commissioned for continuous operational reliability.',
        },
        {
          value: 160,
          suffix: '+',
          label: 'ICT Specialists',
          description:
            'Network engineers, systems integrators, cabling technicians and project managers.',
        },
      ]}
      benefits={[
        {
          icon: <Cable />,
          title: 'Structured Cabling Systems',
          description:
            'End-to-end copper and fibre optic cabling infrastructure designed to current standards, supporting high-bandwidth applications, future expansion and simplified maintenance across the entire facility.',
        },
        {
          icon: <Server />,
          title: 'Data Centre Infrastructure',
          description:
            'Complete data centre fit-out including raised floors, precision cooling, power distribution, UPS, containment systems and environmental monitoring for reliable IT environments.',
        },
        {
          icon: <Network />,
          title: 'Enterprise Networks & Wireless',
          description:
            'High-performance LAN, WAN and Wi-Fi solutions with secure architecture, seamless roaming, capacity planning and integration with building management platforms.',
        },
        {
          icon: <Monitor />,
          title: 'Audiovisual & Collaboration',
          description:
            'Professional AV systems for boardrooms, auditoriums, training facilities and digital signage, including video conferencing, sound reinforcement and control systems.',
        },
        {
          icon: <Shield />,
          title: 'Electronic Security Systems',
          description:
            'Integrated CCTV, access control, intrusion detection and visitor management systems designed for operational security and compliance with site requirements.',
        },
        {
          icon: <Cpu />,
          title: 'Smart Building Integration',
          description:
            'ICT platforms that connect building systems, enable centralised monitoring, support IoT devices and deliver actionable data for facility performance and energy management.',
        },
      ]}
      whyChooseUs={[
        {
          number: '01',
          title: 'Standards-Compliant Design',
          description:
            'All ICT systems are engineered to recognised international standards for cabling, networking, security and data centre infrastructure, ensuring interoperability and longevity.',
        },
        {
          number: '02',
          title: 'End-to-End Integration',
          description:
            'We manage the complete technology stack from physical infrastructure through active systems and software platforms under one accountable delivery team.',
        },
        {
          number: '03',
          title: 'Future-Ready Architecture',
          description:
            'Designs incorporate capacity for growth, emerging technologies and evolving bandwidth requirements so systems remain relevant for years after handover.',
        },
        {
          number: '04',
          title: 'Proven Commissioning Discipline',
          description:
            'Rigorous testing, documentation and performance verification ensure every system operates to specification and is ready for immediate operational use.',
        },
      ]}
      deliverables={[
        {
          icon: <CheckCircle2 />,
          title: 'ICT Design & Planning',
          description:
            'Technology strategy, network architecture, cabling layouts and system specifications.',
        },
        {
          icon: <Cable />,
          title: 'Infrastructure Installation',
          description:
            'Structured cabling, containment, data centre fit-out and equipment rooms.',
        },
        {
          icon: <Network />,
          title: 'Active Systems Deployment',
          description:
            'Network equipment, wireless access, AV systems and security platforms.',
        },
        {
          icon: <BadgeCheck />,
          title: 'Testing & Certification',
          description:
            'Cable certification, network performance testing and system validation.',
        },
        {
          icon: <Clock3 />,
          title: 'Commissioning',
          description:
            'Functional testing, integration verification and operational readiness.',
        },
        {
          icon: <Users />,
          title: 'Handover & Support',
          description:
            'As-built documentation, training and optional ongoing support services.',
        },
      ]}
      serviceHighlights={[
        {
          title: 'Strategic Technology Planning',
          description:
            'Successful ICT delivery begins with clear requirements and architecture. Our specialists develop technology roadmaps, capacity plans and detailed designs that align digital infrastructure with business and operational goals.',
          image:
            'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=90',
        },
        {
          title: 'Precision Infrastructure Execution',
          description:
            'Installation teams execute structured cabling, containment, equipment rooms and active systems under strict quality control, ensuring clean workmanship and full compliance with design and standards.',
          image:
            'https://images.unsplash.com/photo-1544197150-b99a580bb7a2?auto=format&fit=crop&w=1400&q=90',
        },
        {
          title: 'Verified System Performance',
          description:
            'Before handover, every ICT system undergoes comprehensive testing, certification and documentation so the completed environment is secure, high-performing and ready for immediate operational use.',
          image:
            'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1400&q=90',
        },
      ]}
      industries={[
        { name: 'Corporate Headquarters' },
        { name: 'Data Centres' },
        { name: 'Healthcare Facilities' },
        { name: 'Educational Campuses' },
        { name: 'Hospitality & Hotels' },
        { name: 'Industrial Facilities' },
        { name: 'Government Buildings' },
        { name: 'Mixed-Use Developments' },
      ]}
      gallery={[
        {
          src: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=90',
          alt: 'Data centre and server infrastructure',
        },
        {
          src: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a2?auto=format&fit=crop&w=1200&q=90',
          alt: 'Network and structured cabling installation',
        },
        {
          src: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=90',
          alt: 'ICT systems and digital infrastructure',
        },
      ]}
      ctaTitle="Ready to discuss your ICT infrastructure project?"
      ctaDescription="Our technology team is prepared to deliver secure, high-performance and fully integrated ICT systems with precision and accountability."
      ctaButtonText="Request Consultation"
      ctaButtonLink="/contact"
      ctaSecondaryText="Our Projects"
      ctaSecondaryLink="/projects"
    />
  )
}