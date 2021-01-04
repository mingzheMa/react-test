import React, { Component } from "react";

export default function runder(Comp) {
  return class Runder extends Component {
    render() {
      console.log(`组件${Comp.name}渲染`);
      return <Comp {...this.props} />;
    }
  };
}
