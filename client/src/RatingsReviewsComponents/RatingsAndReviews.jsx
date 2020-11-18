import React, { Component } from 'react';
import axios from 'axios';
import { ReviewsForProductFive } from '../dummyData.js';
import ReviewsList from './components/ReviewsList.jsx';

class RatingsAndReviews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
    };
  }

  componentDidMount() {
    axios.get(`http://3.21.164.220/reviews/?product_id=${this.props.selectedProduct.id}`)
      .then(data => {
        this.setState({reviews: data.data.results});
      })
      .catch(console.log());
  }

  componentDidUpdate(prevProps) {
    if (prevProps.selectedProduct.id !== this.props.selectedProduct.id ) {
      axios.get(`http://3.21.164.220/reviews/?product_id=${this.props.selectedProduct.id}`)
        .then(data =>
          this.setState({reviews: data.data.results})
        )
        .catch(console.log());
    }
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
            <ReviewsList reviews={this.state.reviews} />
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