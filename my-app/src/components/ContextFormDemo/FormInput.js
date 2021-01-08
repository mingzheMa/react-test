import React, { Component } from "react";
import { ctx, ctx2 } from "./context";

export default class FormItem extends Component {
  render() {
    return (
      <ctx.Consumer>
        {formVal => (
          <ctx2.Consumer>
            {itemVal =>
              itemVal.name ? (
                <input
                  value={formVal.form[itemVal.name]}
                  onChange={e => {
                    formVal.changeForm(itemVal.name, e.target.value);
                  }}
                />
              ) : (
                <input />
              )
            }
          </ctx2.Consumer>
        )}
      </ctx.Consumer>
    );
  }
}
