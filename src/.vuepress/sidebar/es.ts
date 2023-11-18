import { sidebar } from "vuepress-theme-hope";

export const esSidebar = sidebar({
  "/es/": [
    "",
    {
      text: "Articulos",
      icon: "book",
      prefix: "posts/",
      children: "structure",
    },
  ],
});
