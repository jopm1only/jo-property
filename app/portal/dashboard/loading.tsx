export default function DashboardLoading() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--obsidian)' }}>
      {/* Top bar */}
      <header style={{
        borderBottom: '1px solid var(--border)',
        padding: '0 2rem',
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: 'rgba(15,15,15,0.95)',
      }}>
        <div className="skeleton" style={{ width: 280, height: 18 }} />
        <div className="skeleton" style={{ width: 72, height: 30, borderRadius: 3 }} />
      </header>

      <main style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        {/* Heading */}
        <div style={{ marginBottom: '2.5rem' }}>
          <div className="skeleton" style={{ width: 220, height: 36, marginBottom: '0.5rem' }} />
          <div className="skeleton" style={{ width: 180, height: 14 }} />
        </div>

        {/* KPI cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem',
          marginBottom: '2.5rem',
        }}>
          {[...Array(4)].map((_, i) => (
            <div key={i} style={{
              background: 'var(--charcoal)',
              border: '1px solid var(--border-strong)',
              borderRadius: '4px',
              padding: '1.5rem',
            }}>
              <div className="skeleton" style={{ width: '70%', height: 10, marginBottom: '0.75rem' }} />
              <div className="skeleton" style={{ width: '50%', height: 32 }} />
            </div>
          ))}
        </div>

        {/* Chart */}
        <div style={{
          background: 'var(--charcoal)',
          border: '1px solid var(--border-strong)',
          borderRadius: '4px',
          padding: '1.5rem',
          marginBottom: '2.5rem',
        }}>
          <div className="skeleton" style={{ width: 200, height: 20, marginBottom: '1.25rem' }} />
          <div className="skeleton" style={{ width: '100%', height: 196 }} />
        </div>

        {/* Property grid heading */}
        <div className="skeleton" style={{ width: 140, height: 20, marginBottom: '1rem' }} />
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '1rem',
        }}>
          {[...Array(3)].map((_, i) => (
            <div key={i} style={{
              background: 'var(--charcoal)',
              border: '1px solid var(--border-strong)',
              borderRadius: '4px',
              padding: '1.5rem',
            }}>
              <div className="skeleton" style={{ width: '65%', height: 20, marginBottom: '0.4rem' }} />
              <div className="skeleton" style={{ width: '40%', height: 12, marginBottom: '1.5rem' }} />
              <div style={{ display: 'flex', gap: '1.5rem' }}>
                <div>
                  <div className="skeleton" style={{ width: 60, height: 10, marginBottom: '0.3rem' }} />
                  <div className="skeleton" style={{ width: 80, height: 20 }} />
                </div>
                <div>
                  <div className="skeleton" style={{ width: 60, height: 10, marginBottom: '0.3rem' }} />
                  <div className="skeleton" style={{ width: 50, height: 20 }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
