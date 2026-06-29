'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { CALENDAR_URL } from '@/lib/constants'

const slides = [
  {
    image: '/images/slider/slide-1.jpg',
    headline: 'Elevate Your Properties Performance',
    btnText: 'Calculate Your Revenue',
    btnHref: '#calculator',
    btnExternal: false,
  },
  {
    image: '/images/slider/slide-2.jpg',
    headline: 'Serving Surrey, Hampshire & Berkshire (London available soon)',
    btnText: 'See How It Works',
    btnHref: '/about',
    btnExternal: false,
  },
  {
    image: '/images/slider/slide-3.jpg',
    headline: 'Earn More. Worry Less. Leave It To Us.',
    btnText: 'Get Started',
    btnHref: CALENDAR_URL,
    btnExternal: true,
  },
]

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const [prev, setPrev] = useState<number | null>(null)
  const [fading, setFading] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const hovered = useRef(false)

  const goTo = useCallback((index: number) => {
    if (index === current || fading) return
    setPrev(current)
    setFading(true)
    setCurrent(index)
    setTimeout(() => {
      setPrev(null)
      setFading(false)
    }, 700)
  }, [current, fading])

  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo])
  const prev_ = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, goTo])

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      if (!hovered.current) {
        setCurrent(c => {
          const next = (c + 1) % slides.length
          setPrev(c)
          setFading(true)
          setTimeout(() => { setPrev(null); setFading(false) }, 700)
          return next
        })
      }
    }, 5000)
  }, [])

  useEffect(() => {
    resetTimer()
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [resetTimer])

  return (
    <section
      style={{ position: 'relative', width: '100%', height: '100svh', overflow: 'hidden', background: '#0f0f0f' }}
      onMouseEnter={() => { hovered.current = true }}
      onMouseLeave={() => { hovered.current = false }}
    >
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            inset: 0,
            opacity: i === current ? 1 : (i === prev ? 0 : 0),
            transition: i === current ? 'opacity 0.7s ease' : (i === prev ? 'opacity 0.7s ease' : 'none'),
            zIndex: i === current ? 2 : (i === prev ? 1 : 0),
          }}
        >
          <Image
            src={slide.image}
            alt={slide.headline}
            fill
            priority={i === 0}
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
          {/* Dark overlay */}
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.48)', zIndex: 1 }} />
        </div>
      ))}

      {/* Content */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '0 24px',
        }}
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 28,
              opacity: i === current ? 1 : 0,
              transform: i === current ? 'translateY(0)' : 'translateY(16px)',
              transition: 'opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s',
              pointerEvents: i === current ? 'auto' : 'none',
              padding: '0 24px',
              maxWidth: 760,
            }}
          >
            <h1
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(2.4rem, 6vw, 5.5rem)',
                fontWeight: 600,
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                color: '#ffffff',
                textShadow: '0 2px 24px rgba(0,0,0,0.5)',
                margin: 0,
              }}
            >
              {slide.headline}
            </h1>
            {slide.btnExternal ? (
              <a
                href={slide.btnHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                {slide.btnText}
              </a>
            ) : (
              <Link href={slide.btnHref} className="btn-primary">
                {slide.btnText}
              </Link>
            )}
          </div>
        ))}
      </div>

      {/* Arrow: left */}
      <button
        onClick={prev_}
        aria-label="Previous slide"
        style={{
          position: 'absolute',
          left: 20,
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 20,
          background: 'rgba(0,0,0,0.35)',
          border: '0.5px solid rgba(255,255,255,0.2)',
          color: '#fff',
          width: 48,
          height: 48,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          backdropFilter: 'blur(6px)',
          WebkitBackdropFilter: 'blur(6px)',
          transition: 'background 0.2s',
        }}
        onMouseEnter={e => (e.currentTarget.style.background = 'rgba(184,160,112,0.55)')}
        onMouseLeave={e => (e.currentTarget.style.background = 'rgba(0,0,0,0.35)')}
      >
        <ChevronLeft size={20} />
      </button>

      {/* Arrow: right */}
      <button
        onClick={next}
        aria-label="Next slide"
        style={{
          position: 'absolute',
          right: 20,
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 20,
          background: 'rgba(0,0,0,0.35)',
          border: '0.5px solid rgba(255,255,255,0.2)',
          color: '#fff',
          width: 48,
          height: 48,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          backdropFilter: 'blur(6px)',
          WebkitBackdropFilter: 'blur(6px)',
          transition: 'background 0.2s',
        }}
        onMouseEnter={e => (e.currentTarget.style.background = 'rgba(184,160,112,0.55)')}
        onMouseLeave={e => (e.currentTarget.style.background = 'rgba(0,0,0,0.35)')}
      >
        <ChevronRight size={20} />
      </button>

      {/* Dot indicators */}
      <div
        style={{
          position: 'absolute',
          bottom: 28,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 20,
          display: 'flex',
          gap: 10,
        }}
      >
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            style={{
              width: 10,
              height: 10,
              borderRadius: '50%',
              background: i === current ? 'var(--gold)' : 'rgba(255,255,255,0.35)',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              transition: 'background 0.3s ease',
            }}
          />
        ))}
      </div>
    </section>
  )
}
