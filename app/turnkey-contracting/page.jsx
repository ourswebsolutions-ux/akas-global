'use client'

import ServicePage from '../components/Service'
import {
  Building2,
  ClipboardCheck,
  DraftingCompass,
  Truck,
  ShieldCheck,
  Award,
  Users,
  CheckCircle2,
  Hammer,
  Building,
  Clock3,
  BadgeCheck,
} from 'lucide-react'

export default function Page() {
  return (
    <ServicePage
      title="Turnkey Contracting"
      subtitle="Complete Engineering, Procurement & Construction (EPC) Solutions"
      description="Our Turnkey Contracting services provide clients with a single-source solution for the successful delivery of construction projects. From feasibility studies and engineering design to procurement, construction, testing, commissioning, and final handover, we manage every phase with precision, accountability, and strict quality control. By integrating technical expertise with proven project management practices, we minimize risks, optimize costs, and deliver facilities that are fully operational and ready for immediate use."
      badge="Core Construction Service"
      label="Turnkey Contracting"
      heroImage="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1800&q=90"
      heroImageAlt="Modern commercial construction project"
      imagePosition="right"
      layout="premium"
      theme="light"
      animationPreset="premium"
      buttonText="Request Consultation"
      buttonLink="/contact"
      secondaryButtonText="Our Projects"
      secondaryButtonLink="/projects"
      highlights={[
        'Complete EPC Delivery',
        'Single Point Responsibility',
        'International Quality Standards',
        'On-Time Project Completion',
        'Dedicated Project Management',
      ]}
      statistics={[
        {
          value: 20,
          suffix: '+',
          label: 'Years of Experience',
          description:
            'Successfully delivering engineering and construction solutions.',
        },
        {
          value: 500,
          suffix: '+',
          label: 'Projects Completed',
          description:
            'Commercial, industrial and infrastructure developments.',
        },
        {
          value: 98,
          suffix: '%',
          label: 'Client Satisfaction',
          description:
            'Built through quality workmanship and transparent communication.',
        },
        {
          value: 1200,
          suffix: '+',
          label: 'Technical Workforce',
          description:
            'Engineers, project managers, supervisors and skilled specialists.',
        },
      ]}
      benefits={[
        {
          icon: <ClipboardCheck />,
          title: 'Project Planning & Feasibility',
          description:
            'Every successful project begins with comprehensive planning. We perform feasibility studies, budgeting, scheduling, site assessments, risk evaluation, and execution strategies before construction begins.',
        },
        {
          icon: <DraftingCompass />,
          title: 'Integrated Engineering & Design',
          description:
            'Our multidisciplinary engineering teams deliver architectural, structural, civil, and MEP designs using BIM coordination to eliminate conflicts and improve construction efficiency.',
        },
        {
          icon: <Truck />,
          title: 'Procurement & Supply Chain',
          description:
            'We manage global procurement, vendor qualification, logistics, material sourcing, equipment purchasing, and delivery schedules to ensure uninterrupted project execution.',
        },
        {
          icon: <Building2 />,
          title: 'Construction Execution',
          description:
            'From site preparation and civil works to structural construction, finishing, and utilities installation, every stage is supervised by experienced project engineers.',
        },
        {
          icon: <ShieldCheck />,
          title: 'Quality Assurance & Safety',
          description:
            'Strict QA/QC procedures combined with international HSE standards ensure every activity is performed safely while maintaining exceptional construction quality.',
        },
        {
          icon: <Award />,
          title: 'Testing & Commissioning',
          description:
            'Before project delivery, all building systems undergo rigorous inspections, functional testing, commissioning, documentation, and client verification.',
        },
      ]}
      whyChooseUs={[
        {
          number: '01',
          title: 'Single Contract Responsibility',
          description:
            'One experienced contractor responsible for every project phase, eliminating coordination gaps and reducing project risks.',
        },
        {
          number: '02',
          title: 'Experienced Project Teams',
          description:
            'Dedicated engineers, architects, planners, procurement specialists, QA/QC inspectors, and construction managers work together under one management system.',
        },
        {
          number: '03',
          title: 'Efficient Cost & Schedule Control',
          description:
            'Advanced planning methodologies help optimize budgets, improve productivity, and maintain construction milestones.',
        },
        {
          number: '04',
          title: 'International Construction Standards',
          description:
            'Projects are executed following globally recognized engineering, safety, and quality management practices.',
        },
      ]}
      deliverables={[
        {
          icon: <CheckCircle2 />,
          title: 'Feasibility & Planning',
          description:
            'Project feasibility, budgeting, scheduling and construction planning.',
        },
        {
          icon: <Building />,
          title: 'Engineering Design',
          description:
            'Architectural, structural, civil and MEP engineering coordination.',
        },
        {
          icon: <Hammer />,
          title: 'Construction Delivery',
          description:
            'Civil works, structural construction, finishing and infrastructure development.',
        },
        {
          icon: <BadgeCheck />,
          title: 'Quality Control',
          description:
            'Inspection, material testing, documentation and compliance monitoring.',
        },
        {
          icon: <Clock3 />,
          title: 'Commissioning',
          description:
            'System testing, operational verification and performance validation.',
        },
        {
          icon: <Users />,
          title: 'Project Handover',
          description:
            'Complete documentation, client training and operational handover.',
        },
      ]}
      serviceHighlights={[
        {
          title: 'Strategic Planning Before Construction',
          description:
            'Successful projects begin long before construction starts. Our planning team develops accurate budgets, schedules, engineering strategies, procurement plans, and execution methodologies that reduce uncertainty and improve project performance.',
          image:
            'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1400&q=90',
        },
        {
          title: 'Professional Site Execution',
          description:
            'Construction activities are managed by experienced project managers, engineers, and site supervisors who coordinate contractors, monitor quality, maintain safety standards, and ensure work progresses according to schedule.',
          image:
            'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=90',
        },
        {
          title: 'Quality Assurance & Successful Delivery',
          description:
            'Before handover, every project undergoes detailed inspections, testing, commissioning, and final quality verification to ensure the completed facility is safe, compliant, and ready for operation.',
          image:
            'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1400&q=90',
        },
      ]}
      industries={[
        { name: 'Commercial Buildings' },
        { name: 'Industrial Facilities' },
        { name: 'Residential Communities' },
        { name: 'Healthcare Facilities' },
        { name: 'Educational Institutions' },
        { name: 'Hospitality & Hotels' },
        { name: 'Infrastructure Projects' },
        { name: 'Government Developments' },
      ]}
      gallery={[
        {
          src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=90',
          alt: 'Commercial Building Construction',
        },
        {
          src: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=90',
          alt: 'Construction Site Planning',
        },
        {
          src: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=90',
          alt: 'Industrial Construction Project',
        },
      ]}
      ctaTitle="Ready to discuss your turnkey contracting project?"
      ctaDescription="Our team is ready to help you deliver with precision, safety, and excellence."
      ctaButtonText="Request Consultation"
      ctaButtonLink="/contact"
      ctaSecondaryText="Our Projects"
      ctaSecondaryLink="/projects"
    />
  )
}