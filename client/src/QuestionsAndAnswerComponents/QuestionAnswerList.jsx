import React, {Component} from 'react';
import { questionsList, answerList } from '../dummyData.js';
import Question from './question.jsx';
import Answers from './answers.jsx';


class QuestionAnswerList extends Component {
  constructor({selectedProd}) {
    super({selectedProd});
    this.state = {
      productId: selectedProd.id,
    };

  }


  render() {

    return (
      <div>
        <h5>Questions and Answers</h5>
        <div>
          <Question productId = {this.state.productId}/>
        </div>
        <div>

        </div>
      </div>
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