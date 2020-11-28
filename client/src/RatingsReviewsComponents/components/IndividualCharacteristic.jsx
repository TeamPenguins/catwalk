import React from 'react';
import { Container, Row, Col, ProgressBar, Image } from 'react-bootstrap';
import { CaretDownFill } from 'react-bootstrap-icons';
import Details from '../../Utilities/characteristicDetails.js';

// recieves reviewsMetaData as props
const IndividualCharacteristic = (props) => {
  let initialFill = Math.round((props.value / 5) * 100) + '%';
  let remainingFill = 100 - (initialFill - 1);
  let lol = {backgroundColor: '#e9ecef', height: '5px', position: 'relative'};
  let moreStyle = {position: 'absolute', left: initialFill};
  let anotherStyle = {'text-align': 'end', 'font-size': 'small'};
  return (
    <Container>
      <Row>
        <Col style={{fontSize: '15px'}}>
          {props.characteristic}
        </Col>
      </Row>
      <Row>
        <Col>
          <Container style={lol}>
            <CaretDownFill style={moreStyle}/>
          </Container>
        </Col>
      </Row>
      <Row>
        <Col style={{fontSize: '11px'}}>
          {Details[props.characteristic][0]}
        </Col>
        <Col style={{fontSize: '11px', textAlign: 'end'}}>
          {Details[props.characteristic][1]}
        </Col>
      </Row>
    </Container>
  );
};

export default IndividualCharacteristic;