import React, { Component } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { Star } from 'react-bootstrap-icons';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedStyle: {} };
  }

  render() {
    return (
      <Col sm={4} className="my-5">
        {/* pull in the star rating component and link to ratings section below */}
        <div>
          <div className="my-1">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
          <div className="my-1" >{this.props.selectedProduct.category}</div>
          <h1>{this.props.selectedProduct.name}</h1>
          <p>${this.props.selectedProduct.default_price}</p>
        </div>
        <div>
          {/* break up into styles component */}
          <p><span class="font-weight-bold">STYLE ></span> {this.props.styles.results[0].name}</p>
          {/* onClick -> updated the selectedStyle id in State, change the main image to the 1st img of that style set, add a checkmark icon */}
          <Row className="my-2" style={{ maxWidth: 300 }} >
            {/* map through the styles (results arr) and output an image tag for each */}
            {this.props.styles.results.map((style) => {
              return <img className="rounded-circle p-1" src={style.photos[0].url} style={{ height: 70, width: 70, objectFit: 'cover' }} alt={style.name}/>;
            })}
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
              <Star />
            </Button>
          </Row>
        </form>
      </Col>
    );
  }
}

export default ProductDetails;