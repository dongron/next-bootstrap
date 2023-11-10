import type { NavbarLink, NavbarButton } from '../../types';
import { NavbarButtonVariant } from '../../types';

export const navLinks: NavbarLink[] = [
  {
    url: '/#1',
    label: 'For jobseekers',
    nestedLinks: [
      { url: '/#11', label: 'For jobseekers 1' },
      { url: '/#12', label: 'For jobseekers 2' },
      { url: '/#13', label: 'For jobseekers 3' },
    ],
  },
  {
    url: '/#2',
    label: 'For clients',
    nestedLinks: [
      { url: '/#21', label: 'For clients 1' },
      { url: '/#22', label: 'For clients 2' },
    ],
  },
  {
    url: '/#3',
    label: 'Sectors',
    nestedLinks: [{ url: '/#31', label: 'Example 1' }],
  },
  {
    url: '/#4',
    label: 'Resources',
    nestedLinks: [{ url: '/#41', label: 'Example 1' }],
  },
];

export const navButtons: NavbarButton[] = [
  {
    label: 'Upload CV',
    variant: NavbarButtonVariant.NavbarPrimary,
    onClick: () => {},
  },
  {
    label: 'Contact us',
    variant: NavbarButtonVariant.NavbarSecondary,
    onClick: () => {},
  },
];
