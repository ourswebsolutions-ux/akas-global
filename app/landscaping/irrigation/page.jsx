'use client'

import ServicePage from '../../components/Service'
import {
  Droplets,
  Waves,
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
      title="Irrigation"
      subtitle="Efficient Water Delivery for Healthy Landscapes"
      description="Our Irrigation service designs, installs and commissions complete landscape irrigation systems that deliver the right amount of water to every planted zone. From drip and sprinkler networks to smart controllers, filtration and pump stations, we create efficient, reliable irrigation solutions that support plant health while minimising water consumption and operational cost."
      badge="Landscaping"
      label="Irrigation"
      heroImage="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1800&q=90"
      heroImageAlt="Landscape irrigation system installation"
      imagePosition="right"
      layout="immersive"
      theme="light"
      animationPreset="premium"
      buttonText="Request Consultation"
      buttonLink="/contact"
      secondaryButtonText="Our Projects"
      secondaryButtonLink="/projects"
      highlights={[
        'Drip & Micro-Irrigation',
        'Sprinkler & Rotor Systems',
        'Smart Controllers & Sensors',
        'Pump Stations & Filtration',
        'Water-Efficient Design',
      ]}
      statistics={[
        {
          value: 16,
          suffix: '+',
          label: 'Years of Experience',
          description:
            'Designing and installing irrigation systems for residential, commercial and public landscapes.',
        },
        {
          value: 120,
          suffix: '+',
          label: 'Irrigation Projects',
          description:
            'Completed systems across parks, communities, campuses and commercial developments.',
        },
        {
          value: 35,
          suffix: '%',
          label: 'Average Water Saving',
          description:
            'Achieved through efficient design, zoning and smart control technology compared with conventional systems.',
        },
        {
          value: 99,
          suffix: '%',
          label: 'System Reliability',
          description:
            'Delivered through quality components, proper installation and structured commissioning.',
        },
      ]}
      benefits={[
        {
          icon: <Droplets />,
          title: 'Drip & Micro-Irrigation',
          description:
            'Precision water delivery to individual plants and root zones, ideal for trees, shrubs, planters and water-sensitive planting schemes.',
        },
        {
          icon: <Waves />,
          title: 'Sprinkler & Rotor Systems',
          description:
            'Coverage solutions for turf, groundcover and open planted areas with matched precipitation rates and uniform distribution.',
        },
        {
          icon: <Settings />,
          title: 'Smart Controllers & Sensors',
          description:
            'Weather-based and soil-moisture controllers that automatically adjust schedules, reducing waste and protecting plant health.',
        },
        {
          icon: <Layers />,
          title: 'Pump Stations & Filtration',
          description:
            'Reliable pump sets, pressure regulation and filtration packages that protect downstream components and maintain system performance.',
        },
        {
          icon: <ShieldCheck />,
          title: 'Zoning & Hydraulic Design',
          description:
            'Logical zone layouts matched to plant water demand, sun exposure and soil type for efficient operation and easy maintenance.',
        },
        {
          icon: <Activity />,
          title: 'Commissioning & Optimisation',
          description:
            'Full system testing, coverage checks, schedule programming and fine-tuning to achieve design performance from day one.',
        },
      ]}
      whyChooseUs={[
        {
          number: '01',
          title: 'Plant-First Design',
          description:
            'Irrigation is engineered around actual plant water requirements and microclimates, not generic coverage patterns.',
        },
        {
          number: '02',
          title: 'Water Efficiency Focus',
          description:
            'Every system is designed to minimise consumption through correct component selection, zoning and smart control strategies.',
        },
        {
          number: '03',
          title: 'Integrated with Softscape',
          description:
            'Irrigation layouts are coordinated with planting plans so that emitters, laterals and valves support rather than conflict with the landscape design.',
        },
        {
          number: '04',
          title: 'Maintainable & Future-Ready',
          description:
            'Accessible valves, clear zoning and expandable controller capacity make ongoing operation and future modifications straightforward.',
        },
      ]}
      deliverables={[
        {
          icon: <FileText />,
          title: 'Irrigation Design Packages',
          description:
            'Hydraulic calculations, layout drawings and material specifications.',
        },
        {
          icon: <Wrench />,
          title: 'System Installation',
          description:
            'Mainlines, laterals, emitters, valves and control wiring.',
        },
        {
          icon: <CheckCircle2 />,
          title: 'Pump & Filtration Works',
          description:
            'Pump stations, filters, pressure regulation and control panels.',
        },
        {
          icon: <BadgeCheck />,
          title: 'Controller Programming',
          description:
            'Schedule setup, sensor integration and seasonal adjustment.',
        },
        {
          icon: <Clock3 />,
          title: 'Testing & Commissioning',
          description:
            'Pressure tests, coverage verification and system optimisation.',
        },
        {
          icon: <Target />,
          title: 'O&M Documentation',
          description:
            'As-built drawings, controller manuals and maintenance schedules.',
        },
      ]}
      serviceHighlights={[
        {
          title: 'Water Where It Matters',
          description:
            'Effective irrigation delivers precise amounts of water to the root zone at the right time. We design systems that support healthy growth while eliminating waste from overspray, runoff and unnecessary runtime.',
          image:
            'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1400&q=90',
        },
        {
          title: 'Smart Control, Lower Consumption',
          description:
            'Weather stations, soil sensors and intelligent controllers automatically adapt irrigation to real conditions, reducing water use and protecting landscapes during both dry and wet periods.',
          image:
            'https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=1400&q=90',
        },
        {
          title: 'Reliable from Day One',
          description:
            'Quality components, proper installation and thorough commissioning ensure the system performs as designed — with clear documentation so that ongoing operation remains simple and effective.',
          image:
            'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1400&q=90',
        },
      ]}
      industries={[
        { name: 'Residential Communities' },
        { name: 'Commercial Landscapes' },
        { name: 'Parks & Public Realm' },
        { name: 'Hotels & Resorts' },
        { name: 'Educational Campuses' },
        { name: 'Corporate Headquarters' },
        { name: 'Mixed-Use Developments' },
        { name: 'Sports & Recreation Facilities' },
      ]}
      gallery={[
        {
          src: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1200&q=90',
          alt: 'Landscape irrigation system in operation',
        },
        {
          src: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=1200&q=90',
          alt: 'Irrigated softscape and planting zones',
        },
        {
          src: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1200&q=90',
          alt: 'Healthy irrigated landscape establishment',
        },
      ]}
      ctaTitle="Ready to optimise landscape water use?"
      ctaDescription="Partner with our irrigation team to design and install efficient, reliable systems that keep planted landscapes healthy while minimising water consumption and operating costs."
      ctaButtonText="Request Consultation"
      ctaButtonLink="/contact"
      ctaSecondaryText="Our Projects"
      ctaSecondaryLink="/projects"
    />
  )
}