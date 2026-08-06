'use client'

import ServicePage from '../../components/Service'
import {
  Mountain,
  Layers,
  ShieldCheck,
  Wrench,
  CheckCircle2,
  Clock3,
  BadgeCheck,
  Settings,
  Target,
  FileText,
  SprayCan,
  HardHat,
  Building2,
} from 'lucide-react'

export default function Page() {
  return (
    <ServicePage
      title="Shotcrete"
      subtitle="High-Performance Sprayed Concrete for Structural and Protective Applications"
      description="Our Shotcrete service delivers wet- and dry-mix sprayed concrete for structural support, slope stabilisation, tunnel linings, repair and specialised architectural applications. With controlled mix designs, experienced nozzle operators and rigorous quality procedures, we provide durable, well-bonded concrete in situations where formwork is impractical or rapid placement is essential."
      badge="Concrete Solutions"
      label="Shotcrete"
      heroImage="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1800&q=90"
      heroImageAlt="Shotcrete sprayed concrete application on site"
      imagePosition="right"
      layout="modern"
      theme="light"
      animationPreset="premium"
      buttonText="Request Consultation"
      buttonLink="/contact"
      secondaryButtonText="Our Projects"
      secondaryButtonLink="/projects"
      highlights={[
        'Wet & Dry Mix Shotcrete',
        'Slope & Excavation Support',
        'Tunnel & Underground Linings',
        'Structural Repair & Strengthening',
        'Architectural Sprayed Finishes',
      ]}
      statistics={[
        {
          value: 16,
          suffix: '+',
          label: 'Years of Experience',
          description:
            'Delivering shotcrete for infrastructure, buildings and specialised applications.',
        },
        {
          value: 95,
          suffix: '+',
          label: 'Shotcrete Projects',
          description:
            'Completed stabilisation, lining and repair packages.',
        },
        {
          value: 185000,
          suffix: '+',
          label: 'Square Metres Applied',
          description:
            'High-quality sprayed concrete placed to design thickness and strength.',
        },
        {
          value: 98,
          suffix: '%',
          label: 'Bond & Strength Compliance',
          description:
            'Applications verified against specification for adhesion and compressive strength.',
        },
      ]}
      benefits={[
        {
          icon: <SprayCan />,
          title: 'Wet & Dry Mix Capability',
          description:
            'Selection of wet- or dry-mix processes according to access, volume, rebound control and project performance requirements.',
        },
        {
          icon: <Mountain />,
          title: 'Slope & Excavation Support',
          description:
            'Stabilisation of cuttings, embankments and temporary excavations with reinforced shotcrete systems.',
        },
        {
          icon: <Layers />,
          title: 'Tunnel & Underground Linings',
          description:
            'Primary and secondary linings for tunnels, shafts and underground structures with controlled thickness and profile.',
        },
        {
          icon: <HardHat />,
          title: 'Structural Repair & Strengthening',
          description:
            'Reinstatement of deteriorated concrete, section enlargement and strengthening where conventional formwork is difficult.',
        },
        {
          icon: <ShieldCheck />,
          title: 'Quality & Adhesion Control',
          description:
            'Surface preparation, mix control, application technique and testing that ensure durable bond and specified strength.',
        },
        {
          icon: <Wrench />,
          title: 'Complex Geometry Solutions',
          description:
            'Ability to place concrete on irregular, vertical and overhead surfaces without extensive formwork.',
        },
      ]}
      whyChooseUs={[
        {
          number: '01',
          title: 'Experienced Nozzle Teams',
          description:
            'Skilled operators who control thickness, rebound and finish quality on demanding geometries and access conditions.',
        },
        {
          number: '02',
          title: 'Specification-Led Mixes',
          description:
            'Mix designs tailored for strength, early strength, fibre reinforcement and durability according to the application.',
        },
        {
          number: '03',
          title: 'Integrated Safety Approach',
          description:
            'Safe working methods for heights, confined spaces and unstable ground coordinated with the main project team.',
        },
        {
          number: '04',
          title: 'Verified Performance',
          description:
            'Thickness checks, core testing and adhesion verification that document compliance with design requirements.',
        },
      ]}
      deliverables={[
        {
          icon: <FileText />,
          title: 'Method Statements & Mixes',
          description:
            'Approved application methods and mix designs.',
        },
        {
          icon: <Settings />,
          title: 'Surface Preparation',
          description:
            'Cleaning, profiling and reinforcement fixing as required.',
        },
        {
          icon: <CheckCircle2 />,
          title: 'Shotcrete Application',
          description:
            'Controlled spraying to design thickness and profile.',
        },
        {
          icon: <BadgeCheck />,
          title: 'Reinforcement Integration',
          description:
            'Mesh, fibres or bars incorporated as specified.',
        },
        {
          icon: <Clock3 />,
          title: 'Quality Testing',
          description:
            'Strength, thickness and bond verification.',
        },
        {
          icon: <Target />,
          title: 'Records & Handover',
          description:
            'Application logs, test results and completion packs.',
        },
      ]}
      serviceHighlights={[
        {
          title: 'Concrete Where Formwork Cannot Go',
          description:
            'Shotcrete enables structural and protective concrete on slopes, tunnels, overhead surfaces and complex shapes with minimal temporary works.',
          image:
            'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=90',
        },
        {
          title: 'Control of Quality in Place',
          description:
            'Success depends on preparation, mix and application skill. Our teams manage all three so the finished layer meets design thickness and performance.',
          image:
            'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1400&q=90',
        },
        {
          title: 'From Stabilisation to Architecture',
          description:
            'Whether supporting an excavation or creating a textured architectural surface, we match process and finish to the project intent.',
          image:
            'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=90',
        },
      ]}
      industries={[
        { name: 'Infrastructure & Tunnels' },
        { name: 'Slope Stabilisation' },
        { name: 'Mining & Underground' },
        { name: 'Building Repair' },
        { name: 'Industrial Facilities' },
        { name: 'Water Retaining Structures' },
        { name: 'Highways & Cuttings' },
        { name: 'Specialised Architecture' },
      ]}
      gallery={[
        {
          src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=90',
          alt: 'Shotcrete application on construction site',
        },
        {
          src: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=90',
          alt: 'Sprayed concrete structural support works',
        },
        {
          src: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=90',
          alt: 'Shotcrete lining and stabilisation',
        },
      ]}
      ctaTitle="Ready for reliable shotcrete solutions?"
      ctaDescription="Partner with our shotcrete team for stabilisation, linings, repair and specialised sprayed concrete delivered with controlled quality and experienced application."
      ctaButtonText="Request Consultation"
      ctaButtonLink="/contact"
      ctaSecondaryText="Our Projects"
      ctaSecondaryLink="/projects"
    />
  )
}