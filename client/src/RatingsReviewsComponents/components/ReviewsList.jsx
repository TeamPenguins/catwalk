import React from 'react';
import ReviewTile from './ReviewTile.jsx';
import Card from 'react-bootstrap/Card';

const ReviewsList = ({ reviews }) => (
  reviews.map(review => (
    <div>
      {<ReviewTile review={review} />}
      <br />
    </div>
  ))
);

export default ReviewsList;

