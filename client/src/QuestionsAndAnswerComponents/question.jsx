import React, {Component} from 'react';
import Answers from './answers.jsx';
import { Card, Container, Row, Col } from 'react-bootstrap';
import QuestionAnswerList from './QuestionAnswerList.jsx';

class Question extends Component {
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
            <Row>
              <Col md={4}>
                <div><strong>Q: {singleQuestion.question_body}</strong></div>
              </Col>
              <Col md={{span: 4, offset: 4}}>
                <small>Helpful?</small>
                <small><Card.Link>Yes</Card.Link>({singleQuestion.question_helpfulness}) |</small>
                <small><Card.Link>AddAnswer</Card.Link></small>
              </Col>
            </Row>
            <Row>
              <Col>
                <div><Answers questionId = {singleQuestion.question_id}/></div>
                <div><Card.Link><small>LOAD MORE ANSWERS</small></Card.Link></div>
              </Col>
            </Row>
          </div>
        );
      })}
      </div>
    );
  }
}



export default Question;