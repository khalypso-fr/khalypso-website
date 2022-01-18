module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          main: '#102f41',
          light: '#3c586c',
          dark: '#00051b',
          contrastText: '#ffffff',
        },
        secondary: {
          main: '#ffc107',
          light: '#fff350',
          dark: '#c79100',
          contrastText: '#000000',
        },
      },
    },
  },
  plugins: [],
}
