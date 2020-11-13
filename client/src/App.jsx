
import React, { Component } from 'react';
import RatingsAndReviews from './RatingsAndReviews/RatingsAndReviews';
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
        <div>YourComponentHere</div>
        <div><RatingsAndReviews product={this.state.selectedProduct} /></div>
      </div>
    );
  }

}

export default App;