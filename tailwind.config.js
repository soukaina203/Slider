module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('../public/bg.jpg')",
      },
      colors:{
'darkBlue':'#D07E96'
      },
      screens: {
        'tablet': '640px',
        // => @media (min-width: 640px) { ... }
        "sm": '350px',
        laptop: '1024px',
        // => @media (min-width: 1024px) { ... }

        desktop: '1236px',
        pro: '1095px',
        main: '1430px',
        // => @media (min-width: 1280px) { ... }
      },

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
