'use client'

interface Props {
  id: string
  name: string
  city: string
  bedrooms: number
  revenue: number
  occupancy: number
}

function fmt(n: number) {
  return new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP', maximumFractionDigits: 0 }).format(n)
}

export default function PropertyCard({ id, name, city, bedrooms, revenue, occupancy }: Props) {
  return (
    <a
      href={`/portal/properties/${id}`}
      style={{
        background: 'var(--charcoal)',
        border: '1px solid var(--border-strong)',
        borderRadius: '4px',
        padding: '1.5rem',
        textDecoration: 'none',
        display: 'block',
        transition: 'border-color 0.2s, transform 0.2s',
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.borderColor = 'var(--gold-border)'
        ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-strong)'
        ;(e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
      }}
    >
      <div style={{
        fontFamily: 'var(--font-cormorant)',
        fontSize: '1.2rem',
        fontWeight: 500,
        color: 'var(--cream)',
        marginBottom: '0.25rem',
      }}>
        {name}
      </div>
      <div style={{
        fontFamily: 'var(--font-dm-sans)',
        fontSize: '0.8rem',
        color: 'var(--muted)',
        marginBottom: '1.25rem',
      }}>
        {city} · {bedrooms} bed{bedrooms !== 1 ? 's' : ''}
      </div>
      <div style={{ display: 'flex', gap: '1.5rem' }}>
        <div>
          <div style={statLabel}>This month</div>
          <div style={statValue}>{fmt(revenue)}</div>
        </div>
        <div>
          <div style={statLabel}>Occupancy</div>
          <div style={statValue}>{occupancy}%</div>
        </div>
      </div>
      <div style={{
        marginTop: '1rem',
        fontFamily: 'var(--font-dm-sans)',
        fontSize: '0.75rem',
        color: 'var(--gold)',
        letterSpacing: '0.05em',
      }}>
        View property →
      </div>
    </a>
  )
}

const statLabel: React.CSSProperties = {
  fontFamily: 'var(--font-dm-sans)',
  fontSize: '0.68rem',
  fontWeight: 500,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  color: 'var(--muted)',
  marginBottom: '0.2rem',
}

const statValue: React.CSSProperties = {
  fontFamily: 'var(--font-dm-sans)',
  fontSize: '1rem',
  fontWeight: 600,
  color: 'var(--cream)',
}
