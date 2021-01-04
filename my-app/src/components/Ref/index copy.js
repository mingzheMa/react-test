import React, { Component } from "react";
import Box from "./components/Box";
import Pox from "./components/Pox";
import BoxFn from "./components/BoxFn";

export default class Ref extends Component {
  // 两者的current中的值是不同的box中是组件，input中是dom元素
  // 默认状态下函数组件是不能使用ref的，因为函数组件没有实例
  boxRef = React.createRef();
  poxRef = comp => {
    console.log("挂载前调用");
    this.poxComp = comp;
  };
  poxComp = null;
  inputRef = React.createRef();
  boxFnRef = React.createRef();

  // 挂载后调用
  componentDidMount() {
    // const box = this.boxRef.current;
    // box.say();
    // console.log(box.state.name);

    // console.log(this.poxComp);

    console.log(this.boxFnRef.current);
  }

  render() {
    const BoxFnForward = React.forwardRef(BoxFn);
    // 渲染前获取不到ref
    console.log(this.boxRef.current);
    return (
      <div>
        <Box ref={this.boxRef} />
        <Pox ref={this.poxRef} />
        <BoxFnForward ref={this.boxFnRef} />

        {/* 聚焦输入框 */}
        <input ref={this.inputRef}></input>
        <button
          onClick={() => {
            this.inputRef.current.focus();
          }}>
          聚焦
        </button>
      </div>
    );
  }
}
