import React, { Component } from "react";
import { ctx } from "./context";

export default class FormSubmit extends Component {
  render() {
    return (
      <ctx.Consumer>
        {formVal => (
          <input
            type="button"
            value={this.props.children || "提交"}
            onClick={() => {
              this.props.submit && this.props.submit(formVal.form);
            }}
          />
        )}
      </ctx.Consumer>
    );
  }
}
