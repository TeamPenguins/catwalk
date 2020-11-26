import React, { useState } from 'react';
import axios from 'axios';
import { Button, Badge } from 'react-bootstrap';

const Helpfulness = ({ helpfulness }) => {
  const [yesCount, setCount] = useState(helpfulness);

  return (
    <div> <span style={{fontSize: 'smaller', display: 'inline-block'}}>Helpful?</span>{'  '}
      <Button onClick={() => setCount(yesCount + 1)}size='sm' variant='link' style={{fontSize: 'smaller', border: '0'}}>
        <u>{'Yes'}</u>{' '}
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

/* NO button
      <Button size='sm' variant='outline-dark' style={{border: '0'}} >
        <u>{'No'}</u>{' '}
        <Badge pill variant='light'>0</Badge>
        <span className="sr-only">{'0 people found this review helpful'}</span>
      </Button>{' '}
*/