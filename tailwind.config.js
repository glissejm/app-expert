module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  purge: ['src/**/*.js', 'src/**/*.jsx', 'public/**/*.html'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: '#08415C',
        secundary: '#EDF2EF',
        third: '#FFB800',
        fourth: '#DE3C4B',
      },
    },
  },
  plugins: [],
};
