'use client'

import {
  Home, TrendingUp, MessageCircle, Camera,
  Sparkles, Wrench, Search, Building2,
} from 'lucide-react'
import { Eyebrow, ServiceIcon, AnimatedSection } from '@/components/ui/primitives'

const services = [
  {
    icon: <Home size={17} />,
    title: 'Full Property Management',
    desc: 'Complete Airbnb and serviced accommodation management from listing to checkout. We handle everything, end-to-end.',
  },
  {
    icon: <TrendingUp size={17} />,
    title: 'Dynamic Revenue Pricing',
    desc: 'Algorithm-driven pricing that adjusts nightly rates in real time based on demand, seasonality, and local events.',
  },
  {
    icon: <MessageCircle size={17} />,
    title: 'Guest Communication',
    desc: '24/7 professional guest management. Four-minute average response time. 4.97★ average guest satisfaction.',
  },
  {
    icon: <Camera size={17} />,
    title: 'Professional Photography',
    desc: 'Architectural-grade photography and conversion-optimised listing copy that commands premium nightly rates.',
  },
  {
    icon: <Sparkles size={17} />,
    title: 'Cleaning Coordination',
    desc: 'Vetted, hotel-standard cleaning teams with quality checks after every turnover. Guests arrive to perfection.',
  },
  {
    icon: <Wrench size={17} />,
    title: 'Maintenance Management',
    desc: 'Preventative maintenance programmes and rapid-response issue resolution. Your asset stays protected.',
  },
  {
    icon: <Search size={17} />,
    title: 'Listing Optimisation',
    desc: 'SEO-optimised listings with algorithm-informed keyword strategy and continuously tested presentation.',
  },
  {
    icon: <Building2 size={17} />,
    title: 'Investor Advisory',
    desc: 'Data-led acquisition analysis, yield modelling, and portfolio strategy for investors at every scale.',
  },
]

export default function Services() {
  return (
    <section className="section">
      <div className="container">
        <AnimatedSection>
          <Eyebrow>Our Services</Eyebrow>
          <h2
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              marginBottom: 14,
              maxWidth: 520,
            }}
          >
            Everything your property needs. Nothing it doesn&rsquo;t.
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
            A complete, end-to-end management service. From the moment a guest
            books to the moment they check out. Every detail in between, handled.
          </p>
        </AnimatedSection>

        {/* Grid: 4 cols desktop, 2 tablet, 1 mobile */}
        <div
          className="services-inner"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '0.5px',
            background: 'var(--border)',
            border: '0.5px solid var(--border)',
          }}
        >
          {services.map(({ icon, title, desc }, i) => (
            <AnimatedSection key={title} delay={i * 40}>
              <div
                style={{
                  background: 'var(--charcoal)',
                  padding: '28px 24px',
                  height: '100%',
                  transition: 'background 0.3s ease',
                  cursor: 'default',
                }}
                onMouseEnter={e =>
                  ((e.currentTarget as HTMLDivElement).style.background = 'var(--slate)')
                }
                onMouseLeave={e =>
                  ((e.currentTarget as HTMLDivElement).style.background = 'var(--charcoal)')
                }
              >
                <ServiceIcon>{icon}</ServiceIcon>
                <div
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontSize: '1.125rem',
                    color: 'var(--cream)',
                    marginBottom: 8,
                    lineHeight: 1.3,
                  }}
                >
                  {title}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '0.8125rem',
                    color: 'var(--muted)',
                    lineHeight: 1.65,
                  }}
                >
                  {desc}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

    </section>
  )
}
