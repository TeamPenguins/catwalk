import React, {Component} from 'react';
import QuestionList from './QuestionList.jsx';
import { Card, Container, Form, } from 'react-bootstrap';
import InteractionContext from '../Utilities/InteractionsContext.js';

class QuestionAnswerList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userSearch: '',
    };
    this.questionChangeHandler = this.questionChangeHandler.bind(this);
  }

  questionChangeHandler(e) {
    this.setState({
      userSearch: e.target.value
    });
    e.preventDefault();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.productId !== this.props.productId) {
      this.setState({
        userSearch: ''
      });
    }
  }


  render() {
    return (
      <InteractionContext.Consumer>
        {interactions =>
          <Container onClick={() => {
            interactions(event, 'Questions and Answers');
          }}
          className='questionsAnswersContainer'>
            <div>QUESTIONS {'&'} ANSWERS
              <Form>
                <Form.Group value ={this.state.userSearch}>
                  <Form.Control onChange ={this.questionChangeHandler} type='text' placeholder = 'HAVE A QUESTION? SEARCH FOR AN ANSWER...'/>
                </Form.Group>
              </Form>
            </div>
            <Card className ='questionsAnswersCard'>
              <Card.Body>
                <QuestionList productId = {this.props.selectedProduct.id} selectedProduct={this.props.selectedProduct} userSearch={this.state.userSearch}/>
              </Card.Body>
            </Card>
          </Container>
        }
      </InteractionContext.Consumer>

    );
  }
}

export default QuestionAnswerList;
