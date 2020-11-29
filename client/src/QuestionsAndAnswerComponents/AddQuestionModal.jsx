import React, {Component} from 'react';
import axios from 'axios';
import { Modal, Button, Container, Row, Col, Form } from 'react-bootstrap';

const defaultUserInput = {
  userQuestion: '',
  userNickname: '',
  userEmail: '',
};

class AddQuestionModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      productName: props.selectedProduct.name,
      productId: props.selectedProduct.id,
      userQuestion: '',
      userNickname: '',
      userEmail: '',
      isInValid: '',
    };

    this.addQuestionsClickHandler = this.addQuestionsClickHandler.bind(this);
    this.closeButton = this.closeButton.bind(this);
    this.questionChangeHandler = this.questionChangeHandler.bind(this);
    this.nicknameChangeHandler = this.nicknameChangeHandler.bind(this);
    this.emailChangeHandler = this.emailChangeHandler.bind(this);
    this.submitQuestionClickHandler = this.submitQuestionClickHandler.bind(this);
    this.addNewQuestion = this.addNewQuestion.bind(this);
  }

  addQuestionsClickHandler (e) {
    this.setState({
      show: true,
    });
    e.preventDefault();
  }

  closeButton () {
    this.setState({
      show: false,
      userQuestion: '',
      userNickname: '',
      userEmail: '',
    });
  }

  addNewQuestion (data) {
    axios.post('http://3.21.164.220/qa/questions', data)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState({
        productName: this.props.selectedProduct.name,
        productId: this.props.selectedProduct.id,
      });
    }
  }

  questionChangeHandler(e) {
    e.target.reportValidity();
    this.setState ({
      userQuestion: e.target.value,
      isInValid: e.target.checkValidity()
    });
    e.preventDefault();
  }
  nicknameChangeHandler(e) {
    //e.target.setCustomValidity('must be longer then 3 and less then 16 characters');
    e.target.reportValidity();
    this.setState ({
      userNickname: e.target.value
    });
    e.preventDefault();
  }
  emailChangeHandler(e) {
    e.target.reportValidity();
    this.setState ({
      userEmail: e.target.value
    });
    e.preventDefault();
  }

  submitQuestionClickHandler (e) {
    const data = {
      body: this.state.userQuestion,
      name: this.state.userNickname,
      email: this.state.userEmail,
      'product_id': this.state.productId,
    };
    this.addNewQuestion(data);
    this.setState = {
      userQuestion: '',
      userNickname: '',
      userEmail: '',
    };
    this.closeButton();

  }


  render() {
    return (
      <>
        <Button variant="outline-secondary" onClick={this.addQuestionsClickHandler}><strong> ADD A QUESTION + </strong></Button>
        <Modal show={this.state.show}>
          <Modal.Header closeButton onHide={this.closeButton}>
            <Modal.Title>Ask Your Question
              <div>
                <small>about <em>{this.state.productName}</em></small>
              </div>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className='questionModal'>
            <Container>
              <Form>
                <Form.Group controlId='userQuestion' value = {this.state.userQuestion} required>
                  <Form.Label>Your Question</Form.Label>
                  <Form.Control isValid={this.state.isInValid} minLength='4' onChange = {this.questionChangeHandler} placeholder='Ask your question here' required></Form.Control>
                  <Form.Control.Feedback type='valid' tooltip>Looks Good</Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId='userNickname' value = {this.state.userNickname} >
                  <Form.Label>What is your nickname?</Form.Label>
                  <Form.Control minLength='3' onChange={this.nicknameChangeHandler} placeholder='Your nickname here' required></Form.Control>
                </Form.Group>

                <Form.Group controlId='userEmail' value = {this.state.userEmail} >
                  <Form.Label>Your Email</Form.Label>
                  <Form.Control onChange ={this.emailChangeHandler} type ='email' placeholder='Your email here' required></Form.Control>
                </Form.Group>
              </Form>
            </Container>

          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.submitQuestionClickHandler}varient='primary'>
              Submit
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default AddQuestionModal;