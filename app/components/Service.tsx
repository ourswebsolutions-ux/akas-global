'use client'

import React, {
  useMemo,
  useRef,
  useEffect,
  useState,
  memo,
  type ReactNode,
  type CSSProperties,
} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useTransform,
  type Variants,
} from 'framer-motion'
import { cn } from '../../lib/utils'

/* =============================================================================
   TYPES
============================================================================= */

export type LayoutVariant =
  | 'minimal'
  | 'modern'
  | 'premium'
  | 'luxury'
  | 'editorial'
  | 'corporate'
  | 'split'
  | 'immersive'
  | 'signature'
  | 'auto'

export type ThemeVariant =
  | 'light'
  | 'dark'
  | 'gradient'
  | 'glass'
  | 'primary'
  | 'secondary'
  | 'transparent'

export type AnimationPreset =
  | 'default'
  | 'smooth'
  | 'premium'
  | 'luxury'
  | 'editorial'

export type ImagePosition = 'left' | 'right'

export interface BenefitItem {
  icon?: ReactNode
  title: string
  description: string
  highlight?: string
}

export interface WhyChooseItem {
  icon?: ReactNode
  title: string
  description: string
  number?: string | number
}

export interface StatisticItem {
  value: number
  suffix?: string
  prefix?: string
  label: string
  description?: string
}

export interface IndustryItem {
  name: string
  icon?: ReactNode
  description?: string
}

export interface TechnologyItem {
  name: string
  icon?: ReactNode
  category?: string
}

export interface CertificationItem {
  name: string
  image?: string
  imageAlt?: string
  issuer?: string
  year?: string | number
}

export interface DeliverableItem {
  title: string
  description?: string
  icon?: ReactNode
}

export interface ServiceHighlightItem {
  title: string
  description: string
  icon?: ReactNode
  image?: string
}

export interface GalleryItem {
  src: string
  alt: string
  caption?: string
  width?: number
  height?: number
}

export interface ServicePageProps {
  title: string
  subtitle?: string
  description?: string
  badge?: string
  label?: string
  heroImage?: string
  heroImageAlt?: string
  imagePosition?: ImagePosition
  layout?: LayoutVariant
  theme?: ThemeVariant
  background?: string
  animationPreset?: AnimationPreset
  buttonText?: string
  buttonLink?: string
  secondaryButtonText?: string
  secondaryButtonLink?: string
  highlights?: string[]
  benefits?: BenefitItem[]
  whyChooseUs?: WhyChooseItem[]
  statistics?: StatisticItem[]
  industries?: IndustryItem[]
  technologies?: TechnologyItem[]
  certifications?: CertificationItem[]
  deliverables?: DeliverableItem[]
  serviceHighlights?: ServiceHighlightItem[]
  gallery?: GalleryItem[]
  customContent?: ReactNode
  showPattern?: boolean
  showGlow?: boolean
  showFloatingShapes?: boolean
  className?: string
  /** Optional CTA overrides */
  ctaTitle?: string
  ctaDescription?: string
  ctaButtonText?: string
  ctaButtonLink?: string
  ctaSecondaryText?: string
  ctaSecondaryLink?: string
}

/* =============================================================================
   ANIMATION SYSTEM
============================================================================= */

function createVariants(
  preset: AnimationPreset,
  reduced: boolean | null
): Record<string, Variants> {
  if (reduced) {
    const none = { hidden: { opacity: 1 }, visible: { opacity: 1 } }
    return {
      fadeUp: none,
      fadeIn: none,
      scaleIn: none,
      slideLeft: none,
      slideRight: none,
      staggerContainer: { hidden: {}, visible: { transition: { staggerChildren: 0 } } },
      staggerItem: none,
    }
  }

  const base = {
    default: {
      fadeUp: {
        hidden: { opacity: 0, y: 28 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] } },
      },
      fadeIn: {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.45 } },
      },
      scaleIn: {
        hidden: { opacity: 0, scale: 0.96 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.55 } },
      },
      slideLeft: {
        hidden: { opacity: 0, x: -36 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
      },
      slideRight: {
        hidden: { opacity: 0, x: 36 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
      },
      staggerContainer: {
        hidden: {},
        visible: { transition: { staggerChildren: 0.09, delayChildren: 0.12 } },
      },
      staggerItem: {
        hidden: { opacity: 0, y: 18 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
      },
    },
    smooth: {
      fadeUp: {
        hidden: { opacity: 0, y: 22 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
      },
      fadeIn: {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.65 } },
      },
      scaleIn: {
        hidden: { opacity: 0, scale: 0.97 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.75 } },
      },
      slideLeft: {
        hidden: { opacity: 0, x: -28 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.75 } },
      },
      slideRight: {
        hidden: { opacity: 0, x: 28 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.75 } },
      },
      staggerContainer: {
        hidden: {},
        visible: { transition: { staggerChildren: 0.11, delayChildren: 0.16 } },
      },
      staggerItem: {
        hidden: { opacity: 0, y: 14 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
      },
    },
    premium: {
      fadeUp: {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } },
      },
      fadeIn: {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.7 } },
      },
      scaleIn: {
        hidden: { opacity: 0, scale: 0.94 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } },
      },
      slideLeft: {
        hidden: { opacity: 0, x: -48 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.9 } },
      },
      slideRight: {
        hidden: { opacity: 0, x: 48 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.9 } },
      },
      staggerContainer: {
        hidden: {},
        visible: { transition: { staggerChildren: 0.13, delayChildren: 0.2 } },
      },
      staggerItem: {
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      },
    },
    luxury: {
      fadeUp: {
        hidden: { opacity: 0, y: 52 },
        visible: { opacity: 1, y: 0, transition: { duration: 1.05, ease: [0.19, 1, 0.22, 1] } },
      },
      fadeIn: {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.95 } },
      },
      scaleIn: {
        hidden: { opacity: 0, scale: 0.92 },
        visible: { opacity: 1, scale: 1, transition: { duration: 1.15, ease: [0.19, 1, 0.22, 1] } },
      },
      slideLeft: {
        hidden: { opacity: 0, x: -64 },
        visible: { opacity: 1, x: 0, transition: { duration: 1.1 } },
      },
      slideRight: {
        hidden: { opacity: 0, x: 64 },
        visible: { opacity: 1, x: 0, transition: { duration: 1.1 } },
      },
      staggerContainer: {
        hidden: {},
        visible: { transition: { staggerChildren: 0.16, delayChildren: 0.28 } },
      },
      staggerItem: {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.75 } },
      },
    },
    editorial: {
      fadeUp: {
        hidden: { opacity: 0, y: 36 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.95, ease: [0.33, 1, 0.68, 1] } },
      },
      fadeIn: {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.85 } },
      },
      scaleIn: {
        hidden: { opacity: 0, scale: 0.97 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.95 } },
      },
      slideLeft: {
        hidden: { opacity: 0, x: -44 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.95 } },
      },
      slideRight: {
        hidden: { opacity: 0, x: 44 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.95 } },
      },
      staggerContainer: {
        hidden: {},
        visible: { transition: { staggerChildren: 0.14, delayChildren: 0.2 } },
      },
      staggerItem: {
        hidden: { opacity: 0, y: 22 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
      },
    },
  }

  return (base[preset] || base.default) as unknown as Record<string, Variants>}

/* =============================================================================
   THEME + LAYOUT RESOLUTION
============================================================================= */

const themeClasses: Record<ThemeVariant, string> = {
  light: 'bg-white text-neutral-900',
  dark: 'bg-neutral-950 text-neutral-50',
  gradient: 'bg-gradient-to-br from-neutral-50 via-white to-neutral-100 text-neutral-900',
  glass: 'bg-white/70 backdrop-blur-xl text-neutral-900',
  primary: 'bg-primary text-primary-foreground',
  secondary: 'bg-secondary text-secondary-foreground',
  transparent: 'bg-transparent text-inherit',
}

function resolveLayout(
  layout: LayoutVariant,
  hasImage: boolean,
  density: number
): Exclude<LayoutVariant, 'auto'> {
  if (layout !== 'auto') return layout
  if (!hasImage && density < 3) return 'minimal'
  if (hasImage && density >= 6) return 'luxury'
  if (hasImage && density >= 4) return 'premium'
  if (hasImage && density >= 2) return 'modern'
  if (!hasImage && density >= 4) return 'corporate'
  if (density >= 5) return 'signature'
  return 'editorial'
}

