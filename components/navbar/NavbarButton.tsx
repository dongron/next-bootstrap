import type { FC } from 'react';
import type { NavbarButton as NavbarButtonType } from '../../types';
import Button from 'react-bootstrap/Button';

type NavbarButtonProps = {} & NavbarButtonType;

const NavbarButton: FC<NavbarButtonProps> = ({ label, variant }) => {
  return <Button variant={variant}>{label}</Button>;
};

export default NavbarButton;
