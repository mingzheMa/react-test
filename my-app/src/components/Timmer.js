import React, { Component } from "react";

export default class Timmer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      num: props.num
    };

    const timmer = setInterval(() => {
      this.setState({
        num: this.state.num - 1
      });

      if (!this.state.num) {
        clearInterval(timmer);
        props.onOver("完成倒计时");
      }
    }, 1000);
  }

  render() {
    return <h1>倒计时：{this.state.num}</h1>;
  }
}
