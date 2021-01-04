import React, { Component } from "react";
import ClassComp from "./ClassComp";
import FuncComp from "./FuncComp";
import didMount from "./HOC/didMount";
import runder from "./HOC/runder";

const LogCC = runder(didMount(ClassComp));
const LogFC = runder(didMount(FuncComp));

export default class Test extends Component {
  render() {
    return (
      <div>
        <LogCC aaa="123" />
        <LogFC aaa="234" />
      </div>
    );
  }
}
