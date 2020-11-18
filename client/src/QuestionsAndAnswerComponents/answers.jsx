import React, {Component} from 'react';
import { Card } from 'react-bootstrap';

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
      <div> {this.state.answerList.map((singleAnswer) => {
        return (
          <div>
            <p><strong>A:</strong> <small>{singleAnswer.body}</small> </p>
            <p>
              <small>
                by User{singleAnswer.answer_id} - {singleAnswer.answerer_name}, {singleAnswer.date.slice(0, 10)} |
                Helpful? <Card.Link>Yes({singleAnswer.helpfulness})</Card.Link>
              </small>
            </p>
          </div>
        );
      })}</div>
    );
  }
}


export default Answers;