'use client'

import ServicePage from '../../components/Service'
import {
  Interior,
  Sofa,
  ShieldCheck,
  Wrench,
  CheckCircle2,
  Clock3,
  BadgeCheck,
  Layers,
  Activity,
  FileText,
  Settings,
  Target,
} from 'lucide-react'

export default function Page() {
  return (
    <ServicePage
      title="Interior Fitout"
      subtitle="Complete Interior Environments Delivered with Precision"
      description="Our Interior Fitout service transforms empty shells into fully finished, functional spaces ready for occupation. From partitions, ceilings and flooring to joinery, MEP coordination and final finishes, we deliver end-to-end fitout packages for offices, retail, hospitality, healthcare and residential interiors that meet design intent, programme and quality standards."
      badge="Façade & Fitout"
      label="Interior Fitout"
      heroImage="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1800&q=90"
      heroImageAlt="Modern interior fitout and office space"
      imagePosition="right"
      layout="modern"
      theme="light"
      animationPreset="premium"
      buttonText="Request Consultation"
      buttonLink="/contact"
      secondaryButtonText="Our Projects"
      secondaryButtonLink="/projects"
      highlights={[
        'Full-Scope Interior Fitout',
        'Partitions & Ceilings',
        'Flooring & Finishes',
        'Joinery & Custom Elements',
        'MEP Coordination & Handover',
      ]}
      statistics={[
        {
          value: 16,
          suffix: '+',
          label: 'Years of Experience',
          description:
            'Delivering interior fitout for commercial, retail, hospitality and residential projects.',
        },
        {
          value: 140,
          suffix: '+',
          label: 'Fitout Projects',
          description:
            'Completed office, retail, healthcare and residential interior packages.',
        },
        {
          value: 750000,
          suffix: '+',
          label: 'Square Metres Fitted Out',
          description:
            'High-quality interior spaces delivered to design and programme requirements.',
        },
        {
          value: 97,
          suffix: '%',
          label: 'On-Time Handover',
          description:
            'Projects completed within agreed programmes through disciplined planning and coordination.',
        },
      ]}
      benefits={[
        {
          icon: <Layers />,
          title: 'Partitions & Spatial Division',
          description:
            'Drywall, glass and specialised partition systems that create the required spatial organisation while meeting acoustic and fire performance criteria.',
        },
        {
          icon: <Sofa />,
          title: 'Ceilings, Flooring & Finishes',
          description:
            'Suspended ceilings, raised floors, carpet, stone, timber and decorative finishes installed to exacting quality and alignment standards.',
        },
        {
          icon: <Settings />,
          title: 'Joinery & Custom Elements',
          description:
            'Purpose-made reception desks, storage, wall panelling and feature joinery fabricated and installed to design specifications.',
        },
        {
          icon: <Wrench />,
          title: 'MEP Coordination',
          description:
            'Close integration with mechanical, electrical and ELV services so that services, ceilings and finishes align without conflict or rework.',
        },
        {
          icon: <ShieldCheck />,
          title: 'Quality & Compliance',
          description:
            'Material approvals, workmanship standards and inspection regimes that protect both appearance and long-term performance of the finished interior.',
        },
        {
          icon: <Activity />,
          title: 'Snagging & Handover',
          description:
            'Systematic defect identification, rectification and formal handover packages that leave spaces ready for immediate occupation.',
        },
      ]}
      whyChooseUs={[
        {
          number: '01',
          title: 'Single-Point Fitout Delivery',
          description:
            'One accountable team manages partitions, finishes, joinery and coordination, eliminating the interface gaps that delay multi-trade fitouts.',
        },
        {
          number: '02',
          title: 'Design Intent Preserved',
          description:
            'Close collaboration with designers and detailed shop drawings ensure that the finished space matches the approved design vision.',
        },
        {
          number: '03',
          title: 'Programme Certainty',
          description:
            'Detailed sequencing, material procurement planning and progress control keep fitout packages on track even in live or constrained environments.',
        },
        {
          number: '04',
          title: 'Occupation-Ready Quality',
          description:
            'Final cleaning, commissioning support and complete documentation mean that clients receive spaces that are genuinely ready to use.',
        },
      ]}
      deliverables={[
        {
          icon: <FileText />,
          title: 'Shop Drawings & Approvals',
          description:
            'Detailed drawings, material samples and method statements.',
        },
        {
          icon: <Wrench />,
          title: 'Partition & Ceiling Works',
          description:
            'Framing, boarding, acoustic treatments and ceiling systems.',
        },
        {
          icon: <CheckCircle2 />,
          title: 'Flooring & Wall Finishes',
          description:
            'All specified floor and wall finishes to design standards.',
        },
        {
          icon: <BadgeCheck />,
          title: 'Joinery & Special Items',
          description:
            'Custom furniture, panelling and feature elements.',
        },
        {
          icon: <Clock3 />,
          title: 'MEP Interface Coordination',
          description:
            'Service integration, access panels and final connections support.',
        },
        {
          icon: <Target />,
          title: 'Snagging & Handover Pack',
          description:
            'Defect clearance, as-builts, O&M manuals and keys.',
        },
      ]}
      serviceHighlights={[
        {
          title: 'From Shell to Occupation',
          description:
            'Interior fitout is where design becomes a living workplace or destination. We manage the full transformation — structure, services, finishes and final detail — so that spaces are complete and ready.',
          image:
            'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=90',
        },
        {
          title: 'Coordination That Protects Quality',
          description:
            'The difference between a good fitout and a problematic one is often coordination. Our teams resolve service, ceiling and finish interfaces before they become site issues.',
          image:
            'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=90',
        },
        {
          title: 'Detail That Endures',
          description:
            'Joinery alignment, joint quality and finish consistency are given the same attention as the overall programme. The result is interiors that still look intentional years after handover.',
          image:
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=90',
        },
      ]}
      industries={[
        { name: 'Corporate Offices' },
        { name: 'Retail & Showrooms' },
        { name: 'Hotels & Hospitality' },
        { name: 'Healthcare Interiors' },
        { name: 'Educational Spaces' },
        { name: 'Residential Apartments' },
        { name: 'Mixed-Use Developments' },
        { name: 'Government & Civic' },
      ]}
      gallery={[
        {
          src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=90',
          alt: 'Modern interior fitout and office space',
        },
        {
          src: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=90',
          alt: 'Professional workplace interior',
        },
        {
          src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=90',
          alt: 'High-quality interior finishes and detailing',
        },
      ]}
      ctaTitle="Ready to transform your interior spaces?"
      ctaDescription="Partner with our interior fitout team to deliver complete, high-quality environments that meet design intent, programme requirements and the highest standards of workmanship."
      ctaButtonText="Request Consultation"
      ctaButtonLink="/contact"
      ctaSecondaryText="Our Projects"
      ctaSecondaryLink="/projects"
    />
  )
}