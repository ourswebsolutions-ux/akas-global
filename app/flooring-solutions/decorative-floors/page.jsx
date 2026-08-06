'use client'

import ServicePage from '../../components/Service'
import {
  Sparkles,
  Layers,
  ShieldCheck,
  Wrench,
  CheckCircle2,
  Clock3,
  BadgeCheck,
  Settings,
  Target,
  FileText,
  Palette,
  Paintbrush,
  Building2,
} from 'lucide-react'

export default function Page() {
  return (
    <ServicePage
      title="Decorative Floors"
      subtitle="High-Performance Decorative Flooring for Visual Impact and Durability"
      description="Our Decorative Floors service delivers polished, resin, micro-cement, terrazzo and specialised decorative floor systems that combine aesthetic refinement with practical performance. From commercial lobbies and retail spaces to hospitality and residential interiors, we install floors that look intentional, wear well and support the overall design vision."
      badge="Flooring Solutions"
      label="Decorative Floors"
      heroImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=90"
      heroImageAlt="Decorative polished and resin flooring interiors"
      imagePosition="right"
      layout="modern"
      theme="light"
      animationPreset="premium"
      buttonText="Request Consultation"
      buttonLink="/contact"
      secondaryButtonText="Our Projects"
      secondaryButtonLink="/projects"
      highlights={[
        'Polished Concrete Floors',
        'Resin & Epoxy Systems',
        'Micro-Cement & Seamless Finishes',
        'Terrazzo & Aggregate Floors',
        'Custom Colour & Pattern Design',
      ]}
      statistics={[
        {
          value: 16,
          suffix: '+',
          label: 'Years of Experience',
          description:
            'Installing decorative floor systems for commercial, hospitality and residential projects.',
        },
        {
          value: 155,
          suffix: '+',
          label: 'Decorative Floor Projects',
          description:
            'Completed polished, resin, terrazzo and specialty floor packages.',
        },
        {
          value: 410000,
          suffix: '+',
          label: 'Square Metres Installed',
          description:
            'High-quality decorative floors delivered to design and performance standards.',
        },
        {
          value: 97,
          suffix: '%',
          label: 'Client Satisfaction',
          description:
            'Floors that meet aesthetic intent and long-term wear expectations.',
        },
      ]}
      benefits={[
        {
          icon: <Sparkles />,
          title: 'Polished Concrete',
          description:
            'Mechanically ground and polished slabs with controlled sheen, densifiers and sealers for durable, low-maintenance interiors.',
        },
        {
          icon: <Paintbrush />,
          title: 'Resin & Epoxy Systems',
          description:
            'Seamless epoxy, polyurethane and decorative resin floors with colour, flake, metallic and custom effects.',
        },
        {
          icon: <Layers />,
          title: 'Micro-Cement & Seamless',
          description:
            'Thin, continuous finishes for floors and transitions that deliver a refined, modern aesthetic with minimal joints.',
        },
        {
          icon: <Palette />,
          title: 'Terrazzo & Aggregates',
          description:
            'Traditional and modern terrazzo systems with selected aggregates, colours and grind levels for distinctive character.',
        },
        {
          icon: <ShieldCheck />,
          title: 'Performance Under Use',
          description:
            'Systems specified for abrasion, chemical resistance and cleanability appropriate to the space and traffic.',
        },
        {
          icon: <Wrench />,
          title: 'Design Coordination',
          description:
            'Close collaboration on samples, mock-ups and detailing so the finished floor matches the approved design intent.',
        },
      ]}
      whyChooseUs={[
        {
          number: '01',
          title: 'Sample-Led Approval',
          description:
            'Mock-ups and approved samples lock in colour, texture and sheen before full installation begins.',
        },
        {
          number: '02',
          title: 'Substrate Preparation Expertise',
          description:
            'Proper grinding, repair and priming that determine adhesion, flatness and long-term appearance.',
        },
        {
          number: '03',
          title: 'Craftsmanship at Scale',
          description:
            'Skilled teams who maintain consistency across large areas and complex layouts.',
        },
        {
          number: '04',
          title: 'Durable Beauty',
          description:
            'Finishes selected and applied for real-world wear, cleaning regimes and service life — not just initial appearance.',
        },
      ]}
      deliverables={[
        {
          icon: <FileText />,
          title: 'Samples & Mock-ups',
          description:
            'Approved finish references and site panels.',
        },
        {
          icon: <Settings />,
          title: 'Substrate Preparation',
          description:
            'Grinding, repair, priming and moisture control.',
        },
        {
          icon: <CheckCircle2 />,
          title: 'System Installation',
          description:
            'Polished, resin, micro-cement or terrazzo application.',
        },
        {
          icon: <BadgeCheck />,
          title: 'Custom Effects',
          description:
            'Colour, pattern, flake and metallic finishes as designed.',
        },
        {
          icon: <Clock3 />,
          title: 'Sealing & Protection',
          description:
            'Densifiers, sealers and initial protection layers.',
        },
        {
          icon: <Target />,
          title: 'Handover & Care Guide',
          description:
            'Final inspection and recommended maintenance regime.',
        },
      ]}
      serviceHighlights={[
        {
          title: 'Floors That Define the Space',
          description:
            'Decorative floors are often the largest visible surface in a room. We deliver finishes that feel intentional, consistent and aligned with the overall interior design.',
          image:
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=90',
        },
        {
          title: 'Beauty Built on Preparation',
          description:
            'The quality of a decorative floor is decided before the finish is applied. Thorough substrate work protects both appearance and longevity.',
          image:
            'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=90',
        },
        {
          title: 'Performance That Endures',
          description:
            'We specify systems for the actual traffic, cleaning methods and exposure of the space so the floor still looks designed years after handover.',
          image:
            'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=90',
        },
      ]}
      industries={[
        { name: 'Commercial Offices & Lobbies' },
        { name: 'Retail & Showrooms' },
        { name: 'Hotels & Hospitality' },
        { name: 'Residential Developments' },
        { name: 'Healthcare Interiors' },
        { name: 'Educational Facilities' },
        { name: 'Restaurants & Leisure' },
        { name: 'Mixed-Use Developments' },
      ]}
      gallery={[
        {
          src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=90',
          alt: 'Decorative polished concrete flooring',
        },
        {
          src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=90',
          alt: 'Resin and seamless decorative floors',
        },
        {
          src: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=90',
          alt: 'High-quality decorative floor finishes',
        },
      ]}
      ctaTitle="Ready to elevate your interiors with decorative floors?"
      ctaDescription="Partner with our decorative flooring team to deliver polished, resin, micro-cement and terrazzo systems that combine design impact with lasting performance."
      ctaButtonText="Request Consultation"
      ctaButtonLink="/contact"
      ctaSecondaryText="Our Projects"
      ctaSecondaryLink="/projects"
    />
  )
}