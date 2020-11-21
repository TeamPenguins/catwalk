import React from 'react';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import PercentOfTotal from '../../Utilities/percentOfTotal.js';

// recieves reviewsMetaData as props
const IndividualRating = (props) => {
  const percentOfTotal = PercentOfTotal(props.ratings, props.starNumber);
  return (
    <Row>
      <Col>
        {props.starNumber} stars
      </Col>
      <Col>
        <ProgressBar variant="success" now={percentOfTotal} />
      </Col>
      <Col>
        {'(' + (props.ratings[props.starNumber] || 0) + ')'}
      </Col>
    </Row>
  );
};

export default IndividualRating;