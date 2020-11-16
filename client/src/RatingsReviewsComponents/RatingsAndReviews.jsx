import React, { Component } from 'react';
import { ReviewsForProductFive } from '../dummyData.js';
import ReviewsList from './components/ReviewsList.jsx';

class RatingsAndReviews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: ReviewsForProductFive.results,
    };
  }

  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col">
            <h6 class="text-secondary">Ratings & Reviews</h6>
          </div>
        </div>
        <div class="row">
          <div class="col-4">
            <h1 class="text-secondary">3.5</h1>
          </div>
          <div class="col-8">
            <ReviewsList reviews={this.state.product} />
            <div class="row">
              <div class="col">
                <button type="button" class="btn btn-outline-secondary">MORE REVIEWS</button>
                <button type="button" class="btn btn-outline-secondary">ADD A REVIEW</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RatingsAndReviews;