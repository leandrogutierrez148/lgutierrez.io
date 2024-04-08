import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
        lang: "es-ES",
        description: "Mi blog personal",
    },
    "/en/": {
        lang: "en-US",
        description: "My personal blog",
    },
  },

  theme,

  plugins: [
    googleAnalyticsPlugin({
      id: 'G-2TP2ET82BT',
    }),
  ],

});
