'use client'

import ServicePage from '../../components/Service'
import {
  Wrench,
  Layers,
  ShieldCheck,
  CheckCircle2,
  Clock3,
  BadgeCheck,
  Settings,
  Target,
  FileText,
  Hammer,
  Building2,
  AlertTriangle,
} from 'lucide-react'

export default function Page() {
  return (
    <ServicePage
      title="Repair"
      subtitle="Concrete Floor Repair and Reinstatement to Restore Performance"
      description="Our Floor Repair service diagnoses and reinstates damaged, deteriorated or defective concrete floors. From surface spalling and joint failure to structural cracks and worn industrial slabs, we deliver targeted repair solutions that restore strength, flatness, durability and appearance — extending service life and avoiding full replacement where possible."
      badge="Flooring Solutions"
      label="Repair"
      heroImage="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1800&q=90"
      heroImageAlt="Concrete floor repair and reinstatement works"
      imagePosition="right"
      layout="modern"
      theme="light"
      animationPreset="premium"
      buttonText="Request Consultation"
      buttonLink="/contact"
      secondaryButtonText="Our Projects"
      secondaryButtonLink="/projects"
      highlights={[
        'Crack & Spall Repair',
        'Joint Rehabilitation',
        'Surface Reinstatement',
        'Structural Strengthening',
        'Industrial Floor Restoration',
      ]}
      statistics={[
        {
          value: 16,
          suffix: '+',
          label: 'Years of Experience',
          description:
            'Repairing and reinstating concrete floors across commercial and industrial sites.',
        },
        {
          value: 210,
          suffix: '+',
          label: 'Repair Projects',
          description:
            'Completed floor repair and restoration packages.',
        },
        {
          value: 380000,
          suffix: '+',
          label: 'Square Metres Restored',
          description:
            'Damaged floors returned to serviceable condition and performance.',
        },
        {
          value: 96,
          suffix: '%',
          label: 'Successful Reinstatement',
          description:
            'Repairs that meet strength, flatness and durability expectations.',
        },
      ]}
      benefits={[
        {
          icon: <AlertTriangle />,
          title: 'Diagnosis & Assessment',
          description:
            'Investigation of causes — overload, shrinkage, joint failure, chemical attack or poor original detailing — before repair methods are selected.',
        },
        {
          icon: <Hammer />,
          title: 'Crack & Spall Repair',
          description:
            'Injection, stitching, patching and sectional replacement to restore structural integrity and surface continuity.',
        },
        {
          icon: <Layers />,
          title: 'Joint Rehabilitation',
          description:
            'Repair or redesign of construction and movement joints, including edge rebuilding and sealant replacement.',
        },
        {
          icon: <Wrench />,
          title: 'Surface Reinstatement',
          description:
            'Grinding, overlay systems and localised rebuilds that restore flatness, wear resistance and appearance.',
        },
        {
          icon: <ShieldCheck />,
          title: 'Durable Materials',
          description:
            'Repair mortars, resins and overlays selected for compatibility, strength gain and long-term performance under traffic.',
        },
        {
          icon: <Building2 />,
          title: 'Minimal Disruption',
          description:
            'Phased and localised methods that keep operations running where full shutdown is not possible.',
        },
      ]}
      whyChooseUs={[
        {
          number: '01',
          title: 'Root-Cause Approach',
          description:
            'We repair the symptom and address the underlying cause so failures do not quickly return.',
        },
        {
          number: '02',
          title: 'Matched Repair Systems',
          description:
            'Materials and methods chosen for the specific damage type, exposure and remaining service life required.',
        },
        {
          number: '03',
          title: 'Quality Workmanship',
          description:
            'Proper preparation, application and curing that determine whether a repair lasts or fails early.',
        },
        {
          number: '04',
          title: 'Practical Programming',
          description:
            'Works planned around access, curing times and operational constraints to minimise downtime.',
        },
      ]}
      deliverables={[
        {
          icon: <FileText />,
          title: 'Condition Survey',
          description:
            'Assessment of damage extent, causes and recommended methods.',
        },
        {
          icon: <Settings />,
          title: 'Repair Method Statement',
          description:
            'Detailed procedures, materials and quality controls.',
        },
        {
          icon: <CheckCircle2 />,
          title: 'Preparation & Repair',
          description:
            'Cutting out, cleaning, priming and reinstatement works.',
        },
        {
          icon: <BadgeCheck />,
          title: 'Joint & Edge Works',
          description:
            'Joint rebuilding, sealing and load-transfer restoration.',
        },
        {
          icon: <Clock3 />,
          title: 'Surface Finishing',
          description:
            'Grinding, overlays and final surface treatment as required.',
        },
        {
          icon: <Target />,
          title: 'Handover Verification',
          description:
            'Inspection, testing where specified and completion records.',
        },
      ]}
      serviceHighlights={[
        {
          title: 'Repair That Lasts',
          description:
            'Successful floor repair starts with understanding why the damage occurred. We select methods that restore performance and reduce the chance of recurrence.',
          image:
            'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=90',
        },
        {
          title: 'From Local Patch to Full Reinstatement',
          description:
            'Whether a single joint failure or widespread surface wear, we scale the solution to the problem — avoiding unnecessary full replacement.',
          image:
            'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1400&q=90',
        },
        {
          title: 'Back in Service Faster',
          description:
            'Phased repairs, rapid-strength materials and careful programming help return floors to use with minimal operational impact.',
          image:
            'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=90',
        },
      ]}
      industries={[
        { name: 'Industrial & Warehousing' },
        { name: 'Logistics & Distribution' },
        { name: 'Commercial Buildings' },
        { name: 'Retail & Car Parks' },
        { name: 'Healthcare Facilities' },
        { name: 'Educational Campuses' },
        { name: 'Hotels & Hospitality' },
        { name: 'Mixed-Use Developments' },
      ]}
      gallery={[
        {
          src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=90',
          alt: 'Concrete floor repair works in progress',
        },
        {
          src: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=90',
          alt: 'Floor reinstatement and surface restoration',
        },
        {
          src: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=90',
          alt: 'Repaired industrial and commercial floors',
        },
      ]}
      ctaTitle="Ready to restore your concrete floors?"
      ctaDescription="Partner with our floor repair team for diagnosis, durable reinstatement and practical programming that returns damaged floors to reliable service."
      ctaButtonText="Request Consultation"
      ctaButtonLink="/contact"
      ctaSecondaryText="Our Projects"
      ctaSecondaryLink="/projects"
    />
  )
}