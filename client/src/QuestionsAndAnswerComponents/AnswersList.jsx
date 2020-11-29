import React, {Component} from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import SingleAnswer from './SingleAnswer.jsx';


class AnswersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answerList: [],
      hasMoreAnswers: true,
      numOfAnswers: 2,
    };

    this.fetchAnswerList = this.fetchAnswerList.bind(this);
    this.loadAnswersClickHandler = this.loadAnswersClickHandler.bind(this);
    this.toggleLoadAnswerLink = this.toggleLoadAnswerLink.bind(this);
    this.testFun = this.testFun.bind(this);
  }

  fetchAnswerList() {
    fetch(`http://3.21.164.220/qa/questions/${this.props.questionId}/answers?count=20`)
      .then(response => response.json())
      .then((answerList) => {
        if (!answerList.results.length) {
          this.setState({
            noAnswers: this.testFun(answerList.results.length),
          });
        }
        this.setState({
          answerList: answerList.results,
          noAnswer: this.testFun(answerList.results.length),
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  loadAnswersClickHandler (e) {
    this.setState({
      numOfAnswers: this.state.answerList.length,
    });
    e.preventDefault();
  }

  toggleLoadAnswerLink () {
    if (this.state.answerList.length <= this.state.numOfAnswers) {
      return true;
    } else {
      return false;
    }
  }

  testFun(someLength) {
    if (someLength) {
      return true;
    } else {
      return false;
    }
  }

  componentDidMount() {
    this.fetchAnswerList();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.questionId !== this.props.questionId) {
      this.fetchAnswerList();
    }
  }

  render() {
    return (
      <div>
        <strong>A:</strong>
        {this.state.answerList.slice(0, this.state.numOfAnswers).map((singleAnswer) => {
          return (
            <div>
              <SingleAnswer
                singleAnswer ={singleAnswer}
                noAnswer = {this.state.noAnswer}
              />
            </div>
          );
        })}
        <div>
          <Card.Link
            onClick={this.loadAnswersClickHandler}
            hidden={this.toggleLoadAnswerLink()}>
            <small>LOAD MORE ANSWERS</small>
          </Card.Link>
        </div>
      </div>
    );
  }
}


export default AnswersList;