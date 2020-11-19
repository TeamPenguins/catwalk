import React, {Component} from 'react';
import Question from './question.jsx';
import { Card, Container, Form, Button } from 'react-bootstrap';

class QuestionAnswerList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Card>
          <Card.Body>
            <p>QUESTIONS {'&'} ANSWERS</p>
            <Form>
              <Form.Group>
                <Form.Control type='text' placeholder = 'HAVE A QUESTION? SEARCH FOR AN ANSWER...'/>
              </Form.Group>
            </Form>
            <Question productId = {this.props.selectedProduct.id}/>
            <p><Card.Link><small>LOAD MORE ANSWERS</small></Card.Link></p>
            <Button variant="outline-secondary"><strong> MORE ANSWERED QUESTIONS </strong></Button> {' '}
            <Button variant="outline-secondary"><strong> ADD A QUESTION + </strong></Button>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

export default QuestionAnswerList;