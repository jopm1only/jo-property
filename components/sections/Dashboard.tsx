'use client'

import { Eyebrow, AnimatedSection } from '@/components/ui/primitives'

const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
const heights = [52, 61, 57, 68, 77, 94, 100, 86, 70, 64, 68, 75]

export default function Dashboard() {
  return (
    <section className="section">
      <div className="container">
        <AnimatedSection>
          <Eyebrow>Owner Dashboard</Eyebrow>
          <h2
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              marginBottom: 12,
              maxWidth: 480,
            }}
          >
            Complete transparency, at a glance.
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '0.9375rem',
              color: 'var(--muted)',
              maxWidth: 500,
              marginBottom: 48,
              lineHeight: 1.75,
            }}
          >
            Your private owner portal gives you real-time visibility of every
            metric that matters: revenue, occupancy, guest ratings, and
            upcoming bookings. Accessible 24/7 from any device.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={150}>
          <div
            style={{
              background: 'var(--charcoal)',
              border: '0.5px solid var(--border-strong)',
              overflow: 'hidden',
            }}
          >
            {/* Dashboard header bar */}
            <div
              style={{
                background: 'var(--slate)',
                padding: '14px 24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottom: '0.5px solid var(--border)',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '0.75rem',
                  color: 'var(--cream)',
                  letterSpacing: '0.08em',
                }}
              >
                JO&rsquo;s Property Management · Owner Portal
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '0.625rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#4ade80',
                }}
              >
                <div className="live-dot" />
                Live data
              </div>
            </div>

            <div style={{ padding: '28px 28px 32px' }}>
              {/* KPI row */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(4, 1fr)',
                  gap: 12,
                  marginBottom: 28,
                }}
              >
                {[
                  { label: 'This Month',    val: '£6,240'  },
                  { label: 'YTD Revenue',   val: '£58,700' },
                  { label: 'Occupancy',     val: '96%'     },
                  { label: 'Guest Rating',  val: '4.98 ★'  },
                ].map(({ label, val }) => (
                  <div
                    key={label}
                    style={{
                      background: 'var(--mid)',
                      padding: '16px',
                      textAlign: 'center',
                    }}
                  >
                    <div
                      style={{
                        fontFamily: 'var(--font-cormorant)',
                        fontSize: '1.75rem',
                        color: 'var(--gold)',
                        lineHeight: 1,
                        marginBottom: 5,
                      }}
                    >
                      {val}
                    </div>
                    <div
                      style={{
                        fontFamily: 'var(--font-dm-sans)',
                        fontSize: '0.5625rem',
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        color: 'var(--muted)',
                      }}
                    >
                      {label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Revenue chart */}
              <div
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '0.5625rem',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'var(--muted)',
                  marginBottom: 12,
                }}
              >
                Monthly Revenue · 12 Month View
              </div>
              <div
                style={{
                  background: 'var(--mid)',
                  padding: '16px 16px 0',
                  display: 'flex',
                  alignItems: 'flex-end',
                  gap: 4,
                  height: 100,
                }}
              >
                {heights.map((h, i) => (
                  <div
                    key={i}
                    style={{
                      flex: 1,
                      height: `${h}%`,
                      background: i === 6
                        ? 'rgba(184,160,112,0.35)'
                        : 'rgba(184,160,112,0.12)',
                      borderTop: `1px solid ${i === 6 ? 'var(--gold-light)' : 'var(--gold)'}`,
                      transition: 'background 0.25s ease',
                      cursor: 'default',
                      position: 'relative',
                    }}
                    title={`${months[i]}: £${Math.round(h * 62)}` }
                    onMouseEnter={e =>
                      ((e.currentTarget as HTMLDivElement).style.background = 'rgba(184,160,112,0.28)')
                    }
                    onMouseLeave={e =>
                      ((e.currentTarget as HTMLDivElement).style.background =
                        i === 6 ? 'rgba(184,160,112,0.35)' : 'rgba(184,160,112,0.12)')
                    }
                  />
                ))}
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginTop: 6,
                }}
              >
                {months.map(m => (
                  <div
                    key={m}
                    style={{
                      flex: 1,
                      textAlign: 'center',
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: '0.5rem',
                      color: 'var(--muted)',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {m}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
