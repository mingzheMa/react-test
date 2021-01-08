import React, { Component } from "react";
import "./index.css";

export default class Comp1 extends Component {
  render() {
    return (
      <div
        className="box-sub"
        style={{
          top: this.props.top - 50,
          left: this.props.left - 50
        }}
      />
    );
  }
}
