import type { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import TrustBar from '@/components/sections/TrustBar'
import Services from '@/components/sections/Services'
import Calculator from '@/components/sections/Calculator'
import Dashboard from '@/components/sections/Dashboard'
import {
  ProcessTimeline,
  TrustSignals,
  CaseStudies,
  Comparison,
  FAQ,
  FinalCTA,
  MarketContext,
  MarketStats,
} from '@/components/sections/HomeSections'

export const metadata: Metadata = {
  title: "JO's Property Management | Premium UK Short-Term Rental Management",
  description:
    "Premium Airbnb and serviced accommodation management across the UK. Dynamic pricing, full guest management, and data-driven revenue optimisation. Book a consultation today.",
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <MarketStats />
      <Services />
      <Calculator />
      <MarketContext />
      <Dashboard />
      <ProcessTimeline />
      <TrustSignals />
      <CaseStudies />
      <Comparison />
      <FAQ />
      <FinalCTA />
    </>
  )
}
