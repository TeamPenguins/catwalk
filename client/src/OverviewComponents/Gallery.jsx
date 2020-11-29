import React, { Component, useState } from 'react';
import { Carousel, CarouselItem, Col } from 'react-bootstrap';


const Gallery = (props) => {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  // if a style hasn't been selected, use the first set of images
  const allStylePhotos = props.mainImages[props.indexOfSelectedStyle].photos;

  // split the all the style's photos up into individual arrays for the main images and the thumbnails
  var thumbnailsArr = [];
  var mainImagesArr = [];
  for (var i = 0; i < allStylePhotos.length; i++) {
    thumbnailsArr.push(allStylePhotos[i].thumbnail_url);
    mainImagesArr.push(allStylePhotos[i].url);
  }

  return (
    <Col sm={8} className="my-5">
      <Col className="mt-1" style={{position: 'absolute', zIndex: 1}}>
        {thumbnailsArr.map((image, index) => {
          return (
            <img key={index} className="d-block m-1 thumbBorder" src={image === null ? 'https://via.placeholder.com/650' : image} style={{ height: 75, width: 75, objectFit: 'cover' }} alt={props.styles.results[0].name} />
          );
        })}
      </Col>
      <Carousel activeIndex={index} onSelect={handleSelect} interval={null} indicators={false}>
        {/* map through the main images and output a carousel item img for each one */}
        {mainImagesArr.map((image, index) => {
          return (
            <CarouselItem key={index}>
              <img className="d-block rounded-sm" src={image === null ? 'https://via.placeholder.com/650' : image} style={{ height: 730, width: 730, objectFit: 'cover' }} alt={props.styles.results[0].name} />
            </CarouselItem>
          );
        })}
      </Carousel>
    </Col>
  );
};

export default Gallery;

