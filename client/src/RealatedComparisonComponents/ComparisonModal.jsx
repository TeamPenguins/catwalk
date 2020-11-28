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
      if (featureObj.value === 'null') {
        mappedFeatures[featureObj.feature] = '';
      } else {
        mappedFeatures[featureObj.feature] = featureObj.value;
      }
    });
    return mappedFeatures;
  }
  updateProductInfoInState() {
    this.setState({
      comparedProductInfo: this.props.comparedProductInfo,
      selectedProduct: this.props.selectedProductInfo
    });
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
        onHide={() => this.setState(this.props.actionButtonMethod())}
        dialogClassName="modal"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Body>
          <Row className="comparing"><Col>COMPARING</Col></Row>
          <Row className="sticky">
            <Col className="align-left">{this.state.selectedProduct.name}</Col>
            <Col/>
            <Col className="align-right">{this.state.comparedProductInfo.name}</Col>
          </Row>
          <Row className="spacer" />
          {
            this.state.allFeatureNames.map(feature => {
              return (
                <Row>
                  <Col className="feature align-left">{this.state.selectedProductFeatures[feature]}</Col>
                  <Col className="feature align-center">{feature}</Col>
                  <Col className="feature align-right">{this.state.comparedProductFeatures[feature]}</Col>
                </Row>
              );
            })
          }
        </Modal.Body>

      </Modal>
    );
  }
}

export default ComparisonModal;

