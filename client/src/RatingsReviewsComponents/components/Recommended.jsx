import React from 'react';
import CalculateRecommended from '../../Utilities/calculateRecommended.js';

const PercentRecommended = (props) => {

  return (
    <div>{CalculateRecommended(props.recommended)} of reviews recommended this product</div>
  );
};

export default PercentRecommended;