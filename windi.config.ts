import { defineConfig } from "windicss/helpers";

export default defineConfig({
  theme: {
    extend: {
      colors: {
        // check: https://www.lockedownseo.com/social-media-colors/#instagram
        facebook: "#3b5998",
        twitter: "#1da1f2",
        instagram: "#c32aa3",
        whatsapp: "#25d366",
        contact: "#35465d",
        website: "#000000",
      },
    },
  },

  // see https://github.com/windicss/vite-plugin-windicss/blob/main/packages/plugin-utils/src/options.ts
  safelist: [
    "text-facebook",
    "text-instagram",
    "text-twitter",
    "text-whatsapp",
    "text-contact",
    "text-website",
  ],
});
