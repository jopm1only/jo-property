'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)

    const supabase = createClient()
    const { error: authError } = await supabase.auth.signInWithPassword({ email, password })

    if (authError) {
      setError('Invalid email or password. Please try again.')
      setLoading(false)
      return
    }

    router.push('/portal/dashboard')
    router.refresh()
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'var(--obsidian)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1.5rem',
    }}>
      <div style={{ width: '100%', maxWidth: '420px' }}>
        {/* Logo / Wordmark */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: '1.5rem',
            fontWeight: 500,
            color: 'var(--gold)',
            letterSpacing: '0.04em',
            marginBottom: '0.35rem',
          }}>
            JO&apos;s Property Management
          </div>
          <div style={{
            fontFamily: 'var(--font-dm-sans)',
            fontSize: '0.75rem',
            fontWeight: 500,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'var(--muted)',
          }}>
            Owner Portal
          </div>
        </div>

        {/* Card */}
        <div style={{
          background: 'var(--charcoal)',
          border: '1px solid var(--border-strong)',
          borderRadius: '4px',
          padding: '2.5rem',
        }}>
          <h1 style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: '1.75rem',
            fontWeight: 400,
            color: 'var(--cream)',
            marginBottom: '0.5rem',
          }}>
            Welcome back
          </h1>
          <p style={{
            fontFamily: 'var(--font-dm-sans)',
            fontSize: '0.85rem',
            color: 'var(--muted)',
            marginBottom: '2rem',
          }}>
            Sign in to view your property performance.
          </p>

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '1.25rem' }}>
              <label style={labelStyle}>Email address</label>
              <input
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="you@example.com"
                style={inputStyle}
                onFocus={e => (e.currentTarget.style.borderColor = 'var(--gold)')}
                onBlur={e => (e.currentTarget.style.borderColor = 'var(--border-strong)')}
              />
            </div>

            <div style={{ marginBottom: '1.75rem' }}>
              <label style={labelStyle}>Password</label>
              <input
                type="password"
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="••••••••"
                style={inputStyle}
                onFocus={e => (e.currentTarget.style.borderColor = 'var(--gold)')}
                onBlur={e => (e.currentTarget.style.borderColor = 'var(--border-strong)')}
              />
            </div>

            {error && (
              <div style={{
                background: 'rgba(220,38,38,0.1)',
                border: '1px solid rgba(220,38,38,0.3)',
                borderRadius: '3px',
                padding: '0.75rem 1rem',
                marginBottom: '1.25rem',
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '0.82rem',
                color: '#f87171',
              }}>
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              style={{
                width: '100%',
                padding: '0.85rem',
                background: loading ? 'rgba(184,160,112,0.4)' : 'var(--gold)',
                color: '#0f0f0f',
                border: 'none',
                borderRadius: '3px',
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '0.85rem',
                fontWeight: 600,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                cursor: loading ? 'not-allowed' : 'pointer',
                transition: 'background 0.2s',
              }}
            >
              {loading ? 'Signing in…' : 'Sign in'}
            </button>
          </form>
        </div>

        <p style={{
          textAlign: 'center',
          marginTop: '2rem',
          fontFamily: 'var(--font-dm-sans)',
          fontSize: '0.75rem',
          color: 'var(--muted)',
        }}>
          Access is by invitation only. Contact your property manager for credentials.
        </p>
      </div>
    </div>
  )
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontFamily: 'var(--font-dm-sans)',
  fontSize: '0.75rem',
  fontWeight: 500,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  color: 'var(--muted)',
  marginBottom: '0.5rem',
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '0.75rem 1rem',
  background: 'var(--slate)',
  border: '1px solid var(--border-strong)',
  borderRadius: '3px',
  color: 'var(--cream)',
  fontFamily: 'var(--font-dm-sans)',
  fontSize: '0.9rem',
  outline: 'none',
  transition: 'border-color 0.2s',
}
