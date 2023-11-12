/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        customPrimary: "hsl(235, 60%, 65%)",
        customSecondary: "hsl(232, 55%, 76%)",
        customDarkBg1: "hsl(220, 6%, 13%)",
        customDarkBg2: "hsl(220, 6%, 17%)",
        customDarkBg3: "hsl(220, 6%, 21%)",
        customDarkBg3Hover: "hsl(220, 6%, 26%)",
        customContentSubtitle: "hsl(222, 23%, 72%)",
        customGrayBorder: "hsla(0, 0%, 100%, 0.1)",
        customGrayText: "hsl(220, 8%, 69%)",
        customDarkBgTransparent: "hsla(220, 6%, 13%, 0.7)",
        customDarkBgTransparentDarker: "hsla(0, 0%, 0%, 0.5)",
        customDarkBgTransparentLighter: "hsla(220, 6%, 21%, 0.7)"
      },
      fontFamily: {
        Inter: "Inter",
      },
      screens: {
        xs: "530px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xll: "1400px",
        "2xl": "1536px",
      },
    },
  },
};

