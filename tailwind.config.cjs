/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      animation: {
        marquee: "marquee 50s linear infinite"
      },
      keyframes: {
        marquee: {
          from: {
            transform: 'translateX(0)',
          },
          to: {
            transform: 'translateX(calc(-100% - 2.5rem))',
          },
        },
      },
      backgroundImage: {
        topography: "url('/topography.svg')",
      },
      boxShadow: {
        dark: "35px -30px 0 0 hsl(0, 0%, 45%)",
        extradark: "45px -40px 0 0 hsl(0, 0%, 30%)",
      },
      colors: {
        page: "hsl(204, 8%, 23%)",
        merino: "hsl(42, 28%, 93%)",
        quillgrey: "hsl(63, 19%, 81%)",
        whiterock: "hsl(40, 33%, 89%)",
        smokeygrey: "hsl(0, 0%, 45%)",
        sagegreen: "hsl(85, 10%, 53%)",
        lisbonbrown: "hsl(30, 22%, 21%)",
        customPrimary: "hsl(235, 60%, 65%)",
        DodgerBlue: "	hsl(211, 100%, 50%)",
      },
      fontFamily: {
        Inter: "Inter",
        Pacifico: ["Pacifico", "cursive"],
      },
      screens: {
        "2xl": "1536px",
      },
    },
  },
};
