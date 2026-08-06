'use client'

import ServicePage from '../../components/Service'
import {
  Video,
  Monitor,
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
      title="Video Conference"
      subtitle="Seamless Collaboration Spaces for Modern Workplaces"
      description="Our Video Conference service designs, installs and commissions complete meeting room and collaboration systems that deliver clear audio, high-quality video and effortless content sharing. From huddle spaces and boardrooms to large training theatres and hybrid meeting environments, we provide reliable AV solutions that make remote and in-person collaboration natural and productive."
      badge="ICT Services"
      label="Video Conference"
      heroImage="https://images.unsplash.com/photo-1560439513-74b037a25d84?auto=format&fit=crop&w=1800&q=90"
      heroImageAlt="Modern video conference and meeting room system"
      imagePosition="right"
      layout="luxury"
      theme="light"
      animationPreset="premium"
      buttonText="Request Consultation"
      buttonLink="/contact"
      secondaryButtonText="Our Projects"
      secondaryButtonLink="/projects"
      highlights={[
        'Meeting Room AV Systems',
        'Video Conferencing Platforms',
        'Audio & Microphone Solutions',
        'Content Sharing & Displays',
        'Room Control & Automation',
      ]}
      statistics={[
        {
          value: 16,
          suffix: '+',
          label: 'Years of Experience',
          description:
            'Delivering video conference and collaboration systems for corporate, educational and government facilities.',
        },
        {
          value: 85,
          suffix: '+',
          label: 'Meeting Room Projects',
          description:
            'Completed AV and video conference installations across offices, campuses and specialised spaces.',
        },
        {
          value: 600,
          suffix: '+',
          label: 'Rooms Equipped',
          description:
            'Huddle spaces, boardrooms and training rooms commissioned for hybrid collaboration.',
        },
        {
          value: 98,
          suffix: '%',
          label: 'User Satisfaction',
          description:
            'Systems designed for simple one-touch operation and reliable daily performance.',
        },
      ]}
      benefits={[
        {
          icon: <Video />,
          title: 'Video Conferencing Platforms',
          description:
            'Native and BYOD support for Zoom, Microsoft Teams, Google Meet and other platforms with consistent camera, audio and content performance.',
        },
        {
          icon: <Monitor />,
          title: 'Displays & Content Sharing',
          description:
            'Large-format displays, interactive screens and wireless presentation systems that make content visible and shareable for everyone in the room.',
        },
        {
          icon: <Layers />,
          title: 'Audio & Microphone Systems',
          description:
            'Ceiling, table and beamforming microphones with DSP processing that capture every voice clearly while suppressing noise and echo.',
        },
        {
          icon: <Settings />,
          title: 'Room Control & Automation',
          description:
            'One-touch join, automatic camera framing, lighting and shade control that simplify the meeting start experience for every user.',
        },
        {
          icon: <ShieldCheck />,
          title: 'Network & Security Ready',
          description:
            'Proper network design, QoS considerations and security configurations that keep video traffic reliable and corporate policies intact.',
        },
        {
          icon: <Activity />,
          title: 'Support & Monitoring',
          description:
            'Remote monitoring options, proactive health checks and clear escalation paths that keep rooms available and performing.',
        },
      ]}
      whyChooseUs={[
        {
          number: '01',
          title: 'Designed for Real Users',
          description:
            'Systems prioritise simple, consistent operation so that any employee can start a meeting without technical assistance or training anxiety.',
        },
        {
          number: '02',
          title: 'Acoustic & Visual Quality',
          description:
            'Microphone placement, speaker selection and camera positioning are engineered for natural conversation and clear visibility of all participants.',
        },
        {
          number: '03',
          title: 'Platform Flexibility',
          description:
            'Rooms support the collaboration platforms the organisation already uses, with the option to switch or multi-platform without hardware changes.',
        },
        {
          number: '04',
          title: 'Scalable Room Standards',
          description:
            'Standardised designs for huddle, medium and large rooms allow consistent user experience and efficient rollout across multiple floors or sites.',
        },
      ]}
      deliverables={[
        {
          icon: <FileText />,
          title: 'AV Design Packages',
          description:
            'Room layouts, equipment schedules, signal flow and control diagrams.',
        },
        {
          icon: <Wrench />,
          title: 'Installation & Integration',
          description:
            'Displays, cameras, microphones, DSPs, controllers and cabling.',
        },
        {
          icon: <CheckCircle2 />,
          title: 'Programming & Configuration',
          description:
            'Control system programming, camera presets and platform setup.',
        },
        {
          icon: <BadgeCheck />,
          title: 'Testing & Commissioning',
          description:
            'Audio, video, content and control verification with real meeting tests.',
        },
        {
          icon: <Clock3 />,
          title: 'User Acceptance & Training',
          description:
            'Hands-on walkthroughs and simple user guides for meeting hosts.',
        },
        {
          icon: <Target />,
          title: 'O&M Documentation',
          description:
            'As-builts, configuration backups and support procedures.',
        },
      ]}
      serviceHighlights={[
        {
          title: 'Meetings That Just Work',
          description:
            'The best collaboration technology disappears into the background. We design rooms where starting a video call is as simple as pressing one button — with audio and video that make remote participants feel present.',
          image:
            'https://images.unsplash.com/photo-1560439513-74b037a25d84?auto=format&fit=crop&w=1400&q=90',
        },
        {
          title: 'Every Voice Heard, Every Face Seen',
          description:
            'Acoustic treatment, microphone coverage and camera framing are carefully planned so that conversation flows naturally whether people are in the room or joining from elsewhere.',
          image:
            'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1400&q=90',
        },
        {
          title: 'Consistent Experience Across Rooms',
          description:
            'Standardised designs and control interfaces mean that users encounter the same simple experience in every meeting space, reducing support calls and increasing adoption.',
          image:
            'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=90',
        },
      ]}
      industries={[
        { name: 'Corporate Offices' },
        { name: 'Educational Institutions' },
        { name: 'Healthcare & Clinical' },
        { name: 'Government & Public Sector' },
        { name: 'Professional Services' },
        { name: 'Financial Services' },
        { name: 'Technology Companies' },
        { name: 'Hybrid Workplaces' },
      ]}
      gallery={[
        {
          src: 'https://images.unsplash.com/photo-1560439513-74b037a25d84?auto=format&fit=crop&w=1200&q=90',
          alt: 'Modern video conference meeting room',
        },
        {
          src: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=90',
          alt: 'Collaborative meeting and presentation space',
        },
        {
          src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=90',
          alt: 'Professional boardroom AV system',
        },
      ]}
      ctaTitle="Ready for effortless hybrid collaboration?"
      ctaDescription="Partner with our video conference team to design and equip meeting spaces that deliver clear audio, sharp video and simple one-touch operation for every user."
      ctaButtonText="Request Consultation"
      ctaButtonLink="/contact"
      ctaSecondaryText="Our Projects"
      ctaSecondaryLink="/projects"
    />
  )
}