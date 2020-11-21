import React from 'react';
import Modal from 'react-bootstrap/Modal';
import {Row, Col} from 'react-bootstrap';
import unique from '../Utilities/unique';


class ComparisonModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProduct: {},
      comparedProductInfo: {},
      selectedProductFeatures: {},
      comparedProductFeatures: {},
      allFeatureNames: [],
      modalViewState: false
    };

    this.toggleModalViewState = this.toggleModalViewState.bind(this);
    this.updateFeaturesInState = this.updateFeaturesInState.bind(this);
    this.remapFeaturesInfo = this.remapFeaturesInfo.bind(this);
    this.updateProductInfoInState = this.updateProductInfoInState.bind(this);
  }
  // breaks down an array of features objects into one object with unique 'feature' keys.
  // featureObj['feature'] = key
  // featureObj['value'] = value
  remapFeaturesInfo (rawProductFeatures) {
    var mappedFeatures = {};
    rawProductFeatures.forEach((featureObj) => {
      mappedFeatures[featureObj.feature] = featureObj.value;
    });
    return mappedFeatures;
  }
  updateProductInfoInState() {
    this.setState({
      comparedProductInfo: this.props.comparedProductInfo,
      selectedProduct: this.props.selectedProductInfo
    });
    //this is updateing
    console.log( 'comparedProductInfo', this.props.comparedProductInfo);
    console.log('selectedProduct', this.props.selectedProductInfo);

  }
  //creates an array of all combined feature names.
  updateFeaturesInState (selectedProductFeatures, comparedProductFeatures) {

    selectedProductFeatures = this.remapFeaturesInfo(selectedProductFeatures);
    comparedProductFeatures = this.remapFeaturesInfo(comparedProductFeatures);

    var allFeatureNames = [
      ...Object.keys(selectedProductFeatures),
      ...Object.keys(comparedProductFeatures)
    ];
    this.setState({
      allFeatureNames: unique(allFeatureNames),
      selectedProductFeatures: selectedProductFeatures,
      comparedProductFeatures: comparedProductFeatures
    });
  }
  //toggles modal on and off
  toggleModalViewState () {
    this.setState({modalViewState: this.props.modalViewState});
  }
  componentDidUpdate() {
    if (this.props.modalViewState !== this.state.modalViewState) {
      debugger;
      this.updateProductInfoInState();
      this.updateFeaturesInState(this.props.selectedProductInfo.features, this.props.comparedProductInfo.features);
      this.toggleModalViewState();
    }
  }

  render () {
    return (
      <Modal
        show={this.state.modalViewState}
        onHide={() => this.setState(this.props.actionButtonMethod())}>
        <Modal.Body>
          <h6>COMPARING</h6>
          <Row>
            <Col>product1</Col>
            <Col>product2</Col>
            {/*

            findAllFeatureNames(selectedProduct.features, comparedProductInfo.features)
            create a col, map through allFeatures state, create a row for each, check if current

            remap product info for both products. combine their keys.
            map through the combined keys. creating one row at a time

            map through and apply checks for product 1
            map through and display feature names,
            map through and apply values for product 2
            */}

          </Row>
          {

          }

        </Modal.Body>

      </Modal>
    );
  }
}

export default ComparisonModal;

