import React, { Component } from "react";

export default class ListAndKeys extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayNumbers: [],
    };
  }

  handleMapItems = (arr) => {
    const items = arr.map((item) => item * 2);
    this.setState({ displayNumbers: items });
  };

  handleFilterItems = (arr) => {
    const items = arr.filter((item) => item === 5);
    this.setState({ displayNumbers: items });
  };

  render() {
    const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
    const numbers = [1, 2, 3, 4, 5];
    return (
      <div>
        <ul>
          {fruits.map((fruit, index) => (
            <li key={`${index}-${fruit}`}>{fruit}</li>
          ))}
        </ul>
        <button onClick={() => this.handleFilterItems(numbers)}>
          Click me{" "}
        </button>
        <ul>
          {this.state.displayNumbers.map((num) => (
            <li>{num}</li>
          ))}
        </ul>
      </div>
    );
  }
}
