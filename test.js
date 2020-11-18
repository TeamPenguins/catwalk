import React from 'react';
import axios from 'axios';
import {shallow, configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RatingsAndReviews from './client/src/RatingsReviewsComponents/RatingsAndReviews.jsx';
import ReviewsList from './client/src/RatingsReviewsComponents/components/ReviewsList.jsx';
import ReviewTile from './client/src/RatingsReviewsComponents/components/ReviewTile.jsx';
import ProductOverview from './client/src/OverviewComponents/ProductOverview.jsx';
import RelatedItemsAndComparisonList from './client/src/RealatedComparisonComponents/RelatedItemsComparisonList.jsx';



configure({ adapter: new Adapter() });



// RATINGS AND REVIEWS TEST SUITE

describe('Ratings And Reviews component', () => {

  const testRatingsAndReviews = mount(<RatingsAndReviews productId={2}/>);

  it('should exist', () => {
    expect(testRatingsAndReviews.exists()).toEqual(true);
  });
  /*
  TESTS TO ADD:
  - should render a list of reviews
  - should render the product breakdown
  - should update on selectedProduct change
  - should display a More Reviews button if more than 2 reviews exist
  - should NOT display a More Reviews button if 2 or less reviews exist
  - should only display the Add A Review button if no reviews exist
  - should update the reviews list on change in sort criteria
  */
});

describe('Reviews List component', () => {
  it('should render a review tile for each review', () => {
    return axios.get('http://3.21.164.220/reviews/?product_id=5')
      .then(data => {
        const testReviewsList = mount(<ReviewsList reviews={data.data.results}/>);
        expect(testReviewsList.find('ReviewTile').length).toEqual(data.data.results.length);
      });
    // .catch(err => console.log(err));
  });
});

describe('Review Tile component', () => {

  const singleReview =
  {
    'review_id': 12,
    'rating': 3,
    'summary': 'They\'re heavy but great',
    'recommend': 0,
    'response': '',
    'body': 'I like them but they run wide.',
    'date': '2019-04-13T00:00:00.000Z',
    'reviewer_name': 'thinfootjim',
    'helpfulness': 4,
    'photos': []
  };

  // Mount the component with some data, singleReview, passed in as a property
  const testReviewTile = mount(<ReviewTile review={singleReview}/>);


  // Test the behaviour of the component
  it('should exist', () => {
    expect(testReviewTile.exists()).toEqual(true);
  });

  it('should inherit the arguments passed in as props', () => {
    expect(testReviewTile.props().review).toBe(singleReview);
  });

  it('should use the summary from a review as the title', () => {
    expect(testReviewTile.find('CardTitle').props().children).toEqual('They\'re heavy but great');
  });

});

//Overview Test Suite

describe('Product Overview component', () => {

  const product = {
    'id': 1,
    'name': 'Camo Onesie',
    'slogan': 'Blend in to your crowd',
    'description': 'The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.',
    'category': 'Jackets',
    'default_price': '140',
  };

  const testProductOverview = mount(<ProductOverview selectedProduct={product}/>);

  it('should exist', () => {
    expect(testProductOverview.exists()).toEqual(true);
  });
});



// Related Items & Comparison Test Suite

// describe('Related Items Comparison List component', () => {
//   const selectedProduct = {
//     'id': 2,
//     'name': 'Bright Future Sunglasses',
//     'slogan': 'You\'ve got to wear shades',
//     'description': 'Where you\'re going you might not need roads, but you definitely need some shades. Give those baby blues a rest and let the future shine bright on these timeless lenses.',
//     'category': 'Accessories',
//     'default_price': '69'
//   };
//   const testRelatedItemsComparisonList = mount(<RelatedItemsAndComparisonList selectedProduct={selectedProduct}/>);

//   it('should exist', () => {
//     expect(testRelatedItemsComparisonList.exists()).toEqual(true);
//   });
// });

// Questions and Asnwers Test Suite

// xdescribe('Questions and Answers component', () => {

//   const testQuestionsAnswers = mount(<REPLACE_ME />);

//   it('should exist', () => {
//     expect(testQuestionsAnswers.exists()).toEqual(true);
//   });
// });
