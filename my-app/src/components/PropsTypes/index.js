import React, { Component } from "react";
import PT from "prop-types";

export default class DefaultProps extends Component {
  static propTypes = {
    num: PT.number.isRequired,
    str: PT.string.isRequired,
    bool: PT.bool.isRequired,
    fn: PT.func.isRequired
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <p>{this.props.num}</p>
        <p>{this.props.str}</p>
        <p>{`${this.props.bool}`}</p>
        <p>{this.props.fn()}</p>
      </div>
    );
  }
}
