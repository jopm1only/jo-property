import { GoldDiamond } from '@/components/ui/primitives'

const locations = [
  { label: 'Surrey',     soon: false },
  { label: 'Hampshire',  soon: false },
  { label: 'Berkshire',  soon: false },
  { label: 'London',     soon: true  },
]

export default function TrustBar() {
  return (
    <div
      style={{
        background: 'var(--charcoal)',
        borderBottom: '0.5px solid var(--border)',
        padding: '18px 0',
        overflowX: 'auto',
      }}
    >
      <div
        className="container"
        style={{ display: 'flex', alignItems: 'center', gap: 0, flexWrap: 'nowrap' }}
      >
        <span
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontSize: '0.5625rem',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'var(--muted)',
            whiteSpace: 'nowrap',
            marginRight: 28,
            flexShrink: 0,
          }}
        >
          Available in
        </span>
        <div style={{ display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'nowrap' }}>
          {locations.map(({ label, soon }, i) => (
            <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  whiteSpace: 'nowrap',
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '0.75rem',
                  color: soon ? 'rgba(184,160,112,0.45)' : 'var(--muted)',
                }}
              >
                <GoldDiamond size={5} />
                {label}
                {soon && (
                  <span
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: '0.5rem',
                      letterSpacing: '0.16em',
                      textTransform: 'uppercase',
                      color: 'rgba(184,160,112,0.5)',
                      border: '0.5px solid rgba(184,160,112,0.25)',
                      padding: '2px 6px',
                      marginLeft: 2,
                    }}
                  >
                    Soon
                  </span>
                )}
              </div>
              {i < locations.length - 1 && (
                <div style={{ width: '0.5px', height: 14, background: 'var(--border-strong)' }} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
