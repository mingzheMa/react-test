import React, { Component } from "react";
import Ball from "./Ball";
import { random } from "../libs/util";

export default class Balls extends Component {
  constructor() {
    super();
    this.state = {
      balls: []
    };

    const timmer = setInterval(() => {
      if (this.state.balls.length === 20) {
        clearInterval(timmer);
      }

      const size = random(50,150)

      const config = {
        frame:60,
        x: 500,
        y: 500,
        width: size,
        height: size,
        bg: `rgb(${random(0, 256)},${random(0, 256)},${random(0, 256)})`,
        xSpeed: random(-1, 1) > 0 ? random(100,300) : -random(100,300),
        ySpeed: random(-1, 1) > 0 ? random(100,300) : -random(100,300)
      };

      this.setState({
        balls: this.state.balls.concat(
          <Ball {...config} key={this.state.balls.length} />
        )
      });
    }, 500);
  }

  render() {
    return <div>{this.state.balls}</div>;
  }
}
