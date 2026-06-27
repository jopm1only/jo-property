import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, BarChart3, Diamond, Cpu, Building2 } from 'lucide-react'
import { Eyebrow, AnimatedSection, StatCard } from '@/components/ui/primitives'
import { FinalCTA } from '@/components/sections/HomeSections'
import { CALENDAR_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'About',
  description:
    "JO's Property Management, built by people who understand institutional real estate, luxury hospitality, and property technology. Expertise over history.",
}

const expertise = [
  {
    icon: <BarChart3 size={22} />,
    title: 'Revenue Science',
    desc: 'Demand forecasting, competitive rate positioning, length-of-stay optimisation, and seasonal revenue modelling drawn from institutional investment analysis frameworks.',
  },
  {
    icon: <Diamond size={22} />,
    title: 'Luxury Hospitality',
    desc: 'Guest experience design, premium amenity curation, and service standards informed by five-star hotel operations. We know what discerning guests expect and how to exceed it.',
  },
  {
    icon: <Cpu size={22} />,
    title: 'Property Technology',
    desc: 'Smart home integration, automated operations, real-time monitoring, and the data infrastructure that makes precision management possible at scale without sacrificing quality.',
  },
  {
    icon: <Building2 size={22} />,
    title: 'Asset Management',
    desc: 'Preventative maintenance planning, property value preservation, yield optimisation, and regulatory compliance expertise to protect your investment over the long term.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          paddingTop: 'calc(60px + 72px)',
          paddingBottom: 80,
          borderBottom: '0.5px solid var(--border)',
        }}
      >
        <div className="container">
          <AnimatedSection>
            <Eyebrow>About JO&rsquo;s</Eyebrow>
            <h1
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                fontWeight: 400,
                lineHeight: 1.08,
                letterSpacing: '-0.03em',
                maxWidth: 640,
                marginBottom: 24,
              }}
            >
              Built by people who know property finance as well as hospitality.
            </h1>
            <p
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '1.0625rem',
                color: 'var(--muted)',
                maxWidth: 560,
                lineHeight: 1.75,
              }}
            >
              JO&rsquo;s Property Management was founded by a team with backgrounds
              in institutional real estate investment, luxury hotel operations, and
              technology product development. We exist because we knew property
              management could be done at a fundamentally higher level. So we
              set out to prove it.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats */}
      <section className="section">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: 1,
              background: 'var(--border)',
            }}
          >
            {[
              { number: '£2.4M', label: 'Revenue Generated in 2024' },
              { number: '300+',  label: 'Properties Under Management' },
              { number: '50K+',  label: 'Guest Stays Managed' },
              { number: '4.97★', label: 'Average Guest Rating' },
            ].map(({ number, label }) => (
              <div
                key={label}
                style={{
                  background: 'var(--charcoal)',
                  padding: '32px 24px',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontSize: '2.75rem',
                    color: 'var(--gold)',
                    lineHeight: 1,
                    marginBottom: 8,
                  }}
                >
                  {number}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '0.625rem',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: 'var(--muted)',
                  }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section" style={{ background: 'var(--charcoal)' }}>
        <div className="container">
          <div
            className="about-phil"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 64,
              alignItems: 'start',
            }}
          >
            <AnimatedSection>
              <Eyebrow>Our Philosophy</Eyebrow>
              <h2
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                  marginBottom: 20,
                  maxWidth: 380,
                }}
              >
                We treat every property like our own capital is at stake.
              </h2>
              <p
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '0.9375rem',
                  color: 'var(--muted)',
                  lineHeight: 1.75,
                  marginBottom: 16,
                }}
              >
                Most property management is reactive. Guests complain, managers
                respond. Bookings fall, prices drop. We designed JO&rsquo;s from first
                principles to be the opposite. Analytically sharp,
                operationally proactive, and focused on long-term
                asset performance above everything else.
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '0.9375rem',
                  color: 'var(--muted)',
                  lineHeight: 1.75,
                  marginBottom: 28,
                }}
              >
                Our pricing engine analyses over 2,000 local demand signals
                daily. Our operations team conducts pre-arrival inspections
                before every check-in. Our client reports include market
                benchmarks, not just your numbers in isolation. This is what
                institutional-grade management actually looks like.
              </p>
              <a href={CALENDAR_URL} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                Book a Consultation <ArrowRight size={14} />
              </a>
            </AnimatedSection>

            <AnimatedSection delay={150}>
              <div
                style={{
                  background: 'var(--obsidian)',
                  border: '0.5px solid var(--border)',
                  padding: '36px',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontSize: '1.25rem',
                    fontStyle: 'italic',
                    color: 'var(--gold-light)',
                    lineHeight: 1.5,
                    marginBottom: 20,
                  }}
                >
                  &ldquo;We manage properties the way a private equity firm manages
                  its portfolio. The same attention to return, risk,
                  and long-term value of the asset.&rdquo;
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '0.75rem',
                    color: 'var(--muted)',
                    letterSpacing: '0.08em',
                  }}
                >
                  JO&rsquo;s Property Management — Founding Principle
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>

      </section>

      {/* CEO */}
      <section className="section">
        <div className="container">
          <AnimatedSection>
            <div
              className="about-phil"
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 64,
                alignItems: 'start',
              }}
            >
              <div>
                <Eyebrow>Leadership</Eyebrow>
                <h2
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                    marginBottom: 20,
                    maxWidth: 400,
                  }}
                >
                  Built by someone who has done it, not just advised on it.
                </h2>
              </div>
              <div>
                <p
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '0.9375rem',
                    color: 'var(--muted)',
                    lineHeight: 1.85,
                    marginBottom: 16,
                  }}
                >
                  Our CEO brings a rare blend of technology, business, and real-world property experience.
                  Having spent their career at leading companies including Adobe, Salesforce, and Uber,
                  they understand how to build efficient, scalable operations and deliver consistently
                  high standards.
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '0.9375rem',
                    color: 'var(--muted)',
                    lineHeight: 1.85,
                    marginBottom: 16,
                  }}
                >
                  Alongside their track record in tech, they have managed residential properties across
                  Camberley, London, and Nigeria, giving them hands-on insight into diverse markets
                  and client needs. Their early experience as a bookkeeper for a Montessori nursery
                  instilled a strong attention to detail and financial discipline that still underpins
                  the business today.
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '0.9375rem',
                    color: 'var(--muted)',
                    lineHeight: 1.85,
                  }}
                >
                  The result is a property management company built on trust, transparency, and execution.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Expertise */}
      <section className="section">
        <div className="container">
          <AnimatedSection>
            <Eyebrow>Areas of Expertise</Eyebrow>
            <h2
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                marginBottom: 12,
                maxWidth: 400,
              }}
            >
              What we know, deeply.
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
              Our team&rsquo;s expertise spans every dimension of short-term rental
              performance, from market analysis to maintenance logistics.
            </p>
          </AnimatedSection>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: 1,
              background: 'var(--border)',
            }}
          >
            {expertise.map(({ icon, title, desc }, i) => (
              <AnimatedSection key={title} delay={i * 80}>
                <div
                  style={{
                    background: 'var(--charcoal)',
                    padding: '36px 32px',
                    height: '100%',
                  }}
                >
                  <div style={{ color: 'var(--gold)', marginBottom: 18 }}>{icon}</div>
                  <div
                    style={{
                      fontFamily: 'var(--font-cormorant)',
                      fontSize: '1.25rem',
                      color: 'var(--cream)',
                      marginBottom: 10,
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

      <FinalCTA />
    </>
  )
}
