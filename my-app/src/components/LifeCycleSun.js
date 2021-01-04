import React, { Component } from "react";

export default class LifeCycleSun extends Component {
  state = {
    n: 0
  };

  constructor(props) {
    super(props);

    console.log("constructor", "初始化阶段");
  }

  componentWillMount() {
    console.log("componentWillMount", "页面挂载前");
  }

  componentDidMount() {
    console.log("componentDidMount", "页面挂载后");
  }

  componentWillReceiveProps() {
    // 遵循谁的状态谁维护原则，禁止在这里随意把props赋值到state
    console.log("componentWillReceiveProps", "属性更新");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(
      "shouldComponentUpdate",
      "属性更新或状态更新",
      "props",
      nextProps,
      "state",
      nextState
    );

    // 返回true重新渲染，否则不渲染，在此生命周期中做优化
    return true
  }

  componentDidUpdate(){
    console.log("componentDidUpdate","渲染后")
  }


  render() {
    console.log("runder", "渲染");
    return (
      <div>
        <p>我是LifeCycle</p>
        <p>父组件的n:{this.props.n}</p>
        <p>我的的n:{this.state.n}</p>
        <button
          onClick={() => {
            this.setState({
              n: this.state.n - 1
            });
          }}>
          n-1
        </button>
      </div>
    );
  }
}
