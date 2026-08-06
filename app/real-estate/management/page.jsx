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
  Settings,
  Target,
  FileText,
  Users,
  BarChart3,
  Key,
} from 'lucide-react'

export default function Page() {
  return (
    <ServicePage
      title="Management"
      subtitle="Professional Real Estate Management for Performance and Value"
      description="Our Real Estate Management service oversees residential, commercial and mixed-use assets to protect value, maximise occupancy and deliver consistent operational performance. From leasing and tenant relations to financial reporting, maintenance coordination and asset optimisation, we provide transparent, proactive management that aligns with owner objectives and end-user expectations."
      badge="Real Estate"
      label="Management"
      heroImage="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1800&q=90"
      heroImageAlt="Real estate property management and commercial assets"
      imagePosition="right"
      layout="modern"
      theme="light"
      animationPreset="premium"
      buttonText="Request Consultation"
      buttonLink="/contact"
      secondaryButtonText="Our Projects"
      secondaryButtonLink="/projects"
      highlights={[
        'Leasing & Tenant Management',
        'Financial Reporting & Control',
        'Maintenance Coordination',
        'Asset Optimisation',
        'Owner & Investor Reporting',
      ]}
      statistics={[
        {
          value: 16,
          suffix: '+',
          label: 'Years of Experience',
          description:
            'Managing residential, commercial and mixed-use real estate portfolios.',
        },
        {
          value: 120,
          suffix: '+',
          label: 'Assets Under Management',
          description:
            'Properties actively managed across key sectors and locations.',
        },
        {
          value: 3.4,
          suffix: 'M+',
          label: 'Square Metres Managed',
          description:
            'Operational area under professional management and reporting.',
        },
        {
          value: 95,
          suffix: '%',
          label: 'Average Occupancy',
          description:
            'Strong occupancy maintained through proactive leasing and retention.',
        },
      ]}
      benefits={[
        {
          icon: <Key />,
          title: 'Leasing & Occupancy',
          description:
            'Marketing, tenant sourcing, negotiation and lease administration that protect income and minimise void periods.',
        },
        {
          icon: <Users />,
          title: 'Tenant Relations',
          description:
            'Responsive communication, service coordination and relationship management that support retention and satisfaction.',
        },
        {
          icon: <BarChart3 />,
          title: 'Financial Management',
          description:
            'Rent collection, expense control, budgeting and transparent reporting to owners and investors.',
        },
        {
          icon: <Wrench />,
          title: 'Maintenance Coordination',
          description:
            'Planned and reactive maintenance programmes that preserve asset condition and control lifecycle costs.',
        },
        {
          icon: <ShieldCheck />,
          title: 'Compliance & Risk',
          description:
            'Oversight of statutory requirements, insurance coordination and operational risk management.',
        },
        {
          icon: <Building2 />,
          title: 'Asset Optimisation',
          description:
            'Recommendations on improvements, repositioning and operational changes that enhance long-term value.',
        },
      ]}
      whyChooseUs={[
        {
          number: '01',
          title: 'Owner-Aligned Focus',
          description:
            'Management decisions and reporting structured around owner return, risk and hold-period objectives.',
        },
        {
          number: '02',
          title: 'Operational Excellence',
          description:
            'Disciplined processes for leasing, maintenance and finance that deliver consistency across the portfolio.',
        },
        {
          number: '03',
          title: 'Transparent Reporting',
          description:
            'Clear, timely financial and operational reports that give owners full visibility of performance.',
        },
        {
          number: '04',
          title: 'Integrated Support',
          description:
            'Access to facility management, fitout and technical capabilities within the group for faster resolution and better outcomes.',
        },
      ]}
      deliverables={[
        {
          icon: <FileText />,
          title: 'Management Plans',
          description:
            'Agreed strategies for leasing, operations and reporting.',
        },
        {
          icon: <Settings />,
          title: 'Leasing & Administration',
          description:
            'Tenant placement, lease documentation and renewals.',
        },
        {
          icon: <CheckCircle2 />,
          title: 'Financial Reporting',
          description:
            'Income, expenditure and performance reports to owners.',
        },
        {
          icon: <BadgeCheck />,
          title: 'Maintenance Oversight',
          description:
            'Planned programmes and reactive works coordination.',
        },
        {
          icon: <Clock3 />,
          title: 'Tenant Services',
          description:
            'Day-to-day liaison and service request management.',
        },
        {
          icon: <Target />,
          title: 'Asset Reviews',
          description:
            'Periodic performance and optimisation recommendations.',
        },
      ]}
      serviceHighlights={[
        {
          title: 'Management That Protects Value',
          description:
            'Well-managed assets retain tenants, control costs and present better for refinance or exit. We focus on the operational fundamentals that support long-term returns.',
          image:
            'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1400&q=90',
        },
        {
          title: 'Clarity for Owners',
          description:
            'Transparent reporting and proactive communication mean owners always know how their assets are performing and where decisions are needed.',
          image:
            'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=90',
        },
        {
          title: 'Experience Across Asset Types',
          description:
            'From residential communities to commercial and mixed-use schemes, our teams apply sector-appropriate practices while maintaining consistent standards.',
          image:
            'https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=1400&q=90',
        },
      ]}
      industries={[
        { name: 'Residential Communities' },
        { name: 'Commercial Offices' },
        { name: 'Retail & Mixed-Use' },
        { name: 'Industrial & Logistics' },
        { name: 'Build-to-Rent' },
        { name: 'Hospitality Assets' },
        { name: 'Institutional Portfolios' },
        { name: 'Private Owner Assets' },
      ]}
      gallery={[
        {
          src: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=90',
          alt: 'Real estate property management',
        },
        {
          src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=90',
          alt: 'Commercial assets under management',
        },
        {
          src: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=1200&q=90',
          alt: 'Residential and mixed-use managed properties',
        },
      ]}
      ctaTitle="Ready for professional real estate management?"
      ctaDescription="Partner with our management team to protect asset value, maximise occupancy and deliver transparent operational performance aligned with your ownership objectives."
      ctaButtonText="Request Consultation"
      ctaButtonLink="/contact"
      ctaSecondaryText="Our Projects"
      ctaSecondaryLink="/projects"
    />
  )
}