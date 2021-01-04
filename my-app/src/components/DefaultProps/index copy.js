import React, { Component } from "react";
// import PropsTypes from 'props-types'

export default class DefaultProps extends Component {
  static defaultProps = {
    name: "marx",
    age: 22
  };

  render() {
    return (
      <div>
        name:{this.props.name}
        age:{this.props.age}
      </div>
    );
  }
}
