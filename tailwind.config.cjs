/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        topography: "url('/topography.svg')",
      },
      boxShadow: {
        dark: "35px -30px 0 0 hsl(0, 0%, 45%)",
      },
      colors: {
        merino: "hsl(42, 28%, 93%)",
        quillgrey: "hsl(63, 19%, 81%)",
        whiterock: "hsl(40, 33%, 89%)",
        smokeygrey: "hsl(0, 0%, 45%)",
        sagegreen: "hsl(85, 10%, 53%)",
        lisbonbrown: "hsl(30, 22%, 21%)",
        customPrimary: "hsl(235, 60%, 65%)",
      },
      fontFamily: {
        Inter: "Inter",
      },
      screens: {
        "2xl": "1536px",
      },
    },
  },
};
