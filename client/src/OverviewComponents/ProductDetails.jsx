import React, { Component } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { Star } from 'react-bootstrap-icons';
import Variants from './Variants.jsx';
import Gallery from './Gallery.jsx';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedStyle: '', selectedStyleImages: [] };
    this.onThumbnailClick = this.onThumbnailClick.bind(this);
    this.updateStyleOptions = this.updateStyleOptions.bind(this);
    this.selectedImages = [];
  }

  onThumbnailClick(event) {
    this.setState({
      selectedStyle: event.target.id
    });
  }

  updateStyleOptions(styleClicked) {
    this.selectedImages = styleClicked.photos;
  }


  render() {
    return (
      <Row>
        <Gallery styles={this.props.styles}/>
        <Col sm={4} className="my-5" id={this.selectedImages}>
          {/* pull in the star rating component and link to ratings section below */}
          <div>
            <div className="my-1">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
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
                return <img key={style.style_id} onClick={this.onThumbnailClick} className="rounded-circle p-1" id={style.style_id} value='MONKEY' src={style.photos[0].thumbnail_url} style={{ height: 70, width: 70, objectFit: 'cover' }} alt={style.name}/>;
              })}
            </Row>
          </div>

          {/* size/quantity component */}
          <Variants styles={this.props.styles} selectedStyle={this.state.selectedStyle} updateStyleOptions={this.updateStyleOptions} />

        </Col>
      </Row>
    );
  }
}

export default ProductDetails;