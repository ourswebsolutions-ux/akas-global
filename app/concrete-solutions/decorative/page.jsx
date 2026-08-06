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
      title="Decorative"
      subtitle="Architectural & Decorative Concrete Finishes That Elevate Spaces"
      description="Our Decorative Concrete service delivers specialised finishes and architectural concrete solutions that combine structural performance with visual impact. From polished and stamped surfaces to coloured, exposed-aggregate and textured finishes, we create durable, high-aesthetic concrete for floors, façades, external works and feature elements across commercial, hospitality and residential projects."
      badge="Concrete Solutions"
      label="Decorative"
      heroImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=90"
      heroImageAlt="Decorative and architectural concrete finishes"
      imagePosition="right"
      layout="modern"
      theme="light"
      animationPreset="premium"
      buttonText="Request Consultation"
      buttonLink="/contact"
      secondaryButtonText="Our Projects"
      secondaryButtonLink="/projects"
      highlights={[
        'Polished & Honed Concrete',
        'Stamped & Textured Finishes',
        'Coloured & Integral Pigments',
        'Exposed Aggregate',
        'Architectural Feature Elements',
      ]}
      statistics={[
        {
          value: 16,
          suffix: '+',
          label: 'Years of Experience',
          description:
            'Delivering decorative and architectural concrete for interiors and exteriors.',
        },
        {
          value: 120,
          suffix: '+',
          label: 'Decorative Projects',
          description:
            'Completed floors, façades and feature concrete packages.',
        },
        {
          value: 280000,
          suffix: '+',
          label: 'Square Metres Finished',
          description:
            'High-quality decorative concrete surfaces installed to design standards.',
        },
        {
          value: 97,
          suffix: '%',
          label: 'Client Satisfaction',
          description:
            'Finishes that meet aesthetic intent and long-term performance expectations.',
        },
      ]}
      benefits={[
        {
          icon: <Sparkles />,
          title: 'Polished & Honed Floors',
          description:
            'Mechanically ground and polished concrete surfaces with controlled sheen, densifiers and sealers for durable, low-maintenance interiors.',
        },
        {
          icon: <Paintbrush />,
          title: 'Stamped & Textured Finishes',
          description:
            'Patterned and textured concrete for pavements, plazas and feature areas that replicate stone, timber or custom designs.',
        },
        {
          icon: <Palette />,
          title: 'Colour & Pigmentation',
          description:
            'Integral colour, dry-shake hardeners and stains that deliver consistent, fade-resistant tones aligned with design schemes.',
        },
        {
          icon: <Layers />,
          title: 'Exposed Aggregate',
          description:
            'Controlled exposure of selected aggregates for distinctive texture and visual depth on floors, walls and external works.',
        },
        {
          icon: <ShieldCheck />,
          title: 'Durability & Protection',
          description:
            'Sealers, densifiers and surface treatments that protect against wear, staining and environmental exposure.',
        },
        {
          icon: <Building2 />,
          title: 'Architectural Features',
          description:
            'Bespoke decorative elements, precast accents and in-situ feature concrete coordinated with the overall architectural vision.',
        },
      ]}
      whyChooseUs={[
        {
          number: '01',
          title: 'Design-Led Execution',
          description:
            'Samples, mock-ups and approved methodologies ensure the finished surface matches the intended aesthetic before full production.',
        },
        {
          number: '02',
          title: 'Technical Craftsmanship',
          description:
            'Skilled placement, finishing and polishing teams who understand both visual quality and structural substrate requirements.',
        },
        {
          number: '03',
          title: 'Long-Term Performance',
          description:
            'Finishes selected and applied for wear resistance, cleanability and colour stability in real-use conditions.',
        },
        {
          number: '04',
          title: 'Coordinated Delivery',
          description:
            'Integration with main concrete works, waterproofing and adjacent trades so decorative packages do not delay programme.',
        },
      ]}
      deliverables={[
        {
          icon: <FileText />,
          title: 'Samples & Mock-ups',
          description:
            'Approved finish samples and site reference panels.',
        },
        {
          icon: <Settings />,
          title: 'Mix & Material Specs',
          description:
            'Decorative mix designs, pigments and surface treatments.',
        },
        {
          icon: <CheckCircle2 />,
          title: 'Placement & Finishing',
          description:
            'Skilled placement, stamping, texturing and polishing.',
        },
        {
          icon: <BadgeCheck />,
          title: 'Sealing & Protection',
          description:
            'Densifiers, sealers and maintenance-ready surfaces.',
        },
        {
          icon: <Clock3 />,
          title: 'Quality Inspection',
          description:
            'Visual and performance checks against approved standards.',
        },
        {
          icon: <Target />,
          title: 'Handover Guidance',
          description:
            'Care instructions and recommended maintenance regimes.',
        },
      ]}
      serviceHighlights={[
        {
          title: 'Concrete as a Design Material',
          description:
            'Decorative concrete turns a structural material into a finished surface. We control colour, texture and sheen so the result feels intentional and refined.',
          image:
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=90',
        },
        {
          title: 'From Sample to Full Installation',
          description:
            'Mock-ups and approved methods lock in the look before large areas are committed, protecting both design intent and programme.',
          image:
            'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=90',
        },
        {
          title: 'Beauty That Performs',
          description:
            'Our finishes are selected for real-world use — resistance to wear, staining and cleaning cycles — so spaces remain attractive for years.',
          image:
            'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=90',
        },
      ]}
      industries={[
        { name: 'Commercial Interiors' },
        { name: 'Hotels & Hospitality' },
        { name: 'Retail & Showrooms' },
        { name: 'Residential Developments' },
        { name: 'Public Realm & Plazas' },
        { name: 'Educational Campuses' },
        { name: 'Healthcare Facilities' },
        { name: 'Mixed-Use Developments' },
      ]}
      gallery={[
        {
          src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=90',
          alt: 'Decorative polished concrete flooring',
        },
        {
          src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=90',
          alt: 'Architectural concrete finishes interior',
        },
        {
          src: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=90',
          alt: 'Textured and decorative concrete surfaces',
        },
      ]}
      ctaTitle="Ready to elevate your spaces with decorative concrete?"
      ctaDescription="Partner with our decorative concrete team to deliver polished, stamped, coloured and architectural finishes that combine visual impact with lasting performance."
      ctaButtonText="Request Consultation"
      ctaButtonLink="/contact"
      ctaSecondaryText="Our Projects"
      ctaSecondaryLink="/projects"
    />
  )
}