'use client'

import ServicePage from '../components/Service'
import {
  Trees,
  Flower2,
  Droplets,
  Shovel,
  Leaf,
  Layers,
  CheckCircle2,
  Award,
  Users,
  Clock3,
  BadgeCheck,
  Ruler,
} from 'lucide-react'

export default function Page() {
  return (
    <ServicePage
      title="Landscaping"
      subtitle="Softscape, Hardscape & Outdoor Environment Solutions"
      description="Our Landscaping division delivers complete outdoor environments that enhance property value, user experience, and environmental performance. From concept design and detailed planting schemes to hardscape construction, irrigation systems, and long-term aftercare, we create landscapes that are visually compelling, climate-adapted, and built to the same quality standards as our major construction works."
      badge="Landscape Architecture & Construction"
      label="Landscaping"
      heroImage="https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=1800&q=90"
      heroImageAlt="Premium landscaped outdoor environment with gardens and hardscape"
      imagePosition="right"
      layout="premium"
      theme="light"
      animationPreset="premium"
      buttonText="Request Consultation"
      buttonLink="/contact"
      secondaryButtonText="Our Projects"
      secondaryButtonLink="/projects"
      highlights={[
        'Softscape Design & Installation',
        'Hardscape Construction',
        'Smart Irrigation Systems',
        'Outdoor Living Spaces',
        'Sustainable Native Planting',
      ]}
      statistics={[
        {
          value: 12,
          suffix: '+',
          label: 'Years of Experience',
          description:
            'Delivering high-performance landscapes across commercial and residential projects.',
        },
        {
          value: 150,
          suffix: '+',
          label: 'Landscape Projects',
          description:
            'Completed softscape, hardscape and irrigation schemes of varying scale.',
        },
        {
          value: 96,
          suffix: '%',
          label: 'Client Retention',
          description:
            'Driven by design quality, reliable installation and aftercare excellence.',
        },
        {
          value: 85,
          suffix: '+',
          label: 'Specialist Team',
          description:
            'Landscape architects, horticulturists, irrigation engineers and site supervisors.',
        },
      ]}
      benefits={[
        {
          icon: <Trees />,
          title: 'Softscape Design & Installation',
          description:
            'Complete softscape solutions including lawn establishment, ornamental planting, ground covers, seasonal colour schemes and mature specimen trees selected for climate resilience and long-term performance.',
        },
        {
          icon: <Layers />,
          title: 'Hardscape Construction',
          description:
            'Precision hardscape works covering paved walkways, plazas, retaining walls, outdoor steps, feature walls and decorative stonework executed to exacting levels and finishes.',
        },
        {
          icon: <Droplets />,
          title: 'Irrigation & Water Management',
          description:
            'Smart irrigation systems with drip and spray technology, rain sensors, soil-moisture monitoring and water-efficient zoning designed for arid and high-temperature environments.',
        },
        {
          icon: <Flower2 />,
          title: 'Outdoor Living Spaces',
          description:
            'Design and construction of outdoor kitchens, seating areas, pergolas, fire features, water features and entertainment zones that extend the usable life of the property.',
        },
        {
          icon: <Leaf />,
          title: 'Sustainable & Native Landscapes',
          description:
            'Climate-responsive planting strategies using native and adapted species, reduced water demand, improved biodiversity and lower long-term maintenance requirements.',
        },
        {
          icon: <Shovel />,
          title: 'Soil Preparation & Earthworks',
          description:
            'Professional grading, soil amendment, drainage correction and structural soil systems that ensure healthy plant establishment and long-term site stability.',
        },
      ]}
      whyChooseUs={[
        {
          number: '01',
          title: 'Integrated Design-Build Capability',
          description:
            'Our landscape architects and construction teams work under one contract, ensuring design intent is fully realised during installation without coordination gaps.',
        },
        {
          number: '02',
          title: 'Climate-Adapted Expertise',
          description:
            'Deep regional knowledge of soil conditions, microclimates and plant performance allows us to deliver landscapes that thrive under local environmental stresses.',
        },
        {
          number: '03',
          title: 'Precision Construction Standards',
          description:
            'Hardscape and softscape works are executed to the same quality systems applied on major building projects, with documented inspections at every stage.',
        },
        {
          number: '04',
          title: 'Long-Term Maintenance Partnerships',
          description:
            'We offer structured aftercare programmes that protect the investment and maintain visual and horticultural standards for years after handover.',
        },
      ]}
      deliverables={[
        {
          icon: <CheckCircle2 />,
          title: 'Site Analysis & Concept',
          description:
            'Surveys, soil testing, microclimate studies and concept development.',
        },
        {
          icon: <Ruler />,
          title: 'Detailed Landscape Design',
          description:
            'Planting plans, hardscape detailing, irrigation and lighting layouts.',
        },
        {
          icon: <Shovel />,
          title: 'Construction Delivery',
          description:
            'Earthworks, hardscape installation, planting and system integration.',
        },
        {
          icon: <BadgeCheck />,
          title: 'Quality Assurance',
          description:
            'Material verification, level checks, plant health and system testing.',
        },
        {
          icon: <Clock3 />,
          title: 'Commissioning',
          description:
            'Irrigation programming, establishment care and performance validation.',
        },
        {
          icon: <Users />,
          title: 'Handover & Aftercare',
          description:
            'As-built records, maintenance manuals and optional ongoing care contracts.',
        },
      ]}
      serviceHighlights={[
        {
          title: 'Strategic Landscape Planning',
          description:
            'Successful landscapes begin with rigorous site analysis. Our specialists evaluate soil, microclimate, water availability and user requirements to develop concepts that balance aesthetics, function and long-term sustainability.',
          image:
            'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1400&q=90',
        },
        {
          title: 'Precision Installation & Craftsmanship',
          description:
            'Hardscape and softscape works are directed by experienced supervisors who coordinate grading, paving, planting and irrigation installation while maintaining continuous quality and progress control.',
          image:
            'https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=1400&q=90',
        },
        {
          title: 'Establishment & Long-Term Performance',
          description:
            'Before handover, irrigation systems are commissioned, planting is established under structured care programmes, and complete documentation is provided to ensure the landscape performs for years to come.',
          image:
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=90',
        },
      ]}
      industries={[
        { name: 'Commercial Developments' },
        { name: 'Residential Communities' },
        { name: 'Hospitality & Resorts' },
        { name: 'Healthcare Campuses' },
        { name: 'Educational Institutions' },
        { name: 'Corporate Headquarters' },
        { name: 'Mixed-Use Masterplans' },
        { name: 'Public Parks & Civic Spaces' },
      ]}
      
      ctaTitle="Ready to elevate your outdoor environment?"
      ctaDescription="Our landscape team is prepared to deliver design, construction and long-term care with precision and expertise."
      ctaButtonText="Request Consultation"
      ctaButtonLink="/contact"
      ctaSecondaryText="Our Projects"
      ctaSecondaryLink="/projects"
    />
  )
}