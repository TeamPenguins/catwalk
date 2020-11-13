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
        <div>
          <ProductBreakdown />
        </div>
        <div>
          <Reviews />
        </div>
      </div>
    );
  }
}
