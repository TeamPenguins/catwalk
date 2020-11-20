import React, {useState} from 'react';
import RelatedProductCard from './RelatedProductCard.jsx';
import ComparisonModal from './ComparisonModal.jsx';
import axios from 'axios';
import {Carousel, Row, Container, CardDeck} from 'react-bootstrap';

//onslide if index is at max, turn off the button.

class RelatedItemsAndComparisonList extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      relatedProductIds: [],
      selectedProduct: {},
      style: {},
      showModal: false,
      comparedProductInfo: {},
    };

    this.fetchRelatedProducts = this.fetchRelatedProducts.bind(this);
    this.toggleModalView = this.toggleModalView.bind(this);

  }
  toggleModalView () {
    this.setState({showModal: !this.state.showModal});
  }
  updateComparedProductInfo (newComparedProductInfo) {
    this.setState({comparedProductInfo: newComparedProductInfo});
  }
  fetchRelatedProducts(id) {
    axios.get(`http://3.21.164.220/products/${id}/related`)
      .then(data => this.setState({relatedProductIds: data.data}))
      .catch(/*console.error('error at fetchRelatedProducts')*/);
  }
  //updates the components after selectedProduct has changed in App
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.selectedProduct.id !== this.props.selectedProduct.id ) {
      this.fetchRelatedProducts(this.props.selectedProduct.id);
    }
  }
  componentDidMount() {
    this.fetchRelatedProducts(this.props.selectedProduct.id);
  }

  render() {
    return (
      <Container>
        <ComparisonModal
          modalViewState={this.state.showModal}
          comparedProductInfo={this.state.comparedProductInfo}
          actionButtonMethod={this.toggleModalView}
        />
        <CardDeck className="related productsList">
          {
            this.state.relatedProductIds.map(id => {
              return (
                <RelatedProductCard productId={id}
                  productChangeMethod={this.props.productChangeMethod}
                  actionButtonMethod={this.toggleModalView}
                  modalViewState={this.state.showModal}/>
              );
            })
          }
        </CardDeck>
      </Container>

    );
  }
}

export default RelatedItemsAndComparisonList;