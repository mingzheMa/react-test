import React, { Component } from "react";

// 默认情况下某个组件渲染（runder）报错，如果自己不处理错误，则会把错误抛出给父组件，如果父组件没有处理错误则抛出给其父组件，以此类推，最后抛到跟组件，导致整个dom树卸载
// 该组件使用getDerivedStateFromError静态生命周期函数捕获错误判断是否显示children，使其错误组件不会影响到其他组件
// 错误边界只关注runder期间的错误，关于其他的js错误还是老实使用try catch解决
export default class ErrorBounds extends Component {
  state = {
    isError: false
  };

  // 该函数在渲染出错后，更新页面之前执行，返回的对象会更新state的值，参数为错误信息
  static getDerivedStateFromError(error) {
    console.log(error);
    return {
      isError: true
    };
  }

  // 改声明周期函数在发现错误，更新页面后执行，执行在渲染后浪费性能
  // componentDidCatch(error, info) {
  //   console.log(error);
  //   console.log(info);
  //   this.setState({
  //     isError: true
  //   })
  // }

  render() {
    return <>{this.state.isError ? "出错了！" : this.props.children}</>;
  }
}
