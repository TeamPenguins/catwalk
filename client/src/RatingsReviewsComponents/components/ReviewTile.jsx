import React from 'react';
import Card from 'react-bootstrap/Card';

const ReviewTile = ({ review }) => (
  <Card border="light">
    <Card.Body>
      <Card.Title>{review.summary}</Card.Title>
      <Card.Text>{review.body}</Card.Text>
    </Card.Body>
  </Card>
);

export default ReviewTile;