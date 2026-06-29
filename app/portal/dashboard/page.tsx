import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase-server'
import dynamic from 'next/dynamic'
import LogoutButton from './LogoutButton'
import PropertyCard from '@/components/portal/PropertyCard'

const RevenueChart = dynamic(() => import('@/components/portal/RevenueChart'), { ssr: false })

// ── helpers ──────────────────────────────────────────────────────────────
function fmt(n: number) {
  return new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP', maximumFractionDigits: 0 }).format(n)
}

function last6MonthLabels() {
  const months: { label: string; year: number; month: number }[] = []
  const now = new Date()
  for (let i = 5; i >= 0; i--) {
    const d = new Date(now.getFullYear(), now.getMonth() - i, 1)
    months.push({
      label: d.toLocaleString('en-GB', { month: 'short' }),
      year: d.getFullYear(),
      month: d.getMonth() + 1,
    })
  }
  return months
}

// ── page ─────────────────────────────────────────────────────────────────
export default async function DashboardPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/portal/login')

  const now = new Date()
  const currentMonth = now.getMonth() + 1
  const currentYear = now.getFullYear()

  // Work out which years the last 6 months span
  const monthDefs = last6MonthLabels()
  const years = Array.from(new Set(monthDefs.map(m => m.year)))

  // Step 1: get properties first so we can filter monthly_revenue by property_id
  const { data: properties } = await supabase
    .from('properties')
    .select('id, name, city, bedrooms')
    .eq('owner_id', user.id)

  const props = properties ?? []
  const propIds = props.map(p => p.id)

  // Step 2: fetch everything else in parallel, scoped to this owner's properties
  const [
    { data: activeBookingsRaw },
    { data: allMonthlyRevenue },
  ] = await Promise.all([
    supabase
      .from('bookings')
      .select('check_in, check_out')
      .lte('check_in', now.toISOString())
      .gte('check_out', now.toISOString())
      .not('status', 'eq', 'cancelled'),
    propIds.length > 0
      ? supabase
          .from('monthly_revenue')
          .select('property_id, month, year, revenue, occupancy_rate')
          .in('property_id', propIds)
      : Promise.resolve({ data: [] }),
  ])

  const mrAll = allMonthlyRevenue ?? []

  // KPI rows = current month only
  const mrRows = mrAll.filter(r => Number(r.month) === currentMonth && Number(r.year) === currentYear)

  // KPIs
  const totalRevenueMonth = mrRows.reduce((s, r) => s + (r.revenue ?? 0), 0)
  const avgOccupancy = mrRows.length > 0
    ? Math.round(mrRows.reduce((s, r) => s + (r.occupancy_rate ?? 0), 0) / mrRows.length)
    : 0
  const activeBookings = activeBookingsRaw?.length ?? 0

  // Chart: sum monthly_revenue across all properties for each of the last 6 months
  const chartData = monthDefs.map(({ label, year, month }) => {
    const revenue = mrAll
      .filter(r => Number(r.year) === year && Number(r.month) === month)
      .reduce((s, r) => s + (r.revenue ?? 0), 0)
    return { month: label, revenue }
  })

  // Per-property stats from monthly_revenue, fallback to £0 / 0%
  const propStats = props.map(p => {
    const mr = mrRows.find(r => r.property_id === p.id)
    return { ...p, revenue: mr?.revenue ?? 0, occupancy: mr ? Math.round(mr.occupancy_rate ?? 0) : 0 }
  })

  const kpis = [
    { label: 'Total Revenue This Month', value: fmt(totalRevenueMonth) },
    { label: 'Average Occupancy', value: `${avgOccupancy}%` },
    { label: 'Active Bookings', value: String(activeBookings) },
    { label: 'Properties Managed', value: String(props.length) },
  ]

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
        position: 'sticky',
        top: 0,
        background: 'rgba(15,15,15,0.95)',
        backdropFilter: 'blur(8px)',
        zIndex: 50,
      }}>
        <span style={{
          fontFamily: 'var(--font-cormorant)',
          fontSize: '1.1rem',
          fontWeight: 500,
          color: 'var(--gold)',
          letterSpacing: '0.03em',
        }}>
          JO&apos;s Property Management — Owner Portal
        </span>
        <LogoutButton />
      </header>

      <main style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        {/* Welcome */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h1 style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
            fontWeight: 400,
            color: 'var(--cream)',
            marginBottom: '0.35rem',
          }}>
            Portfolio Overview
          </h1>
          <p style={{
            fontFamily: 'var(--font-dm-sans)',
            fontSize: '0.85rem',
            color: 'var(--muted)',
          }}>
            {now.toLocaleString('en-GB', { month: 'long', year: 'numeric' })} performance across all properties.
          </p>
        </div>

        {/* KPI cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem',
          marginBottom: '2.5rem',
        }}>
          {kpis.map(k => (
            <div key={k.label} style={cardStyle}>
              <div style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '0.7rem',
                fontWeight: 500,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--muted)',
                marginBottom: '0.6rem',
              }}>
                {k.label}
              </div>
              <div style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: '2rem',
                fontWeight: 500,
                color: 'var(--gold)',
                lineHeight: 1.1,
              }}>
                {k.value}
              </div>
            </div>
          ))}
        </div>

        {/* Revenue chart */}
        <div style={{ ...cardStyle, marginBottom: '2.5rem' }}>
          <h2 style={sectionHeading}>Revenue — Last 6 Months</h2>
          <RevenueChart data={chartData} />
        </div>

        {/* Property grid */}
        <h2 style={{ ...sectionHeading, marginBottom: '1rem' }}>Your Properties</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '1rem',
        }}>
          {propStats.length === 0 && (
            <p style={{ color: 'var(--muted)', fontFamily: 'var(--font-dm-sans)', fontSize: '0.85rem' }}>
              No properties found. Add properties to your Supabase database to see them here.
            </p>
          )}
          {propStats.map(p => (
            <PropertyCard
              key={p.id}
              id={p.id}
              name={p.name}
              city={p.city ?? ''}
              bedrooms={p.bedrooms ?? 0}
              revenue={p.revenue}
              occupancy={p.occupancy}
            />
          ))}
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

