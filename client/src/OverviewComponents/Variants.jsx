import React, { Component } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { Star } from 'react-bootstrap-icons';


// var skus = props.styles.results[0].skus;

// var sizeArr = [];
// var quantityArr = [];
// for (const [key, value] of Object.entries(skus)) {
//   console.log(`${key}: ${value}`);
//   sizeArr.push(value.size);
//   quantityArr.push(value.quantity);
// }
// console.log(sizeArr);
// console.log(quantityArr);




const Variants = (props) => {
  var skus = props.styles.results[0].skus;
  console.log(skus);

  var sizeArr = [];
  var quantityArr = [];
  var variantArr = [];
  for (const [key, value] of Object.entries(skus)) {
    console.log(`${key}: ${value}`);
    sizeArr.push(value.size);
    quantityArr.push(value.quantity);
    variantArr.push(value.size, value.quantity);
  }
  console.log(sizeArr);
  console.log(quantityArr);


  return (
    <form className="">
      <Row className="my-3">
        {/* map through the available sizes for the style chosen */}
        <select className="col-6 mr-3 form-control">
          {sizeArr.map((size) => {
            return <option>{size}</option>;
          })}
        </select>
        {/* map through the available quantities for the style chosen */}
        <select className="col-3 form-control">
          {quantityArr.map((quantity) => {
            return <option>{quantity}</option>;
          })}
        </select>
      </Row>
      <Row>
        <Button variant="outline-secondary mr-3">Add To Cart</Button>{' '}
        <Button variant="secondary">
          <Star />
        </Button>
      </Row>
    </form>
  );
};

export default Variants;