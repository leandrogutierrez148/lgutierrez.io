import { navbar } from "vuepress-theme-hope";

export const esNavbar = navbar([
  "/es/",
  "/es/demo/",
  {
    text: "Notas",
    icon: "pen-to-square",
    prefix: "/es/posts/",
    children: [
      {
        text: "Manzana",
        icon: "pen-to-square",
        prefix: "apple/",
        children: [
          { text: "Manzana1", icon: "pen-to-square", link: "1" },
          { text: "Manzana2", icon: "pen-to-square", link: "2" },
          "3",
          "4",
        ],
      },
      {
        text: "Banana",
        icon: "pen-to-square",
        prefix: "banana/",
        children: [
          {
            text: "Banana 1",
            icon: "pen-to-square",
            link: "1",
          },
          {
            text: "Banana 2",
            icon: "pen-to-square",
            link: "2",
          },
          "3",
          "4",
        ],
      },
      { text: "Cereza", icon: "pen-to-square", link: "cherry" },
      { text: "Frutas", icon: "pen-to-square", link: "dragonfruit" },
      "tomato",
      "strawberry",
    ],
  },
  {
    text: "V2 Documentación",
    icon: "book",
    link: "https://theme-hope.vuejs.press/es/",
  },
]);
