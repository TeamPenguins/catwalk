import React from 'react';
import axios from 'axios';
import ReviewsList from './components/ReviewsList.jsx';
import ProductBreakdown from './components/ProductBreakdown.jsx';
import { Container, Row, Col, Button } from 'react-bootstrap';

const RatingsAndReviews = (props) => {
  return (
    <Container>
      <Row>
        <Col>
          <p>Ratings & Reviews</p>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <ProductBreakdown reviewMetaData={props.reviewMetaData} />
        </Col>
        <Col md={8}>
          <ReviewsList reviews={props.reviews} />
          <Row>
            <Col>
              {props.reviews.length > 0 ? (
                <Button variant='outline-dark' >MORE REVIEWS</Button>
              ) : null}{' '}
              <Button variant='outline-dark'>ADD A REVIEW</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};


export default RatingsAndReviews;


{ /* <div className="container">
<div className="row">
  <div className="col">
    <p>Ratings & Reviews</p>
  </div>
</div>
<div className="row">
  <div className="col-4">
    <ProductBreakdown reviewMetaData={props.reviewMetaData} />
  </div>
  <div className="col-8">
    <ReviewsList reviews={props.reviews} />
    <div className="row">
      <div className="col">
        {props.reviews.length > 0 ? (
          <button type="button" className="btn btn-outline-secondary">MORE REVIEWS</button>
        ) : null}
        <button type="button" className="btn btn-outline-secondary">ADD A REVIEW</button>
      </div>
    </div>
  </div>
</div>
</div> */ }