/* =============================================================================
   SHARED UI PRIMITIVES
============================================================================= */

const Section = memo(function Section({
  children,
  className,
  id,
}: {
  children: ReactNode
  className?: string
  id?: string
}) {
  return (
    <section id={id} className={cn('relative w-full', className)}>
      {children}
    </section>
  )
})

const Container = memo(function Container({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className={cn('mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8', className)}>
      {children}
    </div>
  )
})

const PatternOverlay = memo(function PatternOverlay({ show }: { show?: boolean }) {
  if (!show) return null
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}
    />
  )
})

const GlowOrbs = memo(function GlowOrbs({ show }: { show?: boolean }) {
  if (!show) return null
  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-40 h-[480px] w-[480px] rounded-full bg-primary/8 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-48 -left-48 h-[420px] w-[420px] rounded-full bg-primary/6 blur-[100px]"
      />
    </>
  )
})

const FloatingShapes = memo(function FloatingShapes({ show }: { show?: boolean }) {
  if (!show) return null
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute top-[14%] left-[6%] h-28 w-28 rounded-full  border-primary/10"
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[20%] right-[8%] h-20 w-20 rounded-xl border border-primary/12 rotate-12"
        animate={{ y: [0, 16, 0], rotate: [12, 22, 12] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-[42%] right-[18%] h-2.5 w-2.5 rounded-full bg-primary/25"
        animate={{ scale: [1, 1.5, 1], opacity: [0.35, 0.85, 0.35] }}
        transition={{ duration: 4.5, repeat: Infinity }}
      />
    </div>
  )
})

const PrimaryButton = memo(function PrimaryButton({
  href,
  children,
}: {
  href: string
  children: ReactNode
}) {
  return (
    <Link
      href={href}
      className={cn(
        'group relative inline-flex items-center justify-center overflow-hidden rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide',
        'bg-[#C8A24A] text-[#0B2A5B] shadow-lg shadow-primary/25',
        'transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/35',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2'
      )}
    >
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-0 bg-gradient-to-r from-primary via-primary to-primary/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </Link>
  )
})

const SecondaryButton = memo(function SecondaryButton({
  href,
  children,
}: {
  href: string
  children: ReactNode
}) {
  return (
    <Link
      href={href}
      className={cn(
        'inline-flex items-center justify-center rounded-full text-white border border-[#C8A24A] bg-[#0B2A5B] px-7 py-3.5 text-sm font-semibold backdrop-blur-sm',
        'transition-all duration-300 hover:-translate-y-0.5 hover:border-muted-foreground/25 hover:bg-muted/60'
      )}
    >
      {children}
    </Link>
  )
})

/* =============================================================================
   ANIMATED COUNTER
============================================================================= */

const AnimatedCounter = memo(function AnimatedCounter({
  value,
  suffix = '',
  prefix = '',
  duration = 1.9,
}: {
  value: number
  suffix?: string
  prefix?: string
  duration?: number
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-12% 0px' })
  const [display, setDisplay] = useState(0)
  const reduced = useReducedMotion()

  useEffect(() => {
    if (!isInView) return
    if (reduced) {
      setDisplay(value)
      return
    }
    let start: number | null = null
    const step = (ts: number) => {
      if (!start) start = ts
      const p = Math.min((ts - start) / (duration * 1000), 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setDisplay(Math.floor(eased * value))
      if (p < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [isInView, value, duration, reduced])

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {display.toLocaleString()}
      {suffix}
    </span>
  )
})

/* =============================================================================
   HERO — Banner style (full-bleed image + overlay + centered title + dynamic breadcrumb)
============================================================================= */

interface HeroProps {
  title: string
  subtitle?: string
  description?: string
  badge?: string
  label?: string
  heroImage?: string
  heroImageAlt?: string
  imagePosition: ImagePosition
  buttonText?: string
  buttonLink?: string
  secondaryButtonText?: string
  secondaryButtonLink?: string
  highlights?: string[]
  variants: Record<string, Variants>
  layout: Exclude<LayoutVariant, 'auto'>
}

/** Banner Hero — matches requested style: image bg, navy overlay, centered title + Home / Title */
const HeroBanner = memo(function HeroBanner(p: HeroProps) {
  const breadcrumbLabel = p.label || p.title
  const bgSrc = p.heroImage || '/abouthero.jpg'

  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div className="relative h-[280px] w-full sm:h-[360px] lg:h-[420px] text-white">
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ opacity: 0, scale: 1.08 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 1.4,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <Image
            src={bgSrc}
            alt={p.heroImageAlt || p.title}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center brightness-90"
          />
          {/* Navy Overlay */}
          <div className="absolute inset-0 bg-[#0B2A5B]/45" />
        </motion.div>

        {/* Content */}
        <div className="relative z-10 flex h-full items-center justify-center">
          <div className="mx-auto flex max-w-[1350px] flex-col items-center px-4 text-center sm:px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2,
                    delayChildren: 0.2,
                  },
                },
              }}
            >
              <motion.h1
                className="mb-3 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      type: 'spring',
                      stiffness: 120,
                      damping: 18,
                    },
                  },
                }}
              >
                {p.title}
              </motion.h1>
              <motion.p
                className="text-sm text-white/90 sm:text-base lg:text-lg"
                variants={{
                  hidden: { opacity: 0, y: 25 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      type: 'spring',
                      stiffness: 120,
                      damping: 18,
                    },
                  },
                }}
              >
                <Link href="/" className="hover:text-[#C8A24A] transition-colors">
                  Home
                </Link>
                <span className="mx-2">/</span>
                <span className="text-[#C8A24A]">{breadcrumbLabel}</span>
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
})

