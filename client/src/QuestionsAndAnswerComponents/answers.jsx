import React, {Component} from 'react';
import { Card, Col, Row } from 'react-bootstrap';


class Answers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answerList: [],
    };
    this.fetchAnswerList = this.fetchAnswerList.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.componentDidUpdate = this.componentDidUpdate.bind(this);
  }

  fetchAnswerList() {

    fetch(`http://3.21.164.220/qa/questions/${this.props.questionId}/answers?count=2`)
      .then(response => response.json())
      .then((answerList) => {
        this.setState({
          answerList: answerList.results,
        });
      })
      .catch((err) => {
        console.log(err);
      });
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
      <div><strong>A:</strong> {this.state.answerList.map((singleAnswer) => {
        return (
          <div>
            <div>
              <small>{singleAnswer.body}</small>
            </div>
            <Row>
              {singleAnswer.photos.map((currPhoto) => {
                return (
                  <Col md={2}>
                    <img src={currPhoto.url} style ={{height: 100, weidth: 100}}/>
                  </Col>
                );
              })}
            </Row>
            <div>
              <small>
                by User{singleAnswer.answer_id} - {singleAnswer.answerer_name}, {singleAnswer.date.slice(0, 10)} |
                Helpful? <Card.Link>Yes({singleAnswer.helpfulness})</Card.Link>
              </small>
            </div>
          </div>
        );
      })}</div>
    );
  }
}


export default Answers;