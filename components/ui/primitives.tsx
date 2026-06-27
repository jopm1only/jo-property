'use client'

import { useEffect, useRef, ReactNode } from 'react'

/* ── Eyebrow label ───────────────────────────────── */
export function Eyebrow({ children }: { children: ReactNode }) {
  return <div className="eyebrow" style={{ marginBottom: 14 }}>{children}</div>
}

/* ── Animated section (fade up on scroll) ────────── */
export function AnimatedSection({
  children,
  delay = 0,
  className = '',
  style = {},
}: {
  children: ReactNode
  delay?: number
  className?: string
  style?: React.CSSProperties
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.animationDelay = `${delay}ms`
          el.classList.add('animate-fade-up')
          observer.unobserve(el)
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  return (
    <div
      ref={ref}
      className={className}
      style={{ opacity: 0, ...style }}
    >
      {children}
    </div>
  )
}

/* ── Gold diamond divider ────────────────────────── */
export function GoldDiamond({ size = 8 }: { size?: number }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        background: 'var(--gold)',
        transform: 'rotate(45deg)',
        flexShrink: 0,
      }}
    />
  )
}

/* ── Stat card ───────────────────────────────────── */
export function StatCard({
  number,
  label,
  suffix = '',
}: {
  number: string
  label: string
  suffix?: string
}) {
  return (
    <div
      style={{
        background: 'var(--charcoal)',
        border: '0.5px solid var(--border)',
        padding: '24px 20px',
        textAlign: 'center',
      }}
    >
      <div
        style={{
          fontFamily: 'var(--font-cormorant)',
          fontSize: '2.5rem',
          color: 'var(--gold)',
          lineHeight: 1,
          marginBottom: 6,
        }}
      >
        {number}
        {suffix && (
          <span style={{ fontSize: '1.25rem', marginLeft: 2 }}>{suffix}</span>
        )}
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
  )
}

/* ── Service icon box ────────────────────────────── */
export function ServiceIcon({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        width: 36,
        height: 36,
        border: '0.5px solid var(--border-strong)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 16,
        color: 'var(--gold)',
      }}
    >
      {children}
    </div>
  )
}
