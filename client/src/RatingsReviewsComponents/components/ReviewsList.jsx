import React from 'react';
import ReviewTile from './ReviewTile.jsx';
import Card from 'react-bootstrap/Card';

const ReviewsList = ({ reviews }) => (
  reviews.map(review => (
    <div key={review.review_id}>
      {<ReviewTile review={review} />}
    </div>
  ))
);

export default ReviewsList;

