import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CalculateRating from './calculateRating.js';
import StarList from './StarList.jsx';

const StarRating = (props) => {
  const averageRating = CalculateRating(props.ratings);
  return (
    <Row>
      {props.includeNumber === 1 ? (
        <h1>{(averageRating).slice(0, averageRating)}</h1>
      ) : null}
      <Col className='productBreakdownStars'>
        <StarList rating={averageRating} />
      </Col>
    </Row>
  );
};


export default StarRating;











