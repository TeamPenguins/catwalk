import React, { Component } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import Gallery from './Gallery.jsx';
import ProductDetails from './ProductDetails.jsx';
import ProductInfo from './ProductInfo.jsx';

const ProductOverview = (props) => {

  return (
    <Container>
      <Row>
        <Gallery styles={props.styles}/>
        <ProductDetails selectedProduct={props.selectedProduct} styles={props.styles} />
      </Row>
      <ProductInfo selectedProduct={props.selectedProduct} />
    </Container>
  );

};

export default ProductOverview;