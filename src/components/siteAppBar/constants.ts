import { MenuPageProps } from "./types";

export const appTitle = "Escola";

export const menuItems: MenuPageProps[] = [
  {
    order: 1,
    title: "Cursos",
    href: "#",
    subItems: [
      { order: 1, title: "Curso 1", href: "cursos/1" },
      { order: 2, title: "Curso ABC", href: "cursos/abc" },
    ],
  },
  {
    order: 2,
    title: "Quem Somos",
    href: "/quemsomos",
    subItems: [],
  },
  {
    order: 3,
    title: "Dúvidas",
    href: "/duvidas",
    subItems: [],
  },
];
