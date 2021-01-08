import React, { Component } from "react";
import { ctx2 } from "./context";

export default class FormItem extends Component {
  render() {
    return (
      <div>
        <ctx2.Provider value={{ name: this.props.name || "" }}>
          <label>
            {this.props.label}
            {this.props.children}
          </label>
        </ctx2.Provider>
      </div>
    );
  }
}
