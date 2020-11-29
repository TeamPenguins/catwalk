import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Container, Row, Col, Button, Modal, Form } from 'react-bootstrap';
import ModalStars from '../../Utilities/ModalStars.jsx';
import { Rating } from '@material-ui/lab';
import FormCharacteristics from './FormCharacteristics.jsx';
import { CheckCircleFill, CameraFill } from 'react-bootstrap-icons';


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

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const [ratingValidate, setRatingValidation] = useState(null);
  const [recommendValidate, setRecommendValidate] = useState(null);
  const [characteristicsValidate, setCharacteristicsValidate] = useState(null);

  const [characteristicsCompletion, setCharacteristicsCompletion] = useState(0);

  const checkCharacteristicsCompletion = () => {
    setCharacteristicsCompletion(characteristicsCompletion + 1);
    if (characteristicsCompletion >= Object.keys(characteristics).length - 1) {
      setCharacteristicsValidate(<CheckCircleFill fill='green' style={{ verticalAlign: 'middle', marginLeft: '8px' }}/>);
    }
  };

  const [summaryValidate, setSummaryValidate] = useState(null);
  const validateSummary = (event) => {
    event.target.value.length > 1 ? setSummaryValidate(<CheckCircleFill fill='green' style={{ verticalAlign: 'middle', marginLeft: '8px' }}/>) : null;
  };
  const [bodyValidate, setBodyValidate] = useState(null);

  const [bodyCharacters, setBodyCharacterCount] = useState(0);

  const [bodyStatus, setBodyStatus] = useState('Minimum required characters left: [50]');

  const calculateRemaining = (event) => {
    setBodyCharacterCount(event.target.value.length);
    if (bodyCharacters > 49) {
      setBodyStatus('Minimum reached');
      setBodyValidate(<CheckCircleFill fill='green' style={{ verticalAlign: 'middle', marginLeft: '8px' }}/>);
    } else {
      setBodyStatus(`Minimum required characters left: [${50 - bodyCharacters}]`);
    }
  };
  const [photoValidate, setPhotoValidate] = useState(null);

  const [nicknameValidate, setNicknameValidate] = useState(null);
  const validateNickname = (event) => {
    event.target.value.length > 1 ? setNickNameValidate(<CheckCircleFill fill='green' style={{ verticalAlign: 'middle', marginLeft: '8px' }}/>) : null;
  };

  const [emailValidate, setEmailValidate] = useState(null);
  const validateEmail = (event) => {
    // NEED REGEX FOR EMAIL HERE
    event.target.value.length > 1 ? setEmailValidate(<CheckCircleFill fill='green' style={{ verticalAlign: 'middle', marginLeft: '8px' }}/>) : null;
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
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group controlId="overallRating">
              <Form.Label><b>Overall Rating</b>{ratingValidate}</Form.Label>
              <Container>
                <Row style={{width: '250px'}}>
                  <Col>
                    <Rating
                      value={ratingValue}
                      size="small"
                      precision={1}
                      onChange={(event, newValue) => {
                        setRatingValue(newValue);
                        setRatingValidation(<CheckCircleFill fill='green' style={{ verticalAlign: 'middle', marginLeft: '8px' }}/>);
                      }}
                      onChangeActive={(event, newHover) => {
                        setHoverValue(newHover);
                      }}
                    />
                  </Col>
                  {ratingValue !== null && <Col >{ratingLabels[hoverValue !== -1 ? hoverValue : ratingValue]}</Col>}
                </Row>
              </Container>
            </Form.Group>
            <Form.Group controlId="productRecommendation" required >
              <Form.Label><b>Do you recommend this product?</b>{recommendValidate}</Form.Label>
              <Form.Row>
                <Col>
                  <Form.Check
                    inline
                    type="radio"
                    label="Yes"
                    name="formRecRadio"
                    id="formRecRadio1"
                    onClick={() => {
                      setRecommendValidate(<CheckCircleFill fill='green' style={{ verticalAlign: 'middle', marginLeft: '8px' }}/>);
                    }}
                  />
                  <Form.Check
                    inline
                    type="radio"
                    label="No"
                    name="formRecRadio"
                    id="formRecRadio2"
                    onClick={() => {
                      setRecommendValidate(<CheckCircleFill fill='green' style={{ verticalAlign: 'middle', marginLeft: '8px' }}/>);
                    }}
                  />
                </Col>
              </Form.Row>
            </Form.Group>
            <Form.Group controlId="characteristics">
              <Form.Label><b>Characteristics</b>{characteristicsValidate}</Form.Label>
              <FormCharacteristics characteristics={characteristics} validateHelper={checkCharacteristicsCompletion}/>
            </Form.Group>
            <Form.Group controlId="summary">
              <Form.Label><b>Summary</b>{summaryValidate}</Form.Label>
              <Form.Control type="text" placeholder="Example: Best purchase ever!" onChange={validateSummary}/>
              <Form.Control.Feedback type='valid'>Looks great!</Form.Control.Feedback>
              <Form.Control.Feedback type='invalid'>TOO MANY WORDS</Form.Control.Feedback>
              <Form.Text className="text-muted">
                Write a summary! Max characters: 60
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="body">
              <Form.Label><b>Body</b>{bodyValidate}</Form.Label>
              <Form.Control type="textarea" placeholder="Why did you like the product or not?" onChange={calculateRemaining} required/>
              <Form.Control.Feedback type='valid'>Thanks for the feedback!</Form.Control.Feedback>
              <Form.Text className="text-muted">
                {bodyStatus}
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="photos">
              <Button variant="outline-dark">{'Upload your photos '}{<CameraFill />}{photoValidate}</Button>
            </Form.Group>
            <Form.Group controlId="nickname">
              <Form.Label><b>What is your nickname</b>{nicknameValidate}</Form.Label>
              <Form.Control type="text" placeholder="Example: Best purchase ever!" onChange={validateNickname}/>
              <Form.Control.Feedback type='valid'>Looks great!</Form.Control.Feedback>
              <Form.Control.Feedback type='invalid'>TOO MANY WORDS</Form.Control.Feedback>
              <Form.Text className="text-muted">
                For privacy reasons, do not use your full name or email address
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label><b>Your email</b>{emailValidate}</Form.Label>
              <Form.Control type="text" placeholder="Example: Best purchase ever!" onChange={validateEmail}/>
              <Form.Control.Feedback type='valid'>Looks great!</Form.Control.Feedback>
              <Form.Control.Feedback type='invalid'>TOO MANY WORDS</Form.Control.Feedback>
              <Form.Text className="text-muted">
                For authentication reasons, you will not be emailed
              </Form.Text>
            </Form.Group>
            <Button type="submit">Submit Review</Button>
          </Form>
        </Modal.Body>
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
