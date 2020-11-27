import React, {useState} from 'react';
import RelatedProductCard from './RelatedProductCard.jsx';
import axios from 'axios';
import {Container, Card, CardDeck, Row} from 'react-bootstrap';
import {PlusCircle} from 'react-bootstrap-icons';
import unique from '../Utilities/unique.js';

//onslide if index is at max, turn off the button.

class OutfitItemList extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      selectedProduct: {},
      outfitListIds: []
    };
    this.addToOutfitList = this.addToOutfitList.bind(this);
    this.updateSelectedProduct = this.updateSelectedProduct.bind(this);
    this.removeFromOutfitList = this.removeFromOutfitList.bind(this);
    this.updateOutFitList = this.updateOutFitList.bind(this);
    this.checkForExistingOutfitList = this.checkForExistingOutfitList.bind(this);
  }
  checkForExistingOutfitList() {
    var existingOutfitlist = localStorage.getItem('OutfitListIds');
    return existingOutfitlist ? existingOutfitlist.split(',') : [];
  }
  updateOutFitList(newOutfitList) {
    newOutfitList = unique(newOutfitList);
    localStorage.setItem('OutfitListIds', newOutfitList);
    this.setState({outfitListIds: newOutfitList});
  }
  removeFromOutfitList(outfitItemId) {
    var newOutfitList = this.state.outfitListIds.slice();
    //item ids are stored as strings, so I needed to convert the id
    var itemToRemove = newOutfitList.indexOf(String(outfitItemId));
    newOutfitList.splice(itemToRemove, 1);
    this.updateOutFitList(newOutfitList);
  }
  addToOutfitList(selectedProductId) {
    //add selected product id if its not currently in the outfitlist
    if (!this.state.outfitListIds.includes(selectedProductId)) {
      var newOutfitList = this.state.outfitListIds.slice();
      newOutfitList.unshift(selectedProductId);
      this.updateOutFitList(newOutfitList);
    }
  }
  updateSelectedProduct() {
    this.setState({selectedProduct: this.props.selectedProduct});
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.selectedProduct.id !== this.props.selectedProduct.id ) {
      this.updateSelectedProduct();
    }
  }
  componentDidMount() {
    this.updateSelectedProduct();
    this.setState({outfitListIds: this.checkForExistingOutfitList()});
  }

  render() {
    return (
      <Container>
        <h6>YOUR OUTFIT</h6>
        <Row >
          <CardDeck className="outfit productsList">
            <Container className="card-container">
              <Card className="productCard">
                <Card.Body>
                  <PlusCircle className='addButton' onClick={()=> this.addToOutfitList(this.state.selectedProduct.id)}/>
                </Card.Body>
              </Card>
            </Container>
            {
              // map through the id list of user selected products
              this.state.outfitListIds.map(id => {
                return (
                  <RelatedProductCard

                    listType={'outfit'}
                    productId={id}
                    key={`${id}`}
                    productChangeMethod={this.props.productChangeMethod}
                    actionButtonMethod={this.removeFromOutfitList}/>
                );
              })
            }
          </CardDeck>
        </Row>
      </Container>
    );
  }
}

export default OutfitItemList;