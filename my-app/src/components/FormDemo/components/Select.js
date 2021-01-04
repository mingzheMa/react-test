import React from "react";

export default function Select(props) {
  const optionsDom = props.options.map(o => (
    <option value={o.value} key={o.label}>
      {o.label}
    </option>
  ));

  return (
    <select onChange={e => props.onChange(e.target.value)}>{optionsDom}</select>
  );
}
