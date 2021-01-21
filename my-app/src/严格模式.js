import React, { PureComponent } from "react";
import ReactDOM from "react-dom";

export default class Test extends PureComponent {
  constructor(props) {
    super(props);
    // 副作用：一个函数中，做了一些会影响函数外部数据的事情，例如：
    // 异步处理
    // 改变参数值
    // setState
    // 本地存储
    // 改变函数外部的变量
    // 一个函数如果不是副作用函数，则这个函数为纯函数
    setTimeout(() => {
      console.log(`禁止在
      ComponentDidMount
      ComponentDidUpdate
      ComponentWillUnMount
      函数外使用副作用函数
      否则该副作用函数会执行两次
      `);
    }, 1000);
  }

  render() {
    return (
      <>
        <div ref="检测过时字符串ref"></div>
      </>
    );
  }
}

ReactDOM.render(
  // react严格模式
  <React.StrictMode>
    <Test />
  </React.StrictMode>,
  document.getElementById("root")
);
