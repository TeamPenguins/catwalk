import React, {useState} from 'react';
import {Carousel, Row, Container, CardDeck} from 'react-bootstrap';
import {ChevronDoubleLeft, ChevronDoubleRight} from 'react-bootstrap-icons';
import unique from '../Utilities/unique.js';
import scroll from '../Utilities/scroll.js';
import updateNavigator from '../Utilities/updateNavigator.js';
import RelatedProductCard from './RelatedProductCard.jsx';
import ComparisonModal from './ComparisonModal.jsx';
import axios from 'axios';

class RelatedItemsAndComparisonList extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      relatedProductsIds: [],
      selectedProduct: {},
      comparedProductInfo: {},
      modalView: false,
      leftNavigator: false,
      rightNavigator: true
    };

    this.fetchRelatedProducts = this.fetchRelatedProducts.bind(this);
    this.toggleModalView = this.toggleModalView.bind(this);
    this.updateComparedProductInfo = this.updateComparedProductInfo.bind(this);
    this.updateSelectedProductState = this.updateSelectedProductState.bind(this);
    this.updateCarousel = this.updateCarousel.bind(this);

  }
  //this method shows/hides the product comparison modal
  toggleModalView () {
    this.setState({modalView: !this.state.modalView});
  }
  updateCarousel(direction) {
    var carouselPosition = scroll(direction);
    updateNavigator(carouselPosition, this.state.relatedProductsIds.length);
  }
  //updates state to reflect with what is displayed in overview
  updateSelectedProductState () {
    this.setState({
      selectedProductStyles: this.props.styles,
      selectedProduct: this.props.selectedProduct,
    });
  }
  //updates state with the product features needed for the comparison modal
  updateComparedProductInfo (comparedProductInfo, comparedProductStyleInfo) {
    this.setState({
      comparedProductInfo: comparedProductInfo,
      comparedProductStyleInfo: comparedProductStyleInfo
    });
  }
  fetchRelatedProducts(id) {
    axios.get(`http://3.21.164.220/products/${id}/related`)
      .then(data => this.setState({relatedProductsIds: unique(data.data)}))
      .catch(/*console.error('error at fetchRelatedProducts')*/);
  }
  //updates the components after selectedProduct has changed in App
  componentDidUpdate(prevProps, prevState) {
    if (prevState.relatedProductsIds.length !== this.state.relatedProductsIds.length) {
      this.updateCarousel();
    }
    if (prevProps.selectedProduct.id !== this.props.selectedProduct.id ) {
      this.fetchRelatedProducts(this.props.selectedProduct.id);
      this.updateSelectedProductState();
      this.updateCarousel();
    }
  }
  componentDidMount() {
    this.fetchRelatedProducts(this.props.selectedProduct.id);
    this.updateSelectedProductState();
    this.updateCarousel();
  }

  render() {
    return (
      <Container >
        <h6>RELATED PRODUCTS</h6>
        <Row>
          <ComparisonModal
            comparedProductInfo={this.state.comparedProductInfo}
            selectedProductInfo={this.state.selectedProduct}
            modalViewState={this.state.modalView}
            actionButtonMethod={this.toggleModalView}
          />
          <Container id="RelatedItemsCarousel">
            <button
              id="left-nav"
              className="scroll align-center"
              onClick={() => this.updateCarousel('left')}
            >
              <ChevronDoubleLeft/></button>
            <CardDeck id="related" className="productsList">
              {
                this.state.relatedProductsIds.map(id => {
                  return (
                    <RelatedProductCard productId={id}
                      productChangeMethod={this.props.productChangeMethod}
                      actionButtonMethod={this.toggleModalView}
                      modalViewState={this.state.modalView}
                      updateComparedProductMethod={this.updateComparedProductInfo}/>
                  );
                })
              }
            </CardDeck>
            <button
              id="right-nav"
              className="scroll align-center"
              onClick={() => this.updateCarousel('right')}
            >
              <ChevronDoubleRight/></button>
          </Container>
        </Row>
      </Container>
    );
  }
}

export default RelatedItemsAndComparisonList;