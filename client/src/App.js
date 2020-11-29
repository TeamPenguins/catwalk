
import React, { Component } from 'react';
import NavBar from './NavBar.jsx';
import axios from 'axios';
import ProductOverview from './OverviewComponents/ProductOverview.jsx';
import RatingsAndReviews from './RatingsReviewsComponents/RatingsAndReviews.jsx';
import RelatedItemsComparisonList from './RealatedComparisonComponents/RelatedItemsComparisonList.jsx';
import OutfitItemList from './RealatedComparisonComponents/OutfitItemList.jsx';
import { Products, productStyles } from './dummyData.js';
import QuestionsAnswersComponents from './QuestionsAndAnswerComponents/QuestionAnswerList.jsx';
import { Nav } from 'react-bootstrap';
import { GetReviews, GetReviewMetaData } from './Utilities/axiosHelpers';

class App extends Component {
  constructor () {
    super();
    this.state = {
      products: Products,
      selectedProduct: Products[0],
      selectedPoductStyles: productStyles,
      reviews: [],
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
    this.componentDidMount = this.componentDidMount(this);
  }

  componentDidMount() {

    Promise.allSettled([
      GetReviews(3),
      GetReviewMetaData(3)
    ])
      .then((...results) => {
        console.log(results);
        this.setState({
          reviews: results[0][0].value.data.results,
          reviewMetaData: results[0][1].value.data
        });
      });
  }



  // find the ratings of item method.

  //updates currently selected product when a RelatedProductCard is clicked
  handleProductChange(productInfo, stylesInfo) {
    Promise.allSettled([
      GetReviews(productInfo.id),
      GetReviewMetaData(productInfo.id)
    ])
      .then((...results) => {
        console.log(results);
        this.setState({
          selectedProduct: productInfo,
          selectedPoductStyles: stylesInfo,
          reviews: results[0][0].value.data.results,
          reviewMetaData: results[0][1].value.data
        });
      });
  }
  render () {
    return (
      <div>
        <NavBar />
        <ProductOverview selectedProduct={this.state.selectedProduct} styles={this.state.selectedPoductStyles} ratings={this.state.reviewMetaData.ratings}/>
        <div><RelatedItemsComparisonList selectedProduct={this.state.selectedProduct} styles={this.state.selectedPoductStyles} productChangeMethod={this.handleProductChange} /></div>
        <div><OutfitItemList selectedProduct={this.state.selectedProduct}/> </div>
        <div><QuestionsAnswersComponents selectedProduct = {this.state.selectedProduct}/></div>
        <div><RatingsAndReviews selectedProduct={this.state.selectedProduct} reviews={this.state.reviews} reviewMetaData={this.state.reviewMetaData}/></div>
      </div>
    );
  }

}

export default App;
