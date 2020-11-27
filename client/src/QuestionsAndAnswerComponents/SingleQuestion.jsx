import React, {Component} from 'react';
import AnswersList from './AnswersList.jsx';
import { Card, Container, Row, Col } from 'react-bootstrap';
import QuestionAnswerList from './QuestionAnswerList.jsx';

class SingleQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };

  }

  render() {
    return (
      <div>
        <Row>
          <Col md={4}>
            <div className ='singleQuestion'><strong>Q: {this.props.singleQuestion.question_body}</strong></div>
          </Col>
          <Col md={{span: 4, offset: 4}}>
            <small>Helpful?</small>
            <small><Card.Link>Yes</Card.Link>({this.props.singleQuestion.question_helpfulness}) |</small>
            <small><Card.Link>AddAnswer</Card.Link></small>
          </Col>
        </Row>
        <Row>
          <Col>
            <div>
              <AnswersList
                questionId = {this.props.singleQuestion.question_id}
              />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}



export default SingleQuestion;