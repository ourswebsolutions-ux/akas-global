'use client'

import ServicePage from '../../components/Service'
import {
  Waves,
  Droplets,
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
      title="Water Features"
      subtitle="Dynamic Water Elements for Landscape & Architecture"
      description="Our Water Features service designs, constructs and commissions fountains, reflecting pools, cascades, rills and interactive water elements that become focal points of outdoor and public spaces. From concept and hydraulic design through waterproofing, equipment installation and programming, we deliver reliable, visually striking water features that perform safely and efficiently."
      badge="Landscaping"
      label="Water Features"
      heroImage="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1800&q=90"
      heroImageAlt="Landscape water feature and fountain"
      imagePosition="right"
      layout="premium"
      theme="light"
      animationPreset="premium"
      buttonText="Request Consultation"
      buttonLink="/contact"
      secondaryButtonText="Our Projects"
      secondaryButtonLink="/projects"
      highlights={[
        'Fountains & Jets',
        'Reflecting Pools & Cascades',
        'Rills & Water Walls',
        'Interactive Water Play',
        'Hydraulic & Control Systems',
      ]}
      statistics={[
        {
          value: 16,
          suffix: '+',
          label: 'Years of Experience',
          description:
            'Designing and building water features for residential, commercial and public landscapes.',
        },
        {
          value: 55,
          suffix: '+',
          label: 'Water Features Completed',
          description:
            'Fountains, pools, cascades and interactive elements delivered across major projects.',
        },
        {
          value: 98,
          suffix: '%',
          label: 'Operational Reliability',
          description:
            'Achieved through quality equipment, proper hydraulic design and structured commissioning.',
        },
        {
          value: 30,
          suffix: '%',
          label: 'Average Energy Saving',
          description:
            'Realised through efficient pumps, variable-speed drives and intelligent control strategies.',
        },
      ]}
      benefits={[
        {
          icon: <Waves />,
          title: 'Fountains & Jet Systems',
          description:
            'Static and dynamic fountain compositions with precisely engineered jets, nozzles and sequencing that create visual drama and movement.',
        },
        {
          icon: <Droplets />,
          title: 'Reflecting Pools & Cascades',
          description:
            'Still-water basins, weirs and cascading water elements that provide calm reflection or gentle sound within the landscape.',
        },
        {
          icon: <Layers />,
          title: 'Rills, Channels & Water Walls',
          description:
            'Linear water elements and vertical water walls that guide movement, define space and add continuous sensory interest.',
        },
        {
          icon: <Settings />,
          title: 'Interactive Water Play',
          description:
            'Safe, engaging water play features for public and family environments with appropriate filtration, control and safety measures.',
        },
        {
          icon: <ShieldCheck />,
          title: 'Waterproofing & Structure',
          description:
            'Robust tank construction, membrane systems and detailing that ensure long-term watertight performance and structural integrity.',
        },
        {
          icon: <Activity />,
          title: 'Pumps, Filtration & Controls',
          description:
            'Complete hydraulic packages including pumps, filtration, UV treatment, lighting and programmable control systems for reliable daily operation.',
        },
      ]}
      whyChooseUs={[
        {
          number: '01',
          title: 'Integrated Design Approach',
          description:
            'Water features are developed in coordination with hardscape, planting and lighting so that they sit naturally within the overall landscape composition.',
        },
        {
          number: '02',
          title: 'Hydraulic & Operational Expertise',
          description:
            'Systems are engineered for correct flow rates, head pressures and water quality, ensuring reliable performance and manageable operating costs.',
        },
        {
          number: '03',
          title: 'Safety & Accessibility',
          description:
            'Edges, depths, slip resistance and control measures are designed to meet safety expectations for public and private environments.',
        },
        {
          number: '04',
          title: 'Maintainable Longevity',
          description:
            'Equipment access, filtration design and material selection prioritise ease of maintenance and extended service life in outdoor conditions.',
        },
      ]}
      deliverables={[
        {
          icon: <FileText />,
          title: 'Concept & Technical Design',
          description:
            'Visual concepts, hydraulic calculations and construction details.',
        },
        {
          icon: <Wrench />,
          title: 'Structural & Waterproofing Works',
          description:
            'Tank construction, membranes and watertight detailing.',
        },
        {
          icon: <CheckCircle2 />,
          title: 'Equipment Installation',
          description:
            'Pumps, nozzles, filtration, lighting and control systems.',
        },
        {
          icon: <BadgeCheck />,
          title: 'Programming & Commissioning',
          description:
            'Sequence setup, water quality checks and performance testing.',
        },
        {
          icon: <Clock3 />,
          title: 'Training & Handover',
          description:
            'Operator instruction and clear operating procedures.',
        },
        {
          icon: <Target />,
          title: 'O&M Documentation',
          description:
            'As-built drawings, equipment manuals and maintenance schedules.',
        },
      ]}
      serviceHighlights={[
        {
          title: 'Water as a Focal Experience',
          description:
            'Well-designed water features become the emotional centre of outdoor space. We combine visual impact with reliable engineering so that fountains, pools and cascades continue to delight without becoming operational burdens.',
          image:
            'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1400&q=90',
        },
        {
          title: 'Engineering Behind the Beauty',
          description:
            'Every jet height, cascade flow and reflecting surface depends on correct hydraulics, waterproofing and water treatment. Our technical approach protects both appearance and long-term performance.',
          image:
            'https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=1400&q=90',
        },
        {
          title: 'Simple to Operate, Built to Last',
          description:
            'Control systems are configured for straightforward daily use, while robust equipment and accessible maintenance points keep ongoing care efficient and predictable.',
          image:
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=90',
        },
      ]}
      industries={[
        { name: 'Hotels & Resorts' },
        { name: 'Residential Communities' },
        { name: 'Commercial Developments' },
        { name: 'Parks & Public Realm' },
        { name: 'Corporate Headquarters' },
        { name: 'Mixed-Use Masterplans' },
        { name: 'Educational Campuses' },
        { name: 'Healthcare Landscapes' },
      ]}
      gallery={[
        {
          src: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=90',
          alt: 'Landscape water feature and fountain',
        },
        {
          src: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=1200&q=90',
          alt: 'Reflecting pool and cascade in landscape',
        },
        {
          src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=90',
          alt: 'Modern outdoor water feature design',
        },
      ]}
      ctaTitle="Ready to create memorable water experiences?"
      ctaDescription="Partner with our water features team to design and build fountains, pools and cascades that combine visual impact with reliable, efficient long-term operation."
      ctaButtonText="Request Consultation"
      ctaButtonLink="/contact"
      ctaSecondaryText="Our Projects"
      ctaSecondaryLink="/projects"
    />
  )
}