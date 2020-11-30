import React, {Component} from 'react';
import QuestionList from './QuestionList.jsx';
import { Card, Container, Form, } from 'react-bootstrap';
import InteractionContext from '../Utilities/InteractionsContext.js';

class QuestionAnswerList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <InteractionContext.Consumer>
        {interactions =>
          <Container onClick={() => {
            interactions(event, 'Questions and Answers');
          }}
          className='questionsAnswersContainer'>
            <div>QUESTIONS {'&'} ANSWERS</div>
            <Form>
              <Form.Group>
                <Form.Control type='text' placeholder = 'HAVE A QUESTION? SEARCH FOR AN ANSWER...'/>
              </Form.Group>
            </Form>
            <Card className ='questionsAnswersCard'>
              <Card.Body>
                <QuestionList productId = {this.props.selectedProduct.id} selectedProduct={this.props.selectedProduct}/>
              </Card.Body>
            </Card>
          </Container>
        }
      </InteractionContext.Consumer>

    );
  }
}

export default QuestionAnswerList;
