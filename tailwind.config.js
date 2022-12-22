module.exports = {
  purge: [],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
          'poppins': ['Poppins', 'sans-serif'],
          'overpass': ['Overpass', 'sans-serif']
          },
      colors:
      {
        gray :'#6B7280',
        black : '#1F2937',
        red : '#EF4444',
        blue : '#3B82F6',
        white: '#F9FAFB',
    },

    keyframes: {
      pulse: {
        '0%' : {
          opacity: '0',
          transform: 'translateY(-20px)',
        },
        '100%' : {
          opacity: '1',
          transform: 'translateY(0)',
        }
      }
    } ,

    animation: {
      pulse: 'pulse 2s ease',
  },
},
    colors: {
      transparent: 'transparent',
      rose: '#BF8B85',
      vanilla: '#FAF3DD',
      indigo: '#475B63',
      lightBlue: '#AED9E0',
      navy: '#344966',
      green : '#10B981'
  },
},
    variants: {
      extend: {},
  },
  plugins: [],
}
