const defaultTheme = require("tailwindcss/defaultTheme")
const colors = require("tailwindcss/colors")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#F0F7FF",
          100: "#DBEDFF",
          200: "#B3D7FF",
          300: "#80BDFF",
          400: "#3D9BFF",
          500: "#0069D6",
          600: "#005EC2",
          700: "#0051A8",
          800: "#00438A",
          900: "#002F61",
        },
        secondary: {
          50: "#FFF5F0",
          100: "#FFE7DB",
          200: "#FFCCB3",
          300: "#FFAA80",
          400: "#FF7733",
          500: "#D64600",
          600: "#C24100",
          700: "#A83800",
          800: "#852C00",
          900: "#662200",
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            "--tw-prose-body": theme("colors.primary.700"),
            "--tw-prose-links": theme("colors.primary.700"),
            "--tw-prose-bold": theme("colors.primary.700"),
            "--tw-prose-invert-body": theme("colors.primary.100"),
            "--tw-prose-invert-links": theme("colors.primary.200"),
            "--tw-prose-invert-bold": theme("colors.primary.100"),
          },
        },
      }),
      fontFamily: {
        logo: ["IBM Plex Sans", ...defaultTheme.fontFamily.sans],
        headline: ["IBM Plex Serif", ...defaultTheme.fontFamily.sans],
        body: ["IBM Plex Sans", ...defaultTheme.fontFamily.sans],
        mono: ["IBM Plex Mono", ...defaultTheme.fontFamily.mono],
        sans: ["IBM Plex Sans", ...defaultTheme.fontFamily.sans],
        serif: ["IBM Plex Serif", ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
  ],
}
