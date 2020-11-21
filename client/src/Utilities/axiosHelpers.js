import axios from 'axios';

// get reviews for a specific product id
const GetReviews = (productId) => {
  axios.get(`http://3.21.164.220/reviews/?product_id=${productId}`);
};

const GetReviewMetaData = (productId) => {
  axios.get(`http://3.21.164.220/reviews/?product_id=${productId}`);
};

module.exports = {
  GetReviews,
  GetReviewMetaData,
};