import React, { Component, useState } from 'react';
import { Carousel, CarouselItem, Col } from 'react-bootstrap';


const Price = (props) => {

  const [index, setIndex] = useState(0);

  var currPrice = 0;
  if (props.styles.results[props.indexOfSelectedStyle].sale_price === '0') {
    currPrice = '$' + props.styles.results[props.indexOfSelectedStyle].original_price;
  } else {
    currPrice = 'Sale $' + props.styles.results[props.indexOfSelectedStyle].sale_price;
  }

  return (
    <p>{currPrice}</p>
  );
};

export default Price;