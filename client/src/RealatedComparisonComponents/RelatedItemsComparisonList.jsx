import React, {useState} from 'react';
import RelatedProductCard from './RelatedProductCard.jsx';
import axios from 'axios';
import {Carousel, Row, Container, CardDeck} from 'react-bootstrap';

//onslide if index is at max, turn off the button.

class RelatedItemsAndComparisonList extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      relatedProductIds: [],
      firstRelatedProduct: null,
      selectedProduct: {},
      style: {}
    };

    this.fetchRelatedProducts = this.fetchRelatedProducts.bind(this);
  }
  fetchRelatedProducts(id) {
    axios.get(`http://3.21.164.220/products/${id}/related`)
      .then(data => this.setState({relatedProductIds: data.data}))
      .then(data => this.setState({firstRelatedProduct: data.data[0]}))
      .catch(/*console.error('error at fetchRelatedProducts')*/);
  }
  //updates the components after selectedProduct has changed in App
  componentDidUpdate(prevProps) {
    if (prevProps.selectedProduct.id !== this.props.selectedProduct.id ) {
      this.fetchRelatedProducts(this.props.selectedProduct.id);
    }
  }
  componentDidMount() {
    this.fetchRelatedProducts(this.props.selectedProduct.id);
  }

  render() {
    return (
      <Container height="100px" style={{ width: '100%' }} className="relatedProductsList">
        <CardDeck height="100px" overflow="scroll">
          {
            this.state.relatedProductIds.map(id => {
              return (
                <RelatedProductCard productId={id} productChangeMethod={this.props.productChangeMethod}/>
              );
            })
          }
        </CardDeck>
        <h6 className="test">Your Outfit</h6>
        <ul className="outfitList">
          <li>Add current item to outfit</li>
          <li>outfit item one</li>
          <li>outfit item two</li>
          <li>outfit item three</li>
        </ul>
      </Container>
    );
  }
}

export default RelatedItemsAndComparisonList;