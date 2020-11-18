import React from 'react';
import axios from 'axios';
import {Card, Column} from 'react-bootstrap';

class RelatedProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productInfo: {},
      styleInfo: {}
    };
    this.fetchProductInfo = this.fetchProductInfo.bind(this);
    this.fetchStyleInfo = this.fetchStyleInfo.bind(this);
    this.fetchAllInfo = this.fetchAllInfo.bind(this);
  }
  fetchProductInfo(id) {
    axios.get(`http://3.21.164.220/products/${id}`)
      .then(productInfo => this.setState({productInfo: productInfo.data}))
      .catch(/*console.error('error at fetch product info')*/);
  }
  fetchStyleInfo(id) {
    axios.get(`http://3.21.164.220/products/${id}/styles`)
      .then(styleInfo => this.setState({styleInfo: styleInfo.data}))
      .catch(/*console.error('error at fetch product info')*/);
  }
  fetchAllInfo(id) {
    this.fetchStyleInfo(id);
    this.fetchProductInfo(id);
  }
  componentDidUpdate(prevProps) {
    if (prevProps.productId !== this.props.productId) {
      this.fetchAllInfo(this.props.productId);
    }
  }
  componentDidMount() {

    this.fetchAllInfo(this.props.productId);
  }

  render() {
    return (
      <Card
        onClick={()=>this.props.productChangeMethod(this.state.productInfo, this.state.styleInfo)}
        className="productCard"
      >
        <Card.Body>
          <Card.Img varient="top" src="https://via.placeholder.com/400/700" />
          <Card.Text className="test">{this.state.productInfo.category}</Card.Text>
          <Card.Title>{this.state.productInfo.name}</Card.Title>
          <Card.Text>${this.state.productInfo.default_price}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default RelatedProductCard;

