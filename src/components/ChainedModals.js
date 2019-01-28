import React, { Component } from 'react';
import ModalBackdrop from './ModalBackdrop';


class ChainedModals extends Component {
  state = {
    currIndex: 0,
    showModal1: false,
    showModal2: false,
    showModal3: false,
    showModal4: false,
  };

  render() {
    const { modalList } = this.props;
    const { currIndex, showModal1, showModal2, showModal3, showModal4 } = this.state;
    const ModalComponent = modalList[currIndex];

    return (
      <div>
        {showModal1 && <ModalBackdrop />}
        <ModalComponent
          step={currIndex + 1}
          onClickNext={this._handleClickNext}
          backdrop={false}
          show={showModal1}
          onHide={this._handleModalHide}
        />
        {showModal2 && <ModalBackdrop />}
        <ModalComponent
          step={currIndex + 1}
          onClickNext={this._handleClickNext}
          backdrop={false}
          show={showModal2}
          onHide={this._handleModalHide}
        />
        {showModal3 && <ModalBackdrop />}
        <ModalComponent
          step={currIndex + 1}
          onClickNext={this._handleClickNext}
          backdrop={false}
          show={showModal3}
          onHide={this._handleModalHide}
        />
        {showModal4 && <ModalBackdrop />}
        <ModalComponent
          step={currIndex + 1}
          onClickNext={this._handleClickNext}
          backdrop={false}
          show={showModal4}
          onHide={this._handleModalHide}
        />
      </div>
    );
  }

  _handleClickNext = () => {
    const { modalList } = this.props;
    const { currIndex } = this.state;

    if (currIndex < modalList.length - 1) {
      this.setState({currIndex: currIndex + 1});
    } else {
      this.setState({showModal: false});
    }
  };

  _handleModalHide = () => {
    this.setState({showModal: false});
  };
}

export default ChainedModals;
