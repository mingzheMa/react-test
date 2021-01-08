import React, { Component } from "react";
import "./index.css";

export default class Comp2 extends Component {
  render() {
    return (
      <>
        top: {this.props.top}
        left: {this.props.left}
      </>
    );
  }
}
