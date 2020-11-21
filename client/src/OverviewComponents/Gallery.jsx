import React, { Component } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';


const Gallery = (props) => {

  return (
    <Col sm={8} className="my-5">
      {/* <img className="rounded-sm" src={props.styles.results[0].photos[0].url} style={{ height: 600, width: 600, objectFit: 'cover' }} alt={props.styles.results[0].name}/> */}

      {/* // bootstrap carousel */}
      <div id="carouselExampleControls" class="carousel slide" data-interval="false" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100 rounded-sm" src={props.styles.results[0].photos[0].url} style={{ height: 600, width: 600, objectFit: 'cover' }} alt={props.styles.results[0].name} />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="..." alt="Second slide"/>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="..." alt="Third slide"/>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>

    </Col>
  );
};

export default Gallery;

