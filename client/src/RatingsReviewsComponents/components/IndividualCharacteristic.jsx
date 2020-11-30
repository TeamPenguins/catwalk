import React from 'react';
import { Container, Row, Col, ProgressBar, Image, FormControl } from 'react-bootstrap';
import { CaretDownFill } from 'react-bootstrap-icons';
import Details from '../../Utilities/characteristicDetails.js';

// recieves reviewsMetaData as props
const IndividualCharacteristic = (props) => {
  const initialFill = Math.round((props.value / 5) * 100);
  return (
    <Container>
      <Row style={{ height: '10px'}}>
        <Col style={{fontSize: '15px'}}>
          {props.characteristic}
        </Col>
      </Row>
      <Row>
        <Col>
          <input type="range" className="charsSlider" value={initialFill} />
        </Col>
      </Row>
      <Row>
        <Col style={{fontSize: '11px'}}>
          {Details[props.characteristic][0]}
        </Col>
        <Col style={{fontSize: '11px', textAlign: 'end'}}>
          {Details[props.characteristic][4]}
        </Col>
      </Row>
    </Container>
  );
};

export default IndividualCharacteristic;

// <input type="range" id="charsSlider" class="form-control-range" value={initialFill} />

// <FormControl type="range" value={initialFill} size="sm"/>
{ /* <Container style={lol}>
<CaretDownFill style={moreStyle}/>
</Container> */ }