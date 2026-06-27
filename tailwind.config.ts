import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // JO brand tokens
        obsidian:  '#0f0f0f',
        charcoal:  '#1c1c1c',
        slate:     '#262626',
        mid:       '#303030',
        gold:      '#b8a070',
        'gold-light': '#d4bc8e',
        'gold-pale':  'rgba(184,160,112,0.12)',
        'gold-border':'rgba(184,160,112,0.35)',
        cream:     '#f2ede4',
        offwhite:  '#faf8f4',
        muted:     'rgba(242,237,228,0.52)',
        'muted-strong': 'rgba(242,237,228,0.72)',
        positive:  '#4ade80',
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans:    ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
        mono:    ['var(--font-mono)', 'monospace'],
      },
      fontSize: {
        '2xs': ['0.625rem', { letterSpacing: '0.2em' }],
        'xs':  ['0.75rem',  { letterSpacing: '0.15em' }],
      },
      letterSpacing: {
        widest2: '0.3em',
        widest3: '0.4em',
      },
      borderWidth: {
        'px': '0.5px',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-up':    'fadeUp 0.6s ease forwards',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'grid-subtle': `
          linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)
        `,
      },
      backgroundSize: {
        'grid': '64px 64px',
      },
    },
  },
  plugins: [],
}

export default config
