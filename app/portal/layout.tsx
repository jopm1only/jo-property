import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Owner Portal — JO's Property Management",
  robots: { index: false, follow: false },
}

export default function PortalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--obsidian)' }}>
      {children}
    </div>
  )
}
