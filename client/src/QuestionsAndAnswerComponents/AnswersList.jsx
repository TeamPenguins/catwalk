import React, {Component} from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import SingleAnswer from './SingleAnswer.jsx';


class AnswersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answerList: [],
      hasMoreAnswers: true,
      wantsMoreAnswers: false,
      numOfAnswers: 2,
    };

    this.fetchAnswerList = this.fetchAnswerList.bind(this);
    this.loadAnswersClickHandler = this.loadAnswersClickHandler.bind(this);
  }

  fetchAnswerList() {

    fetch(`http://3.21.164.220/qa/questions/${this.props.questionId}/answers?count=20`)
      .then(response => response.json())
      .then((answerList) => {
        if (answerList.results.length < 20) {
          this.setState({
            hasMoreAnswers: false,
          });
        }
        this.setState({
          answerList: answerList.results,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  loadAnswersClickHandler (e) {
    const newNum = this.state.numOfAnswers * 5;
    this.setState({
      numOfAnswers: newNum,
    });
    e.preventDefault();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.questionId !== this.props.questionId) {
      this.fetchAnswerList();
    }
  }

  componentDidMount() {
    this.fetchAnswerList();

  }

  render() {
    return (
      <div><strong>A:</strong>{this.state.answerList.slice(0, this.state.numOfAnswers).map((singleAnswer) => {
        return (
          <div>
            <SingleAnswer singleAnswer ={singleAnswer}/>
          </div>
        );
      })}
      <div><Card.Link onClick={this.loadAnswersClickHandler}><small>LOAD MORE ANSWERS</small></Card.Link></div>
      </div>
    );
  }
}


export default AnswersList;