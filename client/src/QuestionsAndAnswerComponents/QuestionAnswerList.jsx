import React, {Component} from 'react';
import Question from './Question.jsx';
import { Card, Container, Form, Button } from 'react-bootstrap';

class QuestionAnswerList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      moreQuestions: 2,
    };
    this.moreQuestionsClickHandler = this.moreQuestionsClickHandler.bind(this);
  }

  moreQuestionsClickHandler() {
    var newCount = this.state.moreQuestions + 2;
    this.setState({
      moreQuestions: newCount,
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState ({
        moreQuestions: 2,
      });
    }
  }


  render() {
    return (
      <Container>
        <div>QUESTIONS {'&'} ANSWERS</div>
        <Form>
          <Form.Group>
            <Form.Control type='text' placeholder = 'HAVE A QUESTION? SEARCH FOR AN ANSWER...'/>
          </Form.Group>
        </Form>
        <Card>
          <Card.Body >
            <Question productId = {this.props.selectedProduct.id} moreQuestions ={this.state.moreQuestions} key={this.props.selectedProduct.id}/>
          </Card.Body>
        </Card>
        <Button type ='button' variant="outline-secondary" onClick={this.moreQuestionsClickHandler}><strong> MORE ANSWERED QUESTIONS </strong></Button> {' '}
        <Button variant="outline-secondary"><strong> ADD A QUESTION + </strong></Button>
      </Container>
    );
  }
}

export default QuestionAnswerList;