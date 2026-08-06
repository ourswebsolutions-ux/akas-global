'use client'

import ServicePage from '../../components/Service'
import {
  Square,
  Layers,
  ShieldCheck,
  Wrench,
  CheckCircle2,
  Clock3,
  BadgeCheck,
  Activity,
  FileText,
  Settings,
  Target,
  BrickWall,
} from 'lucide-react'

export default function Page() {
  return (
    <ServicePage
      title="Hardscape"
      subtitle="Durable Outdoor Structures & Surface Finishes"
      description="Our Hardscape service delivers precision-crafted external floors, walls, steps, planters and landscape structures that define space, manage circulation and create lasting visual impact. From natural stone paving and decorative concrete to retaining walls, pergolas and water-edge detailing, we build hardscape elements that perform under climate, traffic and time."
      badge="Landscaping"
      label="Hardscape"
      heroImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=90"
      heroImageAlt="Premium hardscape paving and outdoor structures"
      imagePosition="right"
      layout="editorial"
      theme="light"
      animationPreset="premium"
      buttonText="Request Consultation"
      buttonLink="/contact"
      secondaryButtonText="Our Projects"
      secondaryButtonLink="/projects"
      highlights={[
        'Paving & Surface Finishes',
        'Retaining & Feature Walls',
        'Steps, Ramps & Edges',
        'Planters & Landscape Structures',
        'Outdoor Furniture & Elements',
      ]}
      statistics={[
        {
          value: 16,
          suffix: '+',
          label: 'Years of Experience',
          description:
            'Delivering hardscape packages for residential, commercial and public landscape projects.',
        },
        {
          value: 95,
          suffix: '+',
          label: 'Hardscape Projects',
          description:
            'Completed paving, walls, steps and landscape structures across major developments.',
        },
        {
          value: 180000,
          suffix: '+',
          label: 'Square Metres Paved',
          description:
            'Natural stone, concrete and specialty surfaces installed to exacting tolerances.',
        },
        {
          value: 99,
          suffix: '%',
          label: 'Dimensional Accuracy',
          description:
            'Achieved through disciplined setting-out, level control and quality supervision.',
        },
      ]}
      benefits={[
        {
          icon: <Square />,
          title: 'Paving & Surface Systems',
          description:
            'Natural stone, porcelain, concrete unit paving and cast-in-place finishes designed for traffic loading, drainage and long-term appearance.',
        },
        {
          icon: <BrickWall />,
          title: 'Retaining & Feature Walls',
          description:
            'Structural and decorative walls in stone, block, concrete and gabion systems that define levels, create seating and provide visual anchors.',
        },
        {
          icon: <Layers />,
          title: 'Steps, Ramps & Transitions',
          description:
            'Accessible and elegant level changes with correct rise/going ratios, tactile indicators and integrated lighting or handrail provisions.',
        },
        {
          icon: <Settings />,
          title: 'Planters & Built Elements',
          description:
            'Raised planters, benches, pergolas, screens and custom landscape furniture fabricated and installed to design intent.',
        },
        {
          icon: <ShieldCheck />,
          title: 'Sub-Base & Drainage Integration',
          description:
            'Proper build-up, falls and drainage detailing that protect the finished surface from settlement, ponding and premature failure.',
        },
        {
          icon: <Activity />,
          title: 'Edge Restraints & Detailing',
          description:
            'Robust edge treatments, expansion joints and junctions with softscape or buildings that maintain alignment and prevent movement.',
        },
      ]}
      whyChooseUs={[
        {
          number: '01',
          title: 'Material Expertise',
          description:
            'Deep knowledge of natural stone, concrete products and specialty finishes ensures correct specification, handling and installation methods.',
        },
        {
          number: '02',
          title: 'Precision Setting-Out',
          description:
            'Laser and total-station control deliver accurate levels, falls and alignments so that finished surfaces meet both aesthetic and functional requirements.',
        },
        {
          number: '03',
          title: 'Integrated with Softscape & Irrigation',
          description:
            'Hardscape interfaces are coordinated with planting zones and irrigation runs to avoid clashes and create seamless transitions.',
        },
        {
          number: '04',
          title: 'Built for Climate & Use',
          description:
            'Details are developed for thermal movement, UV exposure, water management and expected traffic so that hardscape remains serviceable for decades.',
        },
      ]}
      deliverables={[
        {
          icon: <FileText />,
          title: 'Hardscape Drawings & Details',
          description:
            'Layout plans, sections, edge details and material specifications.',
        },
        {
          icon: <Wrench />,
          title: 'Sub-Base & Build-Up',
          description:
            'Excavation, base preparation, compaction and drainage layers.',
        },
        {
          icon: <CheckCircle2 />,
          title: 'Paving & Surface Installation',
          description:
            'Stone, unit paving or concrete finishes to line and level.',
        },
        {
          icon: <BadgeCheck />,
          title: 'Walls & Structures',
          description:
            'Retaining walls, planters, steps and landscape elements.',
        },
        {
          icon: <Clock3 />,
          title: 'Quality & Tolerance Control',
          description:
            'Level checks, joint consistency and surface finish verification.',
        },
        {
          icon: <Target />,
          title: 'Cleaning & Handover',
          description:
            'Final cleaning, protection removal and as-built documentation.',
        },
      ]}
      serviceHighlights={[
        {
          title: 'Surfaces That Define Place',
          description:
            'Hardscape is the structural and visual framework of outdoor space. We combine durable materials with precise workmanship so that paving, walls and edges continue to look and perform as intended long after handover.',
          image:
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=90',
        },
        {
          title: 'Detail-Driven Construction',
          description:
            'From sub-base preparation through edge restraints and expansion joints, every layer is controlled. The result is surfaces that drain correctly, remain stable and age gracefully.',
          image:
            'https://images.unsplash.com/photo-1600047509807-ba8b3b1d5b8d?auto=format&fit=crop&w=1400&q=90',
        },
        {
          title: 'Seamless Outdoor Architecture',
          description:
            'Hardscape elements are designed and built as extensions of the architecture — consistent in material language, proportion and craft quality with the surrounding buildings and landscape.',
          image:
            'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=90',
        },
      ]}
      industries={[
        { name: 'Residential Communities' },
        { name: 'Commercial Developments' },
        { name: 'Hotels & Resorts' },
        { name: 'Parks & Public Realm' },
        { name: 'Educational Campuses' },
        { name: 'Corporate Headquarters' },
        { name: 'Mixed-Use Masterplans' },
        { name: 'Healthcare Landscapes' },
      ]}
      gallery={[
        {
          src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=90',
          alt: 'Premium hardscape and outdoor paving',
        },
        {
          src: 'https://images.unsplash.com/photo-1600047509807-ba8b3b1d5b8d?auto=format&fit=crop&w=1200&q=90',
          alt: 'Stone paving and landscape detailing',
        },
        {
          src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=90',
          alt: 'Modern hardscape and outdoor structures',
        },
      ]}
      ctaTitle="Ready to build lasting outdoor structures?"
      ctaDescription="Partner with our hardscape team to deliver precision paving, walls, steps and landscape elements that combine durability, craftsmanship and design integrity."
      ctaButtonText="Request Consultation"
      ctaButtonLink="/contact"
      ctaSecondaryText="Our Projects"
      ctaSecondaryLink="/projects"
    />
  )
}