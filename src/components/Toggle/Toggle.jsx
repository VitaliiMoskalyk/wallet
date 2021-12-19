import { Component } from "react";

class Toggle extends Component {
  state = { isShown: false };

  toggle = () => {
    this.setState((prevState) => ({ isShown: !prevState.isShown }));
  };
  render() {
    return (
      <>
        <button type="button" onClick={this.toggle}>
          {this.state.isShown ? "hide" : "show"}
        </button>

        {this.state.isShown && (
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
          </ul>
        )}
      </>
    );
  }
}

export default Toggle;
