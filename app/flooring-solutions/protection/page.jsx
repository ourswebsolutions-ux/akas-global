'use client'

import ServicePage from '../../components/Service'
import {
  Shield,
  Layers,
  ShieldCheck,
  Wrench,
  CheckCircle2,
  Clock3,
  BadgeCheck,
  Settings,
  Target,
  FileText,
  Droplets,
  HardHat,
  Building2,
} from 'lucide-react'

export default function Page() {
  return (
    <ServicePage
      title="Protection"
      subtitle="Floor Protection Systems That Safeguard Structure and Finish"
      description="Our Floor Protection service provides temporary and permanent protection solutions for concrete and finished floors during construction and in service. From site protection boards and membranes during fitout to permanent wear, chemical and moisture protection systems, we help preserve structural integrity and surface quality through the most demanding project phases and operational conditions."
      badge="Flooring Solutions"
      label="Protection"
      heroImage="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1800&q=90"
      heroImageAlt="Floor protection systems and surface safeguarding"
      imagePosition="right"
      layout="modern"
      theme="light"
      animationPreset="premium"
      buttonText="Request Consultation"
      buttonLink="/contact"
      secondaryButtonText="Our Projects"
      secondaryButtonLink="/projects"
      highlights={[
        'Temporary Site Protection',
        'Permanent Wear Layers',
        'Chemical & Moisture Resistance',
        'Heavy-Duty Industrial Protection',
        'Finish Preservation Systems',
      ]}
      statistics={[
        {
          value: 16,
          suffix: '+',
          label: 'Years of Experience',
          description:
            'Protecting floors during construction and in demanding operational environments.',
        },
        {
          value: 160,
          suffix: '+',
          label: 'Protection Projects',
          description:
            'Completed temporary and permanent floor protection packages.',
        },
        {
          value: 680000,
          suffix: '+',
          label: 'Square Metres Protected',
          description:
            'Floors safeguarded against construction traffic, chemicals and wear.',
        },
        {
          value: 98,
          suffix: '%',
          label: 'Damage Reduction',
          description:
            'Effective protection systems that minimise rework and surface defects.',
        },
      ]}
      benefits={[
        {
          icon: <Shield />,
          title: 'Temporary Site Protection',
          description:
            'Boards, membranes and coverings that shield newly cast or finished floors from construction traffic, debris and subsequent trades.',
        },
        {
          icon: <Layers />,
          title: 'Permanent Protective Systems',
          description:
            'Coatings, overlays and hard-wearing layers designed for long-term resistance to abrasion, impact and operational loads.',
        },
        {
          icon: <Droplets />,
          title: 'Moisture & Chemical Resistance',
          description:
            'Barriers and resistant finishes that protect concrete and substrates from water ingress, oils, chemicals and cleaning agents.',
        },
        {
          icon: <HardHat />,
          title: 'Industrial & Heavy-Duty Solutions',
          description:
            'Systems rated for forklift traffic, heavy equipment and aggressive environments in warehouses, plants and logistics facilities.',
        },
        {
          icon: <ShieldCheck />,
          title: 'Finish Preservation',
          description:
            'Protection strategies that keep decorative and polished floors intact until handover and beyond.',
        },
        {
          icon: <Wrench />,
          title: 'Correct System Selection',
          description:
            'Matching protection type to exposure, duration and traffic so performance is adequate without unnecessary cost.',
        },
      ]}
      whyChooseUs={[
        {
          number: '01',
          title: 'Right Protection, Right Stage',
          description:
            'Temporary systems for construction and permanent systems for service life — each specified for actual risk and duration.',
        },
        {
          number: '02',
          title: 'Installation That Stays Put',
          description:
            'Secure fixing and edge detailing so protection remains effective under real site movement and traffic.',
        },
        {
          number: '03',
          title: 'Minimal Interference',
          description:
            'Solutions that allow other trades to work efficiently while still safeguarding critical floor surfaces.',
        },
        {
          number: '04',
          title: 'Reduced Rework Cost',
          description:
            'Preventing damage is far more economical than repairing or replacing finished floors before handover.',
        },
      ]}
      deliverables={[
        {
          icon: <FileText />,
          title: 'Protection Strategy',
          description:
            'Risk assessment and recommended system selection.',
        },
        {
          icon: <Settings />,
          title: 'Material Supply',
          description:
            'Boards, membranes, coatings and accessories.',
        },
        {
          icon: <CheckCircle2 />,
          title: 'Temporary Installation',
          description:
            'Site protection laid and maintained during works.',
        },
        {
          icon: <BadgeCheck />,
          title: 'Permanent Systems',
          description:
            'Wear, chemical and moisture protection layers.',
        },
        {
          icon: <Clock3 />,
          title: 'Maintenance Support',
          description:
            'Inspection and repair of protection during programme.',
        },
        {
          icon: <Target />,
          title: 'Handover Condition',
          description:
            'Protected floors ready for final finish or occupation.',
        },
      ]}
      serviceHighlights={[
        {
          title: 'Protection That Pays for Itself',
          description:
            'Damaged floors before handover create cost, delay and dispute. Effective temporary and permanent protection preserves both structure and finish.',
          image:
            'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=90',
        },
        {
          title: 'Matched to Real Exposure',
          description:
            'We select systems based on actual traffic, chemicals and duration — not generic coverings that fail under site conditions.',
          image:
            'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=90',
        },
        {
          title: 'From Construction to Operations',
          description:
            'Whether shielding a polished slab during fitout or providing long-term industrial wear resistance, our solutions are designed for the full life cycle.',
          image:
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=90',
        },
      ]}
      industries={[
        { name: 'Commercial Fitout' },
        { name: 'Industrial & Warehousing' },
        { name: 'Retail & Showrooms' },
        { name: 'Healthcare Facilities' },
        { name: 'Hotels & Hospitality' },
        { name: 'Residential Developments' },
        { name: 'Educational Campuses' },
        { name: 'Logistics & Distribution' },
      ]}
      gallery={[
        {
          src: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=90',
          alt: 'Floor protection systems installation',
        },
        {
          src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=90',
          alt: 'Temporary and permanent floor safeguarding',
        },
        {
          src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=90',
          alt: 'Protected finished floor surfaces',
        },
      ]}
      ctaTitle="Ready to protect your floors properly?"
      ctaDescription="Partner with our protection team for temporary and permanent floor protection systems that prevent damage, reduce rework and preserve long-term performance."
      ctaButtonText="Request Consultation"
      ctaButtonLink="/contact"
      ctaSecondaryText="Our Projects"
      ctaSecondaryLink="/projects"
    />
  )
}