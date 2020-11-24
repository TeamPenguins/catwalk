import React from 'react';

class Price extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      salePrice: undefined,
      originalPrice: undefined
    };
    this.checkForSalesPrice = this.checkForSalesPrice.bind(this);
    this.updatePrices = this.updatePrices.bind(this);
  }
  updatePrices(salePrice, originalPrice) {
    this.setState({salePrice: salePrice, originalPrice: originalPrice});
  }
  checkForSalesPrice () {
    var productStyles = this.props.styleInfo.results;
    var currentStyle;
    var salePrice;
    var originalPrice;

    if (productStyles) {
      for (currentStyle of productStyles) {
        debugger;
        if (currentStyle['default?']) {
          salePrice = Number(currentStyle.sale_price);
          originalPrice = Number(currentStyle.original_price);
          this.updatePrices(salePrice, originalPrice);
          break;
        } else {
          this.updatePrices(null, productStyles[0].original_price);
        }
      }
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.styleInfo.product_id !== this.props.styleInfo.product_id) {
      this.checkForSalesPrice();
    }
  }
  componentDidMount() {
    this.checkForSalesPrice();
  }

  render () {

    if (this.state.salePrices) {
      return (
        <div className="price-cut" >
          <p >${this.state.salePrice}</p>
          <p>&nbsp;&nbsp;</p>
          <p><s>${this.state.originalPrice}</s></p>
        </div>
      );
    } else {
      return (<div>${this.state.originalPrice}</div>);
    }
  }
}

export default Price;