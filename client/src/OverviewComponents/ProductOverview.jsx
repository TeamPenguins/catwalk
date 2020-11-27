import React, { Component } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import ProductDetails from './ProductDetails.jsx';
import ProductInfo from './ProductInfo.jsx';

const ProductOverview = (props) => {

  return (
    <Container>
      <ProductDetails selectedProduct={props.selectedProduct} styles={props.styles} ratings={props.ratings}/>
      <ProductInfo selectedProduct={props.selectedProduct} />
    </Container>
  );

};

export default ProductOverview;