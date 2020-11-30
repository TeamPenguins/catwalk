
import React, {Component} from 'react';
import { Card, Col, Row } from 'react-bootstrap';


class SingleAnswer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noAnswer: this.props.noAnswer,
    };
  }

  render() {

    return (
      <div key={this.props.singleAnswer.answer_id} className='singleAnswerBody'>
        <div>
          <small>{this.props.singleAnswer.body}</small>
        </div>
        <Row>
          {this.props.singleAnswer.photos.map((currPhoto, index) => {
            return (
              <Col key={index} md={2}>
                <img alt={'photo describing ' + this.props.singleAnswer.body}src={currPhoto.url} style ={{height: 100, weidth: 100}}/>
              </Col>
            );
          })}
        </Row>
        <div>
          <small>
            by User{this.props.singleAnswer.answer_id} - {this.props.singleAnswer.answerer_name}, {this.props.singleAnswer.date.slice(0, 10)} |
            Helpful? <Card.Link>Yes({this.props.singleAnswer.helpfulness})</Card.Link>
          </small>
        </div>
      </div>
    );
  }
}


export default SingleAnswer;