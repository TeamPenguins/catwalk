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
          <h3>Product Slogan, Pithy Description Or Catchphrase</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc leo diam, congue at venenatis et, cursus et elit. Duis lacinia neque et elit porta posuere. Nullam viverra eros sed tortor placerat, id ultrices tortor lacinia. Donec venenatis lectus eu bibendum gravida.</p>
          <p>Mauris ut arcu viverra, porttitor purus nec, eleifend erat. Praesent nibh massa, condimentum in libero posuere, finibus posuere lacus. Morbi ullamcorper tempus tellus, vitae auctor mi vestibulum feugiat.
          </p>
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