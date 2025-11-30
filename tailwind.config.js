/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                // This is key for the "Bold Typography" look
                display: ['Syne', 'sans-serif'],
                sans: ['Manrope', 'sans-serif'],
            },
            colors: {
                // This is the specific lime green accent
                lime: {
                    400: '#a3ff12',
                }
            }
        },
    },
    plugins: [],
}