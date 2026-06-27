'use client'

import Link from 'next/link'
import { ArrowRight, Calculator } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/primitives'
import { CALENDAR_URL } from '@/lib/constants'

const stats = [
  { num: '£244/night', label: 'Peak Berkshire Nightly Rate' },
  { num: '+52%',       label: 'Revenue vs Long-Term Let' },
  { num: '14 days',    label: 'From Consultation to Live' },
]

export default function Hero() {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100svh',
        background: 'var(--obsidian)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        overflow: 'hidden',
        paddingTop: 60,
      }}
    >
      {/* Subtle grid */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.022) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.022) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
          pointerEvents: 'none',
        }}
      />

      {/* Gold radial glow — top right */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '55%',
          height: '70%',
          background: 'radial-gradient(ellipse at center, rgba(184,160,112,0.055) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* SIGNATURE ELEMENT: JO monogram watermark */}
      <div
        className="jo-monogram"
        aria-hidden="true"
        style={{
          position: 'absolute',
          right: '-2%',
          bottom: '8%',
          lineHeight: 1,
          zIndex: 1,
        }}
      >
        J·O
      </div>

      {/* Main content — left-anchored, editorial */}
      <div className="container" style={{ position: 'relative', zIndex: 2, paddingBottom: 0 }}>
        <div style={{ maxWidth: 620 }}>

          <AnimatedSection delay={0}>
            <div className="eyebrow" style={{ marginBottom: 28 }}>
              Premium Short-Term Rental Management
            </div>
          </AnimatedSection>

          <AnimatedSection delay={120}>
            <h1
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(3rem, 6vw, 5.5rem)',
                fontWeight: 400,
                lineHeight: 1.08,
                letterSpacing: '-0.03em',
                color: 'var(--cream)',
                marginBottom: 28,
              }}
            >
              Your property.
              <br />
              <em style={{ color: 'var(--gold-light)', fontStyle: 'italic' }}>
                Performing
              </em>{' '}
              at its
              <br />
              true potential.
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={240}>
            <p
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '1rem',
                lineHeight: 1.75,
                color: 'var(--muted)',
                maxWidth: 460,
                marginBottom: 36,
              }}
            >
              Fully managed property service across the UK. Whatever your needs
              as a landlord, we can handle it. Short-term lets, long-term
              tenancies, serviced accommodation. We run everything with complete
              transparency so you earn more and worry less.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={340}>
            <div className="hero-actions" style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <a
                href={CALENDAR_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Book a Consultation <ArrowRight size={14} />
              </a>
              <a href="#calculator" className="btn-ghost">
                Calculate Your Revenue <Calculator size={14} />
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Stats bar */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          marginTop: 72,
          display: 'grid',
          gridTemplateColumns: `repeat(${stats.length}, 1fr)`,
          borderTop: '0.5px solid var(--border)',
          background: 'rgba(15,15,15,0.7)',
          backdropFilter: 'blur(10px)',
        }}
      >
        {stats.map(({ num, label }, i) => (
          <div
            key={label}
            style={{
              padding: '24px 32px',
              textAlign: 'center',
              borderRight: i < stats.length - 1 ? '0.5px solid var(--border)' : 'none',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: '2.25rem',
                color: 'var(--gold)',
                lineHeight: 1,
                marginBottom: 6,
              }}
            >
              {num}
            </div>
            <div
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '0.625rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--muted)',
              }}
            >
              {label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
