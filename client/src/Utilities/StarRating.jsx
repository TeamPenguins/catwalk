import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CalculateRating from './calculateRating.js';
import StarList from './StarList.jsx';

const StarRating = (props) => {
  const averageRating = CalculateRating(props.ratings);
  return (
    <Row>
      {props.includeNumber === 1 ? (
        <h1>{(averageRating).slice(0, averageRating)}</h1>
      ) : null}
      <Col>
        <StarList rating={averageRating} />
      </Col>
    </Row>
  );
};


export default StarRating;


// class StarRating extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       starRating: '0.00',
//     };
//   }

//   componentDidMount() {
//     this.setState({starRating: CalculateRating(this.props.ratings)});
//   }

//   componentDidUpdate(prevProps) {
//     if (prevProps.ratings !== this.props.ratings) {
//       this.setState({starRating: CalculateRating(this.props.ratings)});
//     }
//   }

//   render() {
//     return (
//       <Container>
//         <Row>
//           {this.props.includeNumber === 1 ? (
//             <h1>{(this.state.starRating).slice(0, this.state.starRating.length - 1)}</h1>
//           ) : null}
//           <StarList rating={this.state.starRating} />
//         </Row>
//       </Container>
//     );
//   }
// }

// export default StarRating;











