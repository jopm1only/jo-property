'use client'

import { useState } from 'react'
import { ArrowRight, Mail, Phone, MapPin, CalendarDays } from 'lucide-react'
import { Eyebrow, AnimatedSection } from '@/components/ui/primitives'
import { CALENDAR_URL } from '@/lib/constants'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    portfolio: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production: POST to /api/contact which uses Resend
    setSubmitted(true)
  }

  return (
    <>
      {/* Header */}
      <section
        style={{
          paddingTop: 'calc(60px + 72px)',
          paddingBottom: 72,
          borderBottom: '0.5px solid var(--border)',
        }}
      >
        <div className="container">
          <AnimatedSection>
            <Eyebrow>Get in Touch</Eyebrow>
            <h1
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                fontWeight: 400,
                lineHeight: 1.08,
                letterSpacing: '-0.03em',
                maxWidth: 600,
                marginBottom: 20,
              }}
            >
              Begin the conversation that changes what your property earns.
            </h1>
            <p
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '1.0625rem',
                color: 'var(--muted)',
                maxWidth: 500,
                lineHeight: 1.75,
              }}
            >
              A 45-minute private consultation with a senior JO strategist. We
              discuss your property, model your revenue potential precisely.
              No cost. No obligation.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Body */}
      <section className="section">
        <div className="container">
          <div
            className="contact-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1.4fr',
              gap: 48,
              alignItems: 'start',
            }}
          >
            {/* Left: what to expect + direct contact */}
            <AnimatedSection>
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '0.5625rem',
                    letterSpacing: '0.28em',
                    textTransform: 'uppercase',
                    color: 'var(--gold)',
                    marginBottom: 20,
                  }}
                >
                  What to Expect
                </div>

                {[
                  {
                    step: '01',
                    title: 'Tell Us About Your Property',
                    desc: "We'll have a relaxed conversation about your property, where it is, and what you're hoping to get from it. No pressure, no agenda.",
                  },
                  {
                    step: '02',
                    title: "We'll Show You the Numbers",
                    desc: "We'll walk you through what properties like yours are actually earning in your area right now, and what yours could realistically make with the right management.",
                  },
                  {
                    step: '03',
                    title: 'You Decide',
                    desc: "Whatever option makes most sense for you, from Airbnb to long-term rental, we'll accommodate your needs. The minimum you walk away with is useful market insight.",
                  },
                ].map(({ step, title, desc }) => (
                  <div
                    key={title}
                    style={{
                      paddingLeft: 20,
                      borderLeft: '0.5px solid var(--border)',
                      marginBottom: 24,
                      paddingBottom: 4,
                    }}
                  >
                    <div
                      style={{
                        fontFamily: 'var(--font-dm-sans)',
                        fontSize: '0.5625rem',
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                        color: 'var(--gold)',
                        marginBottom: 5,
                      }}
                    >
                      {step}
                    </div>
                    <div
                      style={{
                        fontFamily: 'var(--font-cormorant)',
                        fontSize: '1.125rem',
                        color: 'var(--cream)',
                        marginBottom: 6,
                      }}
                    >
                      {title}
                    </div>
                    <p
                      style={{
                        fontFamily: 'var(--font-dm-sans)',
                        fontSize: '0.8125rem',
                        color: 'var(--muted)',
                        lineHeight: 1.65,
                      }}
                    >
                      {desc}
                    </p>
                  </div>
                ))}

                {/* Direct contact */}
                <div
                  style={{
                    marginTop: 32,
                    background: 'var(--charcoal)',
                    border: '0.5px solid var(--border)',
                    padding: '24px 24px',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: '0.5625rem',
                      letterSpacing: '0.25em',
                      textTransform: 'uppercase',
                      color: 'var(--muted)',
                      marginBottom: 16,
                    }}
                  >
                    Direct Contact
                  </div>
                  {[
                    { icon: <Mail size={14} />, val: 'jacobogidi@rocketmail.com' },
                    { icon: <Phone size={14} />, val: '07898 922 474' },
                    { icon: <MapPin size={14} />, val: 'Surrey · Hampshire · Berkshire' },
                  ].map(({ icon, val }) => (
                    <div
                      key={val}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 10,
                        fontFamily: 'var(--font-dm-sans)',
                        fontSize: '0.8125rem',
                        color: 'var(--muted)',
                        marginBottom: 10,
                      }}
                    >
                      <span style={{ color: 'var(--gold)', flexShrink: 0 }}>{icon}</span>
                      {val}
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Right: form */}
            <AnimatedSection delay={150}>
              <div
                style={{
                  background: 'var(--charcoal)',
                  border: '0.5px solid var(--border-strong)',
                  padding: '40px 36px',
                }}
              >
                {submitted ? (
                  <div style={{ textAlign: 'center', padding: '48px 0' }}>
                    <div
                      style={{
                        width: 48,
                        height: 48,
                        border: '0.5px solid var(--gold)',
                        background: 'var(--gold-pale)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 20px',
                        transform: 'rotate(45deg)',
                      }}
                    >
                      <span style={{ transform: 'rotate(-45deg)', color: 'var(--gold)', fontSize: '1.25rem' }}>✓</span>
                    </div>
                    <div
                      style={{
                        fontFamily: 'var(--font-cormorant)',
                        fontSize: '1.5rem',
                        color: 'var(--cream)',
                        marginBottom: 10,
                      }}
                    >
                      Request received.
                    </div>
                    <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.7 }}>
                      A JO strategist will be in touch within 4 business hours
                      to confirm your consultation time.
                    </p>
                  </div>
                ) : (
                  <>
                    <div
                      style={{
                        fontFamily: 'var(--font-cormorant)',
                        fontSize: '1.5rem',
                        color: 'var(--cream)',
                        marginBottom: 4,
                      }}
                    >
                      Book Your Consultation
                    </div>
                    <p
                      style={{
                        fontFamily: 'var(--font-dm-sans)',
                        fontSize: '0.8125rem',
                        color: 'var(--muted)',
                        marginBottom: 20,
                      }}
                    >
                      We respond within 4 business hours.
                    </p>

                    {/* Calendar shortcut */}
                    <div
                      style={{
                        background: 'var(--obsidian)',
                        border: '0.5px solid var(--gold-border)',
                        padding: '16px 20px',
                        marginBottom: 24,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: 16,
                        flexWrap: 'wrap',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <CalendarDays size={16} style={{ color: 'var(--gold)', flexShrink: 0 }} />
                        <p
                          style={{
                            fontFamily: 'var(--font-dm-sans)',
                            fontSize: '0.8125rem',
                            color: 'var(--muted)',
                            lineHeight: 1.5,
                          }}
                        >
                          Prefer to pick a time directly? Book straight into Jacob&rsquo;s calendar.
                        </p>
                      </div>
                      <a
                        href={CALENDAR_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          fontFamily: 'var(--font-dm-sans)',
                          fontSize: '0.75rem',
                          letterSpacing: '0.12em',
                          textTransform: 'uppercase',
                          color: 'var(--gold)',
                          textDecoration: 'none',
                          whiteSpace: 'nowrap',
                          flexShrink: 0,
                        }}
                      >
                        Book a Time &rarr;
                      </a>
                    </div>

                    <form onSubmit={handleSubmit} noValidate>
                      <div
                        style={{
                          display: 'grid',
                          gridTemplateColumns: '1fr 1fr',
                          gap: 12,
                          marginBottom: 14,
                        }}
                      >
                        <div>
                          <label className="form-label" htmlFor="firstName">First Name</label>
                          <input
                            id="firstName"
                            name="firstName"
                            type="text"
                            required
                            placeholder="James"
                            className="form-input"
                            value={form.firstName}
                            onChange={handleChange}
                          />
                        </div>
                        <div>
                          <label className="form-label" htmlFor="lastName">Last Name</label>
                          <input
                            id="lastName"
                            name="lastName"
                            type="text"
                            required
                            placeholder="Richardson"
                            className="form-input"
                            value={form.lastName}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      {[
                        { id: 'email',    label: 'Email Address',    type: 'email', placeholder: 'james@example.com'   },
                        { id: 'phone',    label: 'Phone Number',     type: 'tel',   placeholder: '+44 7700 900000'     },
                        { id: 'location', label: 'Property Location',type: 'text',  placeholder: 'e.g. Chelsea, London'},
                      ].map(({ id, label, type, placeholder }) => (
                        <div key={id} style={{ marginBottom: 14 }}>
                          <label className="form-label" htmlFor={id}>{label}</label>
                          <input
                            id={id}
                            name={id}
                            type={type}
                            placeholder={placeholder}
                            className="form-input"
                            value={(form as Record<string, string>)[id]}
                            onChange={handleChange}
                          />
                        </div>
                      ))}

                      <div style={{ marginBottom: 14 }}>
                        <label className="form-label" htmlFor="portfolio">Portfolio Size</label>
                        <select
                          id="portfolio"
                          name="portfolio"
                          className="form-input"
                          value={form.portfolio}
                          onChange={handleChange}
                          style={{ cursor: 'pointer' }}
                        >
                          <option value="">Select...</option>
                          <option value="1">1 property</option>
                          <option value="2-4">2–4 properties</option>
                          <option value="5-10">5–10 properties</option>
                          <option value="10+">10+ properties</option>
                        </select>
                      </div>

                      <div style={{ marginBottom: 24 }}>
                        <label className="form-label" htmlFor="message">Message (optional)</label>
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          placeholder="Tell us about your property or any specific questions..."
                          className="form-input"
                          style={{ resize: 'vertical' }}
                          value={form.message}
                          onChange={handleChange}
                        />
                      </div>

                      <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                        Request Consultation <ArrowRight size={14} />
                      </button>
                      <p
                        style={{
                          fontFamily: 'var(--font-dm-sans)',
                          fontSize: '0.6875rem',
                          color: 'var(--muted)',
                          textAlign: 'center',
                          marginTop: 12,
                        }}
                      >
                        By submitting you agree to our Privacy Policy. We never share your data.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>

      </section>
    </>
  )
}
