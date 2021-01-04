import React from "react";

export default function Input(props) {
  return (
    <input value={props.value} onChange={e => props.onChange(e.target.value)} />
  );
}
