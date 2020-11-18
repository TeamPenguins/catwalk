import React from 'react';
import Card from 'react-bootstrap/Card';

const ReviewTile = ({ review }) => (
  <Card border="light" key={review.review_id}>
    <Card.Body>
      <Card.Title>{review.summary}</Card.Title>
      <Card.Text>{review.body}</Card.Text>
    </Card.Body>
  </Card>
);

export default ReviewTile;