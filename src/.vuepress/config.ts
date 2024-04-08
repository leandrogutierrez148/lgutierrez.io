import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
        lang: "es-ES",
        title: "Leandro Gutierrez",
        description: "Mi blog personal",
    },
    "/en/": {
        lang: "en-US",
        title: "Leandro Gutierrez",
        description: "My personal blog",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
