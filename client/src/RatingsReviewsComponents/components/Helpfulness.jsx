import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Badge, Spinner } from 'react-bootstrap';
import { UpdateHelpfulnessCount } from '../../Utilities/axiosHelpers.js';

const Helpfulness = ({ helpfulness, reviewId }) => {
  const [yesCount, setCount] = useState(helpfulness);

  const [isLoading, setLoading] = useState(false);
  // Updates yesCount in state and makes api call to update helpfullness count as well

  useEffect(() => {
    if (isLoading) {
      UpdateHelpfulnessCount(reviewId).then(() => {
        setLoading(false);
        setCount(yesCount + 1);
      });
    }
  }, [isLoading]);

  const handleClick = () => setLoading(true);

  return (
    <div> <span style={{fontSize: 'smaller', display: 'inline-block'}}>Helpful?</span>{'  '}
      <Button onClick={(!isLoading ? handleClick : null)}size='sm' variant='link' style={{fontSize: 'smaller', border: '0'}}>{isLoading ? <Spinner
        as="span"
        animation="border"
        variant="warning"
        size="sm"
        role="status"
        aria-hidden="true"
      /> : <u>{'Yes'}</u>}{' '}
      </Button>
      <Badge pill variant='secondary'>{yesCount}</Badge>
      <span className="sr-only">{`${yesCount} people found this review helpful`}</span>{' | '}
      <Button size='sm' variant='outline-danger' style={{fontSize: 'smaller', border: '0'}} >
        <u>{'Report'}</u>
        <span className="sr-only">{'0 people found this review helpful'}</span>
      </Button>
    </div>
  );
};

export default Helpfulness;

// !isLoading ? handleClick : null

/* NO button
      <Button size='sm' variant='outline-dark' style={{border: '0'}} >
        <u>{'No'}</u>{' '}
        <Badge pill variant='light'>0</Badge>
        <span className="sr-only">{'0 people found this review helpful'}</span>
      </Button>{' '}
*/