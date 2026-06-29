import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.jopm.co.uk'),
  title: {
    default: "JO's Property Management | Premium Short-Term Rental Management UK",
    template: "%s | JO's Property Management",
  },
  description:
    "Premium Airbnb and serviced accommodation management across the UK. Dynamic pricing, full guest management, and data-driven revenue optimisation for serious property investors.",
  keywords: [
    "Airbnb management UK",
    "short-term rental management",
    "serviced accommodation management",
    "property management London",
    "STR management",
    "Airbnb property manager UK",
  ],
  alternates: {
    canonical: 'https://www.jopm.co.uk',
    types: {
      'text/html': [
        { url: 'https://www.jopm.co.uk', title: "JO's Property Management" },
        { url: 'https://jopm.uk', title: "JO's Property Management" },
      ],
    },
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "JO's Property Management",
    url: 'https://www.jopm.co.uk',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

export const viewport: Viewport = {
  themeColor: "#0f0f0f",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
