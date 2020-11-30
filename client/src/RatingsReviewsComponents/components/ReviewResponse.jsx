import React from 'react';
import Card from 'react-bootstrap/Card';
import { Row, Col, Container } from 'react-bootstrap';

const ReviewResponse = ({ response }) => (
  <Card bg='light' border='0'>
    <Card.Body>
      <Card.Text>
        <b>
        Response from seller:
        </b>
      </Card.Text>
      <Card.Text>
        {response}
      </Card.Text>
    </Card.Body>
  </Card>
);

export default ReviewResponse;