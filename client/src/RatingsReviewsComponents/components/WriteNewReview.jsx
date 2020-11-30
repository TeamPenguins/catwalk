import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Container, Row, Col, Button, Modal, Form } from 'react-bootstrap';
import ModalStars from '../../Utilities/ModalStars.jsx';
import { Rating } from '@material-ui/lab';
import FormCharacteristics from './FormCharacteristics.jsx';
import { CheckCircleFill, CameraFill } from 'react-bootstrap-icons';
import { Fab } from '@material-ui/core';
import UploadedPhotos from './UploadedPhotos.jsx';
import IndividualPhoto from './IndividualPhoto.jsx';
import { PostNewReview } from '../../Utilities/axiosHelpers.js';

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

  const [ratingValidate, setRatingValidation] = useState(null);

  const [isRecommended, setIsRecommended] = useState(null);

  const [recommendValidate, setRecommendValidate] = useState(null);

  const [theCharacteristics, setTheCharacteristics] = useState({});

  const [characteristicsValidate, setCharacteristicsValidate] = useState(null);

  const [characteristicsCompletion, setCharacteristicsCompletion] = useState(0);

  const [summaryValidate, setSummaryValidate] = useState(null);

  const [theSummary, setTheSummary] = useState('');

  const [bodyValidate, setBodyValidate] = useState(null);

  const [bodyCharacters, setBodyCharacterCount] = useState(0);

  const [bodyStatus, setBodyStatus] = useState('Minimum required characters left: [50]');

  const [theBody, setTheBody] = useState('');

  const [photoValidate, setPhotoValidate] = useState(null);

  const [photosArray, setPhotosArray] = useState([]);

  const [theNickName, setTheNickName] = useState('');

  const [nicknameValidate, setNicknameValidate] = useState(null);

  const [theEmail, setTheEmail] = useState('');

  const [emailValidate, setEmailValidate] = useState(null);

  const checkCharacteristicsCompletion = (charId, userValue) => {
    let charsCopy = theCharacteristics;
    charsCopy[charId] = userValue;
    setTheCharacteristics(charsCopy);
    setCharacteristicsCompletion(characteristicsCompletion + 1);
    if (characteristicsCompletion >= Object.keys(characteristics).length - 1) {
      setCharacteristicsValidate(<CheckCircleFill fill='green' style={{ verticalAlign: 'middle', marginLeft: '8px' }}/>);
    }
  };

  const validateSummary = (event) => {
    if (event.target.value.length > 1) {
      setSummaryValidate(<CheckCircleFill fill='green' style={{ verticalAlign: 'middle', marginLeft: '8px' }}/>);
      setTheSummary(event.target.value);
    }
  };

  const calculateRemaining = (event) => {
    setBodyCharacterCount(event.target.value.length);
    if (bodyCharacters > 49) {
      setBodyStatus('Minimum reached');
      setTheBody(event.target.value);
      setBodyValidate(<CheckCircleFill fill='green' style={{ verticalAlign: 'middle', marginLeft: '8px' }}/>);
    } else {
      setBodyStatus(`Minimum required characters left: [${50 - bodyCharacters}]`);
    }
  };

  const handleFile = (file) => {
    const photo = {
      id: file.lastModified,
      url: URL.createObjectURL(file),
    };
    setPhotosArray(photosArray => [...photosArray,
      <IndividualPhoto photo={photo}/>]);
  };

  const validateNickname = (event) => {
    if (event.target.value.length > 1) {
      setNicknameValidate(<CheckCircleFill fill='green' style={{ verticalAlign: 'middle', marginLeft: '8px' }}/>);
      setTheNickName(event.target.value);
    }
  };

  const validateEmail = (event) => {
    // NEED REGEX FOR EMAIL HERE
    if (event.target.value.length > 1) {
      setEmailValidate(<CheckCircleFill fill='green' style={{ verticalAlign: 'middle', marginLeft: '8px' }}/>);
      setTheEmail(event.target.value);
    }
  };

  const handleSubmit = (event) => {

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
    } else {
      // prevent page re-load
      event.preventDefault();
      //not sure what this does
      event.stopPropagation();
      // Need to transition to loading screen while post req
      // is going through
      //then transition to a Thank screen!
      const formObject = {
        // eslint-disable-next-line camelcase
        product_id: selectedProduct.id,
        rating: ratingValue,
        summary: theSummary,
        body: theBody,
        recommend: isRecommended,
        name: theNickName,
        email: theEmail,
        photos: [],
        characteristics: theCharacteristics
      };
      PostNewReview(formObject)
        .then(data => {
          console.log(data);
        })
        .catch(err => console.log(err));
    }
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
                      setIsRecommended(1);
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
                      setIsRecommended(0);
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
              <Form.Label><b>{' Upload your photos '}</b></Form.Label>
              <Form.Row >
                <UploadedPhotos handleFile={handleFile}/>
                {photosArray}
              </Form.Row>
            </Form.Group>
            <Form.Group controlId="nickname">
              <Form.Label><b>What is your nickname</b>{nicknameValidate}</Form.Label>
              <Form.Control type="text" onChange={validateNickname} required/>
              <Form.Control.Feedback type='valid'>Looks great!</Form.Control.Feedback>
              <Form.Text className="text-muted">
                For privacy reasons, do not use your full name or email address
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label><b>Your email</b>{emailValidate}</Form.Label>
              <Form.Control type="text" placeholder="yourEmail@" onChange={validateEmail} required/>
              <Form.Control.Feedback type='valid'>Looks great!</Form.Control.Feedback>
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