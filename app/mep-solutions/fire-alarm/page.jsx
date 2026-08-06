'use client'

import ServicePage from '../../components/Service'
import {
  Bell,
  Flame,
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
      title="Fire Alarm"
      subtitle="Early Detection & Reliable Life-Safety Systems"
      description="Our Fire Alarm service designs, installs and commissions complete fire detection and alarm systems that provide early warning, clear evacuation signalling and seamless integration with other life-safety systems. From addressable detection networks and voice evacuation to interfaces with sprinklers, smoke control and building management systems, we deliver code-compliant solutions that protect people and property."
      badge="MEP Solutions"
      label="Fire Alarm"
      heroImage="https://images.unsplash.com/photo-1581094271901-8022df4466f9?auto=format&fit=crop&w=1800&q=90"
      heroImageAlt="Fire alarm and life safety system installation"
      imagePosition="right"
      layout="editorial"
      theme="light"
      animationPreset="premium"
      buttonText="Request Consultation"
      buttonLink="/contact"
      secondaryButtonText="Our Projects"
      secondaryButtonLink="/projects"
      highlights={[
        'Addressable Detection Systems',
        'Voice Evacuation & Alerting',
        'Smoke & Heat Detection',
        'System Integration',
        'Testing & Certification',
      ]}
      statistics={[
        {
          value: 16,
          suffix: '+',
          label: 'Years of Experience',
          description:
            'Delivering fire detection and alarm systems for commercial, healthcare, industrial and high-rise buildings.',
        },
        {
          value: 95,
          suffix: '+',
          label: 'Fire Alarm Projects',
          description:
            'Completed addressable and conventional systems across major developments and specialised facilities.',
        },
        {
          value: 100,
          suffix: '%',
          label: 'Code Compliance',
          description:
            'Systems designed and installed to meet local civil defence and international life-safety standards.',
        },
        {
          value: 99,
          suffix: '%',
          label: 'System Availability',
          description:
            'Achieved through quality components, proper installation and rigorous testing regimes.',
        },
      ]}
      benefits={[
        {
          icon: <Bell />,
          title: 'Addressable Detection Networks',
          description:
            'Intelligent addressable panels, detectors and devices that pinpoint the exact location of an alarm, enabling rapid response and reduced false alarms.',
        },
        {
          icon: <Flame />,
          title: 'Smoke, Heat & Multi-Sensor Detection',
          description:
            'Selection and placement of optical, thermal, multi-criteria and specialised detectors matched to the risk profile of each space.',
        },
        {
          icon: <Layers />,
          title: 'Voice Evacuation & Alerting',
          description:
            'Clear, intelligible voice alarm and evacuation systems that guide occupants safely during an emergency, integrated with the main fire alarm network.',
        },
        {
          icon: <Settings />,
          title: 'Interfaces & Cause-and-Effect',
          description:
            'Programmed interfaces with sprinklers, smoke control, access control, lifts and BMS to execute the required emergency sequence automatically.',
        },
        {
          icon: <ShieldCheck />,
          title: 'Code Compliance & Authority Approval',
          description:
            'Full adherence to local civil defence regulations and relevant international standards, with complete documentation for inspection and certification.',
        },
        {
          icon: <Activity />,
          title: 'Testing, Commissioning & Maintenance',
          description:
            'End-to-end testing of every device, zone and interface, followed by structured handover and ongoing maintenance support options.',
        },
      ]}
      whyChooseUs={[
        {
          number: '01',
          title: 'Life-Safety First',
          description:
            'Every design decision prioritises early detection, clear notification and reliable system performance under emergency conditions.',
        },
        {
          number: '02',
          title: 'Fully Integrated Solutions',
          description:
            'Fire alarm systems are coordinated with mechanical smoke control, access control and building management so that the complete emergency response works as one.',
        },
        {
          number: '03',
          title: 'Authority-Ready Documentation',
          description:
            'Drawings, cause-and-effect matrices, device schedules and test records are prepared to the standard expected by civil defence and inspection authorities.',
        },
        {
          number: '04',
          title: 'Proven Commissioning Discipline',
          description:
            'Every detector, sounder, interface and sequence is tested and recorded before handover, giving clients confidence in system readiness.',
        },
      ]}
      deliverables={[
        {
          icon: <FileText />,
          title: 'System Design Packages',
          description:
            'Detection layouts, cause-and-effect matrices and equipment schedules.',
        },
        {
          icon: <Wrench />,
          title: 'Installation & Cabling',
          description:
            'Device mounting, loop wiring, panel installation and interfaces.',
        },
        {
          icon: <CheckCircle2 />,
          title: 'Programming & Configuration',
          description:
            'Panel programming, device addressing and sequence setup.',
        },
        {
          icon: <BadgeCheck />,
          title: 'Testing & Commissioning',
          description:
            'Full device, zone and interface testing with documented results.',
        },
        {
          icon: <Clock3 />,
          title: 'Authority Inspection Support',
          description:
            'Coordination and documentation for civil defence approval.',
        },
        {
          icon: <Target />,
          title: 'O&M & Training',
          description:
            'Operating manuals, as-builts and end-user training sessions.',
        },
      ]}
      serviceHighlights={[
        {
          title: 'Detection That Saves Time',
          description:
            'Early and accurate detection is the foundation of effective life safety. We design addressable systems that locate the source of an alarm quickly, enabling faster response and clearer evacuation decisions.',
          image:
            'https://images.unsplash.com/photo-1581094271901-8022df4466f9?auto=format&fit=crop&w=1400&q=90',
        },
        {
          title: 'One System, Coordinated Response',
          description:
            'Fire alarm does not operate in isolation. Our systems are programmed to trigger the correct sequence of smoke control, door release, lift homing and notification so that the building responds as a unified whole.',
          image:
            'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=90',
        },
        {
          title: 'Certified and Ready',
          description:
            'From design through final testing, every stage is documented to the standard required by authorities. Clients receive a fully commissioned system ready for inspection and ongoing operation.',
          image:
            'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1400&q=90',
        },
      ]}
      industries={[
        { name: 'Commercial Office Buildings' },
        { name: 'Healthcare Facilities' },
        { name: 'Educational Institutions' },
        { name: 'Hospitality & Leisure' },
        { name: 'Industrial Facilities' },
        { name: 'High-Rise Residential' },
        { name: 'Mixed-Use Developments' },
        { name: 'Data Centres' },
      ]}
      gallery={[
        {
          src: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?auto=format&fit=crop&w=1200&q=90',
          alt: 'Fire alarm panel and detection system',
        },
        {
          src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=90',
          alt: 'Life safety system installation',
        },
        {
          src: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=90',
          alt: 'Building fire detection infrastructure',
        },
      ]}
      ctaTitle="Ready to protect people and property?"
      ctaDescription="Partner with our fire alarm team to design, install and commission reliable detection and evacuation systems that meet the highest life-safety standards."
      ctaButtonText="Request Consultation"
      ctaButtonLink="/contact"
      ctaSecondaryText="Our Projects"
      ctaSecondaryLink="/projects"
    />
  )
}