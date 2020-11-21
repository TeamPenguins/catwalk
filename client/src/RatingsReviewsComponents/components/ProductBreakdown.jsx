import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import StarRating from '../../Utilities/StarRating.jsx';
import PercentRecommended from './Recommended.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';

// recieves reviewsMetaData as props
const ProductBreakdown = (props) => {
  return (
    <Container>
      <Row>
        <Col>
          <StarRating ratings={props.reviewMetaData.ratings} includeNumber={1}/>
        </Col>
      </Row>
      <Row>
        <Col>
          <PercentRecommended recommended={props.reviewMetaData.recommended} />
        </Col>
      </Row>
      <Row>
        <Col>
          <RatingBreakdown ratings={props.reviewMetaData.ratings} />
        </Col>
      </Row>
    </Container>
  );
};

export default ProductBreakdown;

