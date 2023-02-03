/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "default": "var(--display-default)",
        "intro": "var(--display-intro)",
        "lato": "var(--display-lato)",
        "lora": "var(--display-lora)",
      },
      maxWidth: {
        'logo-md': '200px'
      },
      colors: {
        primaryGreen: '#16A75C',
        primaryBlue: '#1E88E5',
        primaryYellow: '#FFD026',
        yellow: {
          50: '#FFF9E1',
          100: '#FFEEB4',
          200: '#FFE483',
          300: '#FFDA4F',
          400: '#FFD026',
          500: '#FFC800',
          600: '#FFB900',
          700: '#FFA600',
          800: '#FF9500',
          900: '#FF7500',
        },
        green: {
          50: '#E6F6EC',
          100: '#C3E9D0',
          200: '#9BDBB3',
          300: '#70CD94',
          400: '#4DC27E',
          500: '#1FB767',
          600: '#16A75C',
          700: '#069550',
          800: '#008444',
          900: '#006430',
        },
        blue: {
          50: '#E3F2FD',
          100: '#BBDEFB',
          200: '#90CAF9',
          300: '#64B5F6',
          400: '#42A5F5',
          500: '#2196F3',
          600: '#1E88E5',
          700: '#1976D2',
          800: '#1565C0',
          900: '#0D47A1',
        },
        gray: {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#EEEEEE',
          300: '#E0E0E0',
          400: '#BDBDBD',
          500: '#9E9E9E',
          600: '#757575',
          700: '#616161',
          800: '#424242',
          900: '#212121',
        },
      }
    },
  },
  plugins: [],
}
