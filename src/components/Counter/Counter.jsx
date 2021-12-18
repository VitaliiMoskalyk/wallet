import { Component } from "react";

class Counter extends Component {
  state = { value: 0 };

  HandleIncrement = () => {
    this.setState((prevState) => {
      return { value: prevState.value + 1 };
    });
  };

  HandleDecrement = () => {
    this.setState((prevState) => {
      return { value: prevState.value - 1 };
    });
  };

  render() {
    return (
      <>
        <h1>{this.state.value}</h1>
        <button type="button" onClick={this.HandleIncrement}>
          +
        </button>
        <button type="button" onClick={this.HandleDecrement}>
          -
        </button>
      </>
    );
  }
}

export default Counter;
