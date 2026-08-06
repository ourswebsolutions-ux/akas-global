'use client'

import ServicePage from '../../components/Service'
import {
  Split,
  Layers,
  ShieldCheck,
  Wrench,
  CheckCircle2,
  Clock3,
  BadgeCheck,
  Settings,
  Target,
  FileText,
  Ruler,
  Building2,
  Move,
} from 'lucide-react'

export default function Page() {
  return (
    <ServicePage
      title="Expansion Joints"
      subtitle="Engineered Floor Expansion Joints for Movement and Durability"
      description="Our Expansion Joints service designs, supplies and installs floor expansion and movement joint systems for concrete and finished floors. From structural isolation and seismic joints to heavy-duty industrial and architectural covers, we provide solutions that accommodate movement, protect edges and maintain a safe, continuous floor surface under traffic and environmental loads."
      badge="Flooring Solutions"
      label="Expansion Joints"
      heroImage="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1800&q=90"
      heroImageAlt="Floor expansion joint systems installation"
      imagePosition="right"
      layout="modern"
      theme="light"
      animationPreset="premium"
      buttonText="Request Consultation"
      buttonLink="/contact"
      secondaryButtonText="Our Projects"
      secondaryButtonLink="/projects"
      highlights={[
        'Structural & Isolation Joints',
        'Heavy-Duty Industrial Systems',
        'Architectural Joint Covers',
        'Seismic & Large-Movement Joints',
        'Edge Protection & Load Transfer',
      ]}
      statistics={[
        {
          value: 16,
          suffix: '+',
          label: 'Years of Experience',
          description:
            'Supplying and installing expansion joint systems for buildings and industrial floors.',
        },
        {
          value: 175,
          suffix: '+',
          label: 'Joint Projects',
          description:
            'Completed expansion and movement joint packages across sectors.',
        },
        {
          value: 85,
          suffix: 'km+',
          label: 'Joints Installed',
          description:
            'Linear metres of floor joints delivered to design and traffic requirements.',
        },
        {
          value: 98,
          suffix: '%',
          label: 'Performance Retention',
          description:
            'Systems that maintain movement capacity and surface integrity in service.',
        },
      ]}
      benefits={[
        {
          icon: <Move />,
          title: 'Movement Accommodation',
          description:
            'Systems sized for thermal, shrinkage, structural and seismic movement so floors remain continuous without cracking or binding.',
        },
        {
          icon: <Layers />,
          title: 'Heavy-Duty & Industrial',
          description:
            'Joint systems rated for forklift, pallet truck and heavy wheel loads with robust edge protection and load-transfer capacity.',
        },
        {
          icon: <Ruler />,
          title: 'Architectural Covers',
          description:
            'Flush and surface-mounted covers that integrate with finished floors while concealing the joint and allowing movement.',
        },
        {
          icon: <ShieldCheck />,
          title: 'Edge Protection',
          description:
            'Armoured edges and nosings that prevent spalling and maintain a durable, safe transition under repeated traffic.',
        },
        {
          icon: <Wrench />,
          title: 'Correct Detailing',
          description:
            'Selection and installation coordinated with slab design, waterproofing and finishes for long-term performance.',
        },
        {
          icon: <Building2 />,
          title: 'New Build & Retrofit',
          description:
            'Solutions for new construction and rehabilitation of failed or inadequate existing joints.',
        },
      ]}
      whyChooseUs={[
        {
          number: '01',
          title: 'Movement-First Design',
          description:
            'Joint type, width and cover selected from actual expected movements and traffic, not generic catalogue choices.',
        },
        {
          number: '02',
          title: 'Traffic-Matched Systems',
          description:
            'Industrial, commercial and pedestrian systems specified for the real loads and wheel types they will experience.',
        },
        {
          number: '03',
          title: 'Installation Quality',
          description:
            'Accurate alignment, secure fixing and proper sealant or cover installation that determine service life.',
        },
        {
          number: '04',
          title: 'Full-System Support',
          description:
            'From design advice and product selection through supply, installation and handover documentation.',
        },
      ]}
      deliverables={[
        {
          icon: <FileText />,
          title: 'Joint Schedule & Design',
          description:
            'Locations, types, movement capacity and cover selection.',
        },
        {
          icon: <Settings />,
          title: 'System Supply',
          description:
            'Joint assemblies, covers, nosings and sealants.',
        },
        {
          icon: <CheckCircle2 />,
          title: 'Installation',
          description:
            'Accurate placement, fixing and edge preparation.',
        },
        {
          icon: <BadgeCheck />,
          title: 'Heavy-Duty Solutions',
          description:
            'Industrial and high-load joint systems as specified.',
        },
        {
          icon: <Clock3 />,
          title: 'Sealant & Finishing',
          description:
            'Elastomeric seals and surface completion.',
        },
        {
          icon: <Target />,
          title: 'Inspection & Handover',
          description:
            'Verification of alignment, movement and documentation.',
        },
      ]}
      serviceHighlights={[
        {
          title: 'Joints That Actually Move',
          description:
            'An expansion joint only works if it can accommodate real movement without damage. We size and install systems for the forces and displacements the structure will experience.',
          image:
            'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=90',
        },
        {
          title: 'Edges That Survive Traffic',
          description:
            'Failed joints often start at unprotected edges. Armoured systems and correct detailing keep transitions safe and durable under wheels and foot traffic.',
          image:
            'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=90',
        },
        {
          title: 'From Design to In-Service Performance',
          description:
            'We support the full process — selection, supply and installation — so joints perform from day one and through the life of the floor.',
          image:
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=90',
        },
      ]}
      industries={[
        { name: 'Industrial & Warehousing' },
        { name: 'Logistics & Distribution' },
        { name: 'Commercial Buildings' },
        { name: 'Car Parks & Podiums' },
        { name: 'Airports & Transport' },
        { name: 'Healthcare Facilities' },
        { name: 'Retail & Mixed-Use' },
        { name: 'Educational Campuses' },
      ]}
      gallery={[
        {
          src: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=90',
          alt: 'Floor expansion joint installation',
        },
        {
          src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=90',
          alt: 'Heavy-duty industrial joint systems',
        },
        {
          src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=90',
          alt: 'Architectural floor joint covers',
        },
      ]}
      ctaTitle="Ready for expansion joints that perform?"
      ctaDescription="Partner with our expansion joints team for correctly specified, robustly installed systems that accommodate movement and protect floor edges for the long term."
      ctaButtonText="Request Consultation"
      ctaButtonLink="/contact"
      ctaSecondaryText="Our Projects"
      ctaSecondaryLink="/projects"
    />
  )
}