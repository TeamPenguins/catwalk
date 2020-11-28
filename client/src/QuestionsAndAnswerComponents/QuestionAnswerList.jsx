import React, {Component} from 'react';
import QuestionList from './QuestionList.jsx';
import { Card, Container, Form, } from 'react-bootstrap';
import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider';

class QuestionAnswerList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Container className='questionsAnswersContainer'>
        <div>QUESTIONS {'&'} ANSWERS</div>
        <Form>
          <Form.Group>
            <Form.Control type='text' placeholder = 'HAVE A QUESTION? SEARCH FOR AN ANSWER...'/>
          </Form.Group>
        </Form>
        <Card className ='questionsAnswersCard'>
          <Card.Body>
            <QuestionList productId = {this.props.selectedProduct.id} selectedProduct={this.props.selectedProduct} key={this.props.selectedProduct.id}/>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

export default QuestionAnswerList;
