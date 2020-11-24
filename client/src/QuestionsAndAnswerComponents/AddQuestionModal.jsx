import React, {Component} from 'react';
import { Modal, Button, Container, Row, Col } from 'react-bootstrap';


class AddQuestionModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
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


  render() {
    return (
      <>
        <Button variant="outline-secondary" onClick={this.addQuestionsClickHandler}><strong> ADD A QUESTION + </strong></Button>
        <Modal show={this.state.show}>
          <Modal.Header closeButton onHide={this.closeButton}>
            <Modal.Title>TEST</Modal.Title>
          </Modal.Header>
          <Modal.Body>This is a test</Modal.Body>
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