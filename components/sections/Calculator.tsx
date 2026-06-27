'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Eyebrow, AnimatedSection } from '@/components/ui/primitives'

type Service = 'airbnb' | 'rental' | 'bookingcom' | 'sales'

// Live market data — Rightmove (LTL) and Booking.com (STR), June 2026 / ONS
const LOCATIONS = [
  {
    label: 'Berkshire',
    ltl:    [1225, 1988, 1925, 3450],  // monthly pcm by beds (1–4), Rightmove
    base:   244,                        // Booking.com county avg nightly rate
    occ:    0.91,
  },
  {
    label: 'Hampshire',
    ltl:    [916, 1385, 1667, 2317],
    base:   107,
    occ:    0.91,
  },
  {
    label: 'Surrey',
    ltl:    [1319, 1975, 2721, 3817],
    base:   124,
    occ:    0.91,
  },
]

// Multipliers applied to base nightly rate per bedroom count
const BED_MULT = [0.72, 1.0, 1.38, 1.90]

const SERVICES: { id: Service; label: string }[] = [
  { id: 'airbnb',     label: 'Airbnb' },
  { id: 'rental',     label: 'Rental' },
  { id: 'bookingcom', label: 'Booking.com' },
  { id: 'sales',      label: 'Sales' },
]

function fmt(n: number) {
  return '£' + Math.round(n).toLocaleString('en-GB')
}

