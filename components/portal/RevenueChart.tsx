'use client'

interface Bar {
  month: string
  revenue: number
}

function niceRange(rawMin: number, rawMax: number) {
  if (rawMax <= 0) return { axisMin: 0, axisMax: 1000, ticks: [0, 250, 500, 750, 1000] }

  // Axis floor: 80% of the minimum, rounded down to nearest £200
  const axisMin = Math.floor(rawMin * 0.8 / 200) * 200

  // Pick a step size so 4 steps covers rawMax - axisMin with clean labels
  const range = rawMax - axisMin
  const stepCandidates = [100, 200, 250, 400, 500, 1000, 2000, 5000]
  const step = stepCandidates.find(s => range / s <= 4) ?? 5000

  const axisMax = axisMin + step * 4
  const ticks = Array.from({ length: 5 }, (_, i) => axisMin + i * step)

  return { axisMin, axisMax, ticks }
}

function fmt(n: number) {
  if (n >= 1000) return `£${n / 1000 % 1 === 0 ? n / 1000 : (n / 1000).toFixed(1)}k`
  return `£${Math.round(n)}`
}

export default function RevenueChart({ data }: { data: Bar[] }) {
  const values = data.map(d => d.revenue).filter(v => v > 0)
  const rawMin = values.length ? Math.min(...values) : 0
  const rawMax = values.length ? Math.max(...values) : 0

  const { axisMin, axisMax, ticks } = niceRange(rawMin, rawMax)
  const visibleRange = axisMax - axisMin

  const chartH = 160
  const barW = 32
  const gap = 16
  const totalW = data.length * (barW + gap) - gap
  const padLeft = 52
  const padBottom = 28
  const svgW = totalW + padLeft + 12
  const svgH = chartH + padBottom + 8

  function barHeight(revenue: number) {
    if (revenue <= 0) return 2
    return Math.max(((revenue - axisMin) / visibleRange) * chartH, 2)
  }

  function tickY(val: number) {
    return chartH - ((val - axisMin) / visibleRange) * chartH + 4
  }

  return (
    <div style={{ overflowX: 'auto' }}>
      <svg
        width={svgW}
        height={svgH}
        viewBox={`0 0 ${svgW} ${svgH}`}
        style={{ display: 'block', minWidth: '280px' }}
      >
        {/* Y-axis grid lines + labels */}
        {ticks.map(val => (
          <g key={val}>
            <line
              x1={padLeft}
              x2={svgW - 12}
              y1={tickY(val)}
              y2={tickY(val)}
              stroke="rgba(255,255,255,0.06)"
              strokeWidth={1}
            />
            <text
              x={padLeft - 6}
              y={tickY(val) + 4}
              textAnchor="end"
              fill="rgba(242,237,228,0.4)"
              fontSize={9}
              fontFamily="DM Sans, sans-serif"
            >
              {fmt(val)}
            </text>
          </g>
        ))}

        {/* Bars */}
        {data.map((d, i) => {
          const bH = barHeight(d.revenue)
          const x = padLeft + i * (barW + gap)

          return (
            <g key={d.month}>
              {/* Track background */}
              <rect
                x={x}
                y={4}
                width={barW}
                height={chartH}
                fill="rgba(184,160,112,0.06)"
                rx={2}
              />
              {/* Bar fill */}
              <rect
                x={x}
                y={chartH - bH + 4}
                width={barW}
                height={bH}
                fill="var(--gold, #b8a070)"
                rx={2}
                opacity={0.9}
              />
              {/* Month label */}
              <text
                x={x + barW / 2}
                y={chartH + padBottom - 4}
                textAnchor="middle"
                fill="rgba(242,237,228,0.5)"
                fontSize={10}
                fontFamily="DM Sans, sans-serif"
              >
                {d.month}
              </text>
              <title>{d.month}: {fmt(d.revenue)}</title>
            </g>
          )
        })}
      </svg>
    </div>
  )
}
