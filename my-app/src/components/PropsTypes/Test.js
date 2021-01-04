import React, { Component } from "react";
import Form from "./index";

export default class Test extends Component {
  state = {
    num: 123,
    str: "str",
    bool: true,
    fn: () => "() => {}",
  };

  render() {
    return (
      <div>
        <Form {...this.state} />
      </div>
    );
  }
}
