import React, { Component } from "react";
import LifeCycleSun from "./LifeCycleSun1";

export default class LifeCycle extends Component {
  state = {
    n: 0
  };

  render() {
    return (
      <div>
        <LifeCycleSun n={this.state.n} />
        <button
          onClick={() => {
            this.setState({
              n: this.state.n + 1
            });
          }}>
          n+1
        </button>
      </div>
    );
  }
}
