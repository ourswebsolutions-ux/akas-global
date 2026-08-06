'use client'

import ServicePage from '../../components/Service'
import {
  Leaf,
  Trees,
  Flower2,
  Sprout,
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
      title="Softscape"
      subtitle="Living Landscapes that Thrive & Endure"
      description="Our Softscape service creates vibrant, sustainable planted environments through expert selection, installation and establishment of trees, shrubs, groundcovers, turf and seasonal planting. From large-scale public landscapes to intimate garden spaces, we deliver softscape solutions that enhance aesthetics, support biodiversity and perform reliably in the local climate."
      badge="Landscaping"
      label="Softscape"
      heroImage="https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=1800&q=90"
      heroImageAlt="Professional softscape and planted landscape"
      imagePosition="right"
      layout="modern"
      theme="light"
      animationPreset="premium"
      buttonText="Request Consultation"
      buttonLink="/contact"
      secondaryButtonText="Our Projects"
      secondaryButtonLink="/projects"
      highlights={[
        'Tree & Palm Planting',
        'Shrubs & Groundcovers',
        'Turf & Lawn Systems',
        'Seasonal & Feature Planting',
        'Establishment & Aftercare',
      ]}
      statistics={[
        {
          value: 16,
          suffix: '+',
          label: 'Years of Experience',
          description:
            'Delivering softscape installations for residential, commercial and public landscape projects.',
        },
        {
          value: 110,
          suffix: '+',
          label: 'Softscape Projects',
          description:
            'Completed planting schemes across parks, communities, campuses and commercial developments.',
        },
        {
          value: 85000,
          suffix: '+',
          label: 'Trees & Palms Planted',
          description:
            'Specimen and standard trees established with proper planting technique and aftercare.',
        },
        {
          value: 98,
          suffix: '%',
          label: 'Establishment Success',
          description:
            'Achieved through correct species selection, soil preparation and structured maintenance.',
        },
      ]}
      benefits={[
        {
          icon: <Trees />,
          title: 'Tree & Palm Installation',
          description:
            'Selection, handling and planting of specimen trees and palms with correct pit preparation, staking, guying and root-zone management for long-term health.',
        },
        {
          icon: <Leaf />,
          title: 'Shrubs & Hedging',
          description:
            'Mass planting, formal hedging and mixed shrub borders designed for structure, colour and seasonal interest while remaining suited to local conditions.',
        },
        {
          icon: <Sprout />,
          title: 'Groundcovers & Underplanting',
          description:
            'Dense, low-maintenance groundcover schemes that suppress weeds, stabilise soil and create cohesive planted surfaces beneath trees and along edges.',
        },
        {
          icon: <Flower2 />,
          title: 'Turf & Lawn Systems',
          description:
            'High-quality turf installation or seeded lawns with proper soil preparation, grading and establishment programmes for durable green surfaces.',
        },
        {
          icon: <ShieldCheck />,
          title: 'Soil Preparation & Conditioning',
          description:
            'Import, amelioration and testing of planting media to create optimal growing conditions tailored to each plant group and microclimate.',
        },
        {
          icon: <Activity />,
          title: 'Establishment & Aftercare',
          description:
            'Structured watering, fertilising, pruning and monitoring programmes during the critical establishment period to maximise survival and performance.',
        },
      ]}
      whyChooseUs={[
        {
          number: '01',
          title: 'Climate-Adapted Plant Selection',
          description:
            'Species are chosen for proven performance in the local climate, reducing water demand, maintenance intensity and replacement rates.',
        },
        {
          number: '02',
          title: 'Horticultural Best Practice',
          description:
            'Correct planting depths, root handling, staking methods and soil volumes are applied consistently to give every plant the best start.',
        },
        {
          number: '03',
          title: 'Integrated with Irrigation & Hardscape',
          description:
            'Softscape is coordinated with irrigation design and hardscape finishes so planting zones receive the right water and visual relationships are preserved.',
        },
        {
          number: '04',
          title: 'Long-Term Landscape Health',
          description:
            'We design and install with maturity in mind — spacing, layering and maintenance access that support healthy growth for years after handover.',
        },
      ]}
      deliverables={[
        {
          icon: <FileText />,
          title: 'Planting Plans & Schedules',
          description:
            'Detailed layouts, species lists, quantities and specification notes.',
        },
        {
          icon: <Trees />,
          title: 'Tree & Palm Planting',
          description:
            'Specimen installation with pits, staking and initial aftercare.',
        },
        {
          icon: <Leaf />,
          title: 'Shrub & Groundcover Works',
          description:
            'Mass planting, hedging and understorey establishment.',
        },
        {
          icon: <CheckCircle2 />,
          title: 'Turf Installation',
          description:
            'Soil preparation, laying or seeding and initial establishment.',
        },
        {
          icon: <BadgeCheck />,
          title: 'Establishment Programme',
          description:
            'Watering, feeding and monitoring through the defects period.',
        },
        {
          icon: <Target />,
          title: 'Handover & Maintenance Guide',
          description:
            'As-built planting records and ongoing care recommendations.',
        },
      ]}
      serviceHighlights={[
        {
          title: 'Living Landscapes, Lasting Impact',
          description:
            'Softscape transforms hard environments into welcoming, biophilic spaces. We focus on healthy establishment and appropriate species so planted areas continue to improve in character and performance over time.',
          image:
            'https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=1400&q=90',
        },
        {
          title: 'Right Plant, Right Place',
          description:
            'Every species is selected for microclimate, soil conditions, water availability and design intent. This disciplined approach reduces failure rates and long-term maintenance burden.',
          image:
            'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1400&q=90',
        },
        {
          title: 'From Installation to Maturity',
          description:
            'Our responsibility does not end at planting day. Structured establishment care ensures trees, shrubs and turf reach the healthy, vigorous condition expected at practical completion and beyond.',
          image:
            'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1400&q=90',
        },
      ]}
      industries={[
        { name: 'Residential Communities' },
        { name: 'Commercial Developments' },
        { name: 'Parks & Public Realm' },
        { name: 'Hotel & Resort Landscapes' },
        { name: 'Educational Campuses' },
        { name: 'Healthcare Gardens' },
        { name: 'Corporate Headquarters' },
        { name: 'Mixed-Use Masterplans' },
      ]}
      gallery={[
        {
          src: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=1200&q=90',
          alt: 'Softscape planting and landscape design',
        },
        {
          src: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1200&q=90',
          alt: 'Tree planting and green landscape',
        },
        {
          src: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=90',
          alt: 'Mature softscape and garden establishment',
        },
      ]}
      ctaTitle="Ready to create thriving planted landscapes?"
      ctaDescription="Partner with our softscape team to design and install trees, shrubs, groundcovers and turf that establish successfully and perform beautifully for years to come."
      ctaButtonText="Request Consultation"
      ctaButtonLink="/contact"
      ctaSecondaryText="Our Projects"
      ctaSecondaryLink="/projects"
    />
  )
}