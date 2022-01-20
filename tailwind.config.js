module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  purge: ['src/**/*.js', 'src/**/*.jsx', 'public/**/*.html'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: '#08415C',
        primary2: '#072227',
        secundary: '#EDF2EF',
        secundary2: '#AEFEFF',
        secundary3: '#4FBDBA',
        third: '#FFB800',
        fourth: '#DE3C4B',
      },
    },
  },
  plugins: [],
};
