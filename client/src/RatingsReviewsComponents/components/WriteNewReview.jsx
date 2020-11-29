import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Container, Row, Col, Button, Modal, Form } from 'react-bootstrap';
import ModalStars from '../../Utilities/ModalStars.jsx';
import { Rating } from '@material-ui/lab';
import FormCharacteristics from './FormCharacteristics.jsx';

const WriteNewReview = ({ selectedProduct, characteristics}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [ratingValue, setRatingValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(-1);

  const ratingLabels = {
    1: 'Poor',
    2: 'Fair',
    3: 'Average',
    4: 'Good',
    5: 'Great',
  };

  return (
    <>
      <Button variant='outline-dark' onClick={handleShow}>ADD A REVIEW</Button>
      <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
      Write Your Review
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="overallRating">
              <Form.Label><b>Overall Rating</b></Form.Label>
              <Container>
                <Row style={{width: '250px'}}>
                  <Col>
                    <Rating
                      value={ratingValue}
                      size="small"
                      precision={1}
                      onChange={(event, newValue) => { setRatingValue(newValue); }}
                      onChangeActive={(event, newHover) => { setHoverValue(newHover); }}
                    />
                  </Col>
                  {ratingValue !== null && <Col >{ratingLabels[hoverValue !== -1 ? hoverValue : ratingValue]}</Col>}
                </Row>
              </Container>
            </Form.Group>
            <Form.Group controlId="productRecommendation">
              <Form.Label><b>Do you recommend this product?</b></Form.Label>
              <Form.Row>
                <Col>
                  <Form.Check
                    inline
                    type="radio"
                    label="Yes"
                    name="formRecRadio"
                    id="formRecRadio1"
                  />
                  <Form.Check
                    inline
                    type="radio"
                    label="No"
                    name="formRecRadio"
                    id="formRecRadio2"
                  />
                </Col>
              </Form.Row>
            </Form.Group>
            <Form.Group controlId="characteristics">
              <Form.Label><b>Characteristics</b></Form.Label>
              <FormCharacteristics characteristics={characteristics}/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
      I'm a FOOTER
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default WriteNewReview;


// Size
// A size too small
// ½ a size too small
// Perfect
// ½ a size too big
// A size too wide

// Width
// Too narrow
// Slightly narrow
// Perfect
// Slightly wide
// Too wide

// Comfort
// Uncomfortable
// Slightly uncomfortable
// Ok
// Comfortable
// Perfect

// Quality
// Poor
// Below average
// What I expected
// Pretty great
// Perfect

// Length
// Runs Short
// Runs slightly short
// Perfect
// Runs slightly long
// Runs long

// Fit
// Runs tight
// Runs slightly tight
// Perfect
// Runs slightly long
// Runs long
