import React, { Component } from 'react';
import {Container, Row, Col } from 'react-bootstrap';
import { Check } from 'react-bootstrap-icons';

class ProductInfo extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Row className="my-4">
        <Col sm={8} className="border-right border-dark product-overview">
          <h3>{this.props.selectedProduct.slogan}</h3>
          <p>{this.props.selectedProduct.description}</p>
        </Col>
        <Col sm={4} className="product-features-list">
          <ul className="list-group list-group-flush">
            <li className="list-group-item border-0"><Check className="pr-1" size={32} />GMO and pesticide free</li>
            <li className="list-group-item border-0"><Check className="pr-1" size={32} />Made with 100% Genetic Modification</li>
            <li className="list-group-item border-0"><Check className="pr-1" size={32} />This is made up</li>
            <li className="list-group-item border-0"><Check className="pr-1" size={32} />It doesn't matter</li>
          </ul>
        </Col>
      </Row>
    );
  }
}

export default ProductInfo;