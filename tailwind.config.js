module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  purge: ['src/**/*.js', 'src/**/*.jsx', 'public/**/*.html'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: '#08415C',
        darkPrimary: '#072227',
        secundary: '#EDF2EF',
        lightSecondary: '#AEFEFF',
        darkSecondary: '#4FBDBA',
        brightOrange: '#FFB800',
        brightRed: '#DE3C4B',
      },
    },
  },
  plugins: [],
};
