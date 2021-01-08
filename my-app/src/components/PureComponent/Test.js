import React, { Component } from "react";
import PureComponent from "./index";

export default class Test extends Component {
  state = {
    aaa: 123,
    bbb: 0
  };

  render() {
    return (
      <>
        <PureComponent aaa={this.state.aaa}></PureComponent>
        bbb：{this.state.bbb}
        <button
          onClick={() => {
            this.setState({ bbb: this.state.bbb + 1 });
          }}>
          setState{"{}"}
        </button>
      </>
    );
  }
}
