'use client'

import ServicePage from '../../components/Service'
import {
  Building2,
  Layers,
  ShieldCheck,
  Wrench,
  CheckCircle2,
  Clock3,
  BadgeCheck,
  Activity,
  FileText,
  Settings,
  Target,
  Square,
} from 'lucide-react'

export default function Page() {
  return (
    <ServicePage
      title="Façade"
      subtitle="High-Performance Building Envelopes"
      description="Our Façade service designs, engineers and installs complete building envelope systems that combine architectural expression with thermal, acoustic and weather performance. From unitised curtain walls and stick systems to cladding, louvres and specialised envelopes, we deliver façades that protect the building, enhance energy efficiency and realise the design intent with precision."
      badge="Façade & Fitout"
      label="Façade"
      heroImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=90"
      heroImageAlt="Modern building façade and curtain wall system"
      imagePosition="right"
      layout="immersive"
      theme="light"
      animationPreset="premium"
      buttonText="Request Consultation"
      buttonLink="/contact"
      secondaryButtonText="Our Projects"
      secondaryButtonLink="/projects"
      highlights={[
        'Unitised Curtain Walls',
        'Stick & Semi-Unitised Systems',
        'Cladding & Rainscreen',
        'Louvres & Solar Control',
        'Performance Testing & Sealing',
      ]}
      statistics={[
        {
          value: 16,
          suffix: '+',
          label: 'Years of Experience',
          description:
            'Delivering façade systems for commercial, residential and mixed-use towers.',
        },
        {
          value: 60,
          suffix: '+',
          label: 'Façade Projects',
          description:
            'Completed curtain wall, cladding and envelope installations across major developments.',
        },
        {
          value: 850000,
          suffix: '+',
          label: 'Square Metres Installed',
          description:
            'High-performance façade systems engineered and installed to exacting tolerances.',
        },
        {
          value: 99,
          suffix: '%',
          label: 'Weather Performance',
          description:
            'Systems tested and installed to meet air, water and structural performance criteria.',
        },
      ]}
      benefits={[
        {
          icon: <Building2 />,
          title: 'Unitised Curtain Walls',
          description:
            'Factory-assembled unitised panels that deliver speed of installation, consistent quality and superior weather performance for high-rise envelopes.',
        },
        {
          icon: <Layers />,
          title: 'Stick & Semi-Unitised Systems',
          description:
            'Site-assembled stick systems and hybrid solutions suited to complex geometries, lower-rise buildings and projects requiring greater on-site flexibility.',
        },
        {
          icon: <Square />,
          title: 'Cladding & Rainscreen',
          description:
            'Aluminium, stone, terracotta, HPL and composite rainscreen systems that provide durable, ventilated façades with strong architectural expression.',
        },
        {
          icon: <Settings />,
          title: 'Louvres & Solar Control',
          description:
            'Fixed and operable louvres, brise-soleil and shading devices that manage solar gain while contributing to the building’s visual identity.',
        },
        {
          icon: <ShieldCheck />,
          title: 'Performance Engineering',
          description:
            'Structural, thermal, acoustic and weather analysis ensuring the envelope meets design loads, energy targets and comfort criteria.',
        },
        {
          icon: <Activity />,
          title: 'Testing & Quality Assurance',
          description:
            'Mock-ups, performance testing, installation supervision and sealing regimes that protect long-term integrity of the completed façade.',
        },
      ]}
      whyChooseUs={[
        {
          number: '01',
          title: 'Design Intent Realised',
          description:
            'Close collaboration with architects ensures that visual ambition is translated into buildable, high-performing envelope solutions without compromise.',
        },
        {
          number: '02',
          title: 'Engineering-Led Delivery',
          description:
            'In-house and partner engineering capability covers structural, thermal and weather performance so that every system is proven before installation.',
        },
        {
          number: '03',
          title: 'Precision Installation',
          description:
            'Experienced façade teams, rigorous setting-out and continuous quality checks deliver the dimensional accuracy and sealing quality the envelope requires.',
        },
        {
          number: '04',
          title: 'Long-Term Performance Focus',
          description:
            'Material selection, detailing and maintenance access are planned so that the façade continues to perform and retain its appearance over decades.',
        },
      ]}
      deliverables={[
        {
          icon: <FileText />,
          title: 'Design & Engineering Packages',
          description:
            'System drawings, structural calculations and performance specifications.',
        },
        {
          icon: <Wrench />,
          title: 'Fabrication & Supply',
          description:
            'Factory production of unitised panels, frames and cladding components.',
        },
        {
          icon: <CheckCircle2 />,
          title: 'Installation & Sealing',
          description:
            'Precise erection, alignment, glazing and weatherproofing works.',
        },
        {
          icon: <BadgeCheck />,
          title: 'Testing & Commissioning',
          description:
            'Mock-up testing, site performance checks and final inspections.',
        },
        {
          icon: <Clock3 />,
          title: 'Interface Coordination',
          description:
            'Detailed coordination with structure, roof and internal finishes.',
        },
        {
          icon: <Target />,
          title: 'As-Built & O&M',
          description:
            'Complete records, maintenance guidance and warranty documentation.',
        },
      ]}
      serviceHighlights={[
        {
          title: 'The Building’s First Line of Defence',
          description:
            'A high-performance façade protects against weather, controls energy flow and defines the building’s public face. We engineer and install envelopes that excel in all three roles.',
          image:
            'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=90',
        },
        {
          title: 'Precision from Factory to Site',
          description:
            'Unitised systems benefit from controlled factory conditions. Our process ensures that the quality achieved in production is fully realised during installation and sealing on site.',
          image:
            'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=90',
        },
        {
          title: 'Performance Proven, Not Assumed',
          description:
            'Mock-ups, laboratory testing and site verification confirm that air, water and structural performance meet the design criteria before the building is enclosed.',
          image:
            'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1400&q=90',
        },
      ]}
      industries={[
        { name: 'Commercial Office Towers' },
        { name: 'Residential High-Rise' },
        { name: 'Mixed-Use Developments' },
        { name: 'Hotels & Hospitality' },
        { name: 'Healthcare Facilities' },
        { name: 'Educational Buildings' },
        { name: 'Retail & Lifestyle Centres' },
        { name: 'Corporate Headquarters' },
      ]}
      gallery={[
        {
          src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=90',
          alt: 'Modern curtain wall façade',
        },
        {
          src: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=90',
          alt: 'Façade installation and detailing',
        },
        {
          src: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=90',
          alt: 'High-rise building envelope',
        },
      ]}
      ctaTitle="Ready to deliver a high-performance building envelope?"
      ctaDescription="Partner with our façade team to design, engineer and install curtain walls, cladding and envelope systems that combine architectural quality with lasting thermal, acoustic and weather performance."
      ctaButtonText="Request Consultation"
      ctaButtonLink="/contact"
      ctaSecondaryText="Our Projects"
      ctaSecondaryLink="/projects"
    />
  )
}