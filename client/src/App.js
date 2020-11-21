
import React, { Component } from 'react';
import NavBar from './NavBar.jsx';
import ProductOverview from './OverviewComponents/ProductOverview.jsx';
import RatingsAndReviews from './RatingsReviewsComponents/RatingsAndReviews.jsx';
import RelatedItemsComparisonList from './RealatedComparisonComponents/RelatedItemsComparisonList.jsx';
import { Products, productStyles } from './dummyData.js';
import QuestionsAnswersComponents from './QuestionsAndAnswerComponents/QuestionAnswerList.jsx';
import OutfitItemList from './RealatedComparisonComponents/OutfitItemList.jsx';
import { GetReviewMetaData, GetReviews } from '..Utilities/axiosHelpers.js';


class App extends React.Component {
  constructor () {
    super();
    this.state = {
      products: Products,
      selectedProduct: Products[0],
      selectedPoductStyles: productStyles,
      reviews: [],
      reviewsMetaData: {},
    };
    this.handleProductChange = this.handleProductChange.bind(this);
  }

  componentDidMount() {
    Promise.all([
      GetReviews(this.state.selectedProduct.id),
      GetReviewMetaData(this.state.selectedProduct.id)
    ])
      .then((reviewData) => this.setState({
        reviews: reviewData[0].data.results,
        reviewsMetaData: reviewData[1].data.results,
      }))
      .catch(console.log());
  }

  componentDidUpdate(prevState) {
    if (prevState.selectedProduct.id !== this.state.selectedProduct.id ) {
      Promise.all([
        GetReviews(this.state.selectedProduct.id),
        GetReviewMetaData(this.state.selectedProduct.id)
      ])
        .then((reviewData) => this.setState({
          reviews: reviewData[0].data.results,
          reviewsMetaData: reviewData[1].data.results,
        }))
        .catch(console.log());
    }
  }

  // find the ratings of item method.
  handleProductChange(productInfo, stylesInfo) {
    this.setState({selectedProduct: productInfo});
    this.setState({selectedPoductStyles: stylesInfo});
  }
  render () {
    return (
      <div>
        {/* <NavBar />
        <ProductOverview selectedProduct={this.state.selectedProduct} styles={this.state.selectedPoductStyles} />
        <div><RelatedItemsComparisonList selectedProduct={this.state.selectedProduct} productChangeMethod={this.handleProductChange}/></div>
        <div><OutfitItemList selectedProduct={this.state.selectedProduct}/></div>
        <div><QuestionsAnswersComponents selectedProduct = {this.state.selectedProduct}/></div> */}
        <div><RatingsAndReviews productId={this.state.selectedProduct.id} reviews={this.state.reviews} reviewsMetaData={this.state.reviewsMetaData}/></div>
      </div>
    );
  }

}

export default App;