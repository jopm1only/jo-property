'use client'

import Link from 'next/link'

const services = [
  'Full Property Management',
  'Dynamic Pricing',
  'Guest Communication',
  'Professional Photography',
  'Listing Optimisation',
  'Investor Advisory',
]

const company = [
  { label: 'About',     href: '/about' },
  { label: 'Investors', href: '/investors' },
  { label: 'Insights',  href: '/insights' },
  { label: 'Contact',   href: '/contact' },
]

export default function Footer() {
  return (
    <footer
      style={{
        background: 'var(--charcoal)',
        borderTop: '0.5px solid var(--border)',
        padding: '64px 0 32px',
      }}
    >
      <div className="container">
        {/* Top grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.6fr 1fr 1fr',
            gap: 48,
            marginBottom: 56,
          }}
        >
          {/* Brand */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: '1.25rem',
                letterSpacing: '0.22em',
                color: 'var(--cream)',
                textTransform: 'uppercase',
                marginBottom: 2,
              }}
            >
              JO&rsquo;s
            </div>
            <div
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '0.5625rem',
                letterSpacing: '0.28em',
                color: 'var(--gold)',
                textTransform: 'uppercase',
                marginBottom: 18,
              }}
            >
              Property Management
            </div>
            <p
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: '1.0625rem',
                fontStyle: 'italic',
                color: 'var(--muted)',
                lineHeight: 1.65,
                marginBottom: 20,
                maxWidth: 280,
              }}
            >
              &ldquo;Your property, performing at its true potential.&rdquo;
            </p>
            <div style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.8125rem', color: 'var(--muted)', lineHeight: 1.9 }}>
              <div>jacobogidi@rocketmail.com</div>
              <div>07898 922 474</div>
              <div style={{ marginTop: 4 }}>London · Manchester · Edinburgh</div>
            </div>
          </div>

          {/* Services */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '0.5625rem',
                letterSpacing: '0.28em',
                color: 'var(--gold)',
                textTransform: 'uppercase',
                marginBottom: 20,
              }}
            >
              Services
            </div>
            <ul style={{ listStyle: 'none' }}>
              {services.map(s => (
                <li key={s} style={{ marginBottom: 11 }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: '0.8125rem',
                      color: 'var(--muted)',
                    }}
                  >
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '0.5625rem',
                letterSpacing: '0.28em',
                color: 'var(--gold)',
                textTransform: 'uppercase',
                marginBottom: 20,
              }}
            >
              Company
            </div>
            <ul style={{ listStyle: 'none' }}>
              {company.map(({ label, href }) => (
                <li key={href} style={{ marginBottom: 11 }}>
                  <Link
                    href={href}
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: '0.8125rem',
                      color: 'var(--muted)',
                      textDecoration: 'none',
                      transition: 'color 0.25s ease',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li style={{ marginBottom: 11 }}>
                <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.8125rem', color: 'var(--muted)' }}>
                  Privacy Policy
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: '0.5px solid var(--border)',
            paddingTop: 24,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 12,
          }}
        >
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.6875rem', color: 'var(--muted)' }}>
            © {new Date().getFullYear()} JO&rsquo;s Property Management Ltd. All rights reserved.
          </p>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.6875rem', color: 'var(--muted)', textAlign: 'right' }}>
            Registered in England &amp; Wales · ARLA Propertymark Member
          </p>
        </div>
      </div>

    </footer>
  )
}
