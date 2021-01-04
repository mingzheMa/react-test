import React from "react";
import group from "./HOC/group";

import PT from "prop-types";

function RadioGroup(props) {
  return (
    <label key={props.info.value}>
      <input
        type="radio"
        name={props.name}
        checked={props.value === props.info.value}
        onChange={e => props.onChange(props.info.value)}
      />
      {props.info.label}
    </label>
  );
}

RadioGroup.propTypes = {
  name: PT.string,
  value: PT.string,
  onChange: PT.func,
  info: PT.shape({
    label: PT.string,
    value: PT.string
  })
};

export default group(RadioGroup);
