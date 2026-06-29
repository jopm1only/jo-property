'use client'

import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase'

export default function LogoutButton() {
  const router = useRouter()

  async function handleLogout() {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push('/portal/login')
    router.refresh()
  }

  return (
    <button
      onClick={handleLogout}
      style={{
        fontFamily: 'var(--font-dm-sans)',
        fontSize: '0.75rem',
        fontWeight: 500,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        color: 'var(--muted)',
        background: 'transparent',
        border: '1px solid var(--border-strong)',
        borderRadius: '3px',
        padding: '0.45rem 1rem',
        cursor: 'pointer',
        transition: 'color 0.2s, border-color 0.2s',
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.color = 'var(--cream)'
        ;(e.currentTarget as HTMLElement).style.borderColor = 'var(--cream)'
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.color = 'var(--muted)'
        ;(e.currentTarget as HTMLElement).style.borderColor = 'var(--border-strong)'
      }}
    >
      Sign out
    </button>
  )
}
