'use client'

import {
  Home, TrendingUp, MessageCircle, Camera,
  Sparkles, Wrench, Search, Building2,
  Globe, ClipboardCheck, FileText, Banknote,
  CalendarClock, PackageCheck, BarChart2, Shield,
  Clock, Scale, Wallet, Star, Layers,
} from 'lucide-react'
import { Eyebrow, ServiceIcon, AnimatedSection } from '@/components/ui/primitives'

const strServices = [
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

const ltlServices = [
  {
    icon: <Globe size={17} />,
    title: 'Portal & Site Advertising',
    desc: 'Your property listed on Airbnb, Booking.com, and advertised through SEO engines. Flexible options available depending on your needs.',
  },
  {
    icon: <MessageCircle size={17} />,
    title: 'Enquiries & Viewings',
    desc: 'We handle all inbound questions and organise viewings, so you never have to field calls or rearrange your diary.',
  },
  {
    icon: <ClipboardCheck size={17} />,
    title: 'Tenant Checks & References',
    desc: 'Full credit checks, employment verification, and previous landlord references before any offer is accepted.',
  },
  {
    icon: <FileText size={17} />,
    title: 'Tenancy Agreements',
    desc: 'Legally compliant tenancy agreements and all move-in documents prepared and signed on your behalf.',
  },
  {
    icon: <Banknote size={17} />,
    title: 'Rent Collection',
    desc: 'Rent collected on schedule every month. Late payments chased promptly so you are never left waiting.',
  },
  {
    icon: <CalendarClock size={17} />,
    title: 'Repairs & Inspections',
    desc: 'Trusted contractors booked for repairs and routine inspections, including gas safety and electrical checks.',
  },
  {
    icon: <PackageCheck size={17} />,
    title: 'Deposits, Renewals & Check-outs',
    desc: 'Deposit protection, renewal negotiations, and thorough check-out reports all handled to the letter.',
  },
  {
    icon: <BarChart2 size={17} />,
    title: 'Income Statements',
    desc: 'Clear monthly statements showing exactly what came in and what went out. No guesswork, no chasing.',
  },
]

const benefits = [
  {
    icon: <Clock size={17} />,
    title: 'Less work, less stress',
    desc: 'You do not need to answer every call, chase every rent payment, or book every contractor. We handle the daily tasks. You focus on the bigger decisions.',
  },
  {
    icon: <Scale size={17} />,
    title: 'Better legal protection',
    desc: 'UK housing rules change often — gas safety, electrical checks, deposits, notices, local licensing. We help you stay compliant and reduce the risk of fines or disputes.',
  },
  {
    icon: <Wallet size={17} />,
    title: 'Stronger cash flow',
    desc: 'Rent schedules, automated reminders, and arrears workflows reduce missed payments. You can see who paid, who is late, and what action to take.',
  },
  {
    icon: <Star size={17} />,
    title: 'Happier tenants',
    desc: 'Tenants get faster replies and faster repairs. They know where to report issues and what to expect. Happy tenants stay longer.',
  },
  {
    icon: <Layers size={17} />,
    title: 'Easier growth',
    desc: 'Good processes let you scale. Move from one or two units to a larger portfolio without your workload growing with it.',
  },
  {
    icon: <Shield size={17} />,
    title: 'More professional image',
    desc: 'Smart portals, clear statements, and tidy documents build trust with tenants, lenders, and investors. You look like the serious landlord you are.',
  },
]

export default function Services() {
  return (
    <>
      {/* Short-term lets */}
      <section id="short-term-lets" className="section">
        <div className="container">
          <AnimatedSection>
            <Eyebrow>Short-Term Lets</Eyebrow>
            <h2
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                marginBottom: 14,
                maxWidth: 520,
              }}
            >
              All your property needs, in one place flexible to your demands.
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
            {strServices.map(({ icon, title, desc }, i) => (
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

      {/* Long-term lets */}
      <section id="long-term-lets" className="section" style={{ background: 'var(--charcoal)', borderTop: '0.5px solid var(--border)' }}>
        <div className="container">
          <AnimatedSection>
            <Eyebrow>Long-Term Lets</Eyebrow>
            <h2
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                marginBottom: 14,
                maxWidth: 560,
              }}
            >
              Full letting management, start to finish.
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '0.9375rem',
                color: 'var(--muted)',
                maxWidth: 520,
                marginBottom: 48,
                lineHeight: 1.75,
              }}
            >
              From finding the right tenant to handling every renewal and repair, we
              run your long-term let the way it should be run. You collect the income.
              We handle the rest.
            </p>
          </AnimatedSection>

          <div
            className="services-inner"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '0.5px',
              background: 'var(--border)',
              border: '0.5px solid var(--border)',
              marginBottom: 80,
            }}
          >
            {ltlServices.map(({ icon, title, desc }, i) => (
              <AnimatedSection key={title} delay={i * 40}>
                <div
                  style={{
                    background: 'var(--obsidian)',
                    padding: '28px 24px',
                    height: '100%',
                    transition: 'background 0.3s ease',
                    cursor: 'default',
                  }}
                  onMouseEnter={e =>
                    ((e.currentTarget as HTMLDivElement).style.background = 'var(--charcoal)')
                  }
                  onMouseLeave={e =>
                    ((e.currentTarget as HTMLDivElement).style.background = 'var(--obsidian)')
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

          {/* Why it matters */}
          <AnimatedSection>
            <div
              style={{
                borderTop: '0.5px solid var(--gold-border)',
              scrollMarginTop: 80,
                paddingTop: 56,
              }}
            >
              <Eyebrow>Why It Matters</Eyebrow>
              <h2
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                  marginBottom: 12,
                  maxWidth: 560,
                }}
              >
                A good property management company is not just a cost.
              </h2>
              <p
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '0.9375rem',
                  color: 'var(--muted)',
                  maxWidth: 540,
                  marginBottom: 48,
                  lineHeight: 1.75,
                }}
              >
                A system that protects your time, your money, and your tenants exists.
                Here is what that looks like in practice.
              </p>
            </div>
          </AnimatedSection>

          <div
            className="services-inner"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '0.5px',
              background: 'var(--border)',
              border: '0.5px solid var(--border)',
            }}
          >
            {benefits.map(({ icon, title, desc }, i) => (
              <AnimatedSection key={title} delay={i * 40}>
                <div
                  style={{
                    background: 'var(--charcoal)',
                    padding: '32px 28px',
                    height: '100%',
                    borderTop: '2px solid var(--gold)',
                  }}
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
    </>
  )
}
