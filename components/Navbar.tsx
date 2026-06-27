'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { CALENDAR_URL } from '@/lib/constants'

const links = [
  { href: '/',          label: 'Home' },
  { href: '/about',     label: 'About' },
  { href: '/investors', label: 'Investors' },
  { href: '/insights',  label: 'Insights' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinkStyle = (href: string) => ({
    fontFamily: 'var(--font-dm-sans)',
    fontSize: '0.6875rem',
    letterSpacing: '0.15em',
    textTransform: 'uppercase' as const,
    textDecoration: 'none',
    color: pathname === href ? 'var(--gold)' : 'var(--muted)',
    transition: 'color 0.25s ease',
  })

  const mobileNavLinkStyle = (href: string) => ({
    display: 'block',
    fontFamily: 'var(--font-dm-sans)',
    fontSize: '0.875rem',
    letterSpacing: '0.1em',
    textTransform: 'uppercase' as const,
    textDecoration: 'none',
    color: pathname === href ? 'var(--gold)' : 'var(--cream)',
    padding: '14px 0',
    borderBottom: '0.5px solid var(--border)',
  })

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? 'rgba(15,15,15,0.94)' : 'rgba(15,15,15,0.6)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        borderBottom: `0.5px solid rgba(255,255,255,${scrolled ? '0.09' : '0.05'})`,
        transition: 'background 0.4s ease, border-color 0.4s ease',
      }}
    >
      <div
        className="container"
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 60 }}
      >
        {/* Logo */}
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ position: 'relative', width: 28, height: 28, flexShrink: 0 }}>
            <div style={{ position: 'absolute', inset: 0, border: '1px solid var(--gold)', transform: 'rotate(45deg)' }} />
            <div style={{ position: 'absolute', inset: '8px', background: 'var(--gold)', transform: 'rotate(45deg)' }} />
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1rem', letterSpacing: '0.2em', color: 'var(--cream)', textTransform: 'uppercase', lineHeight: 1.1 }}>
              JO&rsquo;s
            </div>
            <div style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.5rem', letterSpacing: '0.28em', color: 'var(--gold)', textTransform: 'uppercase' }}>
              Property Management
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: 28 }} aria-label="Main">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              style={navLinkStyle(href)}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
              onMouseLeave={e => { if (pathname !== href) e.currentTarget.style.color = 'var(--muted)' }}
            >
              {label}
            </Link>
          ))}
          <a
            href={CALENDAR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ padding: '9px 20px', fontSize: '0.625rem' }}
          >
            Book a Call
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(v => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="mobile-menu-btn"
          style={{ display: 'none', background: 'none', border: 'none', color: 'var(--cream)', cursor: 'pointer' }}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ background: 'var(--charcoal)', borderTop: '0.5px solid var(--border)', padding: '24px 32px 32px' }}>
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              style={mobileNavLinkStyle(href)}
            >
              {label}
            </Link>
          ))}
          <a
            href={CALENDAR_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            style={{ ...mobileNavLinkStyle('/contact'), color: 'var(--gold)', borderBottom: 'none' }}
          >
            Book a Call
          </a>
        </div>
      )}
    </header>
  )
}
