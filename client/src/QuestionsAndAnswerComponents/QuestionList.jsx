import React, {Component} from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import QuestionAnswerList from './QuestionAnswerList.jsx';
import SingleQuestion from './SingleQuestion.jsx';

class QuestionList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasMoreQuestions: true,
      questions: [],

    };
    this.fetchQuestionList = this.fetchQuestionList.bind(this);
  }

  fetchQuestionList() {

    fetch(`http://3.21.164.220/qa/questions/?product_id=${this.props.productId}&count=20`)
      .then(response => response.json())
      .then((questionList) => {
        if (questionList.results.length < 20) {
          this.setState({
            hasMoreQuestions: false,
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


  componentDidUpdate(prevProps) {
    if (prevProps.productId !== this.props.productId) {
      this.fetchQuestionList();
    }
  }

  componentDidMount() {
    this.fetchQuestionList();
  }

  render() {
    return (
      <div>{this.state.questions.slice(0, this.props.moreQuestions).map((singleQuestion) => {
        return (
          <div>
            <SingleQuestion singleQuestion ={singleQuestion}/>
          </div>
        );
      })}
      </div>
    );
  }
}



export default QuestionList;
