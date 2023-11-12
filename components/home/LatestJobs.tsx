import type { FC } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import JobCard from './JobCard';
import { jobOffers } from './home.config';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'usehooks-ts';
// @ts-ignore
import ArrowLeftIcon from '../../public/arrow-circle-left.svg';
// @ts-ignore
import ArrowRightIcon from '../../public/arrow-circle-right.svg';

type LatestJobsTypes = {};

const LatestJobs: FC<LatestJobsTypes> = () => {
  const [buttonsActivity, setButtonsActivity] = useState({ left: true, right: true });
  const [cards, setCards] = useState({ visible: [], all: jobOffers });

  const displayLessThan3Cards = useMediaQuery('(min-width : 769px) and (max-width : 992px)');

  const displayLessThan2Cards = useMediaQuery('(max-width : 769px)');

  // simplified for min 4 job offers with id's the same as idx number
  useEffect(() => {
    if (displayLessThan3Cards) {
      setCards((prevState) => ({ ...prevState, visible: jobOffers.slice(0, 2) }));
    } else if (displayLessThan2Cards)
      setCards((prevState) => ({ ...prevState, visible: jobOffers.slice(0, 1) }));
    else setCards((prevState) => ({ ...prevState, visible: jobOffers.slice(0, 3) }));
    setButtonsActivity({ left: false, right: true });
  }, [displayLessThan3Cards, displayLessThan2Cards]);

  const updateButtonsActivity = (prevState) => {
    const isLeftDisabled = prevState.visible[0].id === 0;
    const isRightDisabled =
      prevState.visible[prevState.visible.length - 1].id === prevState.all.length - 1;
    setButtonsActivity((prevStateButtons) => ({ left: !isLeftDisabled, right: !isRightDisabled }));
  };

  const onNextCardClick = (event, wasActive) => {
    if (!wasActive) {
      event.preventDefault();
      return;
    }
    setCards((prevState) => {
      const cardToPushIdx = prevState.visible[prevState.visible.length - 1].id + 1;
      const cardToPush = prevState.all[cardToPushIdx];
      if (cardToPush) {
        prevState.visible.shift();
        prevState.visible.push(cardToPush);
        updateButtonsActivity(prevState);
        return { ...prevState, visible: prevState.visible };
      } else return { ...prevState };
    });
  };

  const onPrevCardClick = (event, wasActive) => {
    if (!wasActive) {
      event.preventDefault();
      return;
    }
    setCards((prevState) => {
      const cardToPrependIdx = prevState.visible[0].id - 1;
      const cardToPrepend = cardToPrependIdx >= 0 ? prevState.all[cardToPrependIdx] : false;
      if (cardToPrepend) {
        prevState.visible.pop();
        prevState.visible.unshift(cardToPrepend);
        updateButtonsActivity(prevState);
        return { ...prevState, visible: prevState.visible };
      } else return { ...prevState };
    });
  };

  return (
    <section className="section-container--latest-jobs bg-accent-bright space-2 position-relative overflow-hidden">
      <Container className="">
        <h3 className="text-center text-accent-dark display-4 text fw-bolder">Latest Jobs</h3>
        <div className="my-30px">
          <Row className="align-items-center">
            {cards.visible.map((jobOffer, idx) => (
              <Col key={idx} lg={4} md={6} sm={12} className="align-self-center flex-nowrap">
                <JobCard details={jobOffer} />
              </Col>
            ))}
          </Row>
        </div>
        <div>
          <ArrowLeftIcon
            fill={'#064ea4'}
            className={`button-control ${buttonsActivity.left ? '' : 'button-control-inactive'}`}
            onClick={(event) => onPrevCardClick(event, buttonsActivity.left)}
          />
          <ArrowRightIcon
            fill={'#064ea4'}
            className={`button-control ${buttonsActivity.right ? '' : 'button-control-inactive'}`}
            onClick={(event) => onNextCardClick(event, buttonsActivity.right)}
          />
        </div>
      </Container>
    </section>
  );
};

export default LatestJobs;
