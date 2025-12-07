/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                space: {
                    black: '#050505', // Deep void
                    dark: '#0B0D12',  // Near black
                    gray: '#1F2430',  // Hull gray
                },
                hud: {
                    amber: '#FF9F1C', // Endurance amber (Primary Accent)
                    faint: 'rgba(255, 159, 28, 0.15)',
                    text: '#E2E8F0',  // Readability
                    dim: '#64748B',   // Labels
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'], // Body
                display: ['Rajdhani', 'sans-serif'], // Headings
                mono: ['Space Mono', 'monospace'], // Data/HUD
            },
            backgroundImage: {
                'starfield': "radial-gradient(circle, #1a1a1a 1px, transparent 1px)",
                'accretion': "conic-gradient(from 0deg at 50% 50%, transparent 0deg, #FF9F1C 100deg, transparent 360deg)",
            },
            animation: {
                'spin-slow': 'spin 60s linear infinite',
                'spin-reverse': 'spin 45s linear infinite reverse',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'docking': 'docking 2s ease-out forwards',
            },
            keyframes: {
                docking: {
                    '0%': { transform: 'scale(1.1)', opacity: '0' },
                    '100%': { transform: 'scale(1)', opacity: '1' },
                }
            }
        },
    },
    plugins: [],
}