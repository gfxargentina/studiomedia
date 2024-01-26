/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F60',
        darkBlue: '#0B1B35',
        customGray: '#8A89E',
        lightBlue: '#1E0E62',
        lightGray: '#15143966',
      },
    },
  },
  plugins: [],
};
