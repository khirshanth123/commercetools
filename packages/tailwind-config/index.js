const plugin = require("tailwindcss/plugin");
const { themeColors } = require("@commercetools-next/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // app content
    `src/**/*.{js,ts,jsx,tsx}`,
    // include packages if not transpiling
    `../../packages/**/*.{js,ts,jsx,tsx}`,
  ],
  theme: {
    extend: {
      ringColor: {
        DEFAULT: themeColors.primary[700],
      },
      ringOpacity: {
        DEFAULT: 0.8,
      },
      colors: {
        input: {
          DEFAULT: themeColors.neutral[300],
        },
        background: {
          DEFAULT: themeColors.background,
        },
        foreground: {
          DEFAULT: themeColors.foreground,
        },
        divider: {
          DEFAULT: themeColors.divider,
        },
        overlay: {
          DEFAULT: themeColors.overlay,
        },
        focus: {
          DEFAULT: themeColors.primary[700],
        },
        primary: {
          ...themeColors.primary,
          DEFAULT: themeColors.primary[700],
          foreground: themeColors.white,
        },
        secondary: {
          ...themeColors.secondary,
          DEFAULT: themeColors.secondary[500],
          foreground: themeColors.white,
        },
        neutral: {
          ...themeColors.neutral,
          DEFAULT: themeColors.neutral[200],
          foreground: themeColors.neutral[950],
        },
        info: {
          ...themeColors.info,
          DEFAULT: themeColors.info[700],
          foreground: themeColors.white,
        },
        success: {
          ...themeColors.success,
          DEFAULT: themeColors.success[700],
          foreground: themeColors.white,
        },
        warning: {
          ...themeColors.warning,
          DEFAULT: themeColors.warning[400],
          foreground: themeColors.black,
        },
        danger: {
          ...themeColors.danger,
          DEFAULT: themeColors.danger[700],
          foreground: themeColors.white,
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "indeterminate-progress": {
          "0%": {
            transform: "translateX(-50%) scaleX(.2)",
          },
          "10%": {
            transform: "translateX(0) scaleX(0.1)",
          },
          "100%": {
            transform: "translateX(100%) scaleX(1)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "indeterminate-progress": "indeterminate-progress 2s infinite linear",
      },
      transformOrigin: {
        "left-center": "0% 50%",
      },
      screens: {
        xs: "320px",
        "2xl": "1440px",
      },
    },
  },
 
};
