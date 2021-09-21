import React, { Component } from "react";
import CompositionExample from "./compositionExample";

const newFuntion = () => {
  console.log("hello i am new funtion");
};

function anotherFunction() {
  console.log("Hello i am another function");
}

export default class TestTwoClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialNumber: 2,
      isClickedFirstTime: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(number) {
    // this.setState((prevState) => ({
    //   initialNumber: prevState.initialNumber + 1,
    // }));
    this.setState({ initialNumber: number });
  }
  handleFirstTimeClick = () => {
    this.setState((state) => ({
      isClickedFirstTime: !state.isClickedFirstTime,
    }));
  };

  render() {
    // if (this.state.isClickedFirstTime) {
    //   return <div>Hellio I am clicked for the first time.</div>;
    // }
    return (
      <div>
        <CompositionExample color="blue">
          {/* {this.state.isClickedFirstTime && (
          <div>This is number {this.state.initialNumber}</div>
        )} */}
          <div>
            {this.state.isClickedFirstTime
              ? "First time is Clicked"
              : "First time is not clicked"}
          </div>
          <div>
            {/* <button onClick={() => this.handleClick(8)}>
            Click Me for changing number
          </button> */}
            {!this.state.isClickedFirstTime ? (
              <button onClick={this.handleFirstTimeClick}>
                Click Me for the first time{" "}
              </button>
            ) : (
              <button onClick={this.handleFirstTimeClick}>
                Click Me for the second time{" "}
              </button>
            )}
          </div>
        </CompositionExample>
      </div>
    );
  }
}
