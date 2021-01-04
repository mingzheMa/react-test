import React, { Component } from "react";
import StateComp2 from "./StateComp2";

export default class StateComp extends Component {
  render() {
    return (
      <div>
        我是1：{this.props.name}，{this.props.age}
        <StateComp2 {...this.props} />
      </div>
    );
  }
}
