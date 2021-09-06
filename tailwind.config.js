module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      xs: ["12px", "18px"],
      sm: ["14px", "20px"],
      base: ["16px", "24px"],
      lg: ["20px", "28px"],
      xl: ["24px", "32px"],
    },
    width: {
      72: "288px",
      80: "320px",
      18: "74px",
      6: "24px",
      4: "16px",
      1: "100%",
      0.5: "50%",
    },
    height: {
      card: "200px",

      24: "96px",
      20: "80px",
      19: "76px",
      16: "64px",
      13: "52px",
      12: "48px",
      11: "44px",
      14: "56px",
      15: "60px",
      9: "36px",
      8: "32px",
      6: "24px",
      4: "16px",
    },

    margin: {
      20: "80px",
      19.5: "78px",
      19: "76px",
      18.5: "74px",
      18: "72px",
      8: "32px",
      9: "36px",

      4: "16px",
      sm: "8px",
      md: "14px",
      base: "20px",
      lg: "24px",
      xl: "48px",
    },

    padding: {
      sm: "8px",
      md: "14px",
      mdd: "16px",
      base: "20px",
      lg: "24px",
      xl: "48px",
      13: "52px",
      16: "64px",
      19: "76px",
      2: "8px",
      1: "4px",
    },

    colors: {
      primary: {
        900: "#0C1B4A",
        800: "#132C76",
        700: "#1A3CA2",
        600: "#214CCE",
        500: "#4169E1",
        400: "#6D8CE8",
        300: "#99AFEF",
        200: "#C5D1F6",
        100: "#F1F4FD",
      },
      grayscale: {
        900: "#292929",
        800: "#424242",
        700: "#5C5C5C",
        600: "#757575",
        500: "#8F8F8F",
        400: "#A8A8A8",
        300: "#C2C2C2",
        200: "#DBDBDB",
        100: "#F5F5F5",
        0: "#ffffff",
      },

      danger: {
        500: "#D32F2F",
        400: "#DC5959",
      },
      success: {
        500: "#4CAF50",
        400: "#6EC071",
      },
      warning: {
        500: "#F9A825",
        400: "#FABC57",
      },
    },
    zIndex: {
      9999: 9999,
      50: 50,
    },

    borderColor: (theme) => ({
      ...theme("colors"),
    }),

    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
