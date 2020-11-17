import React, {Component} from 'react';
import Answers from './answers.jsx';

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      productId: this.props.productId,
    };
    this.fetchQuestionList = this.fetchQuestionList.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  fetchQuestionList(prodId) {

    fetch(`http://3.21.164.220/qa/questions/?product_id=${prodId}&count=4`)
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

  componentDidMount() {
    this.fetchQuestionList(this.state.productId);
  }


  render() {
    return (
      <div>
        <div>{this.state.questions.map((singleQuestion) => {
          return (
            <div>Q: {singleQuestion.question_body}
              <Answers questionId = {singleQuestion.question_id}/>
            </div>
          );
        })}</div>

      </div>
    );
  }
}



export default Question;