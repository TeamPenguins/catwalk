import React from 'react';
import Card from 'react-bootstrap/Card';
import StarList from '../../Utilities/StarList.jsx';
import { Row, Col, Container } from 'react-bootstrap';
import ReviewResponse from './ReviewResponse.jsx';

const ReviewTile = ({ review }) => (
  <Card border="0" key={review.review_id}>
    <Card.Body>
      <Row>
        <Col>
          <StarList rating={review.rating + '.00'} style={{ textAlign: 'left'}}/>
        </Col>
        <Col>
          <p style={{ textAlign: 'right', fontSize: 'small' }}>{`${review.reviewer_name}, ${review.date.slice(0, review.date.indexOf('T'))}`}</p>
        </Col>
      </Row>
      <Card.Title>
        {review.summary}
      </Card.Title>
      <Card.Text>{review.body}</Card.Text>
      <Card.Text>
        {review.response ? (
          <ReviewResponse response={review.response}/>
        ) : null}
      </Card.Text>
      <Card.Text>
        Was this review helpful?
      </Card.Text>
    </Card.Body>
  </Card>
);

export default ReviewTile;


// const ReviewTile = ({ review }) => (
//   <Card border="light" key={review.review_id}>
//     <Card.Body>
//       <StarList rating={review.rating + '.00'} style={{ textAlign: 'left' }}/>
//       <Card.Text style={{ textAlign: 'right' }}>{`${review.reviewer_name}, ${review.date.slice(0, review.date.indexOf('T'))}`}</Card.Text>
//       <Card.Title>
//         {review.summary}
//       </Card.Title>
//       <Card.Text>{review.body}</Card.Text>
//     </Card.Body>
//     Was this review helpful?
//   </Card>
// );

// export default ReviewTile;