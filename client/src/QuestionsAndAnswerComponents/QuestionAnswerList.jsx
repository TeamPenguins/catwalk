import React, {Component} from 'react';
import { questionsList, answerList } from '../dummyData.js';
import Question from './question.jsx';
import Answers from './answers.jsx';
import { Card, Container } from 'react-bootstrap';


class QuestionAnswerList extends Component {
  constructor({selectedProd}) {
    super({selectedProd});
    this.state = {
      productId: selectedProd.id,
    };

  }


  render() {

    return (
      <Container>
        <Card>
          <Card.Body>
            <Card.Title >Questions and Answers</Card.Title>

            <Question productId = {this.state.productId}/>

          </Card.Body>
        </Card>
      </Container>
    );

  }


}



// const QuestionList = ({selectedProd}) => {



//   return (

//     <div>
//       {console.log(selectedProd)}
//       <h5>Questions and Answers</h5>
//       <div>
//         How much is this product?
//         <ul>
//           <li>WAY TO MUCH!!!</li>
//           <li>it pretty affordable, $20.</li>
//         </ul>
//       </div>
//     </div>
//   );
// };

export default QuestionAnswerList;