// 16.x版本以前使用的api，旧版api存在严重的效率问题，并且容易导致滥用
import React, { Component } from "react";
import PT from "prop-types";

const contextType = {
  a: PT.number,
  b: PT.string.isRequired,
  add: PT.func.isRequired
};

// 当组件A也有自己的上下文并且变量a与组件Context上下文中的a重复时，B组件访问上下文会从最近的一个上下文中获取变量，当B调用add方法时，会顺着上下文找到Context上下文中的add方法，修改了Context上下文中的a，所以组件A上下文中的a并没有变化
class A extends Component {
  static contextTypes = contextType;

  state = {
    a: 888,
    c: false
  };

  static childContextTypes = {
    a: PT.number,
    c: PT.bool
  };

  getChildContext() {
    return {
      a: this.state.a,
      c: this.state.c
    };
  }

  render() {
    return (
      <>
        组件A a:{this.getChildContext().a}
        c:{this.getChildContext().c}
        <B />
      </>
    );
  }
}

function B(props, context) {
  return (
    <>
      <p>a：{context.a}</p>
      <p>b：{context.b}</p>

      <button
        onClick={() => {
          context.add({
            a: context.a + 1,
            b: context.b + 2
          });
        }}>
        a加1 b加2
      </button>
    </>
  );
}

B.contextTypes = contextType;

export default class Context extends Component {
  state = {
    a: 123,
    b: "345"
  };

  static childContextTypes = contextType;

  getChildContext() {
    return {
      a: this.state.a,
      b: this.state.b,
      add: state => {
        this.setState(state);
      }
    };
  }

  render() {
    return (
      <div>
        <A />
      </div>
    );
  }
}
