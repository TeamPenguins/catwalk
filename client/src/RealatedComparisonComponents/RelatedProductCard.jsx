import React from 'react';
import axios from 'axios';
import {Card, Column, Container} from 'react-bootstrap';
import ComparisonModal from './ComparisonModal.jsx';
import ActionButton from './ActionButton.jsx';
import Price from './Price.jsx';


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
    this.grabPreviewImage = this.grabPreviewImage.bind(this);
  }
  grabPreviewImage () {
    var src = this.state.styleInfo.results;
    var photo = src ? src[0].photos[0].url : 'https://via.placeholder.com/150';
    return photo === null ? 'https://via.placeholder.com/150' : photo;
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
      <Container>
        <ActionButton
          actionButtonMethod={this.props.actionButtonMethod}
          styleInfo={this.state.styleInfo}
          productInfo={this.state.productInfo}
          updateComparedProductMethod={this.props.updateComparedProductMethod}/>
        <Card
          onClick={()=>this.props.productChangeMethod(this.state.productInfo, this.state.styleInfo)}
          className="productCard"
        >
          <Card.Body>
            <Card.Img className="card-img"
              src={this.grabPreviewImage()}/>
            <Card.Text >{this.state.productInfo.category}</Card.Text>
            <Card.Text>{this.state.productInfo.name}</Card.Text>
            <Price styleInfo={this.state.styleInfo} />
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

export default RelatedProductCard;

