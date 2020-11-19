import React, { Component } from 'react';
import './App.css';

import Button from './components/button';
import Counter from './components/counter';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    };
  }

  handleIncrement = () => {
    this.setState((prevState) => {
      return { counter: prevState.counter + 1 };
    });
  }

  handleDecrement = () => {
    this.setState((prevState) => {
      return { counter: prevState.counter - 1 };
    });
  }

  render() {
    return (
      <div className="App">
        <div>
          <Button text={'Incrementar'} click={this.handleIncrement} />
          <Button text={'Reducir'} click={this.handleDecrement} />
        </div>
        <Counter text={this.state.counter} />
      </div>
    );
  }
}

export default App;
