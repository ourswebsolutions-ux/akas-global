'use client'

import ServicePage from '../components/Service'
import {
  Route,
  ClipboardCheck,
  DraftingCompass,
  Truck,
  ShieldCheck,
  Award,
  Users,
  CheckCircle2,
  Hammer,
  Building2,
  Clock3,
  BadgeCheck,
} from 'lucide-react'

export default function Page() {
  return (
    <ServicePage
      title="Infrastructure"
      subtitle="Civil Infrastructure Engineering & Development Solutions"
      description="Our Infrastructure division delivers large-scale civil engineering projects that form the backbone of modern economies. From highways, bridges, and interchanges to utilities networks, drainage systems, and urban infrastructure, we provide end-to-end solutions encompassing planning, detailed design, construction, and asset handover. Integrating advanced geotechnical engineering, precise surveying, and disciplined project controls, we execute complex infrastructure works that meet international standards for durability, safety, and long-term performance."
      badge="Core Infrastructure Service"
      label="Infrastructure"
      heroImage="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1800&q=90"
      heroImageAlt="Major civil infrastructure and highway construction site"
      imagePosition="right"
      layout="premium"
      theme="light"
      animationPreset="premium"
      buttonText="Request Consultation"
      buttonLink="/contact"
      secondaryButtonText="Our Projects"
      secondaryButtonLink="/projects"
      highlights={[
        'Highways & Road Networks',
        'Bridges & Interchanges',
        'Utilities & Drainage Systems',
        'Urban Infrastructure Development',
        'Geotechnical & Civil Excellence',
      ]}
      statistics={[
        {
          value: 18,
          suffix: '+',
          label: 'Years of Experience',
          description:
            'Delivering complex civil infrastructure across multiple regions.',
        },
        {
          value: 85,
          suffix: '+',
          label: 'Infrastructure Projects',
          description:
            'Highways, bridges, utilities and urban development schemes.',
        },
        {
          value: 97,
          suffix: '%',
          label: 'On-Time Delivery',
          description:
            'Achieved through rigorous planning and disciplined site control.',
        },
        {
          value: 950,
          suffix: '+',
          label: 'Specialized Personnel',
          description:
            'Civil engineers, surveyors, supervisors and skilled crews.',
        },
      ]}
      benefits={[
        {
          icon: <ClipboardCheck />,
          title: 'Master Planning & Feasibility',
          description:
            'Comprehensive corridor studies, traffic analysis, environmental assessments, and cost-benefit evaluations establish a solid foundation for infrastructure investment decisions.',
        },
        {
          icon: <DraftingCompass />,
          title: 'Detailed Civil Engineering Design',
          description:
            'Our teams produce precise geometric designs, pavement structures, bridge engineering, drainage networks, and utility corridors using BIM and advanced modeling tools.',
        },
        {
          icon: <Truck />,
          title: 'Earthworks & Material Management',
          description:
            'Large-scale excavation, embankment construction, material testing, and optimized haulage logistics ensure efficient and environmentally responsible site operations.',
        },
        {
          icon: <Route />,
          title: 'Road & Bridge Construction',
          description:
            'From subgrade preparation and pavement layers to structural concrete and steel bridge works, every element is executed under strict quality and safety regimes.',
        },
        {
          icon: <ShieldCheck />,
          title: 'Safety & Environmental Compliance',
          description:
            'International HSE protocols, traffic management plans, and environmental protection measures are enforced throughout every phase of infrastructure delivery.',
        },
        {
          icon: <Award />,
          title: 'Testing, Commissioning & Handover',
          description:
            'Pavement testing, structural load verification, drainage performance checks, and complete as-built documentation guarantee assets ready for public use.',
        },
      ]}
      whyChooseUs={[
        {
          number: '01',
          title: 'Integrated Civil Engineering Capability',
          description:
            'In-house expertise covering highways, bridges, utilities, and geotechnical works under a single accountable delivery organization.',
        },
        {
          number: '02',
          title: 'Proven Large-Scale Project Experience',
          description:
            'Demonstrated ability to mobilize resources, manage interfaces, and deliver multi-package infrastructure programs on schedule.',
        },
        {
          number: '03',
          title: 'Advanced Construction Technology',
          description:
            'GPS-guided earthworks, continuous pavement quality control, and digital progress monitoring improve accuracy and productivity.',
        },
        {
          number: '04',
          title: 'Long-Term Asset Performance Focus',
          description:
            'Designs and construction methods prioritize durability, maintainability, and whole-life cost efficiency for the asset owner.',
        },
      ]}
      deliverables={[
        {
          icon: <CheckCircle2 />,
          title: 'Corridor Planning',
          description:
            'Route alignment studies, traffic modeling and feasibility reports.',
        },
        {
          icon: <Building2 />,
          title: 'Detailed Design',
          description:
            'Geometric, structural, pavement and drainage engineering packages.',
        },
        {
          icon: <Hammer />,
          title: 'Civil Construction',
          description:
            'Earthworks, road construction, bridges and utility installations.',
        },
        {
          icon: <BadgeCheck />,
          title: 'Quality Assurance',
          description:
            'Material testing, layer inspections and compliance documentation.',
        },
        {
          icon: <Clock3 />,
          title: 'Commissioning',
          description:
            'Performance verification, load testing and operational readiness.',
        },
        {
          icon: <Users />,
          title: 'Asset Handover',
          description:
            'As-built records, maintenance manuals and client training.',
        },
      ]}
      serviceHighlights={[
        {
          title: 'Strategic Infrastructure Planning',
          description:
            'Successful infrastructure begins with rigorous planning. Our specialists develop accurate traffic forecasts, alignment options, environmental mitigation strategies, and construction phasing plans that reduce risk and optimize capital investment.',
          image:
            'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1400&q=90',
        },
        {
          title: 'Precision Civil Works Execution',
          description:
            'Site operations are directed by experienced civil engineers and supervisors who coordinate earthworks, pavement placement, structural concrete, and utility works while maintaining continuous quality and safety oversight.',
          image:
            'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1400&q=90',
        },
        {
          title: 'Verified Performance & Delivery',
          description:
            'Prior to handover, every infrastructure asset undergoes systematic testing, structural verification, drainage performance checks, and comprehensive documentation to confirm readiness for long-term public service.',
          image:
            'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=90',
        },
      ]}
      industries={[
        { name: 'Highway Authorities' },
        { name: 'Municipal Governments' },
        { name: 'Port & Logistics Hubs' },
        { name: 'Industrial Parks' },
        { name: 'Residential Masterplans' },
        { name: 'Airport Infrastructure' },
        { name: 'Energy & Utility Corridors' },
        { name: 'Public-Private Partnerships' },
      ]}
      gallery={[
        {
          src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=90',
          alt: 'Highway and civil construction site',
        },
        {
          src: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=90',
          alt: 'Earthworks and infrastructure development',
        },
        {
          src: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=90',
          alt: 'Engineering and construction operations',
        },
      ]}
      ctaTitle="Ready to discuss your infrastructure project?"
      ctaDescription="Our civil engineering team is prepared to deliver durable, high-performance infrastructure with precision and accountability."
      ctaButtonText="Request Consultation"
      ctaButtonLink="/contact"
      ctaSecondaryText="Our Projects"
      ctaSecondaryLink="/projects"
    />
  )
}