// 类似于react的PureComponent类

import React, { Component } from "react";

function lowDiff(obj1, obj2) {
  return Boolean(Object.keys(obj1).find(k => obj1[k] !== obj2[k]));
}

// 父组件state为{aaa,bbb}，该组件接收父组件的state.aaa
export default class PureComponent extends Component {
  // 我认为改动bbb从而渲染该组件是没有必要的，所以在shouldComponentUpdate中进行浅比较，如果prop改变前后一致则不重新渲染组件
  shouldComponentUpdate(nextProps) {
    return lowDiff(this.props, nextProps);
  }

  //   当父组件改动state.bbb时就会触发子组件的渲染
  render() {
    console.log("comp runder");
    return <div>{this.props.aaa}</div>;
  }
}
