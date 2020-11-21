
import React, { Component } from 'react';
import NavBar from './NavBar.jsx';
import ProductOverview from './OverviewComponents/ProductOverview.jsx';
import RatingsAndReviews from './RatingsReviewsComponents/RatingsAndReviews.jsx';
import RelatedItemsComparisonList from './RealatedComparisonComponents/RelatedItemsComparisonList.jsx';
import { Products, productStyles } from './dummyData.js';
import QuestionsAnswersComponents from './QuestionsAndAnswerComponents/QuestionAnswerList.jsx';
import OutfitItemList from './RealatedComparisonComponents/OutfitItemList.jsx';
import { Nav } from 'react-bootstrap';


class App extends React.Component {
  constructor () {
    super();
    this.state = {
      products: Products,
      selectedProduct: Products[0],
      selectedPoductStyles: productStyles

    };
    this.handleProductChange = this.handleProductChange.bind(this);
  }
  //find the ratings of item method.
  handleProductChange(productInfo, stylesInfo) {
    this.setState({selectedProduct: productInfo});
    this.setState({selectedPoductStyles: stylesInfo});
  }
  render () {
    return (
      <div>
        <NavBar />
        <ProductOverview selectedProduct={this.state.selectedProduct} styles={this.state.selectedPoductStyles} />
        <div><RelatedItemsComparisonList selectedProduct={this.state.selectedProduct} productChangeMethod={this.handleProductChange}/></div>
        <div><OutfitItemList selectedProduct={this.state.selectedProduct}/></div>
        <div><QuestionsAnswersComponents selectedProduct = {this.state.selectedProduct}/></div>
        <div><RatingsAndReviews productId={this.state.selectedProduct.id} /></div>
      </div>
    );
  }

}

export default App;