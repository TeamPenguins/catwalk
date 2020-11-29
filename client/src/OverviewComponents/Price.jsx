import React, { Component, useState } from 'react';
import { Carousel, CarouselItem, Col } from 'react-bootstrap';


const Price = (props) => {

  var currPrice = 0;
  var prePrice = '$';
  if (props.styles.results[props.indexOfSelectedStyle].sale_price === '0') {
    currPrice = props.styles.results[props.indexOfSelectedStyle].original_price;
  } else {
    currPrice = props.styles.results[props.indexOfSelectedStyle].sale_price;
    prePrice = 'Sale $';
  }

  return (
    <p>{prePrice}{currPrice}</p>
  );
};

export default Price;