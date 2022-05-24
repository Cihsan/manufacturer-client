module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0FCFEC",
          secondary: "#19D3AE",
          accent: "#3A4256",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      {
        mydark: {
          "primary": "#3ABFF8",
          "secondary": "#828DF8",
          "accent": "#F4C152",
          "neutral": "#1D283A",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