export default function Calculator() {
  const [beds, setBeds]       = useState(2)
  const [locIdx, setLocIdx]   = useState(1)   // 0=Berkshire, 1=Hampshire, 2=Surrey
  const [service, setService] = useState<Service>('airbnb')

  const loc  = LOCATIONS[locIdx]
  const mult = BED_MULT[beds - 1]

  const ltlMonthly = loc.ltl[beds - 1]
  const ltlAnnual  = ltlMonthly * 12

  const nightly    = Math.round(loc.base * mult)
  const strAnnual  = Math.round(nightly * loc.occ * 365 / 100) * 100
  const strUplift  = strAnnual - ltlAnnual

  const labelStyle: React.CSSProperties = {
    fontFamily: 'var(--font-dm-sans)',
    fontSize: '0.625rem',
    letterSpacing: '0.22em',
    textTransform: 'uppercase',
    color: 'var(--muted)',
    marginBottom: 14,
    display: 'flex',
    justifyContent: 'space-between',
  }

  return (
    <section className="section" id="calculator">
      <div className="container">
        <AnimatedSection>
          <Eyebrow>Revenue Calculator</Eyebrow>
          <h2
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              marginBottom: 12,
              maxWidth: 500,
            }}
          >
            Discover what your property could earn.
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '0.9375rem',
              color: 'var(--muted)',
              maxWidth: 500,
              marginBottom: 44,
              lineHeight: 1.75,
            }}
          >
            Figures drawn from live Rightmove and Booking.com data across Surrey,
            Hampshire and Berkshire. Adjust the inputs for a closer estimate.
          </p>
        </AnimatedSection>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 1,
            background: 'var(--border)',
          }}
        >
          {/* ── Controls ── */}
          <div style={{ background: 'var(--charcoal)', padding: '40px 36px' }}>

            {/* Bedrooms */}
            <div style={{ marginBottom: 28 }}>
              <div style={labelStyle}>
                <span>Bedrooms</span>
                <span style={{ color: 'var(--gold)', letterSpacing: 0 }}>
                  {beds} bedroom{beds !== 1 ? 's' : ''}
                </span>
              </div>
              <input
                type="range" min={1} max={4} step={1} value={beds}
                onChange={e => setBeds(Number(e.target.value))}
                style={{ width: '100%', accentColor: 'var(--gold)', cursor: 'pointer' }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-dm-sans)', fontSize: '0.625rem', color: 'var(--muted)', marginTop: 6 }}>
                <span>1 bed</span><span>4 bed</span>
              </div>
            </div>

            {/* Location */}
            <div style={{ marginBottom: 28 }}>
              <div style={labelStyle}>
                <span>Location</span>
                <span style={{ color: 'var(--gold)', letterSpacing: 0 }}>{loc.label}</span>
              </div>
              <input
                type="range" min={0} max={2} step={1} value={locIdx}
                onChange={e => setLocIdx(Number(e.target.value))}
                style={{ width: '100%', accentColor: 'var(--gold)', cursor: 'pointer' }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-dm-sans)', fontSize: '0.625rem', color: 'var(--muted)', marginTop: 6 }}>
                <span>Berkshire</span><span>Surrey</span>
              </div>
            </div>

            {/* Service Preferred */}
            <div style={{ marginBottom: 28 }}>
              <div style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.625rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 14 }}>
                Service Preferred
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                {SERVICES.map(({ id, label }) => (
                  <button
                    key={id}
                    onClick={() => setService(id)}
                    style={{
                      background:  service === id ? 'rgba(184,160,112,0.12)' : 'var(--slate)',
                      border:     `0.5px solid ${service === id ? 'var(--gold)' : 'var(--border-strong)'}`,
                      color:       service === id ? 'var(--gold)' : 'var(--muted)',
                      fontFamily:  'var(--font-dm-sans)',
                      fontSize:    '0.625rem',
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      padding:     '11px 8px',
                      cursor:      'pointer',
                      transition:  'all 0.2s ease',
                    }}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <div style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.75rem', color: 'var(--muted)', lineHeight: 1.65, padding: 16, background: 'var(--slate)', border: '0.5px solid var(--border)' }}>
              Based on live Rightmove and Booking.com listings for these counties.
              Actual results vary by property condition and management quality.
            </div>
          </div>

          {/* ── Results ── */}
          <div style={{ background: 'var(--slate)', padding: '40px 36px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>

            {service === 'sales' && (
              <div>
                <div style={{ marginBottom: 24 }}>
                  <div style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.625rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 8 }}>
                    Sales service
                  </div>
                  <div style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: 'var(--cream)', lineHeight: 1.2 }}>
                    We handle the full sale.
                  </div>
                </div>
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.75, marginBottom: 24 }}>
                  From valuation and presentation to buyer qualification and
                  completion. A precise sales appraisal for your {loc.label}{' '}
                  property starts with one conversation. No obligation.
                </p>
                <div style={{ padding: '12px 16px', background: 'rgba(184,160,112,0.08)', border: '0.5px solid var(--gold-border)', fontFamily: 'var(--font-dm-sans)', fontSize: '0.75rem', color: 'var(--gold)', lineHeight: 1.6, marginBottom: 24 }}>
                  {beds} bedroom · {loc.label} · Full sales management
                </div>
                <Link href="/contact" className="btn-primary" style={{ justifyContent: 'center' }}>
                  Request a Sales Appraisal <ArrowRight size={14} />
                </Link>
              </div>
            )}

            {service === 'rental' && (
              <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ marginBottom: 28 }}>
                    <div style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.625rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 8 }}>
                      Estimated annual income
                    </div>
                    <div style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--gold)', lineHeight: 1 }}>
                      {fmt(ltlAnnual)}
                    </div>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 28 }}>
                    <div style={{ background: 'var(--mid)', padding: 16, border: '0.5px solid var(--gold-border)' }}>
                      <div style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.5625rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 6 }}>Monthly rent</div>
                      <div style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.75rem', color: 'var(--gold)' }}>{fmt(ltlMonthly)}</div>
                    </div>
                    <div style={{ background: 'var(--mid)', padding: 16, border: '0.5px solid var(--border)' }}>
                      <div style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.5625rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 6 }}>Short-let potential</div>
                      <div style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.75rem', color: 'var(--cream)' }}>{fmt(strAnnual)}</div>
                    </div>
                  </div>
                  <div style={{ padding: '12px 16px', background: 'rgba(184,160,112,0.08)', border: '0.5px solid var(--gold-border)', fontFamily: 'var(--font-dm-sans)', fontSize: '0.75rem', color: 'var(--gold)', lineHeight: 1.6, marginBottom: 24 }}>
                    Long-term let · {loc.label} · {beds} bed · {fmt(ltlMonthly)} pcm
                  </div>
                </div>
                <Link href="/contact" className="btn-primary" style={{ justifyContent: 'center' }}>
                  Discuss Your Rental <ArrowRight size={14} />
                </Link>
              </div>
            )}

            {(service === 'airbnb' || service === 'bookingcom') && (
              <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ marginBottom: 28 }}>
                    <div style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.625rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 8 }}>
                      Estimated annual revenue
                    </div>
                    <div style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--gold)', lineHeight: 1, transition: 'all 0.3s ease' }}>
                      {fmt(strAnnual)}
                    </div>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 28 }}>
                    <div style={{ background: 'var(--mid)', padding: 16, border: '0.5px solid var(--border)' }}>
                      <div style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.5625rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 6 }}>Long-term let est.</div>
                      <div style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.75rem', color: 'var(--cream)' }}>{fmt(ltlAnnual)}</div>
                    </div>
                    <div style={{ background: 'var(--mid)', padding: 16, border: '0.5px solid var(--gold-border)' }}>
                      <div style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.5625rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 6 }}>Your extra income</div>
                      <div style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.75rem', color: '#4ade80' }}>+{fmt(strUplift)}</div>
                    </div>
                  </div>
                  <div style={{ padding: '12px 16px', background: 'rgba(184,160,112,0.08)', border: '0.5px solid var(--gold-border)', fontFamily: 'var(--font-dm-sans)', fontSize: '0.75rem', color: 'var(--gold)', lineHeight: 1.6, marginBottom: 24 }}>
                    {service === 'airbnb' ? 'Airbnb' : 'Booking.com'} · Avg nightly: {fmt(nightly)} · {Math.round(loc.occ * 100)}% occupancy
                  </div>
                </div>
                <Link href="/contact" className="btn-primary" style={{ justifyContent: 'center' }}>
                  Get a Precise Valuation <ArrowRight size={14} />
                </Link>
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  )
}
