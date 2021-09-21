import React from "react";

export default function CompositionExample(props) {
  return (
    <div
      style={{
        border: `1px solid ${props.color}`,
        padding: "16px",
      }}
    >
      {props.children}
    </div>
  );
}
