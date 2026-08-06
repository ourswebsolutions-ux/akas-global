'use client'

import ServicePage from '../components/Service'
import {
  Layers,
  ShieldCheck,
  Ruler,
  Award,
  Users,
  CheckCircle2,
  Clock3,
  BadgeCheck,
  Hammer,
  Sparkles,
  Settings,
  Droplets,
} from 'lucide-react'

export default function Page() {
  return (
    <ServicePage
      title="Flooring Solutions"
      subtitle="Industrial, Commercial & Specialist Flooring Systems"
      description="Our Flooring Solutions division delivers high-performance floor systems engineered for durability, safety, hygiene and aesthetics across industrial, commercial, healthcare and institutional environments. From heavy-duty industrial floors and polished concrete to epoxy, polyurethane, raised access and decorative finishes, we provide complete design, preparation, installation and quality assurance for floors that perform under the most demanding conditions."
      badge="Performance Flooring Systems"
      label="Flooring Solutions"
      heroImage="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1800&q=90"
      heroImageAlt="Industrial and commercial flooring installation"
      imagePosition="right"
      layout="modern"
      theme="light"
      animationPreset="premium"
      buttonText="Request Consultation"
      buttonLink="/contact"
      secondaryButtonText="Our Projects"
      secondaryButtonLink="/projects"
      highlights={[
        'Industrial Concrete Floors',
        'Epoxy & Resin Systems',
        'Polished Concrete',
        'Raised Access Flooring',
        'Specialist Hygienic Floors',
      ]}
      statistics={[
        {
          value: 14,
          suffix: '+',
          label: 'Years of Experience',
          description:
            'Delivering performance flooring systems across industrial and commercial facilities.',
        },
        {
          value: 190,
          suffix: '+',
          label: 'Flooring Projects',
          description:
            'Warehouses, factories, data centres, hospitals and commercial spaces completed.',
        },
        {
          value: 97,
          suffix: '%',
          label: 'Client Satisfaction',
          description:
            'Built on precise installation, durable systems and reliable project delivery.',
        },
        {
          value: 210,
          suffix: '+',
          label: 'Specialist Installers',
          description:
            'Flooring technicians, supervisors and quality controllers with sector expertise.',
        },
      ]}
      benefits={[
        {
          icon: <Layers />,
          title: 'Industrial Concrete Floors',
          description:
            'Heavy-duty power-floated and steel-fibre reinforced concrete floors designed for high-load warehouses, manufacturing plants and logistics facilities with exceptional flatness and durability.',
        },
        {
          icon: <Droplets />,
          title: 'Epoxy & Resin Flooring',
          description:
            'High-performance epoxy, polyurethane and methyl-methacrylate systems delivering chemical resistance, seamless hygiene, impact strength and decorative options for demanding environments.',
        },
        {
          icon: <Sparkles />,
          title: 'Polished Concrete Systems',
          description:
            'Mechanically polished concrete floors that combine industrial strength with refined aesthetics, low maintenance and long-term cost efficiency for commercial and institutional spaces.',
        },
        {
          icon: <Settings />,
          title: 'Raised Access Flooring',
          description:
            'Modular raised access floor systems for data centres, offices and technical spaces that provide flexible cable management, airflow control and rapid reconfiguration capability.',
        },
        {
          icon: <ShieldCheck />,
          title: 'Hygienic & Specialist Floors',
          description:
            'Seamless, coved and antimicrobial flooring solutions engineered for healthcare, food processing, pharmaceutical and clean-room environments where hygiene is critical.',
        },
        {
          icon: <Ruler />,
          title: 'Surface Preparation & Testing',
          description:
            'Professional substrate preparation, moisture testing, levelling and surface profiling that ensure long-term adhesion and performance of every installed system.',
        },
      ]}
      whyChooseUs={[
        {
          number: '01',
          title: 'Application-Specific Expertise',
          description:
            'We match flooring systems to the exact operational demands of each facility — load, traffic, chemicals, hygiene and aesthetics — rather than applying generic solutions.',
        },
        {
          number: '02',
          title: 'Precision Installation Standards',
          description:
            'Our teams follow documented method statements, controlled environmental conditions and progressive quality checks to achieve consistent results across large floor areas.',
        },
        {
          number: '03',
          title: 'Durability & Life-Cycle Focus',
          description:
            'Systems are selected and installed for long service life, reduced maintenance and minimal disruption, protecting the client’s operational continuity and investment.',
        },
        {
          number: '04',
          title: 'Integrated Project Delivery',
          description:
            'Flooring packages are coordinated with structural concrete, MEP services and follow-on trades to ensure interfaces are managed and programme targets are met.',
        },
      ]}
      deliverables={[
        {
          icon: <CheckCircle2 />,
          title: 'Flooring Specification',
          description:
            'System selection, performance criteria and detailed method statements.',
        },
        {
          icon: <Ruler />,
          title: 'Substrate Preparation',
          description:
            'Moisture testing, surface profiling, repairs and levelling works.',
        },
        {
          icon: <Hammer />,
          title: 'System Installation',
          description:
            'Concrete floors, resin systems, polished finishes and raised floors.',
        },
        {
          icon: <BadgeCheck />,
          title: 'Quality Assurance',
          description:
            'Flatness surveys, adhesion testing and finish inspection records.',
        },
        {
          icon: <Clock3 />,
          title: 'Curing & Protection',
          description:
            'Controlled curing, protection measures and handover readiness.',
        },
        {
          icon: <Users />,
          title: 'Documentation & Training',
          description:
            'As-built records, maintenance guidelines and client instruction.',
        },
      ]}
      serviceHighlights={[
        {
          title: 'Performance-Driven Flooring Design',
          description:
            'Successful floors begin with a clear understanding of operational demands. Our specialists evaluate load, traffic, chemical exposure and hygiene requirements to specify systems that deliver long-term reliability.',
          image:
            'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1400&q=90',
        },
        {
          title: 'Controlled Installation Excellence',
          description:
            'Flooring works are executed by trained teams under strict environmental and quality controls, ensuring correct substrate preparation, precise application and consistent finish quality across large areas.',
          image:
            'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1400&q=90',
        },
        {
          title: 'Verified Performance & Handover',
          description:
            'Before acceptance, every floor system undergoes flatness measurement, adhesion testing and visual inspection so the completed surface meets both technical specifications and operational expectations.',
          image:
            'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=90',
        },
      ]}
      industries={[
        { name: 'Warehousing & Logistics' },
        { name: 'Manufacturing Plants' },
        { name: 'Data Centres' },
        { name: 'Healthcare Facilities' },
        { name: 'Food & Beverage' },
        { name: 'Commercial Offices' },
        { name: 'Retail & Showrooms' },
        { name: 'Educational Institutions' },
      ]}
      gallery={[
        {
          src: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=90',
          alt: 'Industrial concrete flooring installation',
        },
        {
          src: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1200&q=90',
          alt: 'Resin and epoxy flooring systems',
        },
        {
          src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=90',
          alt: 'Polished commercial flooring finish',
        },
      ]}
      ctaTitle="Ready to discuss your flooring project?"
      ctaDescription="Our flooring specialists are prepared to deliver durable, high-performance and precisely installed floor systems tailored to your operational requirements."
      ctaButtonText="Request Consultation"
      ctaButtonLink="/contact"
      ctaSecondaryText="Our Projects"
      ctaSecondaryLink="/projects"
    />
  )
}