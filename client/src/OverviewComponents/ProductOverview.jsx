import React, { Component } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import Gallery from './Gallery.jsx';
import ProductDetails from './ProductDetails.jsx';
import ProductInfo from './ProductInfo.jsx';

class ProductOverview extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Container>
        <Row>
          <Gallery />
          <ProductDetails />
        </Row>
        <ProductInfo />
      </Container>
    );
  }
}

export default ProductOverview;