'use client'

import ServicePage from '../../components/Service'
import {
  CookingPot,
  UtensilsCrossed,
  Layers,
  ShieldCheck,
  Wrench,
  CheckCircle2,
  Clock3,
  BadgeCheck,
  Settings,
  Target,
  FileText,
  Flame,
  Droplets,
} from 'lucide-react'

export default function Page() {
  return (
    <ServicePage
      title="Kitchen"
      subtitle="Commercial & Residential Kitchens Built for Performance"
      description="Our Kitchen service delivers complete design-and-fitout packages for commercial, hospitality and residential kitchens. From layout planning and equipment specification to joinery, MEP coordination, ventilation and final commissioning, we create efficient, compliant and durable kitchen environments that support daily operations and long-term hygiene standards."
      badge="Façade & Fitout"
      label="Kitchen"
      heroImage="https://images.unsplash.com/photo-1556911220-bff31c9870ea?auto=format&fit=crop&w=1800&q=90"
      heroImageAlt="Modern commercial and residential kitchen interior"
      imagePosition="right"
      layout="modern"
      theme="light"
      animationPreset="premium"
      buttonText="Request Consultation"
      buttonLink="/contact"
      secondaryButtonText="Our Projects"
      secondaryButtonLink="/projects"
      highlights={[
        'Commercial Kitchen Design',
        'Residential & Apartment Kitchens',
        'Equipment Specification',
        'Joinery & Worktops',
        'Ventilation & MEP Coordination',
      ]}
      statistics={[
        {
          value: 16,
          suffix: '+',
          label: 'Years of Experience',
          description:
            'Delivering commercial, hospitality and residential kitchen packages.',
        },
        {
          value: 85,
          suffix: '+',
          label: 'Kitchen Projects',
          description:
            'Completed fitouts for hotels, restaurants, offices and residences.',
        },
        {
          value: 32000,
          suffix: '+',
          label: 'Square Metres Delivered',
          description:
            'High-performance kitchen environments built to operational standards.',
        },
        {
          value: 97,
          suffix: '%',
          label: 'On-Time Handover',
          description:
            'Projects completed within agreed programmes through disciplined coordination.',
        },
      ]}
      benefits={[
        {
          icon: <CookingPot />,
          title: 'Layout & Workflow Design',
          description:
            'Efficient kitchen planning that supports cook lines, prep zones, storage and service flow while meeting hygiene and safety requirements.',
        },
        {
          icon: <UtensilsCrossed />,
          title: 'Equipment Specification',
          description:
            'Selection and coordination of cooking, refrigeration, dishwashing and extraction equipment suited to capacity and menu or residential use.',
        },
        {
          icon: <Layers />,
          title: 'Joinery & Work Surfaces',
          description:
            'Custom cabinets, stainless or solid-surface worktops, splashbacks and storage solutions fabricated and installed to exacting standards.',
        },
        {
          icon: <Flame />,
          title: 'Ventilation & Extraction',
          description:
            'Properly sized canopy and duct systems, make-up air and fire-suppression interfaces coordinated with the building MEP.',
        },
        {
          icon: <ShieldCheck />,
          title: 'Hygiene & Compliance',
          description:
            'Materials, detailing and finishes selected for cleanability, durability and compliance with food-safety and building regulations.',
        },
        {
          icon: <Wrench />,
          title: 'MEP Integration',
          description:
            'Close coordination of power, water, drainage, gas and ELV services so equipment and finishes install without conflict.',
        },
      ]}
      whyChooseUs={[
        {
          number: '01',
          title: 'Operational Understanding',
          description:
            'Designs informed by real kitchen workflows so the finished space supports staff efficiency and consistent service quality.',
        },
        {
          number: '02',
          title: 'Single-Point Delivery',
          description:
            'One team manages design coordination, joinery, equipment interfaces and finishes, reducing programme risk.',
        },
        {
          number: '03',
          title: 'Durable, Cleanable Detailing',
          description:
            'Joints, edges and material junctions detailed for longevity and easy maintenance in high-use environments.',
        },
        {
          number: '04',
          title: 'Ready-for-Use Handover',
          description:
            'Commissioning support, training coordination and complete documentation leave kitchens operational from day one.',
        },
      ]}
      deliverables={[
        {
          icon: <FileText />,
          title: 'Layout & Shop Drawings',
          description:
            'Detailed plans, elevations and equipment positions.',
        },
        {
          icon: <Settings />,
          title: 'Joinery & Worktops',
          description:
            'Cabinets, counters, splashbacks and storage units.',
        },
        {
          icon: <CheckCircle2 />,
          title: 'Equipment Coordination',
          description:
            'Specification support and service connection readiness.',
        },
        {
          icon: <BadgeCheck />,
          title: 'Finishes & Hygiene Details',
          description:
            'Flooring, wall cladding and cleanable junctions.',
        },
        {
          icon: <Clock3 />,
          title: 'Ventilation Interfaces',
          description:
            'Canopy, duct and make-up air coordination support.',
        },
        {
          icon: <Target />,
          title: 'Snagging & Handover',
          description:
            'Defect clearance, as-builts and operational handover.',
        },
      ]}
      serviceHighlights={[
        {
          title: 'Kitchens Built for Daily Use',
          description:
            'Whether a hotel production kitchen or a high-end residential space, we prioritise workflow, durability and hygiene so the kitchen performs under real conditions.',
          image:
            'https://images.unsplash.com/photo-1556911220-bff31c9870ea?auto=format&fit=crop&w=1400&q=90',
        },
        {
          title: 'Coordination That Protects Programme',
          description:
            'Kitchen packages involve many interfaces. Our teams resolve equipment, services and finish conflicts before they become site delays.',
          image:
            'https://images.unsplash.com/photo-1556912173-46c336c7fd55?auto=format&fit=crop&w=1400&q=90',
        },
        {
          title: 'Detail That Lasts',
          description:
            'From stainless detailing to sealed junctions and robust worktops, the finishes we install are chosen and executed for long service life.',
          image:
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=90',
        },
      ]}
      industries={[
        { name: 'Hotels & Resorts' },
        { name: 'Restaurants & Cafés' },
        { name: 'Corporate Offices' },
        { name: 'Residential Apartments' },
        { name: 'Healthcare Facilities' },
        { name: 'Educational Campuses' },
        { name: 'Staff & Institutional Kitchens' },
        { name: 'Mixed-Use Developments' },
      ]}
      gallery={[
        {
          src: 'https://images.unsplash.com/photo-1556911220-bff31c9870ea?auto=format&fit=crop&w=1200&q=90',
          alt: 'Modern commercial kitchen interior',
        },
        {
          src: 'https://images.unsplash.com/photo-1556912173-46c336c7fd55?auto=format&fit=crop&w=1200&q=90',
          alt: 'Professional kitchen fitout and equipment',
        },
        {
          src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=90',
          alt: 'High-quality kitchen finishes and detailing',
        },
      ]}
      ctaTitle="Ready to deliver a high-performance kitchen?"
      ctaDescription="Partner with our kitchen team to design and fit out efficient, compliant and durable kitchen environments for hospitality, commercial or residential use."
      ctaButtonText="Request Consultation"
      ctaButtonLink="/contact"
      ctaSecondaryText="Our Projects"
      ctaSecondaryLink="/projects"
    />
  )
}