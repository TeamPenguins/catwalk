
import React, { Component } from 'react';
import NavBar from './NavBar.jsx';
import ProductOverview from './OverviewComponents/ProductOverview.jsx';
import RatingsAndReviews from './RatingsReviewsComponents/RatingsAndReviews.jsx';
import RelatedItemsComparisonList from './RealatedComparisonComponents/RelatedItemsComparisonList.jsx';
import { Products } from './dummyData.js';
import QuestionsAnswersComponents from './QuestionsAndAnswerComponents/QuestionList.jsx';


class App extends React.Component {
  constructor () {
    super();
    this.state = {
      products: Products,
      selectedProduct: Products[0],
    };
    this.handleProductChange = this.handleProductChange.bind(this);
  }
  //find the ratings of item method.
  handleProductChange(productID) {
    this.setState({selectedProduct: productID});
  }
  render () {
    return (
      <div>
        <NavBar />
        <div><ProductOverview /></div>
        <div><RelatedItemsComparisonList selectedProduct={this.state.selectedProduct} productChangeMethod={this.handleProductChange}/></div>
        <div><RatingsAndReviews product={this.state.selectedProduct} /></div>
        <div><QuestionsAnswersComponents selectedProd = {this.state.selectedProduct}/></div>
      </div>
    );
  }

}

export default App;