import React, {Component} from 'react';
import { Modal, Button, Container, Row, Col, Form } from 'react-bootstrap';


class AddQuestionModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      productName: props.selectedProduct.name
    };
    this.addQuestionsClickHandler = this.addQuestionsClickHandler.bind(this);
    this.closeButton = this.closeButton.bind(this);
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
    });
  }

  componentDidUpdate(prevProps) {

    if (prevProps !== this.props) {
      this.setState({
        productName: this.props.selectedProduct.name
      });
    }
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
          <Modal.Body>
            <Container>
              <Form>
                <Form.Group>
                  <Form.Label>Your Question</Form.Label>
                  <Form.Control placeholder='Ask your question here'></Form.Control>
                </Form.Group>

                <Form.Group>
                  <Form.Label>What is your nickname?</Form.Label>
                  <Form.Control placeholder='Your nickname here'></Form.Control>
                </Form.Group>

                <Form.Group>
                  <Form.Label>Your Email</Form.Label>
                  <Form.Control type ='email' placeholder='Your email here'></Form.Control>
                </Form.Group>
              </Form>
            </Container>

          </Modal.Body>
          <Modal.Footer>
            <Button varient='primary'>
              Submit
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default AddQuestionModal;