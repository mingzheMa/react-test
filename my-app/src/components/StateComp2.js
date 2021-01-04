import React, { Component } from "react";

export default class StateComp extends Component {
  render() {
    return (
      <div>
        我是2：{this.props.name}，{this.props.age}
      </div>
    );
  }
}
