import axios from 'axios';

// get reviews for a specific product id
const GetReviews = (productId) => {
  return axios.get(`http://3.21.164.220/reviews/?product_id=${productId}`);
};

const GetReviewMetaData = (productId) => {
  return axios.get(`http://3.21.164.220/reviews/meta/?product_id=${productId}`);
};
export { GetReviews, GetReviewMetaData };