import React, {Component} from 'react';
import Answers from './answers.jsx';
import { Card, Container, Row, Col } from 'react-bootstrap';

class Question extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: [],
    };
    this.fetchQuestionList = this.fetchQuestionList.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  fetchQuestionList() {

    fetch(`http://3.21.164.220/qa/questions/?product_id=${this.props.productId}&count=4`)
      .then(response => response.json())
      .then((questionList) => {
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


      <div>{this.state.questions.map((singleQuestion) => {

        return (
          <div>
            <Row>
              <Col md={4}>
                <p><strong>Q: {singleQuestion.question_body}</strong></p>
              </Col>
              <Col md={{span: 4, offset: 4}}>
                <small>Helpful?</small>
                <small><Card.Link>Yes</Card.Link>({singleQuestion.question_helpfulness}) |</small>
                <small><Card.Link>AddAnswer</Card.Link></small>
              </Col>
            </Row>
            <Row>
              <Col>
                <p><Answers questionId = {singleQuestion.question_id}/></p>
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