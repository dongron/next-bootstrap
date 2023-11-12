import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

// Bootstrap
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

import Logo from '../Logo';
import { navButtons, navLinks } from './navbar.config';
import NavbarLink from './NavbarLink';
import NavbarButton from './NavbarButton';

const NavBar = () => {
  const [navBackground, setNavBackground] = useState(false);
  const navRef = useRef<boolean>();
  navRef.current = navBackground;
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 0;
      if (navRef.current !== show) {
        setNavBackground(show);
      }
    };
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);
  // Active class
  const router = useRouter();
  return (
    <Navbar expand="xl" variant="light" className={navBackground ? 'sticky-nav' : 'bg-white'}>
      <Container>
        <Link href="/">
          <a aria-label="Software Recruitment co.">
            <Navbar.Brand>
              <Logo />
            </Navbar.Brand>
          </a>
        </Link>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            {navLinks.map((navLink, idx) => (
              <NavbarLink key={idx} {...navLink} />
            ))}
          </Nav>

          <div className="d-flex gap-10px nav-buttons-container">
          {navButtons.map((navButton, idx) => (
            <NavbarButton key={idx} {...navButton} />
          ))}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
