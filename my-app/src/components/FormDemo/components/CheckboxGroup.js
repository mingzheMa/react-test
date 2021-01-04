import React from "react";
import PT from "prop-types";
import Checkbox from "./Checkbox";
import group from "./HOC/group";
function CheckboxGroup(props) {
  function setValue(e, value) {
    let values = [];
    if (e.target.checked) {
      values = [...props.value, value];
    } else {
      values = props.value.filter(v => v !== value);
    }
    props.onChange && props.onChange(values);
  }

  return (
    <Checkbox
      key={props.info.value}
      checked={props.value.includes(props.info.value)}
      label={props.info.label}
      onChange={e => setValue(e, props.info.value)}
    />
  );
}

CheckboxGroup.propTypes = {
  value: PT.arrayOf(PT.string).isRequired,
  info: PT.shape({
    label: PT.string,
    value: PT.string
  }).isRequired,
  onChange: PT.func
};

export default group(CheckboxGroup);
