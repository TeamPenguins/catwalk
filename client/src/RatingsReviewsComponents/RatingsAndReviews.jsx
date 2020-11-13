import React, { Component } from 'react';
import { ReviewsForProductFive } from '../dummyData.js';

class RatingsAndReviews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: ReviewsForProductFive,
    };
  }

  render() {
    return (
      <div>
        <h1>HELLO!</h1>
      </div>
    );
  }
}

export default RatingsAndReviews;