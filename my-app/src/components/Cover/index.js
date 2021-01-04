import React, { Component } from "react";
import "./index.css";

export default class Cover extends Component {
  render() {
    return (
      <>
        {this.props.show ? (
          <div className="cover" onClick={this.props.close}>
            <div className="cover__in" onClick={e => e.stopPropagation()}>
              {this.props.children}
            </div>
          </div>
        ) : null}
      </>
    );
  }
}
