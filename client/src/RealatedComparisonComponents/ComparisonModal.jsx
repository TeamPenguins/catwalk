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
          <h6 className="align-center">COMPARING</h6>
          <Row>
            <Col className="align-left"><h6>{this.state.selectedProduct.name}</h6></Col>
            <Col></Col>
            <Col className="align-right"><h6>{this.state.comparedProductInfo.name}</h6></Col>
          </Row>
          {
            this.state.allFeatureNames.map(feature => {
              return (
                <Row>
                  <Col className="align-left">{this.state.selectedProductFeatures[feature]}</Col>
                  <Col className="align-center">{feature}</Col>
                  <Col className="align-right">{this.state.comparedProductFeatures[feature]}</Col>
                </Row>
              );
            })
          }
          {/*
              map through allFeatureNames,
              each iteration create a row
                inside will be three columns
                  if the current feature name is a key in selected object features,
                  column one will be the value or checkmark
                second column will be the current feature name
                  if the curent feature name is  a key in compared product featurees
                    third column will be its value or checkmark
            */}

          {

          }

        </Modal.Body>

      </Modal>
    );
  }
}

export default ComparisonModal;

