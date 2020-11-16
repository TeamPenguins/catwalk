import React, { Component } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';

class ProductOverview extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Container>
        <Row>
          <Col sm={8} className="my-5">
            <img className="rounded-sm" src="https://via.placeholder.com/620"/>
          </Col>
          <Col sm={4} className="my-5">
            <div>
              <div className="my-1">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <div className="my-1" >CATEGORY</div>
              <h1>Expanded Product Name</h1>
              <p>$369</p>
              <p>STYLE | SELECTED STYLE</p>
            </div>
            <div>
              <Row className="my-2">
                <img className="rounded-circle px-1" src="https://via.placeholder.com/70"/>
                <img className="rounded-circle px-1" src="https://via.placeholder.com/70"/>
                <img className="rounded-circle px-1" src="https://via.placeholder.com/70"/>
                <img className="rounded-circle px-1" src="https://via.placeholder.com/70"/>
              </Row>
              <Row className="my-2">
                <img className="rounded-circle px-1" src="https://via.placeholder.com/70"/>
                <img className="rounded-circle px-1" src="https://via.placeholder.com/70"/>
                <img className="rounded-circle px-1" src="https://via.placeholder.com/70"/>
                <img className="rounded-circle px-1" src="https://via.placeholder.com/70"/>
              </Row>
            </div>
            <form className="">
              <Row className="my-3">
                <select className="col-6 mr-3 form-control">
                  <option>SELECT SIZE</option>
                </select>
                <select className="col-2 form-control">
                  <option>1</option>
                </select>
              </Row>
              <Row>
                <Button variant="outline-secondary mr-3">Add To Cart</Button>{' '}
                <Button variant="secondary">
                  <i className="fas fa-star"></i>
                </Button>
              </Row>
            </form>
          </Col>
        </Row>

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
      </Container>
    );
  }
}

export default ProductOverview;