module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'home-back': "url('/src/images/HomeBack.png')",
        'card1': "url('/src/images/card1.png')",
        'card2': "url('/src/images/card2.png')",
      }),
      colors: {
        siteColors: {
          main: '#5B7EE0',
          fade: '#5b7ee02b',
          backColor: '#0E1821',
          text: '#C5D0D9',
          title: '#A01F24',
          shadow: '#DD9844',
          yewo: '#FFF4A1',
          bwu: '#4BA1CD',
          purp: '#A1ACFF',
        },
      },
      width: {
        'card': '300px',
        'cardExp': '320px',
      },
      height: {
        'card': '350px',
        'cardExp': '370px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
