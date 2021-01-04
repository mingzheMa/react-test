import React from "react";

export default function DefaultProps(props) {
  return (
    <div>
      name:{props.name}
      age:{props.age}
    </div>
  );
}

DefaultProps.defaultProps = {
  name: "marx",
  age: 23
};
