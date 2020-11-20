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
      selectedProductStyles: {},
      showModal: false,
      comparedProductInfo: {},
      comparedProductStyleInfo: {},
    };

    this.fetchRelatedProducts = this.fetchRelatedProducts.bind(this);
    this.toggleModalView = this.toggleModalView.bind(this);
    this.updateComparedProductInfo = this.updateComparedProductInfo.bind(this);
    this.updateSelectedProductState = this.updateSelectedProductState.bind(this);

  }
  updateSelectedProductState () {
    this.setState({
      selectedProductStyles: this.props.styles,
      selectedProduct: this.props.selectedProduct,
    });
  }
  toggleModalView () {
    this.setState({showModal: !this.state.showModal});
  }
  updateComparedProductInfo (comparedProductInfo, comparedProductStyleInfo) {
    this.setState({
      comparedProductInfo: comparedProductInfo,
      comparedProductStyleInfo: comparedProductStyleInfo
    });
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
      this.updateSelectedProductState();
    }
  }
  componentDidMount() {
    this.fetchRelatedProducts(this.props.selectedProduct.id);
    this.updateSelectedProductState();
  }

  render() {
    return (
      <Container>
        <ComparisonModal
          comparedProductInfo={this.state.comparedProductInfo}
          comparedProductStyleInfo={this.state.comparedProductStyleInfo}
          selectedProductInfo={this.state.selectedProduct}
          modalViewState={this.state.showModal}
          actionButtonMethod={this.toggleModalView}
        />
        <CardDeck className="related productsList">
          {
            this.state.relatedProductIds.map(id => {
              return (
                <RelatedProductCard productId={id}
                  productChangeMethod={this.props.productChangeMethod}
                  actionButtonMethod={this.toggleModalView}
                  modalViewState={this.state.showModal}
                  updateComparedProductMethod={this.updateComparedProductInfo}/>
              );
            })
          }
        </CardDeck>
      </Container>

    );
  }
}

export default RelatedItemsAndComparisonList;