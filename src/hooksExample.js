import React, { useState } from "react";

export default function HookExample() {
  const [number, setNumber] = useState(true);
  const [text, setInputValue] = useState("Aditi");
  return (
    <div>
      <div>Number is :{number}</div>
      <div> My name is: {text}</div>
      <button onClick={() => setNumber(false)}>Click Me</button>
      <button onClick={() => setInputValue("Nepal")}>Click for Name</button>
    </div>
  );
}
