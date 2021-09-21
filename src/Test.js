import React from "react";
import CompositionExample from "./compositionExample";

export default function Test(props) {
  const { name, age, address } = props;
  return (
    <div>
      <div>Hello I am {name}</div>
      <CompositionExample color="green">
        <div>I am {age} years old.</div>
        <div> I live in {address}</div>
      </CompositionExample>
    </div>
  );
}
