import React, { Component } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';

class ProductDetails extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Col sm={4} className="my-5">
        {/* pull in the star rating component and link to ratings section below */}
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
        </div>
        <div>
          {/* break up into styles component */}
          <h3>STYLE | SELECTED STYLE</h3>
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
    );
  }
}

export default ProductDetails;