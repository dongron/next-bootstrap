import type { FC } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

type LatestJobsTypes = {};

const LatestJobs: FC<LatestJobsTypes> = () => {
  return (
    <section className="section-container--latest-jobs bg-accent space-2 position-relative overflow-hidden">
      <Container className="">
        <Row className="align-items-center">
          <Col md={6} className="align-self-center"></Col>
        </Row>
      </Container>
    </section>
  );
};

export default LatestJobs;
