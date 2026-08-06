'use client'

import ServicePage from '../../components/Service'
import {
  Wind,
  Thermometer,
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
      title="HVAC"
      subtitle="Precision Climate Control for Comfort & Efficiency"
      description="Our HVAC service delivers complete heating, ventilation and air-conditioning solutions designed for optimal indoor environmental quality and energy performance. From central chilled water and VRF systems to air handling, ductwork, ventilation and specialised clean-room or process cooling, we provide reliable, efficient climate control that supports occupant comfort and long-term operational cost control."
      badge="MEP Solutions"
      label="HVAC"
      heroImage="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1800&q=90"
      heroImageAlt="HVAC systems and air conditioning installation"
      imagePosition="right"
      layout="luxury"
      theme="light"
      animationPreset="premium"
      buttonText="Request Consultation"
      buttonLink="/contact"
      secondaryButtonText="Our Projects"
      secondaryButtonLink="/projects"
      highlights={[
        'Chilled Water & VRF Systems',
        'Air Handling & Ventilation',
        'Ductwork & Distribution',
        'Controls & BMS Integration',
        'Energy-Efficient Design',
      ]}
      statistics={[
        {
          value: 16,
          suffix: '+',
          label: 'Years of Experience',
          description:
            'Delivering HVAC systems for commercial, healthcare, industrial and institutional buildings.',
        },
        {
          value: 110,
          suffix: '+',
          label: 'HVAC Projects',
          description:
            'Completed climate control installations across major developments and specialised facilities.',
        },
        {
          value: 28,
          suffix: '%',
          label: 'Average Energy Saving',
          description:
            'Achieved through efficient equipment, optimised design and intelligent controls.',
        },
        {
          value: 99,
          suffix: '%',
          label: 'System Performance',
          description:
            'Systems commissioned and handed over operating to design temperatures, airflow and efficiency targets.',
        },
      ]}
      benefits={[
        {
          icon: <Wind />,
          title: 'Chilled Water & Central Plant',
          description:
            'High-efficiency chillers, cooling towers, primary/secondary pumping and distribution networks engineered for capacity, redundancy and part-load performance.',
        },
        {
          icon: <Thermometer />,
          title: 'VRF & DX Systems',
          description:
            'Variable refrigerant flow and direct expansion solutions ideal for multi-zone buildings requiring flexible, energy-efficient individual space control.',
        },
        {
          icon: <Layers />,
          title: 'Air Handling & Ventilation',
          description:
            'AHUs, FAHUs, exhaust systems, heat recovery and specialised ventilation for kitchens, toilets, car parks and process areas.',
        },
        {
          icon: <Settings />,
          title: 'Ductwork & Air Distribution',
          description:
            'Precision-fabricated ductwork, VAV boxes, diffusers and grilles designed for correct airflow, low noise and balanced distribution.',
        },
        {
          icon: <ShieldCheck />,
          title: 'Controls & BMS Integration',
          description:
            'Intelligent controllers, sensors and full building management system integration for monitoring, optimisation and remote management.',
        },
        {
          icon: <Activity />,
          title: 'Testing, Balancing & Commissioning',
          description:
            'Systematic air and water balancing, functional testing and performance verification to ensure systems meet design intent at handover.',
        },
      ]}
      whyChooseUs={[
        {
          number: '01',
          title: 'Comfort-Driven Engineering',
          description:
            'Systems are designed around actual occupancy, load profiles and indoor air quality targets rather than generic rule-of-thumb sizing.',
        },
        {
          number: '02',
          title: 'Energy Performance Focus',
          description:
            'Equipment selection, system architecture and control strategies prioritise low operating costs and compliance with energy codes.',
        },
        {
          number: '03',
          title: 'Coordinated Installation',
          description:
            'HVAC works are fully coordinated with structural, architectural and other MEP services to eliminate clashes and protect ceiling and plant-room space.',
        },
        {
          number: '04',
          title: 'Proven Commissioning Process',
          description:
            'Every system is tested, balanced and documented so that performance at handover matches the design and can be maintained over time.',
        },
      ]}
      deliverables={[
        {
          icon: <FileText />,
          title: 'HVAC Design Packages',
          description:
            'Load calculations, schematics, layouts and equipment schedules.',
        },
        {
          icon: <Wrench />,
          title: 'Plant & Equipment Installation',
          description:
            'Chillers, AHUs, VRF outdoor units, pumps and associated works.',
        },
        {
          icon: <CheckCircle2 />,
          title: 'Ductwork & Pipework',
          description:
            'Fabrication, installation, insulation and pressure testing.',
        },
        {
          icon: <BadgeCheck />,
          title: 'Controls & BMS',
          description:
            'Controller installation, sensor placement and system integration.',
        },
        {
          icon: <Clock3 />,
          title: 'Testing & Balancing',
          description:
            'Air/water balancing, functional tests and performance records.',
        },
        {
          icon: <Target />,
          title: 'O&M & Training',
          description:
            'Complete manuals, as-builts and operator training sessions.',
        },
      ]}
      serviceHighlights={[
        {
          title: 'Climate Control that Performs',
          description:
            'HVAC determines how a building feels every day. We engineer systems that deliver consistent comfort, healthy air quality and efficient operation under real-world load conditions.',
          image:
            'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1400&q=90',
        },
        {
          title: 'Efficiency Built In',
          description:
            'From high-efficiency plant to optimised distribution and intelligent controls, every decision is made to reduce energy consumption without compromising comfort or reliability.',
          image:
            'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=90',
        },
        {
          title: 'Handed Over Ready to Operate',
          description:
            'Installation is complete only when systems are fully commissioned, documented and demonstrated. Clients receive HVAC that works as designed from day one.',
          image:
            'https://images.unsplash.com/photo-1581094271901-8022df4466f9?auto=format&fit=crop&w=1400&q=90',
        },
      ]}
      industries={[
        { name: 'Commercial Office Buildings' },
        { name: 'Healthcare & Clinical Facilities' },
        { name: 'Educational Institutions' },
        { name: 'Hospitality & Leisure' },
        { name: 'Industrial & Process Buildings' },
        { name: 'Data Centres' },
        { name: 'Mixed-Use Developments' },
        { name: 'Residential Towers' },
      ]}
      gallery={[
        {
          src: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=90',
          alt: 'HVAC plant room and air handling systems',
        },
        {
          src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=90',
          alt: 'Ductwork and mechanical installation',
        },
        {
          src: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?auto=format&fit=crop&w=1200&q=90',
          alt: 'Building HVAC services coordination',
        },
      ]}
      ctaTitle="Ready for precision climate control?"
      ctaDescription="Partner with our HVAC team to design, install and commission efficient, reliable heating, ventilation and air-conditioning systems that deliver lasting comfort and performance."
      ctaButtonText="Request Consultation"
      ctaButtonLink="/contact"
      ctaSecondaryText="Our Projects"
      ctaSecondaryLink="/projects"
    />
  )
}