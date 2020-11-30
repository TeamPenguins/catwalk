import React, { Component } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import ProductDetails from './ProductDetails.jsx';
import ProductInfo from './ProductInfo.jsx';
import InteractionContext from '../Utilities/InteractionsContext.js';

const ProductOverview = (props) => {

  return (
    <InteractionContext.Consumer>
      {interactions =>
        <Container onClick={() => {
          interactions(event, 'Product Overview');
        }
        } >
          <ProductDetails selectedProduct={props.selectedProduct} styles={props.styles} ratings={props.ratings}/>
          <ProductInfo selectedProduct={props.selectedProduct} />
        </Container>
      }
    </InteractionContext.Consumer>
  );

};

export default ProductOverview;