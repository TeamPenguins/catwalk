import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
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
    this.setState({starRating: CalculateRating(metaData.data.ratings)});
  }

  componentDidUpdate(prevProps) {
    if (prevProps.productId !== this.props.productId) {
      this.setState({starRating: CalculateRating(this.props.ratings)});
    }
  }

  render() {
    return (
      <StarList rating={this.state.starRating} />
    );
  }
}

export default StarRating;












