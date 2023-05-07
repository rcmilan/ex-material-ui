import { MenuPageProps } from "../types";

export interface MobileMenuProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (value: boolean) => void;
  subItemsOpen: string | null;
  handleSubItemsClick: (page: MenuPageProps) => void;
}
