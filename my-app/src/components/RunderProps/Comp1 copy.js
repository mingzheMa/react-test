import React, { Component } from "react";
import "./index.css";

export default class Comp1 extends Component {
  boxRef = React.createRef();

  state = {
    top: 100,
    left: 100
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
        <div
          className="box-sub"
          style={{
            top: this.state.top - 50,
            left: this.state.left - 50
          }}
        />
      </div>
    );
  }
}
