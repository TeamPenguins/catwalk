import React, { Component } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { Star } from 'react-bootstrap-icons';
import Variants from './Variants.jsx';
import Gallery from './Gallery.jsx';
import StarRating from '../Utilities/StarRating.jsx';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedStyle: 0, indexOfSelectedStyle: 0, selectedImages: this.props.styles.results[0].photos };
    this.onThumbnailClick = this.onThumbnailClick.bind(this);
    this.updateStyleOptions = this.updateStyleOptions.bind(this);
  }

  onThumbnailClick(event) {
    this.setState({
      selectedStyle: event.target.id
    });
  }

  updateStyleOptions(styleClicked, indOfStyleClicked) {
    this.state.selectedImages = styleClicked.photos;
    this.state.indexOfSelectedStyle = indOfStyleClicked;
  }

  render() {
    return (
      <Row>
        {/* <Gallery styles={this.props.styles} mainImages={this.state.selectedImages}/> */}
        <Gallery styles={this.props.styles} mainImages={this.props.styles.results[this.state.indexOfSelectedStyle].photos}/>
        <Col sm={4} className="my-5">
          {/* pull in the star rating component and link to ratings section below */}
          <div>
            <div className="my-1 flex-row">
              <StarRating ratings={this.props.ratings} /> <a href="#ratings-and-reviews" style={{color: 'black', fontSize: '.75rem'}}>Read all reviews</a>
            </div>

            <p className="my-1" >{this.props.selectedProduct.category}</p>
            <h1>{this.props.selectedProduct.name}</h1>
            <p>${this.props.selectedProduct.default_price}</p>
          </div>

          {/* break up into styles component */}
          <div>
            {/* onClick -> update the selectedStyle id in State, change the main image to the 1st img of that style set, add a checkmark icon */}
            <p><span className="font-weight-bold">STYLE &gt; </span> {this.props.styles.results[0].name}</p>
            <Row className="my-2" style={{ maxWidth: 300 }} >
              {/* map through the styles (results arr) and output an image tag for each */}
              {this.props.styles.results.map((style, index) => {
                return <img key={style.style_id} onClick={this.onThumbnailClick} className="rounded-circle p-1" id={style.style_id} src={style.photos[0].thumbnail_url === null ? 'https://via.placeholder.com/50' : style.photos[0].thumbnail_url} style={{ height: 70, width: 70, objectFit: 'cover' }} alt={style.name}/>;
              })}
            </Row>
          </div>

          {/* size/quantity component */}
          <Variants styles={this.props.styles} selectedStyle={this.state.selectedStyle} updateStyleOptions={this.updateStyleOptions} selectedProduct={this.props.selectedProduct} />
          <Row className="my-2">
            <button aria-label="share on facebook"><i className="fa fa-facebook-square" style={{fontSize: 32}}></i></button>
            <button aria-label="share on twitter"><i className="fa fa-twitter-square" style={{fontSize: 32}}></i></button>
            <button aria-label="share on pinterest"><i className="fa fa-pinterest-square" style={{fontSize: 32}}></i></button>
          </Row>

        </Col>
      </Row>
    );
  }
}

export default ProductDetails;