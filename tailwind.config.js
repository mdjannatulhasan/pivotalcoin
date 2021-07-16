module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors: {
        brand: {
          DEFAULT: '#081034',
          primary: '#250D4D',
          secondary: '#810CFB',
        },
      },
      backgroundImage: theme => ({
        // hero: "url('/public/image/hero-bg.png')",
        bannerBg: "url('/public/image/banner.png')",
        footerBg: "url('/public/image/shape.png')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
