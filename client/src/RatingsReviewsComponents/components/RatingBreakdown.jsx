import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import IndividualRating from './IndividualRating.jsx';

// recieves reviewsMetaData as props
const RatingBreakdown = (props) => {
  let ratingsList = [];
  for (var i = 5; i > 0; i--) {
    ratingsList.push(<IndividualRating ratings={props.ratings} starNumber={i} />);
  }
  return (
    <Container>
      {ratingsList}
    </Container>
  );
};

export default RatingBreakdown;