'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Plus } from 'lucide-react'
import { Eyebrow, AnimatedSection } from '@/components/ui/primitives'
import { CALENDAR_URL } from '@/lib/constants'

/* ── Process Timeline ──────────────────────────────── */
const steps = [
  {
    period: 'Day 1',
    title: 'Private Consultation',
    desc: 'A 45-minute call with a senior JO property strategist. We analyse your property and goals, then model your revenue potential with precision. No guesswork, no generic estimates.',
  },
  {
    period: 'Days 2–4',
    title: 'Photography & Staging',
    desc: 'Our architectural photography team captures your property at its finest. We provide staging recommendations that maximise perceived value. Small changes, significant results.',
  },
  {
    period: 'Days 5–8',
    title: 'Listing Creation & Distribution',
    desc: 'Conversion-optimised listings with SEO-informed copy, distributed across Airbnb, Booking.com, VRBO, and our direct booking channel. Pricing algorithms calibrated and live.',
  },
  {
    period: 'Days 9–12',
    title: 'Operational Setup',
    desc: 'Cleaning teams briefed and scheduled. Smart access configured. Guest information packs prepared. Your property is physically and operationally ready.',
  },
  {
    period: 'Days 13–14',
    title: 'Live & Earning',
    desc: 'Your listing goes live. Bookings begin. You gain access to your owner dashboard: real-time revenue, occupancy, and guest ratings. We handle everything from here.',
  },
]

export function ProcessTimeline() {
  return (
    <section className="section">
      <div className="container">
        <AnimatedSection>
          <Eyebrow>Our Process</Eyebrow>
          <h2
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              marginBottom: 12,
              maxWidth: 460,
            }}
          >
            From conversation to revenue in 14 days.
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '0.9375rem',
              color: 'var(--muted)',
              maxWidth: 460,
              marginBottom: 52,
              lineHeight: 1.75,
            }}
          >
            A structured onboarding process that protects your time and ensures
            your property launches at its absolute best.
          </p>
        </AnimatedSection>

        <div style={{ position: 'relative', paddingLeft: 40 }}>
          {/* Vertical line */}
          <div
            style={{
              position: 'absolute',
              left: 8,
              top: 12,
              bottom: 12,
              width: '0.5px',
              background: 'var(--border)',
            }}
          />

          {steps.map(({ period, title, desc }, i) => (
            <AnimatedSection key={title} delay={i * 80}>
              <div
                style={{
                  position: 'relative',
                  paddingBottom: i < steps.length - 1 ? 40 : 0,
                }}
              >
                {/* Diamond dot */}
                <div
                  style={{
                    position: 'absolute',
                    left: -36,
                    top: 10,
                    width: 10,
                    height: 10,
                    border: '0.5px solid var(--gold)',
                    background: i === 0 ? 'var(--gold)' : 'var(--obsidian)',
                    transform: 'rotate(45deg)',
                  }}
                />
                <div
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '0.5625rem',
                    letterSpacing: '0.22em',
                    textTransform: 'uppercase',
                    color: 'var(--gold)',
                    marginBottom: 6,
                  }}
                >
                  {period}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontSize: '1.25rem',
                    color: 'var(--cream)',
                    marginBottom: 8,
                  }}
                >
                  {title}
                </div>
                <p
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '0.875rem',
                    color: 'var(--muted)',
                    lineHeight: 1.7,
                    maxWidth: 560,
                  }}
                >
                  {desc}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Market Stats (between TrustBar and Services) ─── */
export function MarketStats() {
  return (
    <section className="section" style={{ background: 'var(--obsidian)', borderBottom: '0.5px solid var(--border)' }}>
      <div className="container">
        <AnimatedSection>
          <div style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.5625rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 16 }}>
            Market Context, June 2026
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
              maxWidth: 560,
              marginBottom: 40,
              lineHeight: 1.2,
            }}
          >
            The numbers that make short-term letting compelling right now.
          </h2>
        </AnimatedSection>

        <div
          className="market-stats-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 1,
            background: 'var(--border)',
            marginBottom: 32,
          }}
        >
          {[
            {
              stat: '26%',
              label: 'of UK rental listings are now price-reduced while advertised',
              source: 'Rightmove, highest on record',
            },
            {
              stat: '25% fewer',
              label: 'rental homes available vs pre-pandemic levels',
              source: 'Zoopla, supply remains structurally tight',
            },
            {
              stat: '5.9%',
              label: 'rent inflation in high-demand regions',
              source: 'ONS Private Rent Index, May 2026',
            },
          ].map(({ stat, label, source }) => (
            <div key={stat} style={{ background: 'var(--charcoal)', padding: '32px 28px' }}>
              <div
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  color: 'var(--gold)',
                  lineHeight: 1,
                  marginBottom: 12,
                }}
              >
                {stat}
              </div>
              <p
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '0.875rem',
                  color: 'var(--cream)',
                  lineHeight: 1.6,
                  marginBottom: 10,
                }}
              >
                {label}
              </p>
              <div
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '0.625rem',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--muted)',
                }}
              >
                {source}
              </div>
            </div>
          ))}
        </div>

        <AnimatedSection delay={100}>
          <p
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '0.9375rem',
              color: 'var(--muted)',
              lineHeight: 1.8,
              maxWidth: 760,
              borderLeft: '0.5px solid var(--gold-border)',
              paddingLeft: 20,
            }}
          >
            The UK rental market is tightening in a new way. Supply is still 25% below pre-pandemic
            levels, yet landlord pricing power is softening as tenants reach affordability limits.
            For property owners in Surrey, Hampshire and Berkshire, short-term and serviced
            accommodation is increasingly the higher-yield alternative. Berkshire averages
            £244/night, Hampshire £107/night, and Surrey £124/night on current Booking.com data.
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}

/* ── Trust Signals ─────────────────────────────────── */
const trustSignals = [
  {
    title: 'No setup fee',
    body: "You pay nothing until your property is earning. Our commission only applies to revenue we generate for you. No photography invoice, no onboarding charge, no hidden anything.",
  },
  {
    title: '90-day performance guarantee',
    body: "If we don't outperform your current income within the first 90 days, walk away. No penalty. No notice period. Most agencies won't put that in writing. We do.",
  },
  {
    title: 'You see everything, live',
    body: "Every booking, every payment, every guest review is in your owner dashboard the moment it happens. Nothing is filtered. You never have to chase us for a number.",
  },
  {
    title: 'Your property is protected',
    body: "Vetted guests only. Security deposits on every booking. And £1M host guarantee cover as standard. We look after your property the way you would want us to.",
  },
]

export function TrustSignals() {
  return (
    <section className="section" style={{ background: 'var(--charcoal)' }}>
      <div className="container">
        <AnimatedSection>
          <Eyebrow>Why landlords choose us</Eyebrow>
          <h2
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              marginBottom: 12,
              maxWidth: 500,
            }}
          >
            Four things we put in writing.
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '0.9375rem',
              color: 'var(--muted)',
              maxWidth: 480,
              marginBottom: 48,
              lineHeight: 1.75,
            }}
          >
            Most agencies make promises. These are commitments. There is a
            difference, and we think you should know it before you talk to us.
          </p>
        </AnimatedSection>

        <div
          className="trust-signals-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 1,
            background: 'var(--border)',
          }}
        >
          {trustSignals.map(({ title, body }, i) => (
            <AnimatedSection key={title} delay={i * 80}>
              <div
                style={{
                  background: 'var(--obsidian)',
                  padding: '36px 32px',
                  height: '100%',
                  borderTop: '2px solid var(--gold-border)',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontSize: '1.375rem',
                    color: 'var(--cream)',
                    marginBottom: 14,
                    lineHeight: 1.2,
                  }}
                >
                  {title}
                </div>
                <p
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '0.9rem',
                    color: 'var(--muted)',
                    lineHeight: 1.75,
                  }}
                >
                  {body}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Case Studies ──────────────────────────────────── */
const cases = [
  {
    property: 'Heatherside Home',
    location: 'Heatherside, Surrey',
    tag: 'Long-Term Let',
    metrics: [
      { val: '£8,400',  label: 'Annual Rental Income' },
      { val: '+10.6%',  label: 'Property Value Growth' },
      { val: '£700 pcm', label: 'Monthly Rent Secured' },
    ],
  },
]

export function CaseStudies() {
  return (
    <section className="section">
      <div className="container">
        <AnimatedSection>
          <Eyebrow>Client Results</Eyebrow>
          <h2
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              marginBottom: 12,
              maxWidth: 480,
            }}
          >
            Properties that went from good to exceptional.
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '0.9375rem',
              color: 'var(--muted)',
              maxWidth: 460,
              marginBottom: 48,
              lineHeight: 1.75,
            }}
          >
            Real properties, real results. Outcomes achieved within the first
            12 months with JO&rsquo;s Property Management.
          </p>
        </AnimatedSection>

        {cases.map(({ property, location, tag, metrics }) => (
          <AnimatedSection key={property}>
            <div
              style={{
                background: 'var(--charcoal)',
                border: '0.5px solid var(--border)',
                marginBottom: 12,
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  background: 'var(--slate)',
                  padding: '20px 28px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderBottom: '0.5px solid var(--border)',
                }}
              >
                <div>
                  <div style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.1875rem', color: 'var(--cream)' }}>
                    {property}
                  </div>
                  <div style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.75rem', color: 'var(--muted)', letterSpacing: '0.08em', marginTop: 2 }}>
                    {location}
                  </div>
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '0.5625rem',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: 'var(--gold)',
                    border: '0.5px solid var(--gold-border)',
                    padding: '5px 12px',
                  }}
                >
                  {tag}
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
                {metrics.map(({ val, label }, i) => (
                  <div
                    key={label}
                    style={{
                      padding: '20px 24px',
                      textAlign: 'center',
                      borderRight: i < 2 ? '0.5px solid var(--border)' : 'none',
                    }}
                  >
                    <div style={{ fontFamily: 'var(--font-cormorant)', fontSize: '2rem', color: 'var(--gold)', marginBottom: 4 }}>
                      {val}
                    </div>
                    <div style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.5625rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--muted)' }}>
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        ))}

        <Link href="/investors" className="btn-ghost" style={{ marginTop: 8, display: 'inline-flex' }}>
          View All Case Studies <ArrowRight size={14} />
        </Link>
      </div>
    </section>
  )
}

/* ── Comparison Table ──────────────────────────────── */
const rows = [
  'AI-driven dynamic pricing',
  '24/7 guest communication',
  'Architectural photography',
  'Real-time owner dashboard',
  'Investor advisory service',
  'Dedicated property strategist',
  'Zero setup cost',
  'Performance reporting',
]

export function Comparison() {
  return (
    <section className="section" style={{ background: 'var(--charcoal)' }}>
      <div className="container">
        <AnimatedSection>
          <Eyebrow>Why JO&rsquo;s</Eyebrow>
          <h2
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              marginBottom: 12,
              maxWidth: 480,
            }}
          >
            What you get that others don&rsquo;t offer.
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '0.9375rem',
              color: 'var(--muted)',
              maxWidth: 460,
              marginBottom: 48,
              lineHeight: 1.75,
            }}
          >
            A frank comparison with the alternatives. We believe you should
            choose us on merit, not marketing.
          </p>
        </AnimatedSection>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 500 }}>
            <thead>
              <tr>
                {['Feature', "JO's", 'Self-Managed', 'Other Agencies'].map((h, i) => (
                  <th
                    key={h}
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: '0.5625rem',
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      color: i === 1 ? 'var(--gold)' : 'var(--muted)',
                      padding: '12px 16px',
                      textAlign: i === 0 ? 'left' : 'center',
                      borderBottom: '0.5px solid var(--border)',
                      background: i === 1 ? 'rgba(184,160,112,0.08)' : 'transparent',
                      fontWeight: 400,
                    }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, ri) => (
                <tr key={row}>
                  <td
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: '0.8125rem',
                      color: 'var(--muted)',
                      padding: '13px 16px',
                      borderBottom: ri < rows.length - 1 ? '0.5px solid var(--border)' : 'none',
                    }}
                  >
                    {row}
                  </td>
                  {[true, false, false].map((has, ci) => (
                    <td
                      key={ci}
                      style={{
                        textAlign: 'center',
                        padding: '13px 16px',
                        borderBottom: ri < rows.length - 1 ? '0.5px solid var(--border)' : 'none',
                        background: ci === 0 ? 'rgba(184,160,112,0.06)' : 'transparent',
                        fontSize: '1rem',
                        color: (ci === 0 || (ci === 2 && ri < 3)) ? 'var(--gold)' : 'rgba(242,237,228,0.2)',
                      }}
                    >
                      {ci === 0 || (ci === 2 && ri < 3 && ri !== 0 && ri !== 2) ? '✦' : ci === 0 ? '✦' : '—'}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

/* ── FAQ ───────────────────────────────────────────── */
const faqs = [
  {
    q: "What is JO's management fee?",
    a: "We operate on a performance-based commission model, typically between 15–20% of gross revenue. There is no setup fee, no photography fee, and no hidden charges. We earn when you earn, which means our incentives are permanently aligned with yours.",
  },
  {
    q: 'Is my property suitable for short-term letting?',
    a: "Most properties in the right locations are suitable. We manage everything from studio flats to six-bedroom townhouses. During your consultation, we'll assess your property's revenue potential based on location, configuration, and current market data.",
  },
  {
    q: 'What about the 90-day London rule?',
    a: "In London, properties can only be let on a short-term basis for 90 days per year without planning permission. We track this carefully for every London property and get the most out of that window. For properties beyond London, different rules apply. We advise on all of them.",
  },
  {
    q: 'How quickly can you get my property earning?',
    a: "Our standard onboarding takes 14 days from your first consultation to your first booking. We don't rush the photography or listing. The quality of your launch sets the ceiling for everything that follows.",
  },
  {
    q: 'Can I still use my own property?',
    a: "Yes. You can block out any dates through the owner portal and we work around them. Most clients find they actually use their property more once they see how easily the surrounding bookings get handled.",
  },
]

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="section">
      <div className="container">
        <AnimatedSection>
          <Eyebrow>Frequently Asked</Eyebrow>
          <h2
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              marginBottom: 12,
              maxWidth: 460,
            }}
          >
            Questions we get frequently.
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '0.9375rem',
              color: 'var(--muted)',
              maxWidth: 460,
              marginBottom: 48,
              lineHeight: 1.75,
            }}
          >
            We believe informed clients make better partners. Answered directly.
          </p>
        </AnimatedSection>

        <div style={{ maxWidth: 720 }}>
          {faqs.map(({ q, a }, i) => (
            <div
              key={q}
              style={{ borderBottom: '0.5px solid var(--border)' }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                style={{
                  width: '100%',
                  background: 'none',
                  border: 'none',
                  color: open === i ? 'var(--gold)' : 'var(--cream)',
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: '1.125rem',
                  textAlign: 'left',
                  padding: '22px 0',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: 16,
                  transition: 'color 0.25s ease',
                }}
              >
                {q}
                <Plus
                  size={18}
                  style={{
                    flexShrink: 0,
                    color: 'var(--gold)',
                    transform: open === i ? 'rotate(45deg)' : 'rotate(0)',
                    transition: 'transform 0.3s ease',
                  }}
                />
              </button>
              <div
                style={{
                  display: open === i ? 'block' : 'none',
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '0.9375rem',
                  color: 'var(--muted)',
                  lineHeight: 1.75,
                  paddingBottom: 24,
                  maxWidth: 620,
                }}
              >
                {a}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Market Context ────────────────────────────────── */
const marketData = {
  Camberley: {
    summary: "Surrey is driven by London commuters, corporate travellers, Surrey Hills tourism and weddings. It holds some of England's highest long-term rents and a short-stay market that rewards professional management.",
    ltl: [
      { bed: '1 Bed', rent: '£1,320 pcm' },
      { bed: '2 Bed', rent: '£1,975 pcm' },
      { bed: '3 Bed', rent: '£2,720 pcm' },
      { bed: '4 Bed', rent: '£3,820 pcm' },
    ],
    str: { adr: '£145–£150/night', occ: '54–57%', topDemand: 'Corporate relocation, weddings, Heathrow overflow, Surrey Hills tourism, golf, film production' },
    investment: { capital: '⭐⭐⭐⭐⭐', yield: '⭐⭐⭐', airbnb: '⭐⭐⭐⭐', corporate: '⭐⭐⭐⭐', overall: '9.4/10' },
    gaps: 'Premium family homes (3–5 bed), corporate serviced accommodation, mid-term lets for contractors and relocations.',
  },
  Berkshire: {
    summary: "Berkshire commands the strongest short-stay pricing of the three counties, driven by Windsor tourism, Reading's tech sector, Ascot events and Heathrow proximity.",
    ltl: [
      { bed: '1 Bed', rent: '£1,225 pcm' },
      { bed: '2 Bed', rent: '£1,990 pcm' },
      { bed: '3 Bed', rent: '£1,925 pcm' },
      { bed: '4 Bed', rent: '£3,450 pcm' },
    ],
    str: { adr: '£260–£294/night', occ: '54–58%', topDemand: 'Windsor Castle, LEGOLAND, Ascot Racecourse, Reading business parks, Thames Valley tech firms, Heathrow' },
    investment: { capital: '⭐⭐⭐⭐', yield: '⭐⭐⭐⭐', airbnb: '⭐⭐⭐⭐⭐', corporate: '⭐⭐⭐⭐⭐', overall: '9.3/10' },
    gaps: 'Executive homes near stations, pet-friendly premium lets, short-stay supply near Windsor and Ascot.',
  },
  Hampshire: {
    summary: "Hampshire offers lower acquisition costs than Surrey with strong gross yields, backed by the cruise port, New Forest tourism, Winchester visitors and military demand.",
    ltl: [
      { bed: '1 Bed', rent: '£920 pcm' },
      { bed: '2 Bed', rent: '£1,385 pcm' },
      { bed: '3 Bed', rent: '£1,670 pcm' },
      { bed: '4 Bed', rent: '£2,320 pcm' },
    ],
    str: { adr: '£120–£145/night', occ: '45–55%', topDemand: 'Southampton cruise port, New Forest, Winchester, Portsmouth naval, Farnborough business travel, universities' },
    investment: { capital: '⭐⭐⭐', yield: '⭐⭐⭐⭐⭐', airbnb: '⭐⭐⭐', corporate: '⭐⭐⭐⭐', overall: '9.0/10' },
    gaps: 'Properties near cruise terminal, New Forest park, Portsmouth dockyard. Strong summer seasonality creates clear pricing opportunity.',
  },
}

type MarketTab = keyof typeof marketData

export function MarketContext() {
  const [tab, setTab] = React.useState<MarketTab>('Camberley')
  const d = marketData[tab]

  return (
    <section className="section" style={{ background: 'var(--charcoal)' }}>
      <div className="container">
        <AnimatedSection>
          <Eyebrow>Market Context</Eyebrow>
          <h2
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
              lineHeight: 1.2,
              marginBottom: 32,
              maxWidth: 480,
            }}
          >
            The current market in the area.
          </h2>

          {/* Tabs */}
          <div style={{ display: 'flex', gap: 2, marginBottom: 40, flexWrap: 'wrap' }}>
            {(Object.keys(marketData) as MarketTab[]).map(t => (
              <button
                key={t}
                onClick={() => setTab(t)}
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '0.6875rem',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  padding: '10px 24px',
                  border: '0.5px solid',
                  borderColor: tab === t ? 'var(--gold)' : 'var(--border-strong)',
                  background: tab === t ? 'var(--gold)' : 'transparent',
                  color: tab === t ? 'var(--obsidian)' : 'var(--muted)',
                  cursor: 'pointer',
                  fontWeight: tab === t ? 600 : 400,
                  transition: 'all 0.2s ease',
                }}
              >
                {t}
              </button>
            ))}
          </div>

          {/* Summary */}
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.9375rem', color: 'var(--muted)', lineHeight: 1.8, maxWidth: 680, marginBottom: 40 }}>
            {d.summary}
          </p>

          {/* Data grid */}
          <div className="market-county-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1, background: 'var(--border)', marginBottom: 1 }}>
            {/* Long-term rents */}
            <div style={{ background: 'var(--obsidian)', padding: '28px 24px' }}>
              <div style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.5625rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 16 }}>Long-Term Rents</div>
              {d.ltl.map(({ bed, rent }) => (
                <div key={bed} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10, borderBottom: '0.5px solid var(--border)', paddingBottom: 8 }}>
                  <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.8125rem', color: 'var(--muted)' }}>{bed}</span>
                  <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.8125rem', color: 'var(--cream)' }}>{rent}</span>
                </div>
              ))}
            </div>

            {/* Short-term */}
            <div style={{ background: 'var(--obsidian)', padding: '28px 24px' }}>
              <div style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.5625rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 16 }}>Short-Term Lets</div>
              {[
                { label: 'Avg nightly rate', val: d.str.adr },
                { label: 'Typical occupancy', val: d.str.occ },
              ].map(({ label, val }) => (
                <div key={label} style={{ marginBottom: 14 }}>
                  <div style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.5625rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 4 }}>{label}</div>
                  <div style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.25rem', color: 'var(--cream)' }}>{val}</div>
                </div>
              ))}
              <div style={{ marginTop: 8 }}>
                <div style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.5625rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 6 }}>Top demand drivers</div>
                <div style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.8125rem', color: 'var(--muted)', lineHeight: 1.65 }}>{d.str.topDemand}</div>
              </div>
            </div>

            {/* Investment */}
            <div style={{ background: 'var(--obsidian)', padding: '28px 24px' }}>
              <div style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.5625rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 16 }}>Investment Ranking</div>
              {[
                { label: 'Capital growth', val: d.investment.capital },
                { label: 'Rental yield', val: d.investment.yield },
                { label: 'Airbnb pricing power', val: d.investment.airbnb },
                { label: 'Corporate demand', val: d.investment.corporate },
              ].map(({ label, val }) => (
                <div key={label} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10, borderBottom: '0.5px solid var(--border)', paddingBottom: 8, alignItems: 'center' }}>
                  <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.75rem', color: 'var(--muted)' }}>{label}</span>
                  <span style={{ fontSize: '0.7rem' }}>{val}</span>
                </div>
              ))}
              <div style={{ marginTop: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.75rem', color: 'var(--muted)' }}>Overall potential</span>
                <span style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.25rem', color: 'var(--gold)' }}>{d.investment.overall}</span>
              </div>
            </div>
          </div>

          {/* Gaps */}
          <div style={{ background: 'var(--obsidian)', border: '0.5px solid var(--border)', padding: '20px 24px', marginBottom: 16 }}>
            <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.5625rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', marginRight: 12 }}>Biggest gap</span>
            <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.875rem', color: 'var(--muted)' }}>{d.gaps}</span>
          </div>

          <div style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.6875rem', color: 'var(--muted)', lineHeight: 1.6 }}>
            Sources: Rightmove live listings, Booking.com county pages, AirDNA, AirROI, June 2026. All figures are estimates.
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

/* ── Final CTA ─────────────────────────────────────── */
export function FinalCTA() {
  return (
    <section
      style={{
        padding: '96px 0',
        background: 'var(--charcoal)',
        borderBottom: '0.5px solid var(--border)',
        textAlign: 'center',
      }}
    >
      <div className="container">
        <AnimatedSection>
          <div
            style={{
              display: 'inline-block',
              border: '0.5px solid var(--gold-border)',
              color: 'var(--gold)',
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '0.5625rem',
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              padding: '6px 16px',
              marginBottom: 24,
            }}
          >
            Begin Here
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(2rem, 4vw, 3.25rem)',
              maxWidth: 520,
              margin: '0 auto 18px',
            }}
          >
            Ready to see what your property is actually worth?
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '0.9375rem',
              color: 'var(--muted)',
              maxWidth: 400,
              margin: '0 auto 36px',
              lineHeight: 1.75,
            }}
          >
            A 45-minute private consultation with a senior JO strategist. No
            obligation. A precise revenue model built around your property.
          </p>
          <a
            href={CALENDAR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Book Your Consultation <ArrowRight size={14} />
          </a>
          <p
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '0.6875rem',
              color: 'var(--muted)',
              marginTop: 16,
              letterSpacing: '0.08em',
            }}
          >
            No setup fee · No commitment · Just clarity
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
