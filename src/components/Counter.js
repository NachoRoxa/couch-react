import React, { Component } from "react";

/**
 * This is just for testing and understanding 
 * the behaviour of state and the Arrow Function
 * I didn't want to delete the file it could help
 * someone just like it did to me :)
 */
class Counter extends Component {
  state = {value: 0};

  handleIncrement = () => {
    this.setState(prevState => ({
      value : prevState.value + 1
    }));
  };

  handleDecrement = () => {
    this.setState(prevState => ({
      value: prevState.value - 1
    }));
  };

  render() {
    return (
      <div>
        {this.state.value}
        <button onClick={this.handleIncrement}>+</button>
        <button onClick={this.handleDecrement}>-</button>
      </div>
    )
  }
}

export default Counter;
