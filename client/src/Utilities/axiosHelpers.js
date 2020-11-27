import axios from 'axios';

// get reviews for a specific product id
const GetReviews = (productId) => {
  return axios.get(`http://3.21.164.220/reviews/?product_id=${productId}`);
};

const GetReviewMetaData = (productId) => {
  return axios.get(`http://3.21.164.220/reviews/meta/?product_id=${productId}`);
};

const UpdateHelpfulnessCount = (reviewId) => {
  return axios.put(`http://3.21.164.220/reviews/${reviewId}/helpful`);
};

const UpdateReviewToReported = (reviewId) => {
  return axios.put(`http://3.21.164.220/reviews/${reviewId}/report`);
};

export { GetReviews, GetReviewMetaData, UpdateHelpfulnessCount, UpdateReviewToReported };