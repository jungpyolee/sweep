module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      sm: ["14px", "20px"],
      base: ["16px", "24px"],
      lg: ["20px", "28px"],
      xl: ["24px", "32px"],
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
