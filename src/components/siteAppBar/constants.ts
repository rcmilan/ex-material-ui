import { MenuPageProps } from "./types";

export const menuItems: MenuPageProps[] = [
  {
    order: 1,
    title: "Cursos",
    href: "#",
    subItems: [
      { order: 1, title: "Curso 1", href: "#" },
      { order: 2, title: "Curso ABC", href: "#" },
    ],
  },
  {
    order: 2,
    title: "Quem Somos",
    href: "#",
    subItems: [],
  },
  {
    order: 3,
    title: "Dúvidas",
    href: "#",
    subItems: [],
  },
];
