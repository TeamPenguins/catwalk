import React, {Component} from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import QuestionAnswerList from './QuestionAnswerList.jsx';
import SingleQuestion from './SingleQuestion.jsx';
import AddQuestionModal from './AddQuestionModal.jsx';

class QuestionList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasMoreQuestionsInDB: true,
      questions: [],
      numOfQuestions: 2,
    };
    this.fetchQuestionList = this.fetchQuestionList.bind(this);
    this.moreQuestionsClickHandler = this.moreQuestionsClickHandler.bind(this);
    this.moreQuestionsToggle = this.moreQuestionsToggle.bind(this);
  }

  fetchQuestionList() {

    fetch(`http://3.21.164.220/qa/questions/?product_id=${this.props.productId}&count=20`)
      .then(response => response.json())
      .then((questionList) => {
        if (questionList.results.length < 20) {
          this.setState({
            hasMoreQuestionsInDB: false,
          });
        }
        this.setState({
          questions: questionList.results,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  moreQuestionsClickHandler() {
    var newCount = this.state.numOfQuestions + 2;
    if (newCount >= this.state.questions.length) {
      newCount = this.state.questions.length;
    }
    this.setState({
      numOfQuestions: newCount,
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.productId !== this.props.productId) {
      this.fetchQuestionList();
    }
  }

  componentDidMount() {
    this.fetchQuestionList();
  }

  moreQuestionsToggle() {
    if (this.state.numOfQuestions === this.state.questions.length && this.state.hasMoreQuestionsInDB === false) {
      return true;
    } else {
      return false;
    }
  }

  render() {

    return (
      <div>
        <div className='questionAnswerListBody'>{this.state.questions.slice(0, this.state.numOfQuestions).map((singleQuestion) => {
          return (
            <div>
              <SingleQuestion singleQuestion ={singleQuestion}/>
            </div>
          );
        })}
        </div>
        <Button type ='button' variant="outline-secondary" onClick={this.moreQuestionsClickHandler} hidden={this.moreQuestionsToggle()}><strong> MORE ANSWERED QUESTIONS </strong></Button> {' '}
        <AddQuestionModal selectedProduct ={this.props.selectedProduct}/>
      </div>

    );
  }
}



export default QuestionList;
