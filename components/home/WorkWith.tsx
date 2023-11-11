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
        <div className="d-flex p-2 justify-content-between section-container__container__logos--work-with">
          {logoUrls.map((logo, idx) => (
            <div key={idx} style={{ height: '30px' }}>
              <Image
                src={logo.url}
                alt={logo.name}
                width={250}
                height={60}
                objectFit="scale-down"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WorkWith;
