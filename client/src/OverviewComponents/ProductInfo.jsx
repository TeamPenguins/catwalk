import React, { Component } from 'react';
import {Container, Row, Col } from 'react-bootstrap';
import { Check } from 'react-bootstrap-icons';


const ProductInfo = (props) => {

  return (
    <Row className="my-4 pb-5">
      <Col sm={8} className="border-right border-dark product-overview">
        <h3>{props.selectedProduct.slogan}</h3>
        <p>{props.selectedProduct.description}</p>
      </Col>

      <Col sm={4} className="product-features-list">
        <ul className="list-group list-group-flush">
          {props.selectedProduct.features.map((currentFeature) => {
            return (
              <li className="list-group-item border-0 mb-n3">
                <Check className="pr-1" size={32} />{currentFeature.value} {currentFeature.feature}
              </li>
            );
          })}
        </ul>
      </Col>
    </Row>
  );
};

export default ProductInfo;