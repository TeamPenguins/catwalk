import React, { Component, useEffect, useState } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { Star } from 'react-bootstrap-icons';



const Variants = (props) => {

  const [selectedSizeQuantities, setSelectedSizeQuantities] = useState([]);

  // selection is the style_id number of the image that is clicked on
  var selection = props.selectedStyle; // num - defaults to the first style of the camo onesie product


  // the stylesAvail are the possible style options of the selected product
  var stylesAvail = props.styles.results;
  // the styleClicked is the object of all possible skus
  var styleClicked = props.styles.results[0]; // defaults to the first style of the product displayed
  var indOfStyleClicked = 0;

  // compares the currently selected style id to the available styles and updates styleClicked to only contain the data for the style selected
  for (var i = 0; i < stylesAvail.length; i++) {
    if (stylesAvail[i].style_id === Number(selection)) {
      console.log(stylesAvail[i]);
      styleClicked = stylesAvail[i];
      indOfStyleClicked = i;
    }
  }
  props.updateStyleOptions(styleClicked, indOfStyleClicked); // PASS UP INDEX OF SELECTED STYLE

  // skus are the nested objects that contain the size and quantity available for the selected style
  var skus = styleClicked.skus;

  // creates arrays for the size and quantities from the selected style skus
  var sizeArr = [];
  var quantityArr = [];
  var variantArr = [];
  for (const [key, value] of Object.entries(skus)) {
    sizeArr.push(value.size);
    quantityArr.push(value.quantity);
    variantArr.push(value.size, value.quantity);
  }

  const [selectedSize, setSelectedSize] = useState(sizeArr[0]);

  var quantities = [];
  var quantityIndex = sizeArr.indexOf(selectedSize);
  for (var i = 1; i <= quantityArr[quantityIndex]; i++) {
    if (i < 16) { quantities.push(i); }
  }
  console.log('qI: ' + quantityIndex);


  return (
    <form>
      <Row className="my-3">
        {/* map through the available sizes array for the style chosen */}
        <select className="col-6 mr-3 form-control" onChange={e => setSelectedSize(e.target.value)}>
          {sizeArr.map((size, index) => {
            return <option key={index}>{size}</option>;
          })}
        </select>
        {/* map through the available quantities array for the style chosen */}
        <select className="col-3 form-control">
          {quantities.map((quantity, index) => {
            return <option key={index} >{quantity}</option>;
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