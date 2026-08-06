'use client'

import ServicePage from '../components/Service'
import {
  Building2,
  MapPin,
  TrendingUp,
  Key,
  ShieldCheck,
  Award,
  Users,
  CheckCircle2,
  Clock3,
  BadgeCheck,
  Home,
  Briefcase,
} from 'lucide-react'

export default function Page() {
  return (
    <ServicePage
      title="Real Estate"
      subtitle="Development, Investment & Property Solutions"
      description="Our Real Estate division combines deep construction expertise with strategic property development and investment capabilities. From land acquisition and master planning to project delivery, asset management and advisory services, we create and manage high-value commercial, residential and mixed-use developments that deliver long-term returns and lasting urban impact."
      badge="Property Development & Investment"
      label="Real Estate"
      heroImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=90"
      heroImageAlt="Modern commercial and residential real estate development"
      imagePosition="right"
      layout="signature"
      theme="light"
      animationPreset="premium"
      buttonText="Request Consultation"
      buttonLink="/contact"
      secondaryButtonText="Our Projects"
      secondaryButtonLink="/projects"
      highlights={[
        'Mixed-Use Developments',
        'Commercial & Office Assets',
        'Residential Communities',
        'Investment Advisory',
        'Asset Management',
      ]}
      statistics={[
        {
          value: 20,
          suffix: '+',
          label: 'Years of Experience',
          description:
            'Developing and delivering high-value real estate across multiple sectors.',
        },
        {
          value: 45,
          suffix: '+',
          label: 'Developments Delivered',
          description:
            'Commercial, residential and mixed-use projects brought to market.',
        },
        {
          value: 2.8,
          suffix: 'M+',
          label: 'Sqm Developed',
          description:
            'Total built-up area across completed and ongoing developments.',
        },
        {
          value: 35,
          suffix: '+',
          label: 'Strategic Partners',
          description:
            'Investors, landowners and institutional collaborators worldwide.',
        },
      ]}
      benefits={[
        {
          icon: <Building2 />,
          title: 'Mixed-Use Developments',
          description:
            'Integrated commercial, residential, retail and hospitality schemes that create vibrant destinations and optimise land value through carefully balanced master planning.',
        },
        {
          icon: <Briefcase />,
          title: 'Commercial & Office Assets',
          description:
            'Grade-A office towers, business parks and commercial complexes designed for operational efficiency, tenant appeal and long-term investment performance.',
        },
        {
          icon: <Home />,
          title: 'Residential Communities',
          description:
            'Thoughtfully planned residential neighbourhoods and multi-family developments that prioritise liveability, amenities, connectivity and sustainable design.',
        },
        {
          icon: <TrendingUp />,
          title: 'Investment Advisory',
          description:
            'Market analysis, feasibility studies, financial modelling and investment structuring that support informed decision-making for landowners and capital partners.',
        },
        {
          icon: <Key />,
          title: 'Asset Management',
          description:
            'Active management of completed properties focused on occupancy, income growth, operational efficiency and preservation of asset value over the long term.',
        },
        {
          icon: <MapPin />,
          title: 'Land & Site Development',
          description:
            'Strategic land acquisition, due diligence, planning approvals and infrastructure-ready site preparation that de-risk development and accelerate delivery.',
        },
      ]}
      whyChooseUs={[
        {
          number: '01',
          title: 'Construction-Backed Development',
          description:
            'As an experienced EPC contractor we control cost, quality and programme from concept through construction, reducing the risks typically faced by pure developers.',
        },
        {
          number: '02',
          title: 'Market-Informed Strategy',
          description:
            'Every development is grounded in rigorous market research, demand analysis and financial modelling to ensure commercial viability and investor confidence.',
        },
        {
          number: '03',
          title: 'Integrated Delivery Capability',
          description:
            'Planning, design, construction, fit-out and handover are managed under one accountable organisation, streamlining interfaces and protecting project outcomes.',
        },
        {
          number: '04',
          title: 'Long-Term Value Orientation',
          description:
            'We design and build assets with operational performance, tenant retention and residual value in mind, not only short-term sales or completion metrics.',
        },
      ]}
      deliverables={[
        {
          icon: <CheckCircle2 />,
          title: 'Feasibility & Strategy',
          description:
            'Market studies, financial models and development strategy reports.',
        },
        {
          icon: <MapPin />,
          title: 'Land & Approvals',
          description:
            'Site acquisition support, due diligence and planning permissions.',
        },
        {
          icon: <Building2 />,
          title: 'Project Delivery',
          description:
            'Design management, construction and full development execution.',
        },
        {
          icon: <BadgeCheck />,
          title: 'Quality & Compliance',
          description:
            'Technical oversight, statutory compliance and handover standards.',
        },
        {
          icon: <Clock3 />,
          title: 'Sales & Leasing Support',
          description:
            'Marketing coordination, unit handover and tenant onboarding.',
        },
        {
          icon: <Users />,
          title: 'Asset Management',
          description:
            'Operational oversight, performance reporting and value enhancement.',
        },
      ]}
      serviceHighlights={[
        {
          title: 'Strategic Development Planning',
          description:
            'Successful real estate begins with clear market insight and disciplined planning. Our teams evaluate location, demand, regulation and financial returns to shape developments that are both commercially robust and contextually appropriate.',
          image:
            'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=90',
        },
        {
          title: 'Integrated Construction Delivery',
          description:
            'Because we also build, we bring construction certainty to development. Cost control, programme management and quality systems are applied from the earliest stages through to final handover.',
          image:
            'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=90',
        },
        {
          title: 'Asset Performance & Value',
          description:
            'Beyond completion we remain focused on the long-term performance of the asset — occupancy, income, operational efficiency and residual value for owners and investors.',
          image:
            'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=90',
        },
      ]}
      industries={[
        { name: 'Commercial Office' },
        { name: 'Residential Communities' },
        { name: 'Mixed-Use Developments' },
        { name: 'Retail & Lifestyle' },
        { name: 'Hospitality Assets' },
        { name: 'Industrial & Logistics' },
        { name: 'Healthcare Real Estate' },
        { name: 'Institutional Investors' },
      ]}
      gallery={[
        {
          src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=90',
          alt: 'Modern commercial real estate development',
        },
        {
          src: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=90',
          alt: 'Residential and mixed-use property project',
        },
        {
          src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=90',
          alt: 'Premium office and commercial interiors',
        },
      ]}
      ctaTitle="Ready to discuss your real estate project?"
      ctaDescription="Our development and investment team is prepared to help you create, deliver and manage high-value property assets with strategic insight and construction excellence."
      ctaButtonText="Request Consultation"
      ctaButtonLink="/contact"
      ctaSecondaryText="Our Projects"
      ctaSecondaryLink="/projects"
    />
  )
}