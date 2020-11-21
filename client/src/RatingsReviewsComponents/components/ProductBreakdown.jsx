import React, { Component } from 'react';
import axios from 'axios';
import StarRating from '../Utilities/StarRating.jsx';

class ProductBreakdown extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   reviews: [],
    //   productId: null,
    //   reviewsMetaData: {},
    // };
  }

  componentDidMount() {

  }

  componentDidUpdate(prevProps) {

  }

  render() {
    return (
      <div className="row">
        <div className="col-4">
          <StarRating ratings={this.props.reviewMetaData.ratings} />
        </div>
      </div>
    );
  }
}

export default ProductBreakdown;