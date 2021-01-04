import React, { Component } from "react";
import Cover from "./index";

export default class Test extends Component {
  state = {
    showCover: false
  };

  render() {
    return (
      <div>
        <Cover
          show={this.state.showCover}
          close={() => {
            this.setState({
              showCover: false
            });
          }}>
          <div className="box">
            我是插槽
            <button
              onClick={() => {
                this.setState({
                  showCover: false
                });
              }}>
              点击关闭
            </button>
          </div>
        </Cover>

        <button
          onClick={() => {
            this.setState({
              showCover: true
            });
          }}>
          打开遮罩
        </button>
      </div>
    );
  }
}
