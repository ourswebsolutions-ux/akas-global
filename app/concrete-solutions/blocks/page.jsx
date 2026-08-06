'use client'

import ServicePage from '../../components/Service'
import {
  Boxes,
  Layers,
  ShieldCheck,
  Wrench,
  CheckCircle2,
  Clock3,
  BadgeCheck,
  Settings,
  Target,
  FileText,
  Building2,
  Grid3X3,
  Ruler,
} from 'lucide-react'

export default function Page() {
  return (
    <ServicePage
      title="Blocks"
      subtitle="Concrete Blocks Manufactured for Strength, Consistency and Buildability"
      description="Our Blocks service supplies high-quality concrete masonry units for structural and non-structural applications. From standard solid and hollow blocks to lightweight, load-bearing and specialised units, we deliver consistent dimensions, strength and finish that support efficient laying, reliable structural performance and clean architectural results across residential, commercial and industrial projects."
      badge="Concrete Solutions"
      label="Blocks"
      heroImage="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1800&q=90"
      heroImageAlt="Concrete blocks manufacturing and masonry construction"
      imagePosition="right"
      layout="modern"
      theme="light"
      animationPreset="premium"
      buttonText="Request Consultation"
      buttonLink="/contact"
      secondaryButtonText="Our Projects"
      secondaryButtonLink="/projects"
      highlights={[
        'Solid & Hollow Blocks',
        'Load-Bearing Units',
        'Lightweight Blocks',
        'Consistent Dimensions',
        'Structural & Partition Applications',
      ]}
      statistics={[
        {
          value: 16,
          suffix: '+',
          label: 'Years of Experience',
          description:
            'Manufacturing and supplying concrete blocks for buildings and infrastructure.',
        },
        {
          value: 12,
          suffix: 'M+',
          label: 'Blocks Supplied',
          description:
            'High-quality masonry units delivered to residential, commercial and industrial sites.',
        },
        {
          value: 320,
          suffix: '+',
          label: 'Projects Supported',
          description:
            'Consistent supply for walls, partitions and structural masonry packages.',
        },
        {
          value: 99,
          suffix: '%',
          label: 'Dimensional Compliance',
          description:
            'Units produced to tight tolerances for efficient laying and clean finishes.',
        },
      ]}
      benefits={[
        {
          icon: <Boxes />,
          title: 'Full Product Range',
          description:
            'Solid, hollow, load-bearing, lightweight and specialised blocks sized and graded for structural and partition use.',
        },
        {
          icon: <Ruler />,
          title: 'Dimensional Accuracy',
          description:
            'Controlled moulding and curing that deliver consistent sizes, reducing on-site cutting and improving wall quality.',
        },
        {
          icon: <Layers />,
          title: 'Strength & Performance',
          description:
            'Blocks manufactured to required compressive strength, density and durability for the intended application.',
        },
        {
          icon: <ShieldCheck />,
          title: 'Quality Assurance',
          description:
            'Batch testing, visual inspection and traceability that support project specifications and structural design assumptions.',
        },
        {
          icon: <Building2 />,
          title: 'Buildability Focus',
          description:
            'Units designed for efficient handling, laying and bonding so masonry teams can maintain productivity and alignment.',
        },
        {
          icon: <Wrench />,
          title: 'Reliable Supply',
          description:
            'Production planning and logistics coordinated with site programmes to avoid shortages and programme disruption.',
        },
      ]}
      whyChooseUs={[
        {
          number: '01',
          title: 'Specification-Matched Supply',
          description:
            'Blocks selected and produced to meet the strength, density and size requirements of the structural and architectural design.',
        },
        {
          number: '02',
          title: 'Consistent Quality at Scale',
          description:
            'Factory controls ensure unit-to-unit uniformity across large volumes, supporting predictable wall performance.',
        },
        {
          number: '03',
          title: 'Programme-Aware Delivery',
          description:
            'Phased supply aligned with construction sequences so materials arrive when laying teams are ready.',
        },
        {
          number: '04',
          title: 'Technical Support',
          description:
            'Guidance on suitable unit types, mortar compatibility and handling for optimal site results.',
        },
      ]}
      deliverables={[
        {
          icon: <FileText />,
          title: 'Product Data & Approvals',
          description:
            'Technical sheets, strength grades and sample submissions.',
        },
        {
          icon: <Settings />,
          title: 'Manufacture & Testing',
          description:
            'Controlled production and batch quality verification.',
        },
        {
          icon: <CheckCircle2 />,
          title: 'Standard & Special Units',
          description:
            'Solid, hollow, lightweight and load-bearing blocks.',
        },
        {
          icon: <BadgeCheck />,
          title: 'Dimensional Control',
          description:
            'Units within tolerance for efficient, accurate laying.',
        },
        {
          icon: <Clock3 />,
          title: 'Scheduled Delivery',
          description:
            'Logistics timed to site storage and laying progress.',
        },
        {
          icon: <Target />,
          title: 'Documentation Pack',
          description:
            'Delivery notes, certificates and test records.',
        },
      ]}
      serviceHighlights={[
        {
          title: 'Blocks Built for the Wall',
          description:
            'Good masonry starts with consistent units. We manufacture blocks that lay true, bond reliably and meet the structural grades the design assumes.',
          image:
            'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=90',
        },
        {
          title: 'Quality You Can Measure',
          description:
            'Strength, density and dimensions are controlled and documented so project teams can verify compliance with specifications.',
          image:
            'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1400&q=90',
        },
        {
          title: 'Supply That Keeps Pace',
          description:
            'Reliable production and delivery planning reduce the risk of material shortages that slow masonry crews and overall programme.',
          image:
            'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=90',
        },
      ]}
      industries={[
        { name: 'Residential Developments' },
        { name: 'Commercial Buildings' },
        { name: 'Industrial Facilities' },
        { name: 'Educational Campuses' },
        { name: 'Healthcare Projects' },
        { name: 'Hotels & Hospitality' },
        { name: 'Infrastructure Support Buildings' },
        { name: 'Mixed-Use Developments' },
      ]}
      gallery={[
        {
          src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=90',
          alt: 'Concrete blocks production and supply',
        },
        {
          src: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=90',
          alt: 'Masonry construction with concrete blocks',
        },
        {
          src: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=90',
          alt: 'Structural and partition block walls',
        },
      ]}
      ctaTitle="Ready for reliable concrete block supply?"
      ctaDescription="Partner with our blocks team for consistent, specification-grade masonry units delivered on programme to support efficient and high-quality construction."
      ctaButtonText="Request Consultation"
      ctaButtonLink="/contact"
      ctaSecondaryText="Our Projects"
      ctaSecondaryLink="/projects"
    />
  )
}
