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
      selectedProduct: {},
      style: {}
    };

    this.fetchRelatedProducts = this.fetchRelatedProducts.bind(this);
  }
  fetchRelatedProducts(id) {
    axios.get(`http://3.21.164.220/products/${id}/related`)
      .then(data => this.setState({relatedProductIds: data.data}))
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
                <RelatedProductCard
                  key={id}
                  productId={id}
                  productChangeMethod={this.props.productChangeMethod}/>
              );
            })
          }
        </CardDeck>
      </Container>
    );
  }
}

export default RelatedItemsAndComparisonList;