const defaultColors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'deco': ['bray', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        white: "#fcfcfc",
        black: {
          ...defaultColors.black,
          primary: "rgb(5,7,6)",
          light: "rgba(40, 40, 50)",
          dark: "rgba(0,0,0)",
        },
        gray: {
          ...defaultColors.gray,
          primary: "rgba(106, 116, 149, 1)",
          light: "rgba(153, 163, 198, 1)",
          dark: "rgba(62, 73, 103, 1)",
          ultralight: "rgb(203, 207, 220, 1)",
        },
        blue: {
          ...defaultColors.blue,
        },
        green: {
          ...defaultColors.green,
          primary: {
            '50': '#f0f9f3',
            '100': '#dbf0e1',
            '200': '#b9e1c7',
            '300': '#8bcaa4',
            '400': '#5aad7e',
            '500': '#399062',//light
            '600': '#28734d',
            '700': '#215f41',//primary
            '800': '#1b4a34',
            '900': '#173d2b',//dark
            '950': '#0c2219',
          },

        },
        red: {
          ...defaultColors.red,
        },
        yellow: {
          ...defaultColors.yellow,
          primary: "rgba(213, 174, 42, 1)",
          "primary-70": "rgba(213, 174, 42, 0.7)",
          "primary-50": "rgba(213, 174, 42, 0.5)",
        },
        orange: {
          ...defaultColors.orange,
        },
        purple: {
          ...defaultColors.purple,
        }
      }
    },
    // colors: {
    //   transparent: 'transparent',
    //   current: 'currentColor',
    //   black: defaultColors.black,
    //   white: defaultColors.white,
    //   gray: defaultColors.gray,
    //   emerald: defaultColors.emerald,
    //   indigo: defaultColors.indigo,
    //   yellow: defaultColors.yellow,
    // },
  },
  variants: {
    extend: {
      shadow: ['hover', 'focus', 'group-hover', 'group-focus'],
      backgroundColor: ['hover', 'focus', 'group-hover', 'group-focus'],
    },
  },
  plugins: [],
}

