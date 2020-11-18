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
      <div className="container">
        <div className="row">
          <div className="col">
            <h6 className="text-secondary">Ratings & Reviews</h6>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <h1 className="text-secondary">3.5</h1>
          </div>
          <div className="col-8">
            <ReviewsList reviews={this.state.product} />
            <div className="row">
              <div className="col">
                <button type="button" className="btn btn-outline-secondary">MORE REVIEWS</button>
                <button type="button" className="btn btn-outline-secondary">ADD A REVIEW</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RatingsAndReviews;