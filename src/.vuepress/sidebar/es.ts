import { sidebar } from "vuepress-theme-hope";

export const esSidebar = sidebar({
  "/": [
    {
      text: "Articulos",
      icon: "book",
      prefix: "posts/",
      children: "structure",
    },
  ],
});
