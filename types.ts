export enum NavbarButtonVariant {
  NavbarPrimary = 'nav-primary',
  NavbarSecondary = 'nav-secondary',
}

export type NavbarLink = {
  url: string;
  label: string;
  nestedLinks?: NavbarLink[];
};

export type NavbarButton = {
  label: string;
  variant: NavbarButtonVariant;
  onClick?: (...args: any[]) => void;
};
