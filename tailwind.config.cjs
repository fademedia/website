/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      animation: {
        marquee: "marquee 50s linear infinite",
      },
      keyframes: {
        marquee: {
          from: {
            transform: "translateX(0)",
          },
          to: {
            transform: "translateX(calc(-100% - 2.5rem))",
          },
        },
      },
      backgroundImage: {
        radialgradient:
          "radial-gradient(100% 100% at 50% 92.82%, #000000 0%, #000000 0.01%, #030105 20.42%, #030105 50.42%, #1B0E14 63.12%, #0F0718 73.02%, #000000 100%)",
        lineargradientabout:
          "linear-gradient(180deg, rgba(1, 2, 5, 0) 0%, #17081E 85.42%)",
        lineargradientservice:
          "linear-gradient(180deg, #16081D 0%, #0F0615 27.71%, #030105 57.4%)",
        clientgradient: "linear-gradient(180deg, #030105 55.97%, #0C0514 100%)",
        testimonialgradient:
          "linear-gradient(110.52deg, #0D0415 20.67%, #231315 47.87%, #1A0E13 64.16%, #0B0310 86.77%)",
        faqgradient: "linear-gradient(180deg, #0D0515 0%, #030105 100%)",
      },
      boxShadow: {
        dark: "35px -30px 0 0 hsl(0, 0%, 45%)",
        extradark: "45px -40px 0 0 hsl(0, 0%, 30%)",
        testimonial: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
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
        jacarta: "hsl(245,17%,29%)",
        cyanblue: "hsl(214,54%,5%)",
        cinder: "hsl(214, 39%, 7%)",
        mountainmist: "hsl(252, 2%, 59%)",
        DodgerBlue: "	hsl(211, 100%, 50%)",
        darkpastelblue: "hsl(266, 52%, 64%)",
      },
      fontFamily: {
        Inter: "Inter",
        Montserrat: "Montserrat",
        MerriweatherSans: "Merriweather Sans",
        AbrilFatface: ["Abril Fatface", "serif"],
        OpenSans: ["Open Sans", "sans-serif"],
        PoiretOne: ["Poiret One", "sans-serif"],
        Nunito: ["Nunito", "sans-serif"],
      },
      screens: {
        "2xl": "1536px",
      },
    },
  },
};
