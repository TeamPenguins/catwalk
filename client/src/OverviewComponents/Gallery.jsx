import React, { Component } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';


const Gallery = (props) => {

  // if a style hasn't been selected, use the first set of images
  const allStylePhotos = (props.images.length === 0) ? props.styles.results[0].photos : props.images;

  // split the all the style's photos up into individual arrays for the main images and the thumbnails
  var thumbnailsArr = [];
  var mainImagesArr = [];
  for (var i = 0; i < allStylePhotos.length; i++) {
    thumbnailsArr.push(allStylePhotos[i].thumbnail_url);
    mainImagesArr.push(allStylePhotos[i].url);
  }

  return (
    <Col sm={8} className="my-5">
      {/* <img className="rounded-sm" src={props.styles.results[0].photos[0].url} style={{ height: 600, width: 600, objectFit: 'cover' }} alt={props.styles.results[0].name}/> */}

      {/* // bootstrap carousel for the main images */}
      <div id="carouselExampleControls" className="carousel slide" data-interval="false" data-ride="carousel">
        <div className="carousel-inner">
          {/* map through the main images and output a carousel item img for each one */}
          {mainImagesArr.map((image) => {
            return (<div className="carousel-item">
              <img className="d-block w-100 rounded-sm" src={image} style={{ height: 600, width: 600, objectFit: 'cover' }} alt={props.styles.results[0].name} />
            </div>);
          })}

          {/* <div className="carousel-item active">
            <img className="d-block w-100 rounded-sm" src={props.styles.results[0].photos[0].url} style={{ height: 600, width: 600, objectFit: 'cover' }} alt={props.styles.results[0].name} />
          </div> */}
          {/* <div className="carousel-item">
            <img className="d-block w-100" src="..." alt="Second slide"/>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="..." alt="Third slide"/>
          </div> */}
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </Col>
  );
};

export default Gallery;

