'use client'

import ServicePage from '../../components/Service'
import {
  Building2,
  Layers,
  ShieldCheck,
  Wrench,
  CheckCircle2,
  Clock3,
  BadgeCheck,
  Settings,
  Target,
  FileText,
  Boxes,
  Ruler,
  Crane,
} from 'lucide-react'

export default function Page() {
  return (
    <ServicePage
      title="Precast"
      subtitle="Precision Precast Concrete Elements for Speed and Quality"
      description="Our Precast service designs, manufactures and installs high-quality precast concrete elements for structural and architectural applications. From beams, columns and slabs to façades, stairs and specialised components, we deliver factory-controlled quality, faster site programmes and consistent finishes for commercial, residential and infrastructure projects."
      badge="Concrete Solutions"
      label="Precast"
      heroImage="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1800&q=90"
      heroImageAlt="Precast concrete elements manufacturing and installation"
      imagePosition="right"
      layout="modern"
      theme="light"
      animationPreset="premium"
      buttonText="Request Consultation"
      buttonLink="/contact"
      secondaryButtonText="Our Projects"
      secondaryButtonLink="/projects"
      highlights={[
        'Structural Precast Elements',
        'Architectural Façade Panels',
        'Stairs, Landings & Specials',
        'Factory Quality Control',
        'Erection & Connection Systems',
      ]}
      statistics={[
        {
          value: 16,
          suffix: '+',
          label: 'Years of Experience',
          description:
            'Designing and supplying precast solutions for buildings and infrastructure.',
        },
        {
          value: 180,
          suffix: '+',
          label: 'Precast Projects',
          description:
            'Completed structural and architectural precast packages.',
        },
        {
          value: 95000,
          suffix: '+',
          label: 'Elements Produced',
          description:
            'Beams, slabs, panels, stairs and specialised components delivered.',
        },
        {
          value: 30,
          suffix: '%',
          label: 'Programme Savings',
          description:
            'Typical site time reduction through off-site manufacture and rapid erection.',
        },
      ]}
      benefits={[
        {
          icon: <Boxes />,
          title: 'Structural Precast Systems',
          description:
            'Beams, columns, hollow-core and solid slabs, walls and foundations manufactured to design loads and connection details.',
        },
        {
          icon: <Layers />,
          title: 'Architectural Precast',
          description:
            'Façade panels, cladding units and feature elements with controlled finishes, textures and embedded details.',
        },
        {
          icon: <Ruler />,
          title: 'Design & Detailing',
          description:
            'Shop drawings, connection design and erection sequences coordinated with the main structural and architectural teams.',
        },
        {
          icon: <ShieldCheck />,
          title: 'Factory Quality Control',
          description:
            'Controlled casting, curing and inspection environments that deliver consistent strength, dimensional accuracy and finish quality.',
        },
        {
          icon: <Crane />,
          title: 'Erection & Installation',
          description:
            'Lifting plans, temporary works advice and installation supervision for safe, accurate placement on site.',
        },
        {
          icon: <Wrench />,
          title: 'Connection & Interface',
          description:
            'Grouting, welding, mechanical connectors and sealants executed to approved details for structural continuity and weather performance.',
        },
      ]}
      whyChooseUs={[
        {
          number: '01',
          title: 'Off-Site Advantage',
          description:
            'Manufacture under controlled conditions reduces weather risk, improves quality and shortens critical site programmes.',
        },
        {
          number: '02',
          title: 'Integrated Design Support',
          description:
            'Early involvement in detailing and connections avoids costly redesign and ensures elements fit the overall structure.',
        },
        {
          number: '03',
          title: 'Reliable Supply Chain',
          description:
            'Production planning aligned with erection sequences so elements arrive when the site is ready to receive them.',
        },
        {
          number: '04',
          title: 'Single-Point Accountability',
          description:
            'One team responsible from design coordination through manufacture, delivery and installation support.',
        },
      ]}
      deliverables={[
        {
          icon: <FileText />,
          title: 'Shop Drawings & Approvals',
          description:
            'Element drawings, connections and erection method statements.',
        },
        {
          icon: <Settings />,
          title: 'Manufacture & QC',
          description:
            'Factory casting, curing and dimensional inspection.',
        },
        {
          icon: <CheckCircle2 />,
          title: 'Structural Elements',
          description:
            'Beams, columns, slabs, walls and foundations.',
        },
        {
          icon: <BadgeCheck />,
          title: 'Architectural Units',
          description:
            'Façade panels, feature pieces and finished surfaces.',
        },
        {
          icon: <Clock3 />,
          title: 'Delivery & Erection Support',
          description:
            'Logistics, lifting coordination and installation guidance.',
        },
        {
          icon: <Target />,
          title: 'As-Built & Handover',
          description:
            'Records, certificates and completion documentation.',
        },
      ]}
      serviceHighlights={[
        {
          title: 'Speed Without Compromising Quality',
          description:
            'Precast shifts critical work off-site. Elements arrive ready for erection, compressing programmes while factory controls protect consistency and finish.',
          image:
            'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1400&q=90',
        },
        {
          title: 'Detail That Fits First Time',
          description:
            'Accurate shop drawings and connection design mean elements land correctly, reducing site cutting, packing and rework.',
          image:
            'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=90',
        },
        {
          title: 'Architectural Expression in Concrete',
          description:
            'From smooth and textured façades to complex geometric panels, precast delivers durable architectural concrete with repeatable quality.',
          image:
            'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=90',
        },
      ]}
      industries={[
        { name: 'High-Rise & Commercial' },
        { name: 'Residential Towers' },
        { name: 'Infrastructure & Bridges' },
        { name: 'Industrial Buildings' },
        { name: 'Hotels & Hospitality' },
        { name: 'Educational Campuses' },
        { name: 'Healthcare Facilities' },
        { name: 'Mixed-Use Developments' },
      ]}
      gallery={[
        {
          src: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=90',
          alt: 'Precast concrete manufacturing and elements',
        },
        {
          src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=90',
          alt: 'Precast installation on construction site',
        },
        {
          src: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=90',
          alt: 'Architectural precast façade panels',
        },
      ]}
      ctaTitle="Ready to accelerate with precast?"
      ctaDescription="Partner with our precast team for design coordination, factory-controlled manufacture and erection support that delivers quality and programme certainty."
      ctaButtonText="Request Consultation"
      ctaButtonLink="/contact"
      ctaSecondaryText="Our Projects"
      ctaSecondaryLink="/projects"
    />
  )
}