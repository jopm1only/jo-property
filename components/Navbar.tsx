'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect, useRef } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import { CALENDAR_URL } from '@/lib/constants'

const aboutDropdown = [
  { href: '/about#short-term-lets', label: 'Short-Term Lets' },
  { href: '/about#long-term-lets',  label: 'Long-Term Lets' },
  { href: '/about#why-it-matters',  label: 'Why It Matters' },
]

const links = [
  { href: '/',          label: 'Home' },
  { href: '/investors', label: 'Investors' },
  { href: '/insights',  label: 'Insights' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setAboutOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const navLinkStyle = (href: string) => ({
    fontFamily: 'var(--font-dm-sans)',
    fontSize: '0.6875rem',
    letterSpacing: '0.15em',
    textTransform: 'uppercase' as const,
    textDecoration: 'none',
    color: pathname === href || (href === '/about' && pathname.startsWith('/about')) ? 'var(--gold)' : 'var(--muted)',
    transition: 'color 0.25s ease',
  })

  const mobileNavLinkStyle = (active = false) => ({
    display: 'block',
    fontFamily: 'var(--font-dm-sans)',
    fontSize: '0.875rem',
    letterSpacing: '0.1em',
    textTransform: 'uppercase' as const,
    textDecoration: 'none',
    color: active ? 'var(--gold)' : 'var(--cream)',
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
          <Link
            href="/"
            style={navLinkStyle('/')}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
            onMouseLeave={e => { if (pathname !== '/') e.currentTarget.style.color = 'var(--muted)' }}
          >
            Home
          </Link>

          {/* About dropdown */}
          <div ref={dropdownRef} style={{ position: 'relative' }}>
            <button
              onClick={() => setAboutOpen(v => !v)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 4,
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '0.6875rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: pathname.startsWith('/about') ? 'var(--gold)' : aboutOpen ? 'var(--gold)' : 'var(--muted)',
                transition: 'color 0.25s ease',
                padding: 0,
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
              onMouseLeave={e => { if (!pathname.startsWith('/about') && !aboutOpen) e.currentTarget.style.color = 'var(--muted)' }}
            >
              About
              <ChevronDown size={11} style={{ transition: 'transform 0.2s', transform: aboutOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} />
            </button>

            {aboutOpen && (
              <div
                style={{
                  position: 'absolute',
                  top: 'calc(100% + 16px)',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'rgba(15,15,15,0.97)',
                  border: '0.5px solid var(--border-strong)',
                  backdropFilter: 'blur(14px)',
                  WebkitBackdropFilter: 'blur(14px)',
                  minWidth: 200,
                  zIndex: 200,
                  boxShadow: '0 16px 48px rgba(0,0,0,0.4)',
                }}
              >
                {/* "About Us" top link */}
                <Link
                  href="/about"
                  onClick={() => setAboutOpen(false)}
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '0.6875rem',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'var(--gold)',
                    textDecoration: 'none',
                    padding: '14px 20px',
                    borderBottom: '0.5px solid var(--border)',
                  }}
                >
                  About Us
                </Link>
                {aboutDropdown.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setAboutOpen(false)}
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: '0.6875rem',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: 'var(--muted)',
                      textDecoration: 'none',
                      padding: '12px 20px',
                      borderBottom: '0.5px solid var(--border)',
                      transition: 'color 0.2s, background 0.2s',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.color = 'var(--gold)'
                      e.currentTarget.style.background = 'rgba(184,160,112,0.06)'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.color = 'var(--muted)'
                      e.currentTarget.style.background = 'transparent'
                    }}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {links.filter(l => l.href !== '/').map(({ href, label }) => (
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
          <Link href="/" onClick={() => setOpen(false)} style={mobileNavLinkStyle(pathname === '/')}>Home</Link>

          {/* About accordion */}
          <div>
            <button
              onClick={() => setMobileAboutOpen(v => !v)}
              style={{
                ...mobileNavLinkStyle(pathname.startsWith('/about')),
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                background: 'none',
                border: 'none',
                borderBottom: '0.5px solid var(--border)',
                cursor: 'pointer',
              }}
            >
              About
              <ChevronDown size={14} style={{ transition: 'transform 0.2s', transform: mobileAboutOpen ? 'rotate(180deg)' : 'rotate(0deg)', color: 'var(--muted)' }} />
            </button>
            {mobileAboutOpen && (
              <div style={{ paddingLeft: 16, background: 'rgba(0,0,0,0.15)' }}>
                <Link href="/about" onClick={() => setOpen(false)} style={{ ...mobileNavLinkStyle(false), fontSize: '0.8125rem', color: 'var(--gold)' }}>About Us</Link>
                {aboutDropdown.map(({ href, label }) => (
                  <Link key={href} href={href} onClick={() => setOpen(false)} style={{ ...mobileNavLinkStyle(false), fontSize: '0.8125rem' }}>{label}</Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/investors" onClick={() => setOpen(false)} style={mobileNavLinkStyle(pathname === '/investors')}>Investors</Link>
          <Link href="/insights" onClick={() => setOpen(false)} style={mobileNavLinkStyle(pathname === '/insights')}>Insights</Link>
          <a
            href={CALENDAR_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            style={{ ...mobileNavLinkStyle(false), color: 'var(--gold)', borderBottom: 'none' }}
          >
            Book a Call
          </a>
        </div>
      )}
    </header>
  )
}
