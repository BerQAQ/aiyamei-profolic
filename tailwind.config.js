/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                orange: '#ffb21b',
                purple: '#3f0377',
                pink: '#cd284f',
            },
        },
    },
    plugins: [],
}