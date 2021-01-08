import React, { Component } from "react";
import { ctx } from "./context";

import FormItem from "./FormItem";
import FormInput from "./FormInput";
import FormSubmit from "./FormSubmit";

class Form extends Component {
  state = {
    form: this.props.form || {}
  };

  changeForm = (key, val) => {
    this.setState({
      form: {
        ...this.state.form,
        [key]: val
      }
    });
  };

  render() {
    return (
      <ctx.Provider
        value={{ form: this.state.form, changeForm: this.changeForm }}>
        <form>{this.props.children}</form>
      </ctx.Provider>
    );
  }
}

Form.Item = FormItem;
Form.Input = FormInput;
Form.Submit = FormSubmit;

export default Form;
