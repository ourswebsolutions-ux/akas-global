'use client'

import ServicePage from '../../components/Service'
import {
  Mountain,
  Shovel,
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
      title="Earthworks"
      subtitle="Precision Bulk Excavation, Filling & Ground Preparation"
      description="Our Earthworks service provides complete bulk excavation, cut-and-fill operations, ground improvement and site preparation for major infrastructure and development projects. From large-scale earthmoving and engineered fill placement to compaction control, slope stabilisation and final formation levels, we deliver accurate, stable platforms that form the foundation for all subsequent construction."
      badge="Infrastructure"
      label="Earthworks"
      heroImage="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1800&q=90"
      heroImageAlt="Large-scale earthworks and site preparation"
      imagePosition="right"
      layout="luxury"
      theme="light"
      animationPreset="premium"
      buttonText="Request Consultation"
      buttonLink="/contact"
      secondaryButtonText="Our Projects"
      secondaryButtonLink="/projects"
      highlights={[
        'Bulk Excavation & Cut-Fill',
        'Engineered Fill Placement',
        'Compaction & Density Control',
        'Slope Stabilisation',
        'Final Formation Levels',
      ]}
      statistics={[
        {
          value: 16,
          suffix: '+',
          label: 'Years of Experience',
          description:
            'Executing large-scale earthworks for infrastructure, industrial and commercial developments.',
        },
        {
          value: 75,
          suffix: '+',
          label: 'Earthworks Projects',
          description:
            'Completed bulk excavation, filling and ground preparation packages across major sites.',
        },
        {
          value: 12,
          suffix: 'M+',
          label: 'Cubic Metres Moved',
          description:
            'Material excavated, transported and placed under controlled quality regimes.',
        },
        {
          value: 99,
          suffix: '%',
          label: 'Level Accuracy',
          description:
            'Final formations achieved within specified tolerances through continuous survey control.',
        },
      ]}
      benefits={[
        {
          icon: <Mountain />,
          title: 'Bulk Excavation & Cut-Fill',
          description:
            'Large-scale excavation, hauling and placement of material optimised for mass balance, minimising import/export and reducing overall project cost.',
        },
        {
          icon: <Layers />,
          title: 'Engineered Fill Placement',
          description:
            'Controlled placement of suitable fill materials in layers with continuous compaction and testing to achieve required bearing capacity and settlement performance.',
        },
        {
          icon: <Shovel />,
          title: 'Ground Improvement',
          description:
            'Techniques including soil stabilisation, dynamic compaction and replacement strategies to enhance weak ground and prepare stable platforms.',
        },
        {
          icon: <Settings />,
          title: 'Slope & Embankment Works',
          description:
            'Design and construction of permanent and temporary slopes, embankments and retaining structures with appropriate drainage and stabilisation measures.',
        },
        {
          icon: <ShieldCheck />,
          title: 'Quality & Compaction Control',
          description:
            'On-site density testing, moisture control and layer thickness verification ensuring every fill zone meets geotechnical specifications.',
        },
        {
          icon: <Activity />,
          title: 'Survey & Level Control',
          description:
            'Continuous GPS and total-station monitoring to maintain design levels, volumes and geometric accuracy throughout the earthworks phase.',
        },
      ]}
      whyChooseUs={[
        {
          number: '01',
          title: 'Mass-Balance Optimisation',
          description:
            'Detailed cut-fill analysis and material management plans minimise imported fill and exported spoil, reducing cost and environmental impact.',
        },
        {
          number: '02',
          title: 'Geotechnical Integration',
          description:
            'Earthworks are planned and executed in close coordination with geotechnical recommendations, ensuring ground performance matches design assumptions.',
        },
        {
          number: '03',
          title: 'High-Capacity Fleet & Plant',
          description:
            'Modern excavators, dump trucks, dozers and compactors operated by experienced crews deliver high production rates while maintaining quality.',
        },
        {
          number: '04',
          title: 'Safety & Environmental Control',
          description:
            'Dust suppression, erosion control, temporary drainage and traffic management protect both the workforce and surrounding environment.',
        },
      ]}
      deliverables={[
        {
          icon: <FileText />,
          title: 'Earthworks Method Statements',
          description:
            'Detailed sequence, plant allocation and quality control procedures.',
        },
        {
          icon: <Wrench />,
          title: 'Bulk Excavation & Filling',
          description:
            'Cut, haul, place and compact operations to design levels.',
        },
        {
          icon: <CheckCircle2 />,
          title: 'Compaction Testing Records',
          description:
            'Density, moisture and layer verification for every fill zone.',
        },
        {
          icon: <BadgeCheck />,
          title: 'Survey Control & As-Builts',
          description:
            'Continuous level monitoring and final formation surveys.',
        },
        {
          icon: <Clock3 />,
          title: 'Temporary Works & Drainage',
          description:
            'Slope protection, silt control and temporary water management.',
        },
        {
          icon: <Target />,
          title: 'Handover to Next Package',
          description:
            'Stable, level platforms ready for foundations or pavement works.',
        },
      ]}
      serviceHighlights={[
        {
          title: 'The Foundation of Every Project',
          description:
            'Earthworks set the geometric and geotechnical platform for all subsequent construction. Accurate levels, controlled compaction and stable slopes protect the performance of every structure and pavement that follows.',
          image:
            'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=90',
        },
        {
          title: 'Production with Precision',
          description:
            'High-capacity plant delivers volume, while continuous survey and testing deliver accuracy. Every cubic metre is placed, compacted and verified against the design intent.',
          image:
            'https://images.unsplash.com/photo-1581094271901-8022df4466f9?auto=format&fit=crop&w=1400&q=90',
        },
        {
          title: 'Ready for the Next Phase',
          description:
            'Final formations are handed over clean, stable and within tolerance — allowing foundations, utilities and pavement packages to commence without delay or remedial work.',
          image:
            'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1400&q=90',
        },
      ]}
      industries={[
        { name: 'Highway & Road Projects' },
        { name: 'Industrial Developments' },
        { name: 'Mixed-Use Masterplans' },
        { name: 'Residential Communities' },
        { name: 'Logistics & Warehousing' },
        { name: 'Airport & Port Facilities' },
        { name: 'Energy & Utility Sites' },
        { name: 'Public Infrastructure' },
      ]}
      gallery={[
        {
          src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=90',
          alt: 'Large-scale earthworks and excavation',
        },
        {
          src: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?auto=format&fit=crop&w=1200&q=90',
          alt: 'Heavy plant and ground preparation',
        },
        {
          src: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=90',
          alt: 'Site formation and civil earthworks',
        },
      ]}
      ctaTitle="Ready to prepare a stable project platform?"
      ctaDescription="Engage our earthworks team to deliver precise bulk excavation, engineered fill and formation levels that give every subsequent package a solid, accurate foundation."
      ctaButtonText="Request Consultation"
      ctaButtonLink="/contact"
      ctaSecondaryText="Our Projects"
      ctaSecondaryLink="/projects"
    />
  )
}