import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ReviewsList from './components/ReviewsList.jsx';
import ProductBreakdown from './components/ProductBreakdown.jsx';
import WriteNewReview from './components/WriteNewReview.jsx';
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
          <Row style={{ paddingTop: '10px'}}>
            <Col>
              <Col>
                {props.reviews.length > 0 ? (
                  <Button variant='outline-dark' >MORE REVIEWS</Button>
                ) : null}{' '}
                <WriteNewReview selectedProduct={props.selectedProduct} characteristics={props.reviewMetaData.characteristics}/>
              </Col>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};


export default RatingsAndReviews;

