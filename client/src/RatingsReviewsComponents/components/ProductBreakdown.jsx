import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import StarRating from '../../Utilities/StarRating.jsx';
import PercentRecommended from './Recommended.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';
import ProductCharacteristics from './ProductCharacteristics.jsx';

// recieves reviewsMetaData as props
const ProductBreakdown = (props) => {
  let style = {padding: '0'};
  let ratingStyle = {'font-size': 'small'};
  return (
    <Container style={style}>
      <Row>
        <Col>
          <Col>
            <StarRating ratings={props.reviewMetaData.ratings} includeNumber={1}/>
          </Col>
        </Col>
      </Row>
      <p></p>
      <Row>
        <Col style={ratingStyle}>
          <PercentRecommended recommended={props.reviewMetaData.recommended} />
        </Col>
      </Row>
      <p></p>
      <Row>
        <Col>
          <RatingBreakdown ratings={props.reviewMetaData.ratings} />
        </Col>
      </Row>
      <br />
      <Row>
        <ProductCharacteristics characteristics={props.reviewMetaData.characteristics} />
      </Row>
    </Container>
  );
};

export default ProductBreakdown;

