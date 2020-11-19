import React, { Component } from 'react';
import axios from 'axios';
import { ReviewsForProductFive } from '../dummyData.js';
import ReviewsList from './components/ReviewsList.jsx';
import StarRating from '../Utilities/StarRating.jsx';

class RatingsAndReviews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      numberRating: 0,
    };
    this.ratingChange = this.ratingChange.bind(this);
  }

  componentDidMount() {
    // Move axios request outside of componentDidMount for readibility
    axios.get(`http://3.21.164.220/reviews/?product_id=${this.props.productId}`)
      .then(data => { // Going from data to reviewsList to be more descriptive about what we are getting back from the get request
        this.setState({reviews: data.data.results});
      })
      .catch(console.log());
  }

  componentDidUpdate(prevProps) {
    if (prevProps.productId !== this.props.productId ) {
      axios.get(`http://3.21.164.220/reviews/?product_id=${this.props.productId}`)
        .then(data =>
          this.setState({reviews: data.data.results})
        )
        .catch(console.log());
    }
  }

  ratingChange(rating) {
    this.setState({rating: rating});
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
            <StarRating productId={this.props.productId} />
          </div>
          <div className="col-8">
            <ReviewsList reviews={this.state.reviews} />
            <div className="row">
              <div className="col">
                {this.state.reviews.length > 0 ? (
                  <button type="button" className="btn btn-outline-secondary">MORE REVIEWS</button>
                ) : null}
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