import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const ReviewPhotos = ({ photos }) => {

  return (
    <Container>
      <Row>
        {photos.map(photo => (
          <Col xs={6} md={4}>
            <Image style={{height: '50px', width: '50px'}}src={photo.url} thumbnail key={photo.id}/>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ReviewPhotos;