import React, { Component } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { Star } from 'react-bootstrap-icons';



const Variants = (props) => {

  const updateStylesAvail = () => {
    var selection = props.selectedStyle || 1;
    console.log(selection);

    var stylesAvail = props.styles.results;
    for (var i = 0; i < stylesAvail.length; i++) {
      if (stylesAvail[i].style_id === selection) {
        console.log(i);
      }
    }
  };


  var skus = props.styles.results[0].skus;

  var sizeArr = [];
  var quantityArr = [];
  var variantArr = [];
  for (const [key, value] of Object.entries(skus)) {
    sizeArr.push(value.size);
    quantityArr.push(value.quantity);
    variantArr.push(value.size, value.quantity);
  }


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