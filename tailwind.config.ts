// tailwind.config.js
import defaultTheme from "tailwindcss/defaultTheme";

module.exports = {
  purge: ["./src/**/*.{tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },

  // ...
};
