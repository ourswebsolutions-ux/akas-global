'use client'

import ServicePage from '../../components/Service'
import {
  Lightbulb,
  Lamp,
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
      title="Lighting"
      subtitle="Landscape Illumination for Safety, Beauty & Atmosphere"
      description="Our Landscape Lighting service designs and installs external lighting systems that enhance safety, guide circulation and create atmospheric night-time environments. From pathway and bollard lighting to feature uplighting, facade washes and smart control systems, we deliver energy-efficient illumination that complements the landscape design and performs reliably outdoors."
      badge="Landscaping"
      label="Lighting"
      heroImage="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1800&q=90"
      heroImageAlt="Landscape and outdoor lighting design"
      imagePosition="right"
      layout="corporate"
      theme="light"
      animationPreset="premium"
      buttonText="Request Consultation"
      buttonLink="/contact"
      secondaryButtonText="Our Projects"
      secondaryButtonLink="/projects"
      highlights={[
        'Pathway & Bollard Lighting',
        'Feature & Uplighting',
        'Facade & Wall Washes',
        'Smart Control Systems',
        'Energy-Efficient Solutions',
      ]}
      statistics={[
        {
          value: 16,
          suffix: '+',
          label: 'Years of Experience',
          description:
            'Delivering landscape and external lighting for residential, commercial and public projects.',
        },
        {
          value: 85,
          suffix: '+',
          label: 'Lighting Projects',
          description:
            'Completed external lighting schemes across parks, communities, campuses and developments.',
        },
        {
          value: 40,
          suffix: '%',
          label: 'Average Energy Saving',
          description:
            'Achieved through LED technology, efficient optics and intelligent control strategies.',
        },
        {
          value: 99,
          suffix: '%',
          label: 'System Reliability',
          description:
            'Delivered through quality luminaires, proper installation and structured commissioning.',
        },
      ]}
      benefits={[
        {
          icon: <Lightbulb />,
          title: 'Pathway & Circulation Lighting',
          description:
            'Bollards, path lights and low-level fixtures that provide safe, glare-controlled illumination for pedestrian routes and gathering spaces.',
        },
        {
          icon: <Lamp />,
          title: 'Feature & Accent Lighting',
          description:
            'Uplighting, spotlighting and grazers that highlight trees, sculptures, water features and architectural elements after dark.',
        },
        {
          icon: <Layers />,
          title: 'Facade & Wall Illumination',
          description:
            'Wall washes, linear fixtures and concealed lighting that enhance building elevations and landscape structures at night.',
        },
        {
          icon: <Settings />,
          title: 'Smart Controls & Scenes',
          description:
            'Astronomical timers, photocells, dimming and scene-setting systems that optimise energy use and create flexible night-time atmospheres.',
        },
        {
          icon: <ShieldCheck />,
          title: 'Outdoor-Rated Performance',
          description:
            'IP-rated luminaires, corrosion-resistant materials and robust installation methods suited to continuous outdoor exposure.',
        },
        {
          icon: <Activity />,
          title: 'Energy-Efficient Design',
          description:
            'LED technology, efficient optics and appropriate light levels that meet safety needs while minimising power consumption and light pollution.',
        },
      ]}
      whyChooseUs={[
        {
          number: '01',
          title: 'Design-Integrated Lighting',
          description:
            'Lighting is developed alongside softscape and hardscape so that fixtures support the landscape composition rather than competing with it.',
        },
        {
          number: '02',
          title: 'Safety with Atmosphere',
          description:
            'We balance functional illumination for circulation and security with carefully controlled accent lighting that creates welcoming night-time character.',
        },
        {
          number: '03',
          title: 'Durable Outdoor Specification',
          description:
            'Components are selected for UV resistance, ingress protection and longevity in the local climate, reducing maintenance and replacement cycles.',
        },
        {
          number: '04',
          title: 'Simple Operation & Control',
          description:
            'Control systems are configured for intuitive daily operation with clear documentation so that facilities teams can manage scenes and schedules confidently.',
        },
      ]}
      deliverables={[
        {
          icon: <FileText />,
          title: 'Lighting Design Packages',
          description:
            'Layout plans, fixture schedules, mounting details and control diagrams.',
        },
        {
          icon: <Wrench />,
          title: 'Installation & Cabling',
          description:
            'Luminaire mounting, underground cabling, junction boxes and connections.',
        },
        {
          icon: <CheckCircle2 />,
          title: 'Control System Setup',
          description:
            'Controller programming, sensor integration and scene configuration.',
        },
        {
          icon: <BadgeCheck />,
          title: 'Testing & Commissioning',
          description:
            'Functional tests, aiming, light-level verification and fine-tuning.',
        },
        {
          icon: <Clock3 />,
          title: 'Energy & Performance Review',
          description:
            'Confirmation of design light levels and operating schedules.',
        },
        {
          icon: <Target />,
          title: 'O&M Documentation',
          description:
            'As-built drawings, fixture manuals and maintenance recommendations.',
        },
      ]}
      serviceHighlights={[
        {
          title: 'Night-Time Landscape Character',
          description:
            'Thoughtful lighting transforms outdoor spaces after dark. We create layered illumination that guides movement, highlights key features and establishes a safe, inviting atmosphere without excessive brightness or glare.',
          image:
            'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=90',
        },
        {
          title: 'Efficiency Meets Aesthetics',
          description:
            'Modern LED sources and precise optics allow us to achieve the required light levels with significantly lower energy use, while maintaining the visual quality expected in high-quality landscapes.',
          image:
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=90',
        },
        {
          title: 'Built for Outdoor Life',
          description:
            'Every fixture, cable and connection is specified and installed for continuous outdoor exposure. The result is a reliable system that continues to perform with minimal intervention.',
          image:
            'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=90',
        },
      ]}
      industries={[
        { name: 'Residential Communities' },
        { name: 'Commercial Developments' },
        { name: 'Hotels & Resorts' },
        { name: 'Parks & Public Realm' },
        { name: 'Educational Campuses' },
        { name: 'Corporate Headquarters' },
        { name: 'Mixed-Use Masterplans' },
        { name: 'Healthcare Landscapes' },
      ]}
      gallery={[
        {
          src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=90',
          alt: 'Landscape and outdoor lighting at night',
        },
        {
          src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=90',
          alt: 'Feature lighting in outdoor spaces',
        },
        {
          src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=90',
          alt: 'Pathway and architectural landscape lighting',
        },
      ]}
      ctaTitle="Ready to illuminate your landscape?"
      ctaDescription="Partner with our lighting team to design and install external illumination that enhances safety, reveals the beauty of the landscape and operates efficiently night after night."
      ctaButtonText="Request Consultation"
      ctaButtonLink="/contact"
      ctaSecondaryText="Our Projects"
      ctaSecondaryLink="/projects"
    />
  )
}