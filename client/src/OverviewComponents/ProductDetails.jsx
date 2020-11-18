import React, { Component } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { Star } from 'react-bootstrap-icons';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedStyle: '' };
    this.onThumbnailClick = this.onThumbnailClick.bind(this);
  }

  // var skus = styleData.results[0].skus;


  // skus() {
  //   return styleData.results[0].skus;
  // }


  // var sizeArr = [];
  // var quantityArr = [];
  // for (const [key, value] of Object.entries(skus)) {
  //   console.log(`${key}: ${value}`);
  //   sizeArr.push(value.size);
  //   quantityArr.push(value.quantity);
  // }
  // console.log(sizeArr);
  // console.log(quantityArr);

  onThumbnailClick(event) {
    this.setState({
      selectedStyle: event.target.id
    });
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

          <p className="my-1" >{this.props.selectedProduct.category}</p>
          <h1>{this.props.selectedProduct.name}</h1>
          <p>${this.props.selectedProduct.default_price}</p>
        </div>

        {/* break up into styles component */}
        <div>
          {/* onClick -> updated the selectedStyle id in State, change the main image to the 1st img of that style set, add a checkmark icon */}
          <p><span class="font-weight-bold">STYLE > </span> {this.props.styles.results[0].name}</p>
          <Row className="my-2" style={{ maxWidth: 300 }} >
            {/* map through the styles (results arr) and output an image tag for each */}
            {this.props.styles.results.map((style, index) => {
              return <img onClick={this.onThumbnailClick} className="rounded-circle p-1" id={style.style_id} src={style.photos[0].thumbnail_url} style={{ height: 70, width: 70, objectFit: 'cover' }} alt={style.name}/>;
            })}
          </Row>
        </div>

        <form className="">
          <Row className="my-3">
            {/* map through the available sizes for the style chosen */}
            <select className="col-6 mr-3 form-control">
              {/* <option>{this.props.styles.results[0].skus['1'].size}</option> */}
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