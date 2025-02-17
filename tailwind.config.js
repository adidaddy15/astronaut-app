/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,ts}"
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Poppins", "sans-serif"],
            },
            colors: {
                'button-primary-bg': '#418D23',
                'button-primary-fg': '#FFFFFF',
                'button-primary-border': '#418D23',
                'button-secondary-bg': '#FFFFFF',
                'button-secondary-fg': '#344054',
                'button-secondary-border': '#D0D5DD',
                'bg-secondary': '#F9FAFB',
                'border-secondary': '#EAECF0',
                'utility-success-50': '#ECFDF3',
                'utility-success-200': '#ABEFC6',
                'utility-success-700': '#067647',
                'text-brand-secondary-700': '#346C1F',
                'fg-senary-300': '#D0D5DD'
            }
        },
    },
    plugins: [],
}

