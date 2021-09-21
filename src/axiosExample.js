import React, { Component } from "react";
import axios from "axios";

export default class AxiosExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
    };
  }

  componentDidMount() {
    const url = "https://jsonplaceholder.typicode.com/todos/";
    axios.get(url).then((response) => {
      const todoListFromResponse = response.data;
      this.setState({ todoList: todoListFromResponse });
    });
  }

  render() {
    const { todoList } = this.state;
    console.log("Hello", todoList);

    return (
      <div>
        <div>To DO List</div>

        {todoList.map((item) => (
          <div key={item.id}>{item.title}</div>
        ))}
      </div>
    );
  }
}
