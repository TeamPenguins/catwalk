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


    this.addToOutfit = this.addToOutfit.bind(this);
  }
  addToOutfit(id) {
    if (!this.state.outfitListIds.includes(id)) {
      var newOutfitList = this.state.outfitListIds.slice();
      this.setState({outfitList: [...newOutfitList, id] });
    }
  }

  //updates the components after selectedProduct has changed in App
  componentDidUpdate(prevProps, prevState) {

  }
  componentDidMount() {

  }

  render() {
    return (
      <Container >
        <CardDeck className="outfit productsList">
          <Card className="productCard">
            <PlusCircle className='add' onClick={()=> this.addToOutfit(this.props.selectedProduct.id)}/>
          </Card>
          {
            this.state.outfitListIds.map(id => {
              return (
                <RelatedProductCard productId={id} productChangeMethod={this.addToOutfit}/>
              );
            })
          }
        </CardDeck>
      </Container>
    );
  }
}

export default OutfitItemList;