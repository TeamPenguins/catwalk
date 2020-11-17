import React, { Component } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';


class Gallery extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Col sm={8} className="my-5">
        <img className="rounded-sm" src="https://via.placeholder.com/620"/>
      </Col>
    );
  }


}

export default Gallery;