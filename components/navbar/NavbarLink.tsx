import type { FC } from 'react';
import type { NavbarLink as NavbarLinkType } from '../../types';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { NavDropdown } from 'react-bootstrap';

type NavbarLinkProps = {} & NavbarLinkType;

// todo: recheck variant without nested routes
const NavbarLink: FC<NavbarLinkProps> = ({ label, nestedLinks, url }) => {
  const router = useRouter();

  return nestedLinks ? (
    <NavDropdown title={label} id={`nav-dropdown-${label}`}>
      {nestedLinks.map((nestedLink, idx) => (
        <Link href={nestedLink.url} key={idx}>
          <NavDropdown.Item eventKey={nestedLink.url}>{nestedLink.label}</NavDropdown.Item>
        </Link>
      ))}
    </NavDropdown>
  ) : (
    <Link href={url}>
      <a className={router.pathname == url ? 'nav-link active' : 'nav-link'}>{label}</a>
    </Link>
  );
};

export default NavbarLink;
