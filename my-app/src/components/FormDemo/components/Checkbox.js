import React from "react";
import PT from "prop-types";

export default function Checkbox(props) {
  return (
    <label>
      <input type="checkbox" checked={props.checked} onChange={props.onChange} />
      {props.label}
    </label>
  );
}

Checkbox.propTypes = {
  checked: PT.bool.isRequired,
  label: PT.string.isRequired,
  onChange: PT.func
};
