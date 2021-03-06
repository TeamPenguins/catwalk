import React, {Component} from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import QuestionAnswerList from './QuestionAnswerList.jsx';
import SingleQuestion from './SingleQuestion.jsx';
import AddQuestionModal from './AddQuestionModal.jsx';

class QuestionList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasMoreQuestionsInDB: false,
      questions: [],
      numOfQuestions: 2,
      fetchCount: 30,
      userSearch: this.props.userSearch
    };

    this.fetchQuestionList = this.fetchQuestionList.bind(this);
    this.moreQuestionsClickHandler = this.moreQuestionsClickHandler.bind(this);
    this.moreQuestionsToggle = this.moreQuestionsToggle.bind(this);
    this.fetchMoreQuestionsIfAvailable = this.fetchMoreQuestionsIfAvailable.bind(this);
    this.sorter = this.sorter.bind(this);
  }

  fetchQuestionList(prodId, count, numOfQuestions) {

    fetch(`http://3.21.164.220/qa/questions/?product_id=${prodId}&count=${count}`)
      .then(response => response.json())
      .then((questionList) => {
        if (questionList.results.length === this.state.fetchCount - 3) {
          this.setState({
            hasMoreQuestionsInDB: true,
          });
        } else {
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
    this.fetchMoreQuestionsIfAvailable();
    var newCount = this.state.numOfQuestions + 2;
    if (newCount >= this.state.questions.length) {
      newCount = this.state.questions.length;
    }
    this.setState({
      numOfQuestions: newCount,
    });
  }

  moreQuestionsToggle() {
    if (this.state.numOfQuestions === this.state.questions.length) {
      return true;
    } else {
      return false;
    }
  }

  fetchMoreQuestionsIfAvailable() {
    if (this.state.hasMoreQuestionsInDB) {
      const newCount = this.state.fetchCount + 20;
      this.setState({
        fetchCount: newCount,
      });
      this.fetchQuestionList(this.props.productId, newCount);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.productId !== this.props.productId) {
      this.fetchQuestionList(this.props.productId, this.state.fetchCount);
      this.setState({
        numOfQuestions: 2
      });
    }
  }

  sorter(arr) {
    if (this.props.userSearch.length < 3) {
      return arr;
    }
    const userFilteredList = arr.filter((questions) => {
      if (questions) {
        return questions.question_body.includes(this.props.userSearch);
      }
    });
    return userFilteredList;
  }

  componentDidMount() {
    this.fetchQuestionList(this.props.productId, this.state.fetchCount);
  }


  render() {

    return (
      <div>
        <div className='questionAnswerListBody'>{this.sorter(this.state.questions).slice(0, this.state.numOfQuestions).map((singleQuestion) => {
          return (
            <SingleQuestion singleQuestion ={singleQuestion}/>
          );
        })}
        </div>
        <Button type ='button' variant="outline-secondary" onClick={this.moreQuestionsClickHandler} hidden={this.moreQuestionsToggle()}><strong> MORE ANSWERED QUESTIONS </strong></Button> {' '}
        <AddQuestionModal selectedProduct ={this.props.selectedProduct}/>
        {console.log(this.state)}
      </div>

    );
  }
}

export default QuestionList;
