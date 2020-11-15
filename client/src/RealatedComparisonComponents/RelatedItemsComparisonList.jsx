import React, {useState} from 'react';
import RelatedProductCard from './RelatedProductCard.jsx';
import axios from 'axios';

class RelatedItemsAndComparisonList extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      relatedProductIds: [],
      selectedProduct: this.props.selectedProduct.id
    };
    this.fetchRelatedProducts = this.fetchRelatedProducts.bind(this);
  }
  fetchRelatedProducts(id) {
    axios.get(`http://3.21.164.220/products/${this.state.selectedProduct}/related`)
      .then(data => this.setState({relatedProductIds: data.data}))
      .catch(console.error('error at fetchRelatedProducts'));
  }
  componentDidMount() {
    this.fetchRelatedProducts();
  }
  render() {
    return (

      <div>
        <div className="relatedProductsList">
          <div>related Items</div>
          {
            this.state.relatedProductIds.map(id => {
              return (
                <RelatedProductCard productChangeMethod={this.props.productChangeMethod} productId={id}/>
              );
            })
          }
        </div>
        <h6>Your Outfit</h6>
        <ul className="outfitList">
          <li>Add current item to outfit</li>
          <li>outfit item one</li>
          <li>outfit item two</li>
          <li>outfit item three</li>
        </ul>
      </div>
    );
  }
}

export default RelatedItemsAndComparisonList;