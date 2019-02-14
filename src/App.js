import React, { Component } from 'react';
import './App.css';
import Modal from './Components/UI/Modal/Modal.js';
import ButtonRow from "./Components/UI/ButtonRow/ButtonRow";
import Alert from './Components/UI/Alert/Alert.js';

class App extends Component {

  state = {
    purchasable: true,
    purchasing: true
};


  purchaseCancelHandler = () => {
    this.setState({purchasing: false});
  };

  purchaseCloseHandler = () => {
    this.setState({purchasable: false});
  };

  purchaseContinueHandler = () => {
    alert('You continued!');
  };




  render() {

      const buttons = [
            {type: 'success', label: 'Continue', clicked: this.purchaseContinueHandler},
            {type: 'danger', label: 'Close', clicked: this.purchaseCancelHandler}
        ];

    return (
      <div className="App">
          <Modal show={this.state.purchasing} cancel={this.purchaseCancelHandler} title="Some kinda modal title" closed={this.purchaseCancelHandler}>
                <p>This is modal content</p>
                <ButtonRow buttons={buttons}/>
          </Modal>
          <Alert show={this.state.purchasable} type='warning' dismiss={this.purchaseCloseHandler}>
              This is a warning type alert
          </Alert>
          <Alert show={this.state.purchasable} type='danger'>
              This is a danger type alert
          </Alert>

      </div>
    );
  }
}

export default App;
