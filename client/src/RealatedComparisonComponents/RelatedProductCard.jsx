import React from 'react';
import axios from 'axios';

class RelatedProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productInfo: {}
    };
    this.fetchProductInfo = this.fetchProductInfo.bind(this);
  }

  fetchProductInfo(id) {
    axios.get(`http://3.21.164.220/products/${id}`)
      .then(data => this.setState({productInfo: data.data}))
      .catch(/*console.error('error at fetch product info')*/);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.productId !== this.props.productId) {
      this.fetchProductInfo(this.props.productId);
    }
  }

  componentDidMount() {
    this.fetchProductInfo(this.props.productId);
  }

  render() {
    return (
      <div
        calssname="productCardContainer"
        onClick={() => this.props.productChangeMethod(this.state.productInfo)}>
        {this.state.productInfo.id}
      </div>
    );
  }
}

export default RelatedProductCard;
