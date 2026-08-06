'use client'

import ServicePage from '../../components/Service'
import {
  TrendingUp,
  Building2,
  ShieldCheck,
  Wrench,
  CheckCircle2,
  Clock3,
  BadgeCheck,
  Settings,
  Target,
  FileText,
  PieChart,
  Landmark,
  BarChart3,
} from 'lucide-react'

export default function Page() {
  return (
    <ServicePage
      title="Investment"
      subtitle="Strategic Real Estate Investment Opportunities with Clear Returns"
      description="Our Real Estate Investment service identifies, evaluates and structures investment opportunities across residential, commercial and mixed-use assets. From land acquisition and development partnerships to income-producing properties and portfolio advisory, we help investors access carefully selected opportunities backed by market insight, due diligence and transparent performance expectations."
      badge="Real Estate"
      label="Investment"
      heroImage="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1800&q=90"
      heroImageAlt="Real estate investment and commercial property"
      imagePosition="right"
      layout="modern"
      theme="light"
      animationPreset="premium"
      buttonText="Request Consultation"
      buttonLink="/contact"
      secondaryButtonText="Our Projects"
      secondaryButtonLink="/projects"
      highlights={[
        'Opportunity Sourcing & Screening',
        'Due Diligence & Analysis',
        'Development Partnerships',
        'Income-Producing Assets',
        'Portfolio Advisory',
      ]}
      statistics={[
        {
          value: 16,
          suffix: '+',
          label: 'Years of Experience',
          description:
            'Identifying and structuring real estate investments across key markets.',
        },
        {
          value: 85,
          suffix: '+',
          label: 'Investment Transactions',
          description:
            'Completed acquisitions, partnerships and portfolio placements.',
        },
        {
          value: 1.2,
          suffix: 'B+',
          label: 'Asset Value Facilitated',
          description:
            'Combined value of investment opportunities structured and supported.',
        },
        {
          value: 92,
          suffix: '%',
          label: 'Investor Retention',
          description:
            'Clients who continue to engage for subsequent opportunities.',
        },
      ]}
      benefits={[
        {
          icon: <TrendingUp />,
          title: 'Opportunity Identification',
          description:
            'Access to off-market and marketed assets screened for location, fundamentals and alignment with investor criteria.',
        },
        {
          icon: <PieChart />,
          title: 'Financial Analysis',
          description:
            'Cash-flow modelling, yield analysis, sensitivity testing and return projections grounded in realistic assumptions.',
        },
        {
          icon: <FileText />,
          title: 'Due Diligence Support',
          description:
            'Coordination of legal, technical, planning and market diligence so investment decisions are fully informed.',
        },
        {
          icon: <Landmark />,
          title: 'Structuring & Partnerships',
          description:
            'Joint ventures, development partnerships and ownership structures tailored to risk appetite and capital plans.',
        },
        {
          icon: <BarChart3 />,
          title: 'Portfolio Perspective',
          description:
            'Advice on diversification, sector allocation and timing within a broader real estate investment strategy.',
        },
        {
          icon: <ShieldCheck />,
          title: 'Transparent Reporting',
          description:
            'Clear documentation of assumptions, risks and expected outcomes so investors can decide with confidence.',
        },
      ]}
      whyChooseUs={[
        {
          number: '01',
          title: 'Market-Grounded Selection',
          description:
            'Opportunities are filtered through local knowledge, demand drivers and realistic exit or hold scenarios.',
        },
        {
          number: '02',
          title: 'Integrated Capability',
          description:
            'Access to development, construction and management expertise within the same group reduces execution risk.',
        },
        {
          number: '03',
          title: 'Aligned Interests',
          description:
            'Structures and advice designed around investor objectives rather than transaction volume alone.',
        },
        {
          number: '04',
          title: 'Long-Term Partnership',
          description:
            'Support extends beyond acquisition into monitoring, optimisation and eventual exit or refinance.',
        },
      ]}
      deliverables={[
        {
          icon: <FileText />,
          title: 'Opportunity Briefs',
          description:
            'Screened assets with key metrics and investment thesis.',
        },
        {
          icon: <Settings />,
          title: 'Financial Models',
          description:
            'Cash-flow, yield and return analysis under base and stress cases.',
        },
        {
          icon: <CheckCircle2 />,
          title: 'Due Diligence Coordination',
          description:
            'Technical, legal and market diligence management.',
        },
        {
          icon: <BadgeCheck />,
          title: 'Transaction Support',
          description:
            'Structuring, negotiation support and closing coordination.',
        },
        {
          icon: <Clock3 />,
          title: 'Partnership Structures',
          description:
            'JV and development partnership frameworks.',
        },
        {
          icon: <Target />,
          title: 'Ongoing Advisory',
          description:
            'Performance monitoring and portfolio guidance.',
        },
      ]}
      serviceHighlights={[
        {
          title: 'Opportunities with Substance',
          description:
            'We focus on assets and projects where fundamentals — location, demand, planning and execution capability — support credible returns over time.',
          image:
            'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1400&q=90',
        },
        {
          title: 'Analysis Before Commitment',
          description:
            'Investment decisions are supported by clear models, diligence findings and transparent risk disclosure rather than optimistic narratives alone.',
          image:
            'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=90',
        },
        {
          title: 'From Capital to Outcome',
          description:
            'Where appropriate, our wider capabilities in development and management help convert investment decisions into delivered assets and stabilised income.',
          image:
            'https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=1400&q=90',
        },
      ]}
      industries={[
        { name: 'Private Investors' },
        { name: 'Family Offices' },
        { name: 'Institutional Capital' },
        { name: 'Development Partners' },
        { name: 'Corporate Real Estate' },
        { name: 'Residential Investors' },
        { name: 'Commercial Asset Owners' },
        { name: 'Mixed-Use Portfolios' },
      ]}
      gallery={[
        {
          src: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=90',
          alt: 'Real estate investment and commercial property',
        },
        {
          src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=90',
          alt: 'Modern commercial real estate assets',
        },
        {
          src: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=1200&q=90',
          alt: 'Residential and mixed-use investment properties',
        },
      ]}
      ctaTitle="Ready to explore real estate investment opportunities?"
      ctaDescription="Partner with our investment team for carefully screened opportunities, rigorous analysis and structures aligned with your capital and return objectives."
      ctaButtonText="Request Consultation"
      ctaButtonLink="/contact"
      ctaSecondaryText="Our Projects"
      ctaSecondaryLink="/projects"
    />
  )
}