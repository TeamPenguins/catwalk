import React from 'react';
import axios from 'axios';
import {Card, Column, Container} from 'react-bootstrap';
import StarRating from '../Utilities/StarRating.jsx';
import {GetReviewMetaData} from '../Utilities/axiosHelpers.js';
import ComparisonModal from './ComparisonModal.jsx';
import ActionButton from './ActionButton.jsx';
import Price from './Price.jsx';


class RelatedProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productInfo: {},
      styleInfo: {},
      ratings: {}
    };
    this.fetchProductInfo = this.fetchProductInfo.bind(this);
    this.fetchStyleInfo = this.fetchStyleInfo.bind(this);
    this.fetchReviewMetadata = this.fetchReviewMetadata.bind(this);
    this.fetchAllInfo = this.fetchAllInfo.bind(this);
    this.grabPreviewImage = this.grabPreviewImage.bind(this);
    this.changeSelectedProduct = this. changeSelectedProduct.bind(this);
  }
  grabPreviewImage (infoType) {
    var src = this.state.styleInfo.results;
    var photo = src ? src[0].photos[0].url : 'https://via.placeholder.com/150';
    return photo === null ? 'https://via.placeholder.com/150' : photo;
  }
  fetchReviewMetadata(id) {
    GetReviewMetaData(id)
      .then(metaData => this.setState({ratings: metaData.data.ratings}))
      .catch(/*console.error('error at fetch review meta data')*/);
  }
  fetchProductInfo(id) {
    axios.get(`http://3.21.164.220/products/${id}`)
      .then(productInfo => this.setState({productInfo: productInfo.data}))
      .catch(/*console.error('error at fetch product info')*/);
  }
  fetchStyleInfo(id) {
    axios.get(`http://3.21.164.220/products/${id}/styles`)
      .then(styleInfo => this.setState({styleInfo: styleInfo.data}))
      .catch(/*console.error('error at fetch style info')*/);
  }
  changeSelectedProduct () {
    this.props.productChangeMethod(this.state.productInfo, this.state.styleInfo);
  }
  fetchAllInfo(id) {
    this.fetchStyleInfo(id);
    this.fetchProductInfo(id);
    GetReviewMetaData(id)
      .then(data => {
        this.setState({
          ratings: data.data.ratings});
      });
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
      <Container className="card-container" aria-label="click to visit product detail page">
        <ActionButton
          listType={this.props.listType}
          actionButtonMethod={this.props.actionButtonMethod}
          styleInfo={this.state.styleInfo}
          productInfo={this.state.productInfo}
          updateComparedProductMethod={this.props.updateComparedProductMethod}
        />
        <Card onClick={()=> this.changeSelectedProduct()} className={`productCard ${this.props.listType}`}>
          <Card.Body>
            <Card.Img variant="top" className="card-img"
              src={this.grabPreviewImage()}
              alt={this.state.productInfo.name}/>
            <Card.Text >{this.state.productInfo.category}</Card.Text>
            <Card.Text>{this.state.productInfo.name}</Card.Text>
            <Price styleInfo={this.state.styleInfo} />
            <StarRating ratings={this.state.ratings}/>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

export default RelatedProductCard;

