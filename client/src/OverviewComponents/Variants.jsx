import React, { Component } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { Star } from 'react-bootstrap-icons';


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




const Variants = (props) => {
  return (
    <form className="">
      <Row className="my-3">
        {/* map through the available sizes for the style chosen */}
        <select className="col-6 mr-3 form-control">
          <option>{props.styles.results[0].skus['1'].size}</option>
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
  );
};

export default Variants;