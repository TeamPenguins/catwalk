import React from 'react';
import { Form, Col, Row } from 'react-bootstrap';
import Details from '../../Utilities/characteristicDetails.js';

const FormCharacteristics = ({characteristics}) => {

  return (
    Object.entries(characteristics).map(([ characteristic, details ]) => (
      <Form.Group>
        <Form.Label><i>{characteristic}</i></Form.Label>
        <Form.Row >
          <Col>
            <Form.Check
              inline
              type="radio"
              label="1"
              name={`${characteristic}Radio`}
              id={`${characteristic}Radio1`}
              key={`${characteristic}${details.id}1`}
              aria-describedby={`${characteristic}Radio1Help`}
            />
            <Form.Text id={`${characteristic}Radio1Help`} muted>
              {Details[characteristic][0]}
            </Form.Text>
          </Col>
          <Col>
            <Form.Check
              inline
              type="radio"
              label="2"
              name={`${characteristic}Radio`}
              id={`${characteristic}Radio2`}
              key={`${characteristic}${details.id}2`}
            />
          </Col>
          <Col>
            <Form.Check
              inline
              type="radio"
              label="3"
              name={`${characteristic}Radio`}
              id={`${characteristic}Radio3`}
              key={`${characteristic}${details.id}3`}
            />
          </Col>
          <Col>
            <Form.Check
              inline
              type="radio"
              label="4"
              name={`${characteristic}Radio`}
              id={`${characteristic}Radio4`}
              key={`${characteristic}${details.id}4`}
            />
          </Col>
          <Col>
            <Form.Check
              inline
              type="radio"
              label="5"
              name={`${characteristic}Radio`}
              id={`${characteristic}Radio5`}
              key={`${characteristic}${details.id}5`}
              aria-describedby={`${characteristic}Radio5Help`}
            />
            <Form.Text id={`${characteristic}Radio5Help`} muted>
              {Details[characteristic][4]}
            </Form.Text>
          </Col>
        </Form.Row>
      </Form.Group>
    ))
  );
};

export default FormCharacteristics;

