    'use client'

import ServicePage from '../../components/Service'
import {
  Megaphone,
  Volume2,
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
      title="PA System"
      subtitle="Clear Voice Communication for Everyday & Emergency Use"
      description="Our PA System service designs, installs and commissions public address and voice evacuation systems that deliver clear, intelligible announcements across buildings and outdoor areas. From background music and routine paging to emergency voice alarm and zoned messaging, we provide reliable audio solutions that support daily operations and critical life-safety communication."
      badge="ICT Services"
      label="PA System"
      heroImage="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1800&q=90"
      heroImageAlt="Public address and voice announcement system"
      imagePosition="right"
      layout="premium"
      theme="light"
      animationPreset="premium"
      buttonText="Request Consultation"
      buttonLink="/contact"
      secondaryButtonText="Our Projects"
      secondaryButtonLink="/projects"
      highlights={[
        'Public Address & Paging',
        'Voice Evacuation Systems',
        'Zoned Audio Distribution',
        'Background Music',
        'Emergency Integration',
      ]}
      statistics={[
        {
          value: 16,
          suffix: '+',
          label: 'Years of Experience',
          description:
            'Delivering PA and voice evacuation systems for commercial, industrial, educational and public facilities.',
        },
        {
          value: 90,
          suffix: '+',
          label: 'PA System Projects',
          description:
            'Completed public address and emergency voice systems across diverse building types.',
        },
        {
          value: 12000,
          suffix: '+',
          label: 'Speakers Installed',
          description:
            'Ceiling, wall, horn and outdoor speakers commissioned for clear coverage.',
        },
        {
          value: 99,
          suffix: '%',
          label: 'Intelligibility Target',
          description:
            'Systems designed and tested to meet speech intelligibility requirements for emergency use.',
        },
      ]}
      benefits={[
        {
          icon: <Megaphone />,
          title: 'Public Address & Paging',
          description:
            'Clear, zone-selectable paging for routine announcements, operational messages and staff communication across indoor and outdoor areas.',
        },
        {
          icon: <Volume2 />,
          title: 'Voice Evacuation Systems',
          description:
            'Certified voice alarm systems that deliver pre-recorded and live emergency messages with the intelligibility and reliability required for life-safety applications.',
        },
        {
          icon: <Layers />,
          title: 'Zoned Audio Distribution',
          description:
            'Logical zoning that allows targeted messaging to specific floors, departments or outdoor areas while maintaining overall system coherence.',
        },
        {
          icon: <Settings />,
          title: 'Background Music & Ambient Audio',
          description:
            'High-quality background music distribution with independent volume control per zone for retail, hospitality and workplace environments.',
        },
        {
          icon: <ShieldCheck />,
          title: 'Fire Alarm & Emergency Integration',
          description:
            'Automatic override and sequenced messaging triggered by the fire alarm system to support orderly evacuation and emergency communication.',
        },
        {
          icon: <Activity />,
          title: 'Amplifiers, Controllers & Monitoring',
          description:
            'Supervised amplifiers, fault monitoring and backup power provisions that keep the system available when it is needed most.',
        },
      ]}
      whyChooseUs={[
        {
          number: '01',
          title: 'Intelligibility First',
          description:
            'Speaker selection, placement and acoustic design prioritise clear speech so that messages are understood, not just heard.',
        },
        {
          number: '02',
          title: 'Dual-Purpose Capability',
          description:
            'Systems are designed to serve both daily operational needs and emergency voice alarm requirements within a single coherent platform.',
        },
        {
          number: '03',
          title: 'Code-Compliant Life Safety',
          description:
            'Voice evacuation systems are engineered and documented to meet applicable civil defence and international standards for emergency communication.',
        },
        {
          number: '04',
          title: 'Simple Daily Operation',
          description:
            'Microphones, zone selectors and control interfaces are configured for intuitive use by non-technical staff during normal operations.',
        },
      ]}
      deliverables={[
        {
          icon: <FileText />,
          title: 'System Design Packages',
          description:
            'Speaker layouts, zoning plans, amplifier calculations and specifications.',
        },
        {
          icon: <Wrench />,
          title: 'Installation & Cabling',
          description:
            'Speaker mounting, amplifier racks, cabling and control stations.',
        },
        {
          icon: <CheckCircle2 />,
          title: 'Programming & Configuration',
          description:
            'Zone setup, message recording, priority logic and monitoring.',
        },
        {
          icon: <BadgeCheck />,
          title: 'Testing & Commissioning',
          description:
            'Coverage checks, intelligibility verification and full system tests.',
        },
        {
          icon: <Clock3 />,
          title: 'Integration Verification',
          description:
            'Confirmation of fire alarm override and emergency sequencing.',
        },
        {
          icon: <Target />,
          title: 'O&M & Training',
          description:
            'As-builts, operating procedures and hands-on staff training.',
        },
      ]}
      serviceHighlights={[
        {
          title: 'Messages That Are Understood',
          description:
            'A PA system only succeeds when every listener can clearly understand the message. We design for speech intelligibility so that both routine announcements and emergency instructions are effective.',
          image:
            'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1400&q=90',
        },
        {
          title: 'Everyday Use, Emergency Ready',
          description:
            'The same system that plays background music and handles daily paging is engineered to switch instantly into certified voice evacuation mode when required.',
          image:
            'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1400&q=90',
        },
        {
          title: 'Supervised and Dependable',
          description:
            'Amplifiers, circuits and critical components are monitored for faults, with backup power provisions ensuring the system remains available during power disruptions.',
          image:
            'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=90',
        },
      ]}
      industries={[
        { name: 'Commercial Office Buildings' },
        { name: 'Educational Institutions' },
        { name: 'Healthcare Facilities' },
        { name: 'Industrial & Logistics' },
        { name: 'Retail & Mixed-Use' },
        { name: 'Hotels & Hospitality' },
        { name: 'Transport Hubs' },
        { name: 'Public & Government Buildings' },
      ]}
      gallery={[
        {
          src: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1200&q=90',
          alt: 'Public address and audio system',
        },
        {
          src: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1200&q=90',
          alt: 'Emergency voice communication infrastructure',
        },
        {
          src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=90',
          alt: 'PA system control and monitoring',
        },
      ]}
      ctaTitle="Ready for clear, reliable voice communication?"
      ctaDescription="Partner with our PA system team to design, install and commission public address and voice evacuation solutions that deliver intelligible messages for both daily operations and emergency situations."
      ctaButtonText="Request Consultation"
      ctaButtonLink="/contact"
      ctaSecondaryText="Our Projects"
      ctaSecondaryLink="/projects"
    />
  )
}