import React, {useState} from 'react';
import RelatedProductCard from './RelatedProductCard.jsx';
import axios from 'axios';
import {Container, Card, CardDeck} from 'react-bootstrap';
import {PlusCircle} from 'react-bootstrap-icons';

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
  }
  removeFromOutfitList(outfitItemId) {
    var newOutfitList = this.state.outfitListIds.slice();
    newOutfitList.splice(newOutfitList.indexOf(outfitItemId), 1);
    this.setState({outfitListIds: newOutfitList });
  }
  addToOutfitList(selectedProductId) {
    //add selected product id if its not currently in the outfitlist
    if (!this.state.outfitListIds.includes(selectedProductId)) {
      var newOutfitList = this.state.outfitListIds.slice();
      newOutfitList.unshift(selectedProductId);
      this.setState({outfitListIds: newOutfitList });
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
  }

  render() {
    return (
      <Container >
        <CardDeck className="outfit productsList">
          <Card className="productCard">
            <PlusCircle className='addButton' onClick={()=> this.addToOutfitList(this.state.selectedProduct.id)}/>
          </Card>
          {
            // map through the id list of user selected products
            this.state.outfitListIds.map(id => {
              return (
                <RelatedProductCard
                  productId={id}
                  key={`${id}`}
                  productChangeMethod={()=> null}
                  actionButtonMethod={this.removeFromOutfitList}/>
              );
            })
          }
        </CardDeck>
      </Container>
    );
  }
}

export default OutfitItemList;