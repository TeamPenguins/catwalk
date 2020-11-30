import React from 'react';
import { Container } from 'react-bootstrap';
import RatingBreakdown from './RatingBreakdown.jsx';
import IndividualCharacteristic from './IndividualCharacteristic.jsx';

// chars as props. will be an object with keys of each char...
const ProductCharacteristics = (props) => {
  let productCharacteristics = [];
  Object.entries(props.characteristics).forEach(([ characteristic, details ]) => {
    productCharacteristics.push(<IndividualCharacteristic characteristic={characteristic} value={details.value} key={details.id}/>
    );
  });
  return (
    productCharacteristics
  );
};

export default ProductCharacteristics;