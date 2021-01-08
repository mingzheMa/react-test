import React, { Component } from "react";
import "./index.css";

export default class Comp2 extends Component {
  boxRef = React.createRef();

  state = {
    top: 0,
    left: 0
  };

  render() {
    return (
      <div
        ref={this.boxRef}
        className="box"
        onMouseMove={e => {
          this.setState({
            top: e.pageY - this.boxRef.current.offsetTop,
            left: e.pageX - this.boxRef.current.offsetLeft
          });
        }}>
        top: {this.state.top}
        left: {this.state.left}
      </div>
    );
  }
}
