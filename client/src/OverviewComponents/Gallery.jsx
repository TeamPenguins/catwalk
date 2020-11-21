import React, { Component } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';


const Gallery = (props) => {

  return (
    <Col sm={8} className="my-5">
      <img className="rounded-sm" src={props.styles.results[0].photos[0].url} style={{ height: 600, width: 600, objectFit: 'cover' }} alt={props.styles.results[0].name}/>
    </Col>
  );
};

export default Gallery;