import React from 'react';
import Modal from 'react-bootstrap/Modal';


class ComparisonModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProduct: {},
      //selectedProductStyles | add
      //comparedProductStyles  | add
      comparedProductInfo: {},
      modalViewState: false
    };

    this.toggleModalViewState = this.toggleModalViewState.bind(this);
  }
  //toggles modal on and off
  toggleModalViewState () {
    this.setState({modalViewState: this.props.modalViewState});
  }
  componentDidUpdate() {
    if (this.props.modalViewState !== this.state.modalViewState) {
      this.toggleModalViewState();
    }
  }
  render () {
    return (
      <Modal
        show={this.state.modalViewState}
        onHide={() => this.setState(this.props.actionButtonMethod())}>
        <Modal.Body>
          <div>comparison table goes here</div>
        </Modal.Body>

      </Modal>
    );
  }
}

export default ComparisonModal;

