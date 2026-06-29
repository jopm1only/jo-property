import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase-server'

export default async function PortalPage() {
  const supabase = await createClient()
  const { data: { session } } = await supabase.auth.getSession()
  redirect(session ? '/portal/dashboard' : '/portal/login')
}
