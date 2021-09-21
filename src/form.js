import React, { Component } from "react";

export default class FormExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      showInputValue: false,
    };
  }

  handleInputChange = (e) => {
    const { value } = e.target;
    this.setState({ value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState((state) => ({ showInputValue: true }));
  };

  render() {
    const { showInputValue } = this.state;
    return (
      <div>
        {showInputValue && <div> Input Value : {this.state.value}</div>}
        <form>
          <label>Name</label>

          <input
            type="text"
            value={this.state.value}
            onChange={this.handleInputChange}
          />
          <br />
          <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}
