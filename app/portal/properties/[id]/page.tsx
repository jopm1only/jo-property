import { redirect, notFound } from 'next/navigation'
import { createClient } from '@/lib/supabase-server'
import dynamic from 'next/dynamic'

const RevenueChart = dynamic(() => import('@/components/portal/RevenueChart'), { ssr: false })

function fmt(n: number) {
  return new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP', maximumFractionDigits: 0 }).format(n)
}

function fmtDate(s: string) {
  return new Date(s).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
}

function last6MonthDefs() {
  const now = new Date()
  return Array.from({ length: 6 }, (_, i) => {
    const d = new Date(now.getFullYear(), now.getMonth() - (5 - i), 1)
    return { label: d.toLocaleString('en-GB', { month: 'short' }), year: d.getFullYear(), month: d.getMonth() + 1 }
  })
}

const statusColors: Record<string, string> = {
  confirmed: '#4ade80',
  pending: '#facc15',
  cancelled: '#f87171',
  completed: 'var(--muted)',
}

export default async function PropertyPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/portal/login')

  const now = new Date()
  const currentMonth = now.getMonth() + 1
  const currentYear = now.getFullYear()

  const [{ data: property }, { data: bookings }, { data: monthlyRevenue }] = await Promise.all([
    supabase.from('properties').select('*').eq('id', id).single(),
    supabase.from('bookings')
      .select('*')
      .eq('property_id', id)
      .order('check_in', { ascending: false }),
    supabase.from('monthly_revenue')
      .select('month, year, revenue, occupancy_rate')
      .eq('property_id', id)
      .eq('year', currentYear)
      .order('month', { ascending: true }),
  ])

  if (!property) notFound()

  const allBookings = bookings ?? []
  const mrRows = monthlyRevenue ?? []

  // Problems 1 & 2 — revenue and occupancy from monthly_revenue
  const thisMonthRow = mrRows.find(r => r.month === currentMonth)
  const monthRevenue = thisMonthRow?.revenue ?? 0
  const occupancy = thisMonthRow ? Math.round(thisMonthRow.occupancy_rate ?? 0) : 0

  // Problem 3 — chart data from monthly_revenue rows for this property this year
  // Build all 6 months up to current, filling gaps with 0
  const chartData = last6MonthDefs().map(({ label, month, year }) => {
    const row = mrRows.find(r => r.month === month && r.year === year)
    return { month: label, revenue: row?.revenue ?? 0 }
  })

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
        position: 'sticky',
        top: 0,
        background: 'rgba(15,15,15,0.95)',
        backdropFilter: 'blur(8px)',
        zIndex: 50,
      }}>
        <a href="/portal/dashboard" style={{
          fontFamily: 'var(--font-dm-sans)',
          fontSize: '0.8rem',
          color: 'var(--muted)',
          textDecoration: 'none',
          letterSpacing: '0.05em',
          display: 'flex',
          alignItems: 'center',
          gap: '0.4rem',
        }}>
          ← Dashboard
        </a>
        <span style={{ color: 'var(--border-strong)' }}>·</span>
        <span style={{
          fontFamily: 'var(--font-cormorant)',
          fontSize: '1rem',
          fontWeight: 500,
          color: 'var(--gold)',
        }}>
          {property.name}
        </span>
      </header>

      <main style={{ padding: '2rem', maxWidth: '1100px', margin: '0 auto' }}>
        {/* Property header */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h1 style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
            fontWeight: 400,
            color: 'var(--cream)',
            marginBottom: '0.35rem',
          }}>
            {property.name}
          </h1>
          <p style={{
            fontFamily: 'var(--font-dm-sans)',
            fontSize: '0.85rem',
            color: 'var(--muted)',
          }}>
            {[property.address, property.city].filter(Boolean).join(', ')} · {property.bedrooms} bedroom{property.bedrooms !== 1 ? 's' : ''}
          </p>
        </div>

        {/* KPI strip */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '1rem',
          marginBottom: '2rem',
        }}>
          {[
            { label: 'Revenue This Month', value: fmt(monthRevenue) },
            { label: 'Occupancy This Month', value: `${occupancy}%` },
            { label: 'Total Bookings', value: String(allBookings.length) },
          ].map(k => (
            <div key={k.label} style={cardStyle}>
              <div style={statLabel}>{k.label}</div>
              <div style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: '1.75rem',
                fontWeight: 500,
                color: 'var(--gold)',
                lineHeight: 1.1,
              }}>{k.value}</div>
            </div>
          ))}
        </div>

        {/* Revenue chart */}
        <div style={{ ...cardStyle, marginBottom: '2rem' }}>
          <h2 style={sectionHeading}>Revenue — Last 6 Months</h2>
          <RevenueChart data={chartData} />
        </div>

        {/* Bookings table */}
        <div style={cardStyle}>
          <h2 style={sectionHeading}>All Bookings</h2>
          <div style={{ overflowX: 'auto' }}>
            {allBookings.length === 0 ? (
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.85rem', color: 'var(--muted)' }}>
                No bookings found for this property.
              </p>
            ) : (
              <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'var(--font-dm-sans)', fontSize: '0.82rem' }}>
                <thead>
                  <tr>
                    {['Guest', 'Check-in', 'Check-out', 'Platform', 'Value', 'Status'].map(h => (
                      <th key={h} style={{
                        textAlign: 'left',
                        padding: '0.6rem 0.75rem',
                        fontWeight: 500,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        fontSize: '0.68rem',
                        color: 'var(--muted)',
                        borderBottom: '1px solid var(--border)',
                        whiteSpace: 'nowrap',
                      }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {allBookings.map((b, i) => (
                    <tr key={b.id ?? i} style={{
                      borderBottom: '1px solid var(--border)',
                    }}>
                      <td style={tdStyle}>{b.guest_name ?? '—'}</td>
                      <td style={{ ...tdStyle, whiteSpace: 'nowrap' }}>{fmtDate(b.check_in)}</td>
                      <td style={{ ...tdStyle, whiteSpace: 'nowrap' }}>{fmtDate(b.check_out)}</td>
                      <td style={tdStyle}>{b.platform ?? '—'}</td>
                      <td style={{ ...tdStyle, color: 'var(--cream)', fontWeight: 500 }}>{fmt(b.total_revenue ?? 0)}</td>
                      <td style={tdStyle}>
                        <span style={{
                          display: 'inline-block',
                          padding: '0.2rem 0.55rem',
                          borderRadius: '2px',
                          background: `${statusColors[b.status] ?? 'var(--muted)'}18`,
                          color: statusColors[b.status] ?? 'var(--muted)',
                          fontSize: '0.7rem',
                          fontWeight: 500,
                          letterSpacing: '0.05em',
                          textTransform: 'capitalize',
                        }}>
                          {b.status ?? 'unknown'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}

const cardStyle: React.CSSProperties = {
  background: 'var(--charcoal)',
  border: '1px solid var(--border-strong)',
  borderRadius: '4px',
  padding: '1.5rem',
}

const sectionHeading: React.CSSProperties = {
  fontFamily: 'var(--font-cormorant)',
  fontSize: '1.3rem',
  fontWeight: 400,
  color: 'var(--cream)',
  marginBottom: '1.25rem',
}

const statLabel: React.CSSProperties = {
  fontFamily: 'var(--font-dm-sans)',
  fontSize: '0.68rem',
  fontWeight: 500,
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  color: 'var(--muted)',
  marginBottom: '0.5rem',
}

const tdStyle: React.CSSProperties = {
  padding: '0.75rem',
  color: 'var(--muted)',
  verticalAlign: 'middle',
}
