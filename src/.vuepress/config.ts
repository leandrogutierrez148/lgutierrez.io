import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "Leandro Gutierrez",
      description: "My personal blog",
    },
    "/es/": {
      lang: "es",
      title: "Leandro Gutierrez",
      description: "Mi blog personal",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
