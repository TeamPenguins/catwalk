import React, { Component } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';

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
            <li className="list-group-item border-0"><i className="fas fa-check pr-1"></i>GMO and pesticide free</li>
            <li className="list-group-item border-0"><i className="fas fa-check pr-1"></i>Made with 100% Genetic Modification</li>
            <li className="list-group-item border-0"><i className="fas fa-check pr-1"></i>This is made up</li>
            <li className="list-group-item border-0"><i className="fas fa-check pr-1"></i>It doesn't matter</li>
          </ul>
        </Col>
      </Row>
    );
  }
}

export default ProductInfo;