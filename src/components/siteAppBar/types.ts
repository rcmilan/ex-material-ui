export interface MenuSubPageProps {
  order: number;
  title: string;
  href: string;
}

export interface MenuPageProps {
  order: number;
  title: string;
  href: string;
  subItems: MenuSubPageProps[];
}
