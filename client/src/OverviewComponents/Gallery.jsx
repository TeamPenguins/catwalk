import React, { Component } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';


class Gallery extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Col sm={8} className="my-5">
        <img className="rounded-sm" src={this.props.styles.results[0].photos[0].url} style={{ height: 600, width: 600, objectFit: 'cover' }} alt={this.props.styles.results[0].name}/>
      </Col>
    );
  }


}

export default Gallery;