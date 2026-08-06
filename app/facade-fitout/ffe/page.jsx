'use client'

import ServicePage from '../../components/Service'
import {
  Sofa,
  Armchair,
  Lamp,
  Layers,
  ShieldCheck,
  Wrench,
  CheckCircle2,
  Clock3,
  BadgeCheck,
  Settings,
  Target,
  FileText,
  Package,
  Palette,
} from 'lucide-react'

export default function Page() {
  return (
    <ServicePage
      title="FF&E"
      subtitle="Furniture, Fixtures & Equipment Specified and Delivered with Precision"
      description="Our FF&E service covers the complete selection, procurement, supply and installation of furniture, fixtures and equipment for commercial, hospitality, residential and institutional projects. From workplace systems and soft seating to lighting, accessories and specialised items, we deliver coordinated packages that align with design intent, budget and programme."
      badge="Façade & Fitout"
      label="FF&E"
      heroImage="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1800&q=90"
      heroImageAlt="Modern furniture fixtures and equipment interior"
      imagePosition="right"
      layout="modern"
      theme="light"
      animationPreset="premium"
      buttonText="Request Consultation"
      buttonLink="/contact"
      secondaryButtonText="Our Projects"
      secondaryButtonLink="/projects"
      highlights={[
        'Furniture Specification & Supply',
        'Fixtures & Soft Furnishings',
        'Workplace Systems',
        'Hospitality & Residential Packages',
        'Installation & Placement',
      ]}
      statistics={[
        {
          value: 16,
          suffix: '+',
          label: 'Years of Experience',
          description:
            'Supplying and installing FF&E for offices, hotels, residences and institutions.',
        },
        {
          value: 110,
          suffix: '+',
          label: 'FF&E Projects',
          description:
            'Completed packages across commercial, hospitality and residential sectors.',
        },
        {
          value: 85000,
          suffix: '+',
          label: 'Items Delivered',
          description:
            'Furniture, fixtures and equipment placed to design and quality standards.',
        },
        {
          value: 96,
          suffix: '%',
          label: 'On-Schedule Placement',
          description:
            'Coordinated deliveries and installation aligned with fitout programmes.',
        },
      ]}
      benefits={[
        {
          icon: <Sofa />,
          title: 'Furniture Selection & Specification',
          description:
            'Workstations, meeting tables, soft seating, storage and specialty pieces chosen for performance, ergonomics and design alignment.',
        },
        {
          icon: <Armchair />,
          title: 'Fixtures & Soft Furnishings',
          description:
            'Lighting, window treatments, rugs, artwork and decorative accessories coordinated to complete the interior scheme.',
        },
        {
          icon: <Package />,
          title: 'Procurement & Logistics',
          description:
            'Sourcing, lead-time management, quality inspection and delivery scheduling that protect both budget and programme.',
        },
        {
          icon: <Palette />,
          title: 'Design Coordination',
          description:
            'Close collaboration with interior designers to ensure finishes, fabrics and forms match approved concepts and samples.',
        },
        {
          icon: <ShieldCheck />,
          title: 'Quality Assurance',
          description:
            'Pre-delivery inspections, site acceptance checks and defect management so only approved items reach final placement.',
        },
        {
          icon: <Wrench />,
          title: 'Installation & Placement',
          description:
            'Professional assembly, positioning and final dressing coordinated with fitout teams for a clean, occupation-ready result.',
        },
      ]}
      whyChooseUs={[
        {
          number: '01',
          title: 'Single-Source Accountability',
          description:
            'One team manages specification, procurement, logistics and installation, reducing interface gaps and delays.',
        },
        {
          number: '02',
          title: 'Design Intent Protected',
          description:
            'Items are selected and installed to match approved drawings, samples and visualisations without last-minute substitutions.',
        },
        {
          number: '03',
          title: 'Programme-Aware Delivery',
          description:
            'Phased deliveries and installation windows planned around fitout progress and client occupation dates.',
        },
        {
          number: '04',
          title: 'Complete Handover Ready',
          description:
            'Inventories, warranties, care guides and final walk-throughs leave spaces fully furnished and ready for use.',
        },
      ]}
      deliverables={[
        {
          icon: <FileText />,
          title: 'FF&E Schedules & Specs',
          description:
            'Item lists, finishes, codes and procurement documentation.',
        },
        {
          icon: <Package />,
          title: 'Procurement & Supply',
          description:
            'Sourcing, ordering, inspection and logistics management.',
        },
        {
          icon: <CheckCircle2 />,
          title: 'Furniture & Seating',
          description:
            'Workstations, meeting, lounge and specialty pieces.',
        },
        {
          icon: <BadgeCheck />,
          title: 'Fixtures & Accessories',
          description:
            'Lighting, window treatments and decorative elements.',
        },
        {
          icon: <Clock3 />,
          title: 'Installation & Placement',
          description:
            'Assembly, positioning and final room dressing.',
        },
        {
          icon: <Target />,
          title: 'Inventory & Handover',
          description:
            'Asset lists, warranties, manuals and acceptance packs.',
        },
      ]}
      serviceHighlights={[
        {
          title: 'From Specification to Placement',
          description:
            'FF&E is the final layer that turns a fitted space into a usable environment. We manage every step so furniture and fixtures arrive on time and install cleanly.',
          image:
            'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1400&q=90',
        },
        {
          title: 'Coordination That Avoids Chaos',
          description:
            'Overlapping deliveries and incomplete spaces create costly rework. Our sequencing and site coordination keep installation efficient and damage-free.',
          image:
            'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=90',
        },
        {
          title: 'Quality That Matches the Design',
          description:
            'Every item is checked against approved samples and drawings. The result is interiors that feel intentional and consistent from the first day of use.',
          image:
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=90',
        },
      ]}
      industries={[
        { name: 'Corporate Offices' },
        { name: 'Hotels & Hospitality' },
        { name: 'Residential Developments' },
        { name: 'Retail & Showrooms' },
        { name: 'Healthcare Interiors' },
        { name: 'Educational Facilities' },
        { name: 'Government & Civic' },
        { name: 'Co-Working Spaces' },
      ]}
      gallery={[
        {
          src: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=90',
          alt: 'Modern furniture and interior FF&E',
        },
        {
          src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=90',
          alt: 'Professional workplace furniture installation',
        },
        {
          src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=90',
          alt: 'High-quality fixtures and equipment detailing',
        },
      ]}
      ctaTitle="Ready to furnish your project with precision?"
      ctaDescription="Partner with our FF&E team to specify, procure and install furniture, fixtures and equipment that complete your interiors to design, budget and programme."
      ctaButtonText="Request Consultation"
      ctaButtonLink="/contact"
      ctaSecondaryText="Our Projects"
      ctaSecondaryLink="/projects"
    />
  )
}