export default function PropertyLoading() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--obsidian)' }}>
      {/* Top bar */}
      <header style={{
        borderBottom: '1px solid var(--border)',
        padding: '0 2rem',
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        background: 'rgba(15,15,15,0.95)',
      }}>
        <div className="skeleton" style={{ width: 80, height: 14 }} />
        <span style={{ color: 'var(--border-strong)' }}>·</span>
        <div className="skeleton" style={{ width: 160, height: 16 }} />
      </header>

      <main style={{ padding: '2rem', maxWidth: '1100px', margin: '0 auto' }}>
        {/* Property heading */}
        <div style={{ marginBottom: '2.5rem' }}>
          <div className="skeleton" style={{ width: 260, height: 36, marginBottom: '0.5rem' }} />
          <div className="skeleton" style={{ width: 200, height: 14 }} />
        </div>

        {/* KPI strip */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '1rem',
          marginBottom: '2rem',
        }}>
          {[...Array(3)].map((_, i) => (
            <div key={i} style={{
              background: 'var(--charcoal)',
              border: '1px solid var(--border-strong)',
              borderRadius: '4px',
              padding: '1.5rem',
            }}>
              <div className="skeleton" style={{ width: '60%', height: 10, marginBottom: '0.75rem' }} />
              <div className="skeleton" style={{ width: '45%', height: 28 }} />
            </div>
          ))}
        </div>

        {/* Chart */}
        <div style={{
          background: 'var(--charcoal)',
          border: '1px solid var(--border-strong)',
          borderRadius: '4px',
          padding: '1.5rem',
          marginBottom: '2rem',
        }}>
          <div className="skeleton" style={{ width: 200, height: 20, marginBottom: '1.25rem' }} />
          <div className="skeleton" style={{ width: '100%', height: 196 }} />
        </div>

        {/* Bookings table */}
        <div style={{
          background: 'var(--charcoal)',
          border: '1px solid var(--border-strong)',
          borderRadius: '4px',
          padding: '1.5rem',
        }}>
          <div className="skeleton" style={{ width: 120, height: 20, marginBottom: '1.25rem' }} />
          {/* Table header */}
          <div style={{ display: 'flex', gap: '1rem', paddingBottom: '0.75rem', borderBottom: '1px solid var(--border)', marginBottom: '0.5rem' }}>
            {[120, 90, 90, 80, 70, 70].map((w, i) => (
              <div key={i} className="skeleton" style={{ width: w, height: 10 }} />
            ))}
          </div>
          {/* Table rows */}
          {[...Array(5)].map((_, i) => (
            <div key={i} style={{ display: 'flex', gap: '1rem', padding: '0.75rem 0', borderBottom: '1px solid var(--border)', alignItems: 'center' }}>
              {[120, 90, 90, 80, 70, 60].map((w, j) => (
                <div key={j} className="skeleton" style={{ width: w, height: 12 }} />
              ))}
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
