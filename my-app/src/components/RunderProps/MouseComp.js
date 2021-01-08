import React, { Component } from "react";
import "./index.css";

export default class MouseComp extends Component {
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
        {this.props.runder(this.state)}
      </div>
    );
  }
}
