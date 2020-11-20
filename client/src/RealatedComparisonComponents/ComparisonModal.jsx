import React from 'react';
import Modal from 'react-bootstrap/Modal';
class ComparisonModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProduct: {},
      comparedProductInfo: {},
      modalViewState: false
    };
    this.toggleModalViewState = this.toggleModalViewState.bind(this);
  }

  toggleModalViewState () {
    this.setState({modalViewState: this.props.modalViewState});
  }
  componentDidUpdate() {
    // if (this.props.comparedProductInfo !== this.state.comparedProductInfo) {
    //   this.setState({comparedProductInfo: this.props.comparedProductInfo});
    // }
    if (this.props.modalViewState !== this.state.modalViewState) {
      this.toggleModalViewState();
    }
  }
  render () {
    return (
      <Modal
        show={this.state.modalViewState}
        onHide={() => this.setState(this.props.actionButtonMethod())}>

      </Modal>
    );
  }


}

/*
modalViewState={this.state.showModal}
comparedProductInfo={this.state.comparedProductInfo} */

export default ComparisonModal;

