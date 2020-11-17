import React, {Component} from 'react';

class Answers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionId: this.props.questionId,
      answerList: [],
    };

  }

  fetchAnswerList(questId) {

    fetch(`http://3.21.164.220/qa/questions/${questId}/answers?count=2`)
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

  componentDidMount() {
    this.fetchAnswerList(this.state.questionId);
  }


  render() {
    return (
      <div> {this.state.answerList.map((singleAnswer) => {
        return (
          <div>
            A: {singleAnswer.body}
          </div>
        );
      })}</div>
    );
  }
}


export default Answers;