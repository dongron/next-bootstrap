import type { FC } from 'react';
import { Card } from 'react-bootstrap';
import { JobOfferSummary } from '../../types';
import LanguageBadge from './LanguageBadge';
import Image from 'next/image';
import Button from 'react-bootstrap/Button';
// @ts-ignore
import MapPinIcon from '../../public/map-pin.svg';
// @ts-ignore
import CashIcon from '../../public/cash.svg';

type JobCardProps = { details: JobOfferSummary };

const JobCard: FC<JobCardProps> = ({ details }) => {
  const cardVariation = details.colorType === 'accent' ? 'text-white' : 'text-accent';
  const fillColor = details.colorType === 'accent' ? 'white' : '#064ea4';

  return (
    <Card className="card--jobs" bg={details.colorType}>
      <Card.Body>
        <LanguageBadge
          language={details?.language}
          icon={details?.languageIcon}
          className="mb-20px"
        />
        <h3 className={`card-title mb-20px display-7 fw-bold ${cardVariation}`}>{details.title}</h3>
        <div>
          <div className="d-inline-flex mb-10px">
            <MapPinIcon fill={fillColor} />
            <span className={`mx-10px ${cardVariation}`}>{details.location}</span>
          </div>
        </div>
        <div>
          <div className="d-inline-flex mb-20px">
            <CashIcon fill={fillColor} />
            <span className={`mx-10px ${cardVariation}`}>{details.salary}</span>
          </div>
        </div>
        <p className={`mb-20px ${cardVariation}`}>{details.description}</p>
        <Button
          variant="light"
          className="card__button form-control__button w-full mb-20px text-accent fw-medium"
        >
          View this job
        </Button>
        <div className={`fw-light display-8 ${cardVariation}`}>Posted on {details.datePosted}</div>
      </Card.Body>
    </Card>
  );
};

export default JobCard;
