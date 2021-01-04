import React, { Component } from "react";
import "./ball.css";

export default class Ball extends Component {
  viewWidth = window.innerWidth;
  viewHeight = window.innerHeight;

  default = {
    frame: 60,

    x: 0,
    y: 0,
    width: 100,
    height: 100,
    bg: "#000",
    xSpeed: 0,
    ySpeed: 0
  };

  constructor(props) {
    super(props);

    this.state = {
      frame: this.props.frame || this.default.frame,

      width: this.props.width || this.default.width,
      height: this.props.height || this.default.height,
      bg: this.props.bg || this.default.bg,
      xSpeed: this.props.xSpeed || this.default.xSpeed,
      ySpeed: this.props.ySpeed || this.default.ySpeed,
      x: this.props.x || this.default.x,
      y: this.props.y || this.default.y
    };

    setInterval(() => {
      this.run();
    }, 1000 / this.state.frame);
  }

  run() {
    let xSpeed = this.state.xSpeed;
    let ySpeed = this.state.ySpeed;
    let newX = this.state.x + xSpeed / this.state.frame;
    let newY = this.state.y + ySpeed / this.state.frame;

    if (newX + this.state.width >= this.viewWidth) {
      newX = this.viewWidth - this.state.width;
      xSpeed = -xSpeed;
    } else if (newX <= 0) {
      newX = 0;
      xSpeed = -xSpeed;
    }
    if (newY + this.state.height >= this.viewHeight) {
      newY = this.viewHeight - this.state.height;
      ySpeed = -ySpeed;
    } else if (newY <= 0) {
      newY = 0;
      ySpeed = -ySpeed;
    }

    this.setState({
      xSpeed,
      ySpeed,
      x: newX,
      y: newY
    });
  }

  render() {
    return (
      <div
        className="ball"
        style={{
          width: this.state.width,
          height: this.state.height,
          background: this.state.bg,
          top: this.state.y,
          left: this.state.x
        }}
      />
    );
  }
}
