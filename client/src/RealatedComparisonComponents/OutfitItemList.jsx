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
    //if outfitListIds does not have the new oriduct id, add it to the front of the list.
    if (!this.state.outfitListIds.includes(id)) {  //specifiy  that it sis product id
      var newOutfitList = this.state.outfitListIds.slice();
      newOutfitList.unshift(id);
      this.setState({outfitListIds: newOutfitList });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.selectedProduct.id !== this.props.selectedProduct.id ) {
      this.setState({selectedProduct: this.props.selectedProduct});
    }
  }
  componentDidMount() {
    this.setState({selectedProduct: this.props.selectedProduct});
  }

  render() {
    return (
      <Container >
        <CardDeck className="outfit productsList">
          <Card className="productCard">
            <PlusCircle className='add' onClick={()=> this.addToOutfit(this.state.selectedProduct.id)}/>
          </Card>
          {
            // //specify witch id
            this.state.outfitListIds.map(id => {
              return (
                <RelatedProductCard productId={id}
                  key={`${id}`}
                  productChangeMethod={this.addToOutfit}/>
              );
            })
          }
        </CardDeck>
      </Container>
    );
  }
}

export default OutfitItemList;