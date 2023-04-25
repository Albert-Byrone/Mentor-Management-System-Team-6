/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mukta: ['Mukta', 'sans-serif'],
      },
      colors: {
        // primary variants
        pri1: '#023C40',
        pri2: '#035D63',
        pri3: '#058B94',
        pri4: '#06B9C6',
        pri5: '#08E8F7',
        pri6: '#39ECF9',
        pri7: '#6BF1FA',
        pri8: '#9CF6FC',
        pri9: '#CEFAFD',
        pri10: '#E6FDFE',
        pri11: '#F7FEFF',
        // secondary variants
        sec1: '#660007',
        sec2: '#99000A',
        sec3: '#CC000E',
        sec5: '#FF0011',
        sec6: '#FF5964',
        sec7: '#FF99A0',
        sec8: '#FFCCCF',
        sec9: '#FFE5E7',
        // black variants
        black1: '#141414',
        black2: '#333333',
        black3: '#4D4D4D',
        black4: '#666666',
        black5: '#808080',
        black6: '#999999',
        black7: '#B3B3B3',
        black8: '#CCCCCC',
        black9: '#E6E6E6',
        black10: '#F2F2F2',
      },
      gridTemplateColumns: {
        task: '12.5% repeat(3, 1fr)',
        socials: '40% repeat(1, 1fr)',
      },
    },
  },
  plugins: [],
};
