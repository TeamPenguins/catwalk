import React, { Component } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import Gallery from './Gallery.jsx';
import ProductDetails from './ProductDetails.jsx';
import ProductInfo from './ProductInfo.jsx';

class ProductOverview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Row>
          <Gallery styles={this.props.styles}/>
          <ProductDetails selectedProduct={this.props.selectedProduct} />
        </Row>
        <ProductInfo selectedProduct={this.props.selectedProduct} />
      </Container>
    );
  }
}

export default ProductOverview;