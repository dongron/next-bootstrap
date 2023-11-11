import Link from 'next/link';
import Image from 'next/image';

import { Col, Container, Row } from 'react-bootstrap';

const Hero = () => {
  return (
    <section className="section-container bg-accent space-2 position-relative overflow-hidden">
      <div className="hero-circle-top" />
      <div className="hero-circle-bottom" />
      <Container className="">
        <Row className="align-items-center">
          <Col md={6} className="align-self-center">
            <p className="text-white">Software Recruitment Specialists</p>
            <h1 className="text-white">Elevate your career</h1>
            <Link href="#!">
              <a className="btn btn-lg btn-primary px-4">Contact</a>
            </Link>
          </Col>
          <Col md={6} className="align-self-center">
            <Image
              src="/hero-image.jpeg"
              alt="Hero image"
              objectFit="cover"
              objectPosition="right"
              width={507}
              height={480}
              blurDataURL="/img-placeholder.svg"
              priority
              placeholder="blur"
              className="radius-30px hero-image"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