function renderHero(props: HeroProps) {
  return <HeroBanner {...props} />
}

/* =============================================================================
   BENEFITS — multiple layouts
============================================================================= */

const BenefitsGrid = memo(function BenefitsGrid({
  items,
  variants,
  layout,
}: {
  items: BenefitItem[]
  variants: Record<string, Variants>
  layout: Exclude<LayoutVariant, 'auto'>
}) {
  const isLuxury = layout === 'luxury' || layout === 'signature'
  const isEditorial = layout === 'editorial'

  if (isEditorial) {
    return (
      <Section className="py-16 md:py-24">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={variants.staggerContainer}
            className="space-y-0 divide-y divide-border/60"
          >
            {items.map((item, i) => (
              <motion.div
                key={i}
                variants={variants.staggerItem}
                className="grid gap-6 py-10 md:grid-cols-12 md:gap-10"
              >
                <div className="md:col-span-4 flex items-start gap-4">
                  {item.icon && (
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <span className="[&>svg]:h-5 [&>svg]:w-5">{item.icon}</span>
                    </div>
                  )}
                  <div>
                    {item.highlight && (
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-primary">
                        {item.highlight}
                      </span>
                    )}
                    <h3 className="mt-1 text-xl font-semibold tracking-tight">{item.title}</h3>
                  </div>
                </div>
                <p className="md:col-span-8 text-base leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>
    )
  }

  return (
    <Section className="py-16 md:py-24">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={variants.staggerContainer}
          className={cn(
            'grid gap-6 sm:gap-8',
            items.length === 2 && 'sm:grid-cols-2',
            items.length === 3 && 'sm:grid-cols-2 lg:grid-cols-3',
            items.length >= 4 && 'sm:grid-cols-2 lg:grid-cols-4'
          )}
        >
          {items.map((item, i) => (
            <motion.div
              key={i}
              variants={variants.staggerItem}
              className={cn(
                'group relative flex flex-col rounded-2xl border border-[#C8A24A] bg-card p-6 sm:p-7',
                'transition-all duration-500 hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5',
                isLuxury && 'bg-gradient-to-b from-card to-card/70'
              )}
            >
              {item.icon && (
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-500 group-hover:scale-110 group-hover:bg-primary/15">
                  <span className="[&>svg]:h-6 [&>svg]:w-6">{item.icon}</span>
                </div>
              )}
              {item.highlight && (
                <span className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-primary">
                  {item.highlight}
                </span>
              )}
              <h3 className="text-lg font-semibold tracking-tight">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
})

/* =============================================================================
   WHY CHOOSE US — multiple layouts
============================================================================= */

const WhyChooseUsSection = memo(function WhyChooseUsSection({
  items,
  variants,
  layout,
}: {
  items: WhyChooseItem[]
  variants: Record<string, Variants>
  layout: Exclude<LayoutVariant, 'auto'>
}) {
  const isNumbered = layout === 'editorial' || layout === 'corporate' || layout === 'minimal'

  return (
    <Section className="py-16 md:py-24 bg-muted/30">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={variants.fadeUp}
          className="mb-12 max-w-2xl"
        >
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl text-[#C8A24A]">Why Choose Us</h2>
          <p className="mt-3 text-lg text-muted-foreground">
            Partnership built on expertise, precision, and measurable outcomes.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={variants.staggerContainer}
          className={cn(
            'grid gap-8',
            items.length <= 2 ? 'md:grid-cols-2' : 'md:grid-cols-2 lg:grid-cols-3'
          )}
        >
          {items.map((item, i) => (
            <motion.div key={i} variants={variants.staggerItem} className="relative flex gap-5">
              {isNumbered || item.number !== undefined ? (
                <span className="text-4xl font-light tabular-nums leading-none text-primary/30">
                  {String(item.number ?? i + 1).padStart(2, '0')}
                </span>
              ) : item.icon ? (
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <span className="[&>svg]:h-5 [&>svg]:w-5">{item.icon}</span>
                </div>
              ) : null}
              <div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
})

/* =============================================================================
   STATISTICS — multiple layouts
============================================================================= */

const StatisticsSection = memo(function StatisticsSection({
  items,
  variants,
  layout,
}: {
  items: StatisticItem[]
  variants: Record<string, Variants>
  layout: Exclude<LayoutVariant, 'auto'>
}) {
  const isBand = layout === 'premium' || layout === 'luxury' || layout === 'signature'

  if (isBand) {
    return (
      <Section className="bord border-border/40 bg-muted/20 py-14 md:py-18">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={variants.staggerContainer}
            className={cn(
              'grid gap-10',
              items.length === 2 && 'grid-cols-2',
              items.length === 3 && 'grid-cols-1 sm:grid-cols-3',
              items.length >= 4 && 'grid-cols-2 lg:grid-cols-4'
            )}
          >
            {items.map((stat, i) => (
              <motion.div key={i} variants={variants.staggerItem} className="text-center  ">
                <div className="text-4xl font-semibold tracking-tight text-primary sm:text-5xl">
                  <AnimatedCounter
                    value={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                  />
                </div>
                <p className="mt-2 text-sm font-medium uppercase tracking-wider">{stat.label}</p>
                {stat.description && (
                  <p className="mt-1 text-sm text-muted-foreground">{stat.description}</p>
                )}
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>
    )
  }

  return (
    <Section className="py-16 md:py-20">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={variants.staggerContainer}
          className={cn(
            'grid gap-8 sm:gap-10',
            items.length === 2 && 'grid-cols-2',
            items.length === 3 && 'grid-cols-1 sm:grid-cols-3',
            items.length >= 4 && 'grid-cols-2 lg:grid-cols-4'
          )}
        >
          {items.map((stat, i) => (
            <motion.div key={i} variants={variants.staggerItem} className="text-center sm:text-left">
              <div className="text-4xl font-semibold tracking-tight text-primary sm:text-5xl">
                <AnimatedCounter
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                />
              </div>
              <p className="mt-2 text-sm font-medium uppercase tracking-wider">{stat.label}</p>
              {stat.description && (
                <p className="mt-1 text-sm text-muted-foreground">{stat.description}</p>
              )}
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
})

/* =============================================================================
   SERVICE HIGHLIGHTS
============================================================================= */

const ServiceHighlightsSection = memo(function ServiceHighlightsSection({
  items,
  variants,
}: {
  items: ServiceHighlightItem[]
  variants: Record<string, Variants>
}) {
  return (
    <Section className="py-16 md:py-24">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={variants.staggerContainer}
          className="space-y-20 md:space-y-28"
        >
          {items.map((item, i) => {
            const reverse = i % 2 === 1
            return (
              <motion.div
                key={i}
                variants={variants.staggerItem}
                className={cn(
                  'grid items-center gap-10 lg:grid-cols-2 lg:gap-16',
                  reverse && 'lg:[&>*:first-child]:order-2'
                )}
              >
                <div>
                  {item.icon && (
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <span className="[&>svg]:h-6 [&>svg]:w-6">{item.icon}</span>
                    </div>
                  )}
                  <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                    {item.description}
                  </p>
                </div>
                {item.image && (
                  <div className="relative aspect-[16/10] overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/5">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                )}
              </motion.div>
            )
          })}
        </motion.div>
      </Container>
    </Section>
  )
})

/* =============================================================================
   DELIVERABLES
============================================================================= */

const DeliverablesSection = memo(function DeliverablesSection({
  items,
  variants,
}: {
  items: DeliverableItem[]
  variants: Record<string, Variants>
}) {
  return (
    <Section className="py-16 md:py-24">
      <Container>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={variants.fadeUp}
          className="mb-10 text-3xl font-semibold tracking-tight text-[#C8A24A]"
        >
          What We Deliver
        </motion.h2>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={variants.staggerContainer}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {items.map((item, i) => (
            <motion.div
              key={i}
              variants={variants.staggerItem}
              className="flex gap-4 rounded-xl border border-border/50 p-5 transition-colors hover:bg-muted/40"
            >
              {item.icon && (
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <span className="[&>svg]:h-5 [&>svg]:w-5">{item.icon}</span>
                </div>
              )}
              <div>
                <h3 className="font-semibold">{item.title}</h3>
                {item.description && (
                  <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
})

/* =============================================================================
   INDUSTRIES
============================================================================= */

const IndustriesSection = memo(function IndustriesSection({
  items,
  variants,
}: {
  items: IndustryItem[]
  variants: Record<string, Variants>
}) {
  return (
    <Section className="py-16 md:py-24">
      <Container>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={variants.fadeUp}
          className="mb-10 text-3xl font-semibold tracking-tight text-[#C8A24A]"
        >
          Industries We Serve
        </motion.h2>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={variants.staggerContainer}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {items.map((item, i) => (
            <motion.div
              key={i}
              variants={variants.staggerItem}
              className="group flex items-center gap-4 rounded-xl border border-border/50 bg-card/50 px-5 py-4 transition-all duration-300 hover:border-primary/25 hover:bg-card hover:shadow-md"
            >
              {item.icon && (
                <span className="shrink-0 text-primary [&>svg]:h-5 [&>svg]:w-5">
                  {item.icon}
                </span>
              )}
              <div>
                <p className="font-medium">{item.name}</p>
                {item.description && (
                  <p className="mt-0.5 text-xs text-muted-foreground">{item.description}</p>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
})

/* =============================================================================
   TECHNOLOGIES
============================================================================= */

const TechnologiesSection = memo(function TechnologiesSection({
  items,
  variants,
}: {
  items: TechnologyItem[]
  variants: Record<string, Variants>
}) {
  return (
    <Section className="border-y border-border/40 py-16 md:py-20">
      <Container>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={variants.fadeUp}
          className="mb-8 text-2xl font-semibold tracking-tight"
        >
          Technologies & Tools
        </motion.h2>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={variants.staggerContainer}
          className="flex flex-wrap gap-3"
        >
          {items.map((item, i) => (
            <motion.span
              key={i}
              variants={variants.staggerItem}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium transition-colors hover:border-primary/30 hover:bg-primary/5"
            >
              {item.icon && <span className="[&>svg]:h-4 [&>svg]:w-4">{item.icon}</span>}
              {item.name}
            </motion.span>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
})

/* =============================================================================
   CERTIFICATIONS
============================================================================= */

const CertificationsSection = memo(function CertificationsSection({
  items,
  variants,
}: {
  items: CertificationItem[]
  variants: Record<string, Variants>
}) {
  return (
    <Section className="py-16 md:py-24">
      <Container>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={variants.fadeUp}
          className="mb-10 text-3xl font-semibold tracking-tight"
        >
          Certifications & Accreditations
        </motion.h2>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={variants.staggerContainer}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {items.map((item, i) => (
            <motion.div
              key={i}
              variants={variants.staggerItem}
              className="flex flex-col items-center rounded-2xl border border-border/60 bg-card p-6 text-center transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              {item.image && (
                <div className="relative mb-4 h-16 w-16">
                  <Image
                    src={item.image}
                    alt={item.imageAlt || item.name}
                    fill
                    className="object-contain"
                    sizes="64px"
                  />
                </div>
              )}
              <p className="font-semibold">{item.name}</p>
              {(item.issuer || item.year) && (
                <p className="mt-1 text-xs text-muted-foreground">
                  {[item.issuer, item.year].filter(Boolean).join(' · ')}
                </p>
              )}
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
})

/* =============================================================================
   GALLERY — multiple layouts
============================================================================= */

const GallerySection = memo(function GallerySection({
  items,
  variants,
  layout,
}: {
  items: GalleryItem[]
  variants: Record<string, Variants>
  layout: Exclude<LayoutVariant, 'auto'>
}) {
  const isMasonry = layout === 'editorial' || layout === 'signature'

  return (
    <Section className="py-16 md:py-24">
      <Container>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={variants.fadeUp}
          className="mb-10 text-3xl font-semibold tracking-tight text-[#C8A24A]"
        >
          Project Gallery
        </motion.h2>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={variants.staggerContainer}
          className={cn(
            'grid gap-4',
            isMasonry
              ? 'sm:grid-cols-2 lg:grid-cols-3 auto-rows-[200px]'
              : 'sm:grid-cols-2 lg:grid-cols-3'
          )}
        >
          {items.map((item, i) => (
            <motion.figure
              key={i}
              variants={variants.staggerItem}
              className={cn(
                'group relative overflow-hidden rounded-xl',
                isMasonry
                  ? i % 5 === 0
                    ? 'row-span-2 aspect-auto'
                    : 'aspect-[4/3]'
                  : 'aspect-[4/3]'
              )}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {item.caption && (
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 pt-12 text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {item.caption}
                </figcaption>
              )}
            </motion.figure>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
})

/* =============================================================================
   CTA — multiple layouts
============================================================================= */

const CtaSection = memo(function CtaSection({
  title,
  description,
  buttonText,
  buttonLink,
  secondaryText,
  secondaryLink,
  variants,
  layout,
}: {
  title: string
  description?: string
  buttonText?: string
  buttonLink?: string
  secondaryText?: string
  secondaryLink?: string
  variants: Record<string, Variants>
  layout: Exclude<LayoutVariant, 'auto'>
}) {
  const isCentered = layout === 'minimal' || layout === 'editorial' || layout === 'signature'

  return (
    <Section className="py-20 md:py-28">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={variants.scaleIn}
          className={cn(
            'relative  rounded-3xl border border-border/50 bg-muted/40 px-8 py-14 md:px-14 md:py-18',
            isCentered && 'text-center'
          )}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl"
          />
          <div className={cn('relative z-10', isCentered && 'mx-auto max-w-2xl')}>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
            {description && (
              <p className="mt-4 text-lg text-muted-foreground">{description}</p>
            )}
            {(buttonText || secondaryText) && (
              <div
                className={cn(
                  'mt-9 flex flex-wrap gap-3 sm:gap-4',
                  isCentered && 'justify-center'
                )}
              >
                {buttonText && buttonLink && (
                  <PrimaryButton href={buttonLink}>{buttonText}</PrimaryButton>
                )}
                {secondaryText && secondaryLink && (
                  <SecondaryButton href={secondaryLink}>{secondaryText}</SecondaryButton>
                )}
              </div>
            )}
          </div>
        </motion.div>
      </Container>
    </Section>
  )
})

/* =============================================================================
   MAIN COMPONENT
============================================================================= */

function ServicePageInner(props: ServicePageProps) {
  const {
    title,
    subtitle,
    description,
    badge,
    label,
    heroImage,
    heroImageAlt,
    imagePosition = 'right',
    layout: layoutProp = 'auto',
    theme = 'light',
    background,
    animationPreset = 'premium',
    buttonText,
    buttonLink,
    secondaryButtonText,
    secondaryButtonLink,
    highlights,
    benefits,
    whyChooseUs,
    statistics,
    industries,
    technologies,
    certifications,
    deliverables,
    serviceHighlights,
    gallery,
    customContent,
    showPattern = false,
    showGlow = true,
    showFloatingShapes = false,
    className,
    ctaTitle,
    ctaDescription,
    ctaButtonText,
    ctaButtonLink,
    ctaSecondaryText,
    ctaSecondaryLink,
  } = props

  const reducedMotion = useReducedMotion()
  const variants = useMemo(
    () => createVariants(animationPreset, reducedMotion),
    [animationPreset, reducedMotion]
  )

  const contentDensity = useMemo(() => {
    let d = 0
    if (benefits?.length) d += 1
    if (whyChooseUs?.length) d += 1
    if (statistics?.length) d += 1
    if (industries?.length) d += 1
    if (technologies?.length) d += 1
    if (certifications?.length) d += 1
    if (deliverables?.length) d += 1
    if (serviceHighlights?.length) d += 1
    if (gallery?.length) d += 1
    if (customContent) d += 1
    return d
  }, [
    benefits,
    whyChooseUs,
    statistics,
    industries,
    technologies,
    certifications,
    deliverables,
    serviceHighlights,
    gallery,
    customContent,
  ])

  const layout = useMemo(
    () => resolveLayout(layoutProp, Boolean(heroImage), contentDensity),
    [layoutProp, heroImage, contentDensity]
  )

  const style: CSSProperties | undefined = background ? { background } : undefined

  const showCta = Boolean(ctaTitle || buttonText)

  return (
    <div
      className={cn('relative w-full overflow-x-hidden overflow-y-hidden ', themeClasses[theme], className)}
      style={style}
      data-layout={layout}
      data-theme={theme}
    >
      <PatternOverlay show={showPattern} />
      <GlowOrbs show={showGlow} />
      <FloatingShapes show={showFloatingShapes} />

      {/* HERO — banner style */}
      {renderHero({
        title,
        subtitle,
        description,
        badge,
        label,
        heroImage,
        heroImageAlt,
        imagePosition,
        buttonText,
        buttonLink,
        secondaryButtonText,
        secondaryButtonLink,
        highlights,
        variants,
        layout,
      })}

      {/* Little space between hero and content below */}
      <div className="h-8 sm:h-10 md:h-12" aria-hidden />

      {/* STATISTICS */}
      {statistics && statistics.length > 0 && (
        <StatisticsSection items={statistics} variants={variants} layout={layout} />
      )}

      {/* BENEFITS */}
      {benefits && benefits.length > 0 && (
        <BenefitsGrid items={benefits} variants={variants} layout={layout} />
      )}

      {/* SERVICE HIGHLIGHTS */}
      {serviceHighlights && serviceHighlights.length > 0 && (
        <ServiceHighlightsSection items={serviceHighlights} variants={variants} />
      )}

      {/* WHY CHOOSE US */}
      {whyChooseUs && whyChooseUs.length > 0 && (
        <WhyChooseUsSection items={whyChooseUs} variants={variants} layout={layout} />
      )}

      {/* DELIVERABLES */}
      {deliverables && deliverables.length > 0 && (
        <DeliverablesSection items={deliverables} variants={variants} />
      )}

      {/* INDUSTRIES */}
      {industries && industries.length > 0 && (
        <IndustriesSection items={industries} variants={variants} />
      )}

      {/* TECHNOLOGIES */}
      {technologies && technologies.length > 0 && (
        <TechnologiesSection items={technologies} variants={variants} />
      )}

      {/* CERTIFICATIONS */}
      {certifications && certifications.length > 0 && (
        <CertificationsSection items={certifications} variants={variants} />
      )}

      {/* GALLERY */}
      {gallery && gallery.length > 0 && (
        <GallerySection items={gallery} variants={variants} layout={layout} />
      )}

      {/* CUSTOM */}
      {customContent && (
        <Section className="py-16 md:py-24">
          <Container>{customContent}</Container>
        </Section>
      )}

      {/* CTA */}
      {showCta && (
        <CtaSection
          title={ctaTitle || `Ready to discuss your ${title.toLowerCase()} project?`}
          description={
            ctaDescription ||
            'Our team is ready to help you deliver with precision, safety, and excellence.'
          }
          buttonText={ctaButtonText || buttonText}
          buttonLink={ctaButtonLink || buttonLink}
          secondaryText={ctaSecondaryText || secondaryButtonText}
          secondaryLink={ctaSecondaryLink || secondaryButtonLink}
          variants={variants}
          layout={layout}
        />
      )}
    </div>
  )
}

const ServicePage = memo(ServicePageInner)
ServicePage.displayName = 'ServicePage'

export default ServicePage