import Link from 'next/link'

export default function PropertyNotFound() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'var(--obsidian)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      textAlign: 'center',
    }}>
      {/* Monogram */}
      <div style={{
        fontFamily: 'var(--font-cormorant)',
        fontSize: '5rem',
        fontWeight: 300,
        color: 'transparent',
        WebkitTextStroke: '0.5px rgba(184,160,112,0.2)',
        lineHeight: 1,
        marginBottom: '2rem',
        userSelect: 'none',
      }}>
        404
      </div>

      <h1 style={{
        fontFamily: 'var(--font-cormorant)',
        fontSize: 'clamp(1.5rem, 4vw, 2.25rem)',
        fontWeight: 400,
        color: 'var(--cream)',
        marginBottom: '0.75rem',
      }}>
        Property not found
      </h1>

      <p style={{
        fontFamily: 'var(--font-dm-sans)',
        fontSize: '0.875rem',
        color: 'var(--muted)',
        maxWidth: 340,
        lineHeight: 1.7,
        marginBottom: '2.5rem',
      }}>
        This property doesn&apos;t exist or you don&apos;t have access to it.
        If you think this is an error, contact your property manager.
      </p>

      <Link href="/portal/dashboard" style={{
        fontFamily: 'var(--font-dm-sans)',
        fontSize: '0.75rem',
        fontWeight: 600,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        color: '#0f0f0f',
        background: 'var(--gold)',
        border: 'none',
        borderRadius: '3px',
        padding: '0.75rem 2rem',
        textDecoration: 'none',
        display: 'inline-block',
      }}>
        Back to dashboard
      </Link>
    </div>
  )
}
