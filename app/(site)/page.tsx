import type { Metadata } from 'next'
import HeroSlider from '@/components/sections/HeroSlider'
import TrustBar from '@/components/sections/TrustBar'
import Calculator from '@/components/sections/Calculator'
import Dashboard from '@/components/sections/Dashboard'
import FloatingCTA from '@/components/FloatingCTA'
import {
  ProcessTimeline,
  CaseStudies,
  Comparison,
  FAQ,
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
      <HeroSlider />
      <TrustBar />
      <MarketStats />
      <Calculator />
      <MarketContext />
      <Dashboard />
      <ProcessTimeline />
      <CaseStudies />
      <Comparison />
      <FAQ />
      <FloatingCTA />
    </>
  )
}
