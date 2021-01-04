import React, { Component } from "react";
import Timmer from "./Timmer";

export default class TimmerControl extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOver: false
    };
  }

  // 如果传递事件函数注意this指向
  onOver = e => {
    console.log(e);
    this.setState({
      isOver: true
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.isOver ? "倒计时完成" : "倒计时未完成"}</h1>
        <Timmer {...this.props} onOver={this.onOver} />
      </div>
    );
  }
}
