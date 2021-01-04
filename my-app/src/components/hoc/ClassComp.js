import React, { Component } from "react";

export default class ClassComp extends Component {
  render() {
    return <div>我是一个类组件{this.props.aaa}</div>;
  }
}
