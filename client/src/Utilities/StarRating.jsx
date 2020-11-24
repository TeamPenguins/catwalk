import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
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
    this.setState({starRating: CalculateRating(this.props.ratings)});
  }

  componentDidUpdate(prevProps) {
    if (prevProps.ratings !== this.props.ratings) {
      this.setState({starRating: CalculateRating(this.props.ratings)});
    }
  }

  render() {
    return (
      <Container>
        <Row>
          {this.props.includeNumber === 1 ? (
            <h1>{(this.state.starRating).slice(0, this.state.starRating.length - 1)}</h1>
          ) : null}
          <StarList rating={this.state.starRating} />
        </Row>
      </Container>
    );
  }
}

export default StarRating;












