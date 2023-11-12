import type { FC } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Image from 'next/image';

type LatestJobsTypes = {};

const logoUrls: { name: string; url: string; height: number }[] = [
  { name: 'microsoft', url: '/microsoft.png', height: 30 },
  { name: 'oracle', url: '/oracle.svg', height: 30 },
  { name: 'atlassian', url: '/atlassian.svg', height: 30 },
  { name: 'cloudflare', url: '/cloudflare.png', height: 30 },
  { name: 'vmware', url: '/vmware.png', height: 30 },
];

const WorkWith: FC<LatestJobsTypes> = () => {
  return (
    <section className="section-container--work-with bg-white space-2 position-relative overflow-hidden">
      <Container className="section-container__container--work-with">
        <p className="w-full text-center">Who we work with</p>
        <Row className="d-flex p-2 mx-auto justify-content-between section-container__container__logos--work-with">
          {logoUrls.map((logo, idx) => (
            <Col
              key={idx}
              className="mx-auto text-center"
              style={{ minHeight: '30px', minWidth: '250px' }}
            >
              <Image
                src={logo.url}
                alt={logo.name}
                width={250}
                height={60}
                style={{ objectFit: 'scale-down' }}
                className="mx-auto"
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default WorkWith;
