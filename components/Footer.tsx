import Link from 'next/link';
import Image from 'next/image';
import { Container, Col, Row, Form, Button } from 'react-bootstrap';
import { Facebook, Instagram, Twitter } from './Icons';
// @ts-ignore
import FbIcon from '../public/icons/facebook.svg';
// @ts-ignore
import LIIcon from '../public/icons/linkedin.svg';
// @ts-ignore
import TwitterIcon from '../public/icons/twitter.svg';
// @ts-ignore
import InstagramIcon from '../public/icons/instagram.svg';

type FooterLinkType = {
  label: string;
  url: string;
};

const exploreLinks: FooterLinkType[] = [
  { label: 'Homepage', url: '#' },
  { label: 'For jobseekers', url: '#' },
  { label: 'For clients', url: '#' },
  { label: 'Our sectors', url: '#' },
  { label: 'Resources', url: '#' },
  { label: 'Contact us', url: '#' },
];

const sectorsLinks: FooterLinkType[] = [
  { label: 'Software engineering', url: '#' },
  { label: 'DevOps', url: '#' },
  { label: 'Cloud', url: '#' },
  { label: 'Infrastructure', url: '#' },
  { label: 'Testing', url: '#' },
  { label: 'Security', url: '#' },
];
const servicesLinks: FooterLinkType[] = [
  { label: 'Nav item', url: '#' },
  { label: 'Nav item', url: '#' },
  { label: 'Nav item', url: '#' },
  { label: 'Nav item', url: '#' },
  { label: 'Nav item', url: '#' },
];

const Footer = () => {
  return (
    <footer className="space-2 bg-accent text-white">
      <Container>
        <Row>
          <Col md={3}>
            <h2 className="fw-bold display-9 mb-30px">Software Recruitment co.</h2>
            <div className="d-flex justify-content-between">
              <ul className="list-unstyled d-flex gap-20px">
                <li className="">
                  <a className="link-dark" href="#" aria-label="LinkedIn">
                    <LIIcon fill="white" />
                  </a>
                </li>
                <li className="">
                  <a className="link-dark" href="#" aria-label="Facebook">
                    <FbIcon fill="white" />
                  </a>
                </li>
                <li className="">
                  <a className="link-dark" href="#" aria-label="Instagram">
                    <InstagramIcon fill="white" />
                  </a>
                </li>
                <li className="">
                  <a className="link-dark" href="#" aria-label="Twitter">
                    <TwitterIcon fill="white" />
                  </a>
                </li>
              </ul>
            </div>
          </Col>

          <Col md={3}>
            <h2 className="fw-bold display-6 mb-30px">Explore</h2>
            <ul className="nav flex-column">
              {exploreLinks.map((link, idx) => (
                <li className="nav-item mb-20px" key={idx}>
                  <Link href={link.url}>
                    <a className="nav-link p-0 fw-normal display-8 text-white">{link.label}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </Col>

          <Col md={3}>
            <h2 className="fw-bold display-6 mb-30px">Sectors</h2>
            <ul className="nav flex-column">
              {sectorsLinks.map((link, idx) => (
                <li className="nav-item mb-20px" key={idx}>
                  <Link href={link.url}>
                    <a className="nav-link p-0 fw-normal display-8 text-white">{link.label}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </Col>

          <Col md={3}>
            <h2 className="fw-bold display-6 mb-30px">Services</h2>
            <ul className="nav flex-column">
              {servicesLinks.map((link, idx) => (
                <li className="nav-item mb-20px" key={idx}>
                  <Link href={link.url}>
                    <a className="nav-link p-0 fw-normal display-8 text-white">{link.label}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
