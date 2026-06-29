import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, TrendingUp, BarChart2, Shield, Globe } from 'lucide-react'
import { Eyebrow, AnimatedSection } from '@/components/ui/primitives'
import { CaseStudies, FinalCTA } from '@/components/sections/HomeSections'
import { CALENDAR_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Investors',
  description:
    "Portfolio-scale STR management and advisory for serious property investors. Acquisition analysis, yield modelling, and institutional-grade reporting from JO's Property Management.",
}

const investorServices = [
  {
    icon: <TrendingUp size={18} />,
    title: 'Acquisition Analysis',
    desc: 'Pre-purchase STR yield modelling, regulatory assessment, and market demand analysis for properties under consideration. Know what a property will earn before you buy it.',
  },
  {
    icon: <BarChart2 size={18} />,
    title: 'Portfolio Optimisation',
    desc: 'Forensic analysis of your existing portfolio\'s revenue performance versus its theoretical maximum. We identify underperforming assets and close the gap systematically.',
  },
  {
    icon: <Globe size={18} />,
    title: 'Market Intelligence',
    desc: 'Quarterly reports on STR demand trends, regulatory changes, and pricing benchmarks across every market we operate in. Stay ahead of the market, not behind it.',
  },
  {
    icon: <Shield size={18} />,
    title: 'Compliance Management',
    desc: 'Full regulatory compliance across all UK jurisdictions. Planning permissions, council registrations, and licensing. All handled, monitored, and reported.',
  },
]

export default function InvestorsPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          paddingTop: 'calc(60px + 72px)',
          paddingBottom: 80,
          borderBottom: '0.5px solid var(--border)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '10%',
            right: '-8%',
            width: '50%',
            height: '80%',
            background: 'radial-gradient(ellipse at center, rgba(184,160,112,0.045) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <AnimatedSection>
            <Eyebrow>For Investors</Eyebrow>
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
              The data-driven partner your portfolio has been waiting for.
            </h1>
            <p
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '1.0625rem',
                color: 'var(--muted)',
                maxWidth: 520,
                lineHeight: 1.75,
                marginBottom: 36,
              }}
            >
              Whether you own one investment property or a portfolio of twenty,
              JO&rsquo;s provides the analytical rigour, operational infrastructure,
              and market intelligence to maximise every asset&rsquo;s contribution
              to your returns.
            </p>
            <a href={CALENDAR_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Request a Portfolio Review <ArrowRight size={14} />
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* Portfolio metrics */}
      <section className="section">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 1,
              background: 'var(--border)',
              marginBottom: 64,
            }}
          >
            {[
              { val: '£180M+', label: 'Client Assets Under Guidance' },
              { val: '18.4%',  label: 'Avg. Gross Yield — Portfolio Clients' },
              { val: '24',     label: 'UK Cities With Active JO Presence' },
            ].map(({ val, label }) => (
              <div
                key={label}
                style={{
                  background: 'var(--charcoal)',
                  padding: '36px 28px',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontSize: '3rem',
                    color: 'var(--gold)',
                    lineHeight: 1,
                    marginBottom: 8,
                  }}
                >
                  {val}
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

          {/* Partnership highlight box */}
          <div
            style={{
              background: 'var(--charcoal)',
              border: '0.5px solid var(--gold-border)',
              padding: '44px 40px',
              position: 'relative',
              overflow: 'hidden',
              marginBottom: 64,
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: '-60px',
                right: '-60px',
                width: 240,
                height: 240,
                border: '0.5px solid rgba(184,160,112,0.08)',
                transform: 'rotate(45deg)',
                pointerEvents: 'none',
              }}
            />
            <Eyebrow>Portfolio Partnership</Eyebrow>
            <h2
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                marginBottom: 14,
                maxWidth: 480,
                marginTop: 12,
              }}
            >
              Think of us as your short-term rental asset manager.
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '0.9375rem',
                color: 'var(--muted)',
                maxWidth: 520,
                lineHeight: 1.75,
                marginBottom: 28,
              }}
            >
              We model yield, occupancy, and net operating income across your
              entire portfolio — identifying underperforming assets, acquisition
              opportunities, and optimal pricing strategies with the same
              rigour applied to institutional real estate. Investors with three
              or more properties qualify for our Portfolio Partnership programme.
            </p>
            <a href={CALENDAR_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Enquire About Portfolio Partnership <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* Investor services */}
      <section className="section" style={{ background: 'var(--charcoal)', borderTop: '0.5px solid var(--border)' }}>
        <div className="container">
          <AnimatedSection>
            <Eyebrow>Investor Services</Eyebrow>
            <h2
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                marginBottom: 12,
                maxWidth: 420,
              }}
            >
              Beyond management — strategic partnership.
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '0.9375rem',
                color: 'var(--muted)',
                maxWidth: 440,
                marginBottom: 48,
                lineHeight: 1.75,
              }}
            >
              Services designed for investors who treat property as the asset
              class it actually is.
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
            {investorServices.map(({ icon, title, desc }, i) => (
              <AnimatedSection key={title} delay={i * 80}>
                <div
                  style={{
                    background: 'var(--obsidian)',
                    padding: '36px 32px',
                    height: '100%',
                  }}
                >
                  <div style={{ color: 'var(--gold)', marginBottom: 16 }}>{icon}</div>
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

      <CaseStudies />
      <FinalCTA />
    </>
  )
}
