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

  componentDidUpdate(prevState, prevProps) {
    // console.log(this.props.selectedProduct);
    if (prevState.selectedProduct !== this.props.selectedProduct) {
      this.setState({ indexOfSelectedStyle: 0, selectedStyle: 0});
      const preEl = document.querySelector('.activeThumb');
      if (preEl) { preEl.classList.remove('activeThumb'); }
    }
  }


  onThumbnailClick(event) {
    this.setState({
      selectedStyle: event.target.id
    });

    // toggle the active class from the previous el.
    const prevEl = document.querySelector('.activeThumb');
    if (prevEl) { prevEl.classList.remove('activeThumb'); }
    const el = document.getElementById(event.target.id).nextSibling;
    el.classList.toggle('activeThumb');
  }

  updateStyleOptions(styleClicked, indOfStyleClicked) {
    this.state.selectedImages = styleClicked.photos;
    this.state.indexOfSelectedStyle = indOfStyleClicked;
  }

  // if the index of this.state.indexOfSelectedStyle does not exist in the this.props.styles.results array
  // {this.props.styles.results.indexOf(this.state.indexOfSelectedStyle === -1 ? this.props.styles.results[this.state.indexOfSelectedStyle].photos : this.props.styles.results[this.state.indexOfSelectedStyle].photos)}

  render() {
    return (
      <Row>
        {/* <Gallery styles={this.props.styles} mainImages={this.state.selectedImages}/> */}
        <Gallery styles={this.props.styles} mainImages={this.props.styles.results} selectedImages={this.state.selectedImages} indexOfSelectedStyle={this.state.indexOfSelectedStyle} />
        <Col sm={4} className="my-5">
          {/* pull in the star rating component and link to ratings section below */}
          <div>
            <div className="my-1 flex-row">
              <StarRating ratings={this.props.ratings} /> <a href="#ratings-and-reviews" style={{color: 'black', fontSize: '.75rem'}}>Read all reviews</a>
            </div>

            <p className="my-1" >{this.props.selectedProduct.category}</p>
            <h1>{this.props.selectedProduct.name}</h1>
            <p>${this.props.styles.results[this.state.indexOfSelectedStyle].original_price}</p>
          </div>

          {/* break up into styles component */}
          <div>
            {/* onClick -> update the selectedStyle id in State, change the main image to the 1st img of that style set, add a checkmark icon */}
            <p><span className="font-weight-bold">STYLE &gt; </span> {this.props.styles.results[this.state.indexOfSelectedStyle].name}</p>
            <Row className="my-2" style={{ maxWidth: 350 }} >
              {/* map through the styles (results arr) and output an image tag for each */}
              {this.props.styles.results.map((style, index) => {
                return <React.Fragment><img key={style.style_id} onClick={this.onThumbnailClick} className="rounded-circle p-1" id={style.style_id} src={style.photos[0].thumbnail_url === null ? 'https://via.placeholder.com/50' : style.photos[0].thumbnail_url} style={{ height: 70, width: 70, objectFit: 'cover' }} alt={style.name}/><i className={this.state.selectedStyle === 0 && index === 0 ? 'fa fa-check activeThumb' : 'fa fa-check'} style={{fontSize: 20, marginLeft: -14, color: 'white'}}></i></React.Fragment>;
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