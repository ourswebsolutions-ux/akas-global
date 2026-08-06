'use client'

import ServicePage from '../../components/Service'
import {
  Trees,
  Leaf,
  Sprout,
  Flower2,
  ShieldCheck,
  CheckCircle2,
  Clock3,
  BadgeCheck,
  Layers,
  Activity,
  FileText,
  Target,
} from 'lucide-react'

export default function Page() {
  return (
    <ServicePage
      title="Plantation"
      subtitle="Large-Scale Tree Planting & Afforestation Programmes"
      description="Our Plantation service specialises in large-scale tree planting, afforestation and mass plantation schemes for urban, roadside, industrial and environmental projects. From species selection and nursery coordination to pit preparation, planting, staking and long-term establishment care, we deliver high-survival plantation programmes that create lasting green infrastructure and environmental value."
      badge="Landscaping"
      label="Plantation"
      heroImage="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1800&q=90"
      heroImageAlt="Large-scale tree plantation and afforestation"
      imagePosition="right"
      layout="signature"
      theme="light"
      animationPreset="premium"
      buttonText="Request Consultation"
      buttonLink="/contact"
      secondaryButtonText="Our Projects"
      secondaryButtonLink="/projects"
      highlights={[
        'Mass Tree & Palm Planting',
        'Roadside & Corridor Plantation',
        'Afforestation Schemes',
        'Nursery Sourcing & Logistics',
        'Establishment & Survival Care',
      ]}
      statistics={[
        {
          value: 16,
          suffix: '+',
          label: 'Years of Experience',
          description:
            'Executing large-scale plantation programmes across urban, infrastructure and environmental projects.',
        },
        {
          value: 70,
          suffix: '+',
          label: 'Plantation Projects',
          description:
            'Completed mass planting schemes for roads, parks, industrial belts and community landscapes.',
        },
        {
          value: 250000,
          suffix: '+',
          label: 'Trees Planted',
          description:
            'Specimen, standard and forestry trees established with structured aftercare.',
        },
        {
          value: 96,
          suffix: '%',
          label: 'Average Survival Rate',
          description:
            'Achieved through correct species choice, planting technique and establishment programmes.',
        },
      ]}
      benefits={[
        {
          icon: <Trees />,
          title: 'Mass Tree Planting',
          description:
            'High-volume installation of trees and palms with standardised pit preparation, soil conditioning, planting technique and initial support systems.',
        },
        {
          icon: <Leaf />,
          title: 'Roadside & Corridor Plantation',
          description:
            'Structured planting along highways, avenues and utility corridors designed for visual screening, dust control, shade and long-term resilience.',
        },
        {
          icon: <Sprout />,
          title: 'Afforestation & Environmental Schemes',
          description:
            'Large-scale greening programmes for degraded land, buffer zones and ecological restoration using climate-adapted and native species where appropriate.',
        },
        {
          icon: <Flower2 />,
          title: 'Nursery Coordination & Logistics',
          description:
            'Sourcing, quality inspection, transport and on-site holding of planting stock to ensure healthy material arrives ready for installation.',
        },
        {
          icon: <ShieldCheck />,
          title: 'Pit Preparation & Soil Improvement',
          description:
            'Correct pit dimensions, backfill mixes, drainage and soil amelioration tailored to species requirements and local ground conditions.',
        },
        {
          icon: <Activity />,
          title: 'Establishment & Monitoring',
          description:
            'Structured watering, mulching, staking checks, fertiliser programmes and survival audits during the critical first seasons after planting.',
        },
      ]}
      whyChooseUs={[
        {
          number: '01',
          title: 'Scale with Quality',
          description:
            'We combine the capacity for high-volume planting with horticultural discipline so that every tree receives correct handling and aftercare.',
        },
        {
          number: '02',
          title: 'Species Matched to Purpose',
          description:
            'Selection prioritises climate suitability, growth rate, mature size, maintenance demand and the specific functional goals of each plantation zone.',
        },
        {
          number: '03',
          title: 'Logistics & Programme Control',
          description:
            'Planting sequences are planned around nursery supply, site access and irrigation readiness to protect both survival rates and overall programme.',
        },
        {
          number: '04',
          title: 'Long-Term Green Infrastructure',
          description:
            'Plantation layouts consider mature canopy, root space and maintenance access so that planted areas develop into lasting environmental assets.',
        },
      ]}
      deliverables={[
        {
          icon: <FileText />,
          title: 'Plantation Plans & Schedules',
          description:
            'Layout drawings, species lists, densities and phasing plans.',
        },
        {
          icon: <Trees />,
          title: 'Tree & Palm Installation',
          description:
            'Pit preparation, planting, staking and initial watering.',
        },
        {
          icon: <CheckCircle2 />,
          title: 'Soil & Pit Works',
          description:
            'Excavation, soil mixes, drainage and backfill to specification.',
        },
        {
          icon: <BadgeCheck />,
          title: 'Establishment Programme',
          description:
            'Watering, mulching, feeding and survival monitoring.',
        },
        {
          icon: <Clock3 />,
          title: 'Progress & Survival Reports',
          description:
            'Regular audits of planting progress and plant health.',
        },
        {
          icon: <Target />,
          title: 'Handover Documentation',
          description:
            'As-planted records and recommended ongoing care regimes.',
        },
      ]}
      serviceHighlights={[
        {
          title: 'Greening at Scale',
          description:
            'Large plantation programmes create measurable environmental and visual impact. We deliver the volume required while protecting the quality of every individual planting so that survival and growth targets are met.',
          image:
            'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1400&q=90',
        },
        {
          title: 'From Nursery to Established Canopy',
          description:
            'Success depends on the full chain — healthy stock, correct pits, careful planting and disciplined aftercare. Our process covers every stage to maximise long-term performance.',
          image:
            'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1400&q=90',
        },
        {
          title: 'Infrastructure that Grows',
          description:
            'Well-executed plantation becomes living infrastructure — providing shade, improving air quality, stabilising soil and enhancing the character of roads, communities and industrial landscapes.',
          image:
            'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1400&q=90',
        },
      ]}
      industries={[
        { name: 'Highway & Road Corridors' },
        { name: 'Industrial & Logistics Belts' },
        { name: 'Residential Masterplans' },
        { name: 'Public Parks & Open Space' },
        { name: 'Educational Campuses' },
        { name: 'Environmental Restoration' },
        { name: 'Commercial Developments' },
        { name: 'Municipal Greening Programmes' },
      ]}
      gallery={[
        {
          src: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=90',
          alt: 'Large-scale tree plantation programme',
        },
        {
          src: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1200&q=90',
          alt: 'Tree planting and landscape establishment',
        },
        {
          src: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=90',
          alt: 'Mature plantation and green corridor',
        },
      ]}
      ctaTitle="Ready to deliver large-scale plantation success?"
      ctaDescription="Partner with our plantation team to design and execute mass tree planting programmes that achieve high survival rates and create lasting green infrastructure."
      ctaButtonText="Request Consultation"
      ctaButtonLink="/contact"
      ctaSecondaryText="Our Projects"
      ctaSecondaryLink="/projects"
    />
  )
}