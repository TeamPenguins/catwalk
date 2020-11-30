import React from 'react';
import Card from 'react-bootstrap/Card';
import StarList from '../../Utilities/StarList.jsx';
import { Row, Col, Container } from 'react-bootstrap';
import ReviewResponse from './ReviewResponse.jsx';
import { Check2 } from 'react-bootstrap-icons';
import Helpfulness from './Helpfulness.jsx';
import ReviewPhotos from './ReviewPhotos.jsx';
import FormatDate from '../../Utilities/FormatDate.js';

const ReviewTile = ({ review }) => (
  <>
    <Card border="0" key={review.review_id}>
      <Card.Body>
        <Row>
          <Col>
            <StarList rating={review.rating + '.00'} style={{ textAlign: 'left'}}/>
          </Col>
          <Col>
            <p style={{ textAlign: 'right', fontSize: 'small' }}>{`${review.reviewer_name}, ${FormatDate(review.date)}`}</p>
          </Col>
        </Row>
        <Card.Title>
          {review.summary}
        </Card.Title>
        <Card.Text style={{fontSize: 'smaller'}}>{review.body}</Card.Text>
        <Card.Text>
          {review.photos.length > 0 ? (
            <ReviewPhotos photos={review.photos}/>
          ) : null}
        </Card.Text>
        <Card.Text>
          {review.recommend ? (
            <div>
              <Check2 size={20} style={{ verticalAlign: 'middle'}}/>
              <Card.Text style={{display: 'contents', fontSize: 'smaller'}}>
                {'  I recommend this product'}
              </Card.Text>
            </div>
          ) : null}
        </Card.Text>
        <Card.Text>
          {review.response && review.response !== 'null' ? (
            <ReviewResponse response={review.response}/>
          ) : null}
        </Card.Text>
        <Helpfulness helpfulness={review.helpfulness} reviewId={review.review_id}/>
      </Card.Body>
      <hr style={{ textAlign: 'center', marginLeft: '3%', color: 'black', marginTop: '0', marginBottom: '0', borderTopColor: 'currentcolor' }}></hr>
    </Card>
  </>
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