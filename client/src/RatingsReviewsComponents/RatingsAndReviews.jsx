import React from 'react';
import axios from 'axios';
import ReviewsList from './components/ReviewsList.jsx';
import ProductBreakdown from './components/ProductBreakdown.jsx';

const RatingsAndReviews = (props) => {
  return (
    <div className="container" id="ratings-and-reviews">
      <div className="row">
        <div className="col">
          <p>Ratings & Reviews</p>
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <ProductBreakdown reviewMetaData={props.reviewMetaData} />
        </div>
        <div className="col-8">
          <ReviewsList reviews={props.reviews} />
          <div className="row">
            <div className="col">
              {props.reviews.length > 0 ? (
                <button type="button" className="btn btn-outline-secondary">MORE REVIEWS</button>
              ) : null}
              <button type="button" className="btn btn-outline-secondary">ADD A REVIEW</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default RatingsAndReviews;


// componentDidMount() {
//   Promise.all([
//     GetReviews(this.props.productId),
//     GetReviewMetaData(this.props.productId)
//   ])
//     .then((reviewData) => this.setState({
//       reviews: reviewData[0].data.results,
//       reviewsMetaData: reviewData[1].data.results,
//       productId: this.props.productId
//     }))
//     .catch(console.log());

// // Move axios request outside of componentDidMount for readibility
// axios.get(`http://3.21.164.220/reviews/?product_id=${this.props.productId}`)
//   .then(reviews => { // Going from data to reviewsList to be more descriptive about what we are getting back from the get request
//     this.setState({
//       reviews: reviews.data.results,
//       productId: this.props.productId
//     });
//   })
//   .catch(console.log());

// componentDidUpdate(prevProps) {
//   if (prevProps.productId !== this.props.productId ) {

//   }
//   //   Promise.all([
//   //     GetReviews(this.props.productId),
//   //     GetReviewMetaData(this.props.productId)
//   //   ])
//   //     .then((reviewData) => this.setState({
//   //       reviews: reviewData[0].data.results,
//   //       reviewsMetaData: reviewData[1].data.results,
//   //       productId: this.props.productId
//   //     }))
//   //     .catch(console.log());
//   // }

//   // if (prevProps.productId !== this.props.productId ) {
//   //   axios.get(`http://3.21.164.220/reviews/?product_id=${this.props.productId}`)
//   //     .then(data =>
//   //       this.setState({
//   //         reviews: data.data.results,
//   //         productId: this.props.productId
//   //       })
//   //     )
//   //     .catch(console.log());
//   // }
// }
