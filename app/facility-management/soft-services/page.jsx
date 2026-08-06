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
  Users,
  Leaf,
  Building2,
} from 'lucide-react'

export default function Page() {
  return (
    <ServicePage
      title="Soft Services"
      subtitle="People-Centred Facility Services That Elevate Everyday Experience"
      description="Our Soft Services deliver cleaning, waste management, landscaping support, pest control, reception and related front-of-house and environmental services that shape how people experience a building every day. We provide trained teams, clear standards and consistent delivery so spaces remain welcoming, hygienic and professionally presented for occupants and visitors."
      badge="Facility Management"
      label="Soft Services"
      heroImage="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1800&q=90"
      heroImageAlt="Soft services facility cleaning and front-of-house"
      imagePosition="right"
      layout="modern"
      theme="light"
      animationPreset="premium"
      buttonText="Request Consultation"
      buttonLink="/contact"
      secondaryButtonText="Our Projects"
      secondaryButtonLink="/projects"
      highlights={[
        'Cleaning & Housekeeping',
        'Waste & Recycling Management',
        'Landscaping Support',
        'Pest Control',
        'Reception & Front-of-House',
      ]}
      statistics={[
        {
          value: 16,
          suffix: '+',
          label: 'Years of Experience',
          description:
            'Delivering soft services across commercial, residential and institutional facilities.',
        },
        {
          value: 110,
          suffix: '+',
          label: 'Facilities Supported',
          description:
            'Buildings under consistent soft-services programmes.',
        },
        {
          value: 3.1,
          suffix: 'M+',
          label: 'Square Metres Serviced',
          description:
            'Spaces maintained to agreed hygiene and presentation standards.',
        },
        {
          value: 97,
          suffix: '%',
          label: 'Service Compliance',
          description:
            'Scheduled soft-services tasks completed to agreed quality levels.',
        },
      ]}
      benefits={[
        {
          icon: <Sparkles />,
          title: 'Cleaning & Housekeeping',
          description:
            'Daily, periodic and deep-cleaning programmes tailored to occupancy patterns and finish types for consistently presentable spaces.',
        },
        {
          icon: <Layers />,
          title: 'Waste & Recycling',
          description:
            'Collection, segregation and disposal processes that support hygiene, regulatory compliance and sustainability goals.',
        },
        {
          icon: <Leaf />,
          title: 'Landscaping Support',
          description:
            'Maintenance of internal and external planted areas to keep grounds and common spaces attractive and well kept.',
        },
        {
          icon: <ShieldCheck />,
          title: 'Pest Control',
          description:
            'Preventive and responsive treatments that protect health, reputation and building fabric.',
        },
        {
          icon: <Users />,
          title: 'Reception & Front-of-House',
          description:
            'Professional reception, visitor management and concierge-style support that set the tone for the building experience.',
        },
        {
          icon: <Building2 />,
          title: 'Flexible Resourcing',
          description:
            'Staffing levels and schedules adjusted to peak periods, events and changing occupancy without loss of standards.',
        },
      ]}
      whyChooseUs={[
        {
          number: '01',
          title: 'Standards You Can See',
          description:
            'Clear service specifications and inspection regimes so quality is measurable and consistent across shifts and sites.',
        },
        {
          number: '02',
          title: 'Trained, Presentable Teams',
          description:
            'Staff selected and supervised for reliability, appearance and respectful interaction with occupants and visitors.',
        },
        {
          number: '03',
          title: 'Integrated with Hard Services',
          description:
            'Soft and hard services coordinated under one facility framework for smoother issue resolution and single-point accountability.',
        },
        {
          number: '04',
          title: 'Responsive to Feedback',
          description:
            'Simple channels for occupants to report issues and for managers to track resolution and satisfaction.',
        },
      ]}
      deliverables={[
        {
          icon: <FileText />,
          title: 'Service Specifications',
          description:
            'Agreed scopes, frequencies and quality standards.',
        },
        {
          icon: <Settings />,
          title: 'Cleaning Programmes',
          description:
            'Daily, periodic and specialist cleaning delivery.',
        },
        {
          icon: <CheckCircle2 />,
          title: 'Waste Management',
          description:
            'Collection, segregation and compliant disposal.',
        },
        {
          icon: <BadgeCheck />,
          title: 'Pest & Landscape Support',
          description:
            'Scheduled treatments and grounds maintenance.',
        },
        {
          icon: <Clock3 />,
          title: 'Front-of-House Services',
          description:
            'Reception, visitor handling and related support.',
        },
        {
          icon: <Target />,
          title: 'Quality Reporting',
          description:
            'Inspection results and service performance summaries.',
        },
      ]}
      serviceHighlights={[
        {
          title: 'The Experience Occupants Notice',
          description:
            'Clean floors, tidy common areas and a professional front desk shape how people feel about a building every day. Soft services make that experience reliable.',
          image:
            'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=90',
        },
        {
          title: 'Consistency Across Shifts and Sites',
          description:
            'Documented standards and supervision ensure the same quality whether it is early morning, evening or a multi-building portfolio.',
          image:
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=90',
        },
        {
          title: 'Part of a Complete Facility Offer',
          description:
            'When soft services sit alongside hard services and security under one management approach, issues are resolved faster and accountability is clearer.',
          image:
            'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=90',
        },
      ]}
      industries={[
        { name: 'Commercial Offices' },
        { name: 'Residential Communities' },
        { name: 'Hotels & Hospitality' },
        { name: 'Retail & Mixed-Use' },
        { name: 'Healthcare Facilities' },
        { name: 'Educational Campuses' },
        { name: 'Government & Civic' },
        { name: 'Industrial Support Buildings' },
      ]}
      gallery={[
        {
          src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=90',
          alt: 'Soft services cleaning and facility presentation',
        },
        {
          src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=90',
          alt: 'Professional front-of-house and common areas',
        },
        {
          src: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=90',
          alt: 'Maintained commercial and residential facilities',
        },
      ]}
      ctaTitle="Ready for soft services that raise the standard?"
      ctaDescription="Partner with our soft services team for cleaning, waste, landscaping support, pest control and front-of-house delivery that keep your facilities welcoming and well presented."
      ctaButtonText="Request Consultation"
      ctaButtonLink="/contact"
      ctaSecondaryText="Our Projects"
      ctaSecondaryLink="/projects"
    />
  )
}