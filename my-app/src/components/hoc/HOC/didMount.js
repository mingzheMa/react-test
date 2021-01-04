import React, { Component } from "react";

export default function log(Comp) {
  return class DidMount extends Component {
    componentDidMount() {
      console.log(`组件${Comp.name}挂载`);
    }

    render() {
      return <Comp {...this.props} />;
    }
  };
}
