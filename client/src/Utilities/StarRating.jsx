import React, { Component } from 'react';
import axios from 'axios';
// import { Star } from 'react-bootstrap-icons';
import MetaProductThree from '../dummyData.js';
import CalculateRating from './calculateRating.js';
import StarList from './StarList.jsx';

class StarRating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starRating: '0.00',
    };
  }

  componentDidMount() {
    axios.get(`http://3.21.164.220/reviews/meta/?product_id=${this.props.productId}`)
      .then(metaData =>
        this.setState({starRating: CalculateRating(metaData.data.ratings)})
      )
      .catch(console.log());
  }

  componentDidUpdate(prevProps) {
    if (prevProps.starRating !== this.props.starRating) {
      this.setState({starRating: this.props.starRating});
    }
  }

  render() {
    return (
      <div>
        <StarList rating={this.state.starRating.toString()} />
      </div>
    );
  }
}

export default StarRating;












