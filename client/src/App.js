
import React, { Component } from 'react';
import RatingsAndReviews from './RatingsReviewsComponents/RatingsAndReviews.jsx';
import RelatedItemsComparisonList from './RealatedComparisonComponents/RelatedItemsComparisonList.jsx';
import { Products } from './dummyData.js';


class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      products: Products,
      selectedProduct: Products[0],
    };
  }

  render () {
    return (
      <div>
        <div>YourComponentHere</div>
        <div>YourComponentHere</div>
        <div><RelatedItemsComparisonList products={this.state.products}/></div>
        <div><RatingsAndReviews product={this.state.selectedProduct} /></div>
      </div>
    );
  }

}

export default App;