/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/**/*.{ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        Brown: {
          100: "#ECE0D1",
          300: "#DBC1AC",
          600: "#967259",
          900: "#634832",
        },
      },
      boxShadow: {
        normal: " 0px 1px 10px rgba(0,0,0,0.05)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      fontFamily: {
        Dana: "Dana",
        "Dana-Medium": "Dana Medium",
        "Dana-DemiBold": "Dana DemiBold",
        "Morabba-Light": "Morabba Light",
        "Morabba-Medium": "Morabba Medium",
        "Morabba-Bold": "Morabba Bold",
      },
      letterSpacing: {
        tightest: "-0.065em",
      },
      spacing: {
        30: "7.5rem",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          lg: "0.625rem",
        },
      },
      backgroundImage: {
        "home-mobile": "url(../public/images/headerBgMobile.webp)",
        "home-desktp": "url(../public/images/headerBgDesktop.webp)",
      },
    },
    screens: {
      xs : "480px",
      
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "&>*");
      addVariant("child-hover", "&>*:hover");
    },
  ],
};


