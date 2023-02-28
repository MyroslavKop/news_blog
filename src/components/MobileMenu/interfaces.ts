export interface NavigationLinks {
  id: number;
  name: string;
  href: string;
  isAuth?: boolean;
}

export interface MobileMenuProps {
  open: boolean;
  openMenu: () => void;
  closeMenu: () => void;
}
