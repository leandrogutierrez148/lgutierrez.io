import { sidebar } from "vuepress-theme-hope";

export const esSidebar = sidebar({
  "/es/": [
    "",
    {
      text: "Demostracion",
      icon: "laptop-code",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    {
      text: "Articulos",
      icon: "book",
      prefix: "posts/",
      children: "structure",
    },
    "intro",
  ],
});
