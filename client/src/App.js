
import React, { Component } from 'react';
import NavBar from './NavBar.jsx';
import axios from 'axios';
import ProductOverview from './OverviewComponents/ProductOverview.jsx';
import RatingsAndReviews from './RatingsReviewsComponents/RatingsAndReviews.jsx';
import RelatedItemsComparisonList from './RealatedComparisonComponents/RelatedItemsComparisonList.jsx';
import { Products, productStyles, ReviewsForProductFive } from './dummyData.js';
import QuestionsAnswersComponents from './QuestionsAndAnswerComponents/QuestionAnswerList.jsx';
import OutfitItemList from './RealatedComparisonComponents/OutfitItemList.jsx';
import { GetReviews, GetReviewMetaData, } from './Utilities/axiosHelpers';


class App extends Component {
  constructor () {
    super();
    this.state = {
      products: Products,
      selectedProduct: Products[0],
      selectedPoductStyles: productStyles,
      reviews: ReviewsForProductFive.results,
      reviewMetaData: {
        'product_id': '1',
        'ratings': {
          '1': 1,
          '2': 2,
          '3': 22,
          '4': 7,
          '5': 7
        },
        'recommended': {
          '0': 14,
          '1': 24,
          'null': 1
        },
        'characteristics': {
          'Fit': {
            'id': 1,
            'value': '2.2069'
          },
          'Length': {
            'id': 2,
            'value': '2.2500'
          },
          'Comfort': {
            'id': 3,
            'value': '2.4500'
          },
          'Quality': {
            'id': 4,
            'value': '2.4000'
          }
        }},
    };
    this.handleProductChange = this.handleProductChange.bind(this);
  }

  componentDidMount() {
    debugger;
    Promise.all([
      GetReviews(3),
      GetReviewMetaData(3)
    ])
      .then((results) => {
        this.setState({
          reviews: results[0][0].data.results,
          reviewMetaData: results[0][1].data.data
        });
      });
  }

  // find the ratings of item method.
  handleProductChange(productInfo, stylesInfo) {
    this.setState({
      selectedProduct: productInfo,
      selectedPoductStyles: stylesInfo
    });
  }
  render () {
    return (
      <div>
        <NavBar />
        <ProductOverview selectedProduct={this.state.selectedProduct} styles={this.state.selectedPoductStyles} />
        <div><RelatedItemsComparisonList selectedProduct={this.state.selectedProduct} productChangeMethod={this.handleProductChange}/></div>
        <div><OutfitItemList selectedProduct={this.state.selectedProduct}/></div>
        <div><QuestionsAnswersComponents selectedProduct = {this.state.selectedProduct}/></div>
        <div><RatingsAndReviews productId={this.state.selectedProduct.id} reviews={this.state.reviews} reviewMetaData={this.state.reviewMetaData}/></div>
      </div>
    );
  }

}

export default App;
