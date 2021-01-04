import React, { Component } from "react";

// 返回一个React.forwardRef返回一个组件，参数传入一个函数组件，改函数组件接收props和ref参数，将参数和ref传给返回的类组件，类组件中拿到ref和参数对类组件传入的组件使用ref和传递props
export default function runder(Comp) {
  class Runder extends Component {
    render() {
      console.log(`组件${Comp.name}渲染`);

      const { forwardRef, props } = this.props;
      return <Comp ref={forwardRef} {...props} />;
    }
  }

  return React.forwardRef((props, ref) => (
    <Runder forwardRef={ref} {...props} />
  ));
}
