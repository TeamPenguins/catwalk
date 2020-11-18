import React, {Component} from 'react';
import Question from './question.jsx';
import { Card, Container } from 'react-bootstrap';

class QuestionAnswerList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Card>
          <Card.Body>
            <Card.Title >Questions and Answers</Card.Title>
            <Question productId = {this.props.selectedProduct.id}/>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

export default QuestionAnswerList;