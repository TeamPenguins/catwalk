import React, {Component} from 'react';
import { questionsList, answerList } from '../dummyData.js';

class QuestionAnswerList extends Component {
  constructor({selectedProd}) {
    super({selectedProd});
    this.state = {
      productId: selectedProd.id,
      questions: questionsList.results
    };
  }



  render() {

    return (
      <div>
        <h5>Questions and Answers</h5>
        <div>
          Q:{this.state.questions[0].question_body}
        </div>
        <div>
          A:{this.state.questions[0].answers['68'].body}
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