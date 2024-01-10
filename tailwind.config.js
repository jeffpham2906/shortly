/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      screens: {
        'desk': { 'max': '1440px' },
        'tablet': { 'max': '975px' },
        'mobile': { 'max': '375px' }
      },
      colors: {
        'pm-cyan': 'hsl(180, 66%, 49%)',
        'pm-dark-violet': 'hsl(257, 27%, 26%)',
        'sc-red': 'hsl(0, 87%, 67%)',
        'nt-gray': 'hsl(0, 0%, 75%)',
        'nt-grayish-violet': 'hsl(257, 7%, 63%)',
        'nt-dark-blue': 'hsl(255, 11%, 22%)',
        'nt-dark-violet': 'hsl(260, 8%, 14%)'
      },
      backgroundImage: {
        'shorten-desk': "url(/images/bg-shorten-desktop.svg)",
        'boost-desk': 'url(/images/bg-boost-desktop.svg)'
      }
    },
  },
  plugins: [],
}

