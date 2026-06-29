import type { Metadata } from 'next'
import { Eyebrow, AnimatedSection } from '@/components/ui/primitives'

export const metadata: Metadata = {
  title: 'Insights',
  description:
    "Market analysis, regulatory updates, investment strategies, and STR performance data from JO's Property Management. For serious UK property investors.",
}

const posts = [
  {
    tag: 'Regulation',
    title: 'The 90-Day Rule in 2025: what London landlords need to know',
    excerpt:
      'The short-term let rules in London are tightening. Here is what changed, what stayed the same, and how to maximise revenue within the legal window.',
    date: '12 Jun 2025',
    readTime: '7 min read',
  },
  {
    tag: 'Revenue',
    title: 'How dynamic pricing added £18,000 to one Edinburgh property',
    excerpt:
      'A case study in algorithmic pricing: how adjusting nightly rates around local demand signals added six figures to a Georgian townhouse in twelve months.',
    date: '28 May 2025',
    readTime: '5 min read',
  },
  {
    tag: 'Strategy',
    title: 'The 7 metrics every STR investor should track monthly',
    excerpt:
      'Revenue is the obvious number. But the investors who consistently outperform track six others too, and act on all seven with the same discipline.',
    date: '14 May 2025',
    readTime: '6 min read',
  },
  {
    tag: 'Markets',
    title: 'Best UK cities for STR investment in 2025, ranked by yield',
    excerpt:
      'We analysed occupancy data, nightly rate benchmarks, and regulatory risk across 24 cities. Here is where the real opportunity lies right now.',
    date: '2 May 2025',
    readTime: '9 min read',
  },
  {
    tag: 'Optimisation',
    title: 'Photography ROI: why £800 in photos can add £12,000 in annual revenue',
    excerpt:
      'The single highest-return investment in short-term rental performance is not pricing or SEO. It is professional photography. The data is unambiguous.',
    date: '18 Apr 2025',
    readTime: '4 min read',
  },
  {
    tag: 'Strategy',
    title: 'Serviced accommodation vs Airbnb: which model is right for your property?',
    excerpt:
      'The distinction matters more than most investors realise. The right model depends on your location, property type, and risk appetite. Here is how to decide.',
    date: '5 Apr 2025',
    readTime: '8 min read',
  },
]

export default function InsightsPage() {
  return (
    <>
      {/* Header */}
      <section
        style={{
          paddingTop: 'calc(60px + 72px)',
          paddingBottom: 72,
          borderBottom: '0.5px solid var(--border)',
        }}
      >
        <div className="container">
          <AnimatedSection>
            <Eyebrow>JO&rsquo;s Insights</Eyebrow>
            <h1
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                fontWeight: 400,
                lineHeight: 1.08,
                letterSpacing: '-0.03em',
                maxWidth: 600,
                marginBottom: 20,
              }}
            >
              Intelligence for the serious property investor.
            </h1>
            <p
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '1.0625rem',
                color: 'var(--muted)',
                maxWidth: 500,
                lineHeight: 1.75,
              }}
            >
              Market analysis, regulatory updates, investment strategies, and
              performance data — published for property investors who make
              decisions based on facts, not intuition.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Posts */}
      <section className="section">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 1,
              background: 'var(--border)',
            }}
          >
            {posts.map(({ tag, title, excerpt, date, readTime }, i) => (
              <AnimatedSection key={title} delay={i * 60}>
                <article
                  className="insight-card"
                  style={{
                    background: 'var(--charcoal)',
                    padding: '32px 28px',
                    height: '100%',
                    cursor: 'pointer',
                    transition: 'background 0.3s ease',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  {/* Placeholder for image */}
                  <div
                    style={{
                      height: 120,
                      background: 'var(--mid)',
                      border: '0.5px solid var(--border)',
                      marginBottom: 24,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <div
                      style={{
                        fontFamily: 'var(--font-dm-sans)',
                        fontSize: '0.5rem',
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                        color: 'var(--muted)',
                      }}
                    >
                      Featured Image
                    </div>
                  </div>

                  <div
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: '0.5625rem',
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      color: 'var(--gold)',
                      marginBottom: 10,
                    }}
                  >
                    {tag}
                  </div>
                  <h2
                    style={{
                      fontFamily: 'var(--font-cormorant)',
                      fontSize: '1.1875rem',
                      color: 'var(--cream)',
                      lineHeight: 1.35,
                      marginBottom: 12,
                      fontWeight: 400,
                      flex: 1,
                    }}
                  >
                    {title}
                  </h2>
                  <p
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: '0.8125rem',
                      color: 'var(--muted)',
                      lineHeight: 1.65,
                      marginBottom: 20,
                    }}
                  >
                    {excerpt}
                  </p>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: '0.6875rem',
                      color: 'var(--muted)',
                      borderTop: '0.5px solid var(--border)',
                      paddingTop: 14,
                    }}
                  >
                    <span>{date}</span>
                    <span>{readTime}</span>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      <style>{`
        .insight-card:hover { background: var(--slate) !important; }
        @media (max-width: 900px) {
          .insights-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
