module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./components/**/*.{html,js}",
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Warm Gold
        primary: {
          DEFAULT: "#B8860B", // gold-primary
          50: "#FEF9E7", // gold-50
          100: "#FDF3D0", // gold-100
          200: "#FBE7A1", // gold-200
          300: "#F9DB72", // gold-300
          400: "#E5C84D", // gold-400
          500: "#B8860B", // gold-500
          600: "#9A7209", // gold-600
          700: "#7C5E07", // gold-700
          800: "#5E4A05", // gold-800
          900: "#403603", // gold-900
        },
        // Secondary Colors - Rich Taupe
        secondary: {
          DEFAULT: "#8B7355", // taupe-primary
          50: "#F5F2ED", // taupe-50
          100: "#EBE5DB", // taupe-100
          200: "#D7CBB7", // taupe-200
          300: "#C3B193", // taupe-300
          400: "#AF976F", // taupe-400
          500: "#8B7355", // taupe-500
          600: "#6F5C44", // taupe-600
          700: "#534533", // taupe-700
          800: "#372E22", // taupe-800
          900: "#1B1711", // taupe-900
        },
        // Accent Colors - Bright Gold
        accent: {
          DEFAULT: "#DAA520", // bright-gold
          50: "#FEF8E7", // bright-gold-50
          100: "#FDF1CF", // bright-gold-100
          200: "#FBE39F", // bright-gold-200
          300: "#F9D56F", // bright-gold-300
          400: "#F7C73F", // bright-gold-400
          500: "#DAA520", // bright-gold-500
          600: "#B8891A", // bright-gold-600
          700: "#966D14", // bright-gold-700
          800: "#74510E", // bright-gold-800
          900: "#523508", // bright-gold-900
        },
        // Background Colors - Warm Cream
        background: {
          DEFAULT: "#FEFCF7", // cream-primary
          50: "#FFFFFF", // cream-50
          100: "#FEFCF7", // cream-100
          200: "#FDF9EF", // cream-200
          300: "#FCF6E7", // cream-300
          400: "#FBF3DF", // cream-400
        },
        // Surface Colors - Subtle Beige
        surface: {
          DEFAULT: "#F5F2ED", // beige-primary
          50: "#FEFCFA", // beige-50
          100: "#F5F2ED", // beige-100
          200: "#EBE5DB", // beige-200
          300: "#E1D8C9", // beige-300
          400: "#D7CBB7", // beige-400
        },
        // Text Colors - Deep Brown
        text: {
          primary: "#2C2420", // brown-primary
          secondary: "#6B5B4F", // brown-secondary
          tertiary: "#9A8A7E", // brown-tertiary
          disabled: "#C4B9AD", // brown-disabled
        },
        // Success Colors - Sage Green
        success: {
          DEFAULT: "#8FBC8F", // sage-green
          50: "#F4F9F4", // sage-green-50
          100: "#E9F3E9", // sage-green-100
          200: "#D3E7D3", // sage-green-200
          300: "#BDDCBD", // sage-green-300
          400: "#A7D0A7", // sage-green-400
          500: "#8FBC8F", // sage-green-500
          600: "#729672", // sage-green-600
          700: "#557055", // sage-green-700
          800: "#384A38", // sage-green-800
          900: "#1B241B", // sage-green-900
        },
        // Warning Colors - Warm Amber
        warning: {
          DEFAULT: "#CD853F", // amber-primary
          50: "#FBF5EF", // amber-50
          100: "#F7EBDF", // amber-100
          200: "#EFD7BF", // amber-200
          300: "#E7C39F", // amber-300
          400: "#DFAF7F", // amber-400
          500: "#CD853F", // amber-500
          600: "#A46A32", // amber-600
          700: "#7B4F25", // amber-700
          800: "#523418", // amber-800
          900: "#29190B", // amber-900
        },
        // Error Colors - Earthy Sienna
        error: {
          DEFAULT: "#A0522D", // sienna-primary
          50: "#F8F2EE", // sienna-50
          100: "#F1E5DD", // sienna-100
          200: "#E3CBBB", // sienna-200
          300: "#D5B199", // sienna-300
          400: "#C79777", // sienna-400
          500: "#A0522D", // sienna-500
          600: "#804224", // sienna-600
          700: "#60311B", // sienna-700
          800: "#402112", // sienna-800
          900: "#201009", // sienna-900
        },
      },
      fontFamily: {
        headline: ['Playfair Display', 'serif'],
        body: ['Source Sans 3', 'sans-serif'],
        cta: ['Poppins', 'sans-serif'],
        accent: ['Amiri', 'serif'],
      },
      fontSize: {
        'display': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        '5xl': ['3rem', { lineHeight: '1.2' }],
        '4xl': ['2.5rem', { lineHeight: '1.2' }],
        '3xl': ['2rem', { lineHeight: '1.3' }],
        '2xl': ['1.5rem', { lineHeight: '1.4' }],
        'xl': ['1.25rem', { lineHeight: '1.5' }],
        'lg': ['1.125rem', { lineHeight: '1.6' }],
        'base': ['1rem', { lineHeight: '1.6' }],
        'sm': ['0.875rem', { lineHeight: '1.6' }],
        'xs': ['0.75rem', { lineHeight: '1.5' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
      },
      boxShadow: {
        'product': '0 4px 20px rgba(184, 134, 11, 0.08)',
        'modal': '0 8px 32px rgba(184, 134, 11, 0.12)',
        'hover': '0 6px 24px rgba(184, 134, 11, 0.10)',
      },
      transitionDuration: {
        '300': '300ms',
      },
      transitionTimingFunction: {
        'out': 'cubic-bezier(0.33, 1, 0.68, 1)',
      },
      animation: {
        'fade-in': 'fadeIn 300ms ease-out',
        'slide-up': 'slideUp 300ms ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      borderRadius: {
        'lg': '0.75rem',
        'xl': '1rem',
        '2xl': '1.5rem',
      },
    },
  },
  plugins: [],
}