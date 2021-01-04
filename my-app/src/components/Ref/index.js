import React, { Component } from "react";
import Box from "./components/Box";
import runder from "./HOC/runder";
import didMount from "./HOC/didMount";

// HOC中使用ref会发现ref指向HOC，这并不是我们想看到的，应该指向组件（Box）本身，我们需要就改下HOC
const LogBox = didMount(runder(Box));

export default class Ref extends Component {
  logBoxRef = React.createRef();

  componentDidMount() {
    console.log(this.logBoxRef);
  }

  render() {
    return (
      <div>
        <LogBox ref={this.logBoxRef} />
      </div>
    );
  }
}
