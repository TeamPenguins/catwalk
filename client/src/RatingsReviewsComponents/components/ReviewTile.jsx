import React from 'react';
import Card from 'react-bootstrap/Card';
import StarList from '../../Utilities/StarList.jsx';
import { Row, Col } from 'react-bootstrap';

const ReviewTile = ({ review }) => (
  <Card border="light" key={review.review_id}>
    <Card.Body>
      <StarList rating={review.rating + '.00'} style={{ textAlign: 'left' }}/>
      <Card.Text style={{ textAlign: 'right' }}>{`${review.reviewer_name}, ${review.date.slice(0, review.date.indexOf('T'))}`}</Card.Text>
      <Card.Title>
        {review.summary}
      </Card.Title>
      <Card.Text>{review.body}</Card.Text>
    </Card.Body>
  </Card>
);

export default ReviewTile;