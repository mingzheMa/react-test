import React, { PureComponent } from "react";

// react提供了PureComponent的类，继承该类则把当前组件改为纯组件
export default class index extends PureComponent {
  render() {
    console.log("runder comp");
    return <div>{this.props.aaa}</div>;
  }
}
