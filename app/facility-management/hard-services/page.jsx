'use client'

import ServicePage from '../../components/Service'
import {
  Wrench,
  Layers,
  ShieldCheck,
  CheckCircle2,
  Clock3,
  BadgeCheck,
  Settings,
  Target,
  FileText,
  Zap,
  Thermometer,
  Building2,
  Cog,
} from 'lucide-react'

export default function Page() {
  return (
    <ServicePage
      title="Hard Services"
      subtitle="Technical Facility Maintenance for Reliable Building Performance"
      description="Our Hard Services deliver planned and reactive maintenance for the mechanical, electrical, plumbing and structural systems that keep buildings operational. From HVAC, power and vertical transport to fire systems and building fabric, we provide skilled technicians, disciplined programmes and transparent reporting that protect asset performance, occupancy comfort and regulatory compliance."
      badge="Facility Management"
      label="Hard Services"
      heroImage="https://images.unsplash.com/photo-1504328348526-dd7f042e5d84?auto=format&fit=crop&w=1800&q=90"
      heroImageAlt="Hard services technical facility maintenance"
      imagePosition="right"
      layout="modern"
      theme="light"
      animationPreset="premium"
      buttonText="Request Consultation"
      buttonLink="/contact"
      secondaryButtonText="Our Projects"
      secondaryButtonLink="/projects"
      highlights={[
        'HVAC & Mechanical Systems',
        'Electrical & Power Distribution',
        'Plumbing & Drainage',
        'Fire & Life Safety Systems',
        'Planned & Reactive Maintenance',
      ]}
      statistics={[
        {
          value: 16,
          suffix: '+',
          label: 'Years of Experience',
          description:
            'Delivering hard services across commercial, residential and institutional assets.',
        },
        {
          value: 95,
          suffix: '+',
          label: 'Facilities Supported',
          description:
            'Buildings under planned hard-services maintenance programmes.',
        },
        {
          value: 2.8,
          suffix: 'M+',
          label: 'Square Metres Covered',
          description:
            'Technical systems maintained for reliable day-to-day performance.',
        },
        {
          value: 98,
          suffix: '%',
          label: 'Planned Compliance',
          description:
            'Scheduled maintenance tasks completed within agreed windows.',
        },
      ]}
      benefits={[
        {
          icon: <Thermometer />,
          title: 'HVAC & Mechanical',
          description:
            'Servicing and repair of chillers, AHUs, FCUs, pumps and related systems to maintain comfort and energy performance.',
        },
        {
          icon: <Zap />,
          title: 'Electrical Systems',
          description:
            'Inspection, testing and maintenance of distribution boards, lighting, emergency power and related electrical infrastructure.',
        },
        {
          icon: <Cog />,
          title: 'Plumbing & Drainage',
          description:
            'Upkeep of water supply, drainage, pumps and sanitary systems to prevent failures and water-related damage.',
        },
        {
          icon: <ShieldCheck />,
          title: 'Fire & Life Safety',
          description:
            'Maintenance of fire alarm, suppression, hydrants and emergency systems in line with statutory requirements.',
        },
        {
          icon: <Wrench />,
          title: 'Planned Preventive Maintenance',
          description:
            'Scheduled programmes based on manufacturer guidance and asset criticality to reduce breakdowns and extend equipment life.',
        },
        {
          icon: <Building2 />,
          title: 'Reactive Response',
          description:
            'Defined response times and skilled technicians for faults that affect occupancy, safety or critical operations.',
        },
      ]}
      whyChooseUs={[
        {
          number: '01',
          title: 'Technical Depth',
          description:
            'Multi-trade capability across MEP and building systems under one accountable hard-services team.',
        },
        {
          number: '02',
          title: 'Programme Discipline',
          description:
            'Planned maintenance executed and recorded so compliance and asset condition are always visible.',
        },
        {
          number: '03',
          title: 'Minimal Disruption',
          description:
            'Works scheduled around occupancy and critical operations wherever possible.',
        },
        {
          number: '04',
          title: 'Clear Reporting',
          description:
            'Transparent logs, compliance certificates and performance summaries for facility and asset managers.',
        },
      ]}
      deliverables={[
        {
          icon: <FileText />,
          title: 'Maintenance Programmes',
          description:
            'Planned schedules by system, frequency and criticality.',
        },
        {
          icon: <Settings />,
          title: 'Technical Servicing',
          description:
            'HVAC, electrical, plumbing and fire system maintenance.',
        },
        {
          icon: <CheckCircle2 />,
          title: 'Reactive Repairs',
          description:
            'Fault response within agreed service levels.',
        },
        {
          icon: <BadgeCheck />,
          title: 'Compliance Testing',
          description:
            'Statutory inspections and certification support.',
        },
        {
          icon: <Clock3 />,
          title: 'Asset Condition Logs',
          description:
            'Records of work done and emerging issues.',
        },
        {
          icon: <Target />,
          title: 'Performance Reports',
          description:
            'Periodic summaries for owners and facility managers.',
        },
      ]}
      serviceHighlights={[
        {
          title: 'Systems That Stay Reliable',
          description:
            'Hard services keep the invisible infrastructure of a building working. Planned maintenance and rapid response protect comfort, safety and asset value.',
          image:
            'https://images.unsplash.com/photo-1504328348526-dd7f042e5d84?auto=format&fit=crop&w=1400&q=90',
        },
        {
          title: 'One Team for Critical Systems',
          description:
            'Coordinated MEP and building-system coverage reduces the need for multiple contractors and improves accountability when issues arise.',
          image:
            'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1400&q=90',
        },
        {
          title: 'Evidence of Performance',
          description:
            'Documented programmes, test certificates and clear reporting give facility managers confidence that obligations are being met.',
          image:
            'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=90',
        },
      ]}
      industries={[
        { name: 'Commercial Offices' },
        { name: 'Residential Communities' },
        { name: 'Hotels & Hospitality' },
        { name: 'Healthcare Facilities' },
        { name: 'Educational Campuses' },
        { name: 'Retail & Mixed-Use' },
        { name: 'Industrial & Logistics' },
        { name: 'Government & Civic' },
      ]}
      gallery={[
        {
          src: 'https://images.unsplash.com/photo-1504328348526-dd7f042e5d84?auto=format&fit=crop&w=1200&q=90',
          alt: 'Hard services technical maintenance works',
        },
        {
          src: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=90',
          alt: 'MEP systems facility maintenance',
        },
        {
          src: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=90',
          alt: 'Building systems planned maintenance',
        },
      ]}
      ctaTitle="Ready for reliable hard services?"
      ctaDescription="Partner with our hard services team for planned and reactive maintenance that keeps mechanical, electrical and building systems performing safely and efficiently."
      ctaButtonText="Request Consultation"
      ctaButtonLink="/contact"
      ctaSecondaryText="Our Projects"
      ctaSecondaryLink="/projects"
    />
  )
}