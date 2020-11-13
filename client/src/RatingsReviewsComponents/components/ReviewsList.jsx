import React from 'react';
import ReviewTile from './ReviewTile.jsx';

const ReviewsList = ({ reviews }) => (
  reviews.map(review => {
    <div>
      {<ReviewTile review={review} />}
      <br />
    </div>;
  })
);

export default ReviewsList;