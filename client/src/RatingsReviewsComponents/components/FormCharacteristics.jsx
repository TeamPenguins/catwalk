import React, {useState} from 'react';
import { Form, Col, Row } from 'react-bootstrap';
import Details from '../../Utilities/characteristicDetails.js';

const FormCharacteristics = ({characteristics, validateHelper}) => {

  return (
    Object.entries(characteristics).map(([ characteristic, details ]) => {
      const [choice, setChoice] = useState('none selected');
      return (
        <Form.Group>
          <Form.Label><i>{characteristic}</i>{` - ${choice}`}</Form.Label>
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
                onClick={(e) => {
                  validateHelper(details.id, e.currentTarget.nextSibling.innerText);
                  setChoice(Details[characteristic][e.currentTarget.nextSibling.innerText - 1]);
                }}
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
                onClick={(e) => {
                  validateHelper(details.id, e.currentTarget.nextSibling.innerText);
                  setChoice(Details[characteristic][e.currentTarget.nextSibling.innerText - 1]);
                }}
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
                onClick={(e) => {
                  validateHelper(details.id, e.currentTarget.nextSibling.innerText);
                  setChoice(Details[characteristic][e.currentTarget.nextSibling.innerText - 1]);
                }}
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
                onClick={(e) => {
                  validateHelper(details.id, e.currentTarget.nextSibling.innerText);
                  setChoice(Details[characteristic][e.currentTarget.nextSibling.innerText - 1]);
                }}
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
                onClick={(e) => {
                  validateHelper(details.id, e.currentTarget.nextSibling.innerText);
                  setChoice(Details[characteristic][e.currentTarget.nextSibling.innerText - 1]);
                }}
              />
              <Form.Text id={`${characteristic}Radio5Help`} muted>
                {Details[characteristic][4]}
              </Form.Text>
            </Col>
          </Form.Row>
        </Form.Group>
      );
    })
  );
};

export default FormCharacteristics;

