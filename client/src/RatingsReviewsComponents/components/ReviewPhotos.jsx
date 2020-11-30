import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import IndividualPhoto from './IndividualPhoto.jsx';

const ReviewPhotos = ({ photos }) => {

  return (
    <Container>
      <Row xs={2} md={4} lg={6}>
        {photos.map(photo => (
          <Col xs={6} md={4}>
            <IndividualPhoto photo={photo}/>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ReviewPhotos;