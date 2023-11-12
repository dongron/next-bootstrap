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

export type JobOfferSummary = {
  id: number; // only, because it's simplified example, to make it easier to paginate
  languageIcon: string;
  language: string;
  title: string;
  location: string;
  salary: string;
  description: string;
  datePosted: string;
  colorType: string; // todo: change to enum
};

export type JobOffer = {
  detailsLink: string;
  applyLink: string;
  sectors: string[];
  contract: string;
  consultant: {
    image: string;
    name: string;
  };
} & JobOfferSummary;
