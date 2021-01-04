import React, { Component } from "react";

export default class LifeCycleSun extends Component {
  state = {
    n: 0
  };

  constructor(props) {
    super(props);

    console.log("constructor", "初始化阶段");
  }

  static getDerivedStateFromProps(props, state) {
    console.log(
      "getDerivedStateFromProps",
      "属性状态更新",
      "props",
      props,
      "state",
      state
    );

    // 新生命周期把更新函数改为静态，防止修改外部的state
    // this.setState({
    //   n:props.n
    // })

    // 返回状态对象覆盖之前的状态返回null则不覆盖
    // return null
    // return {
    //   n:100
    // }
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(
      "shouldComponentUpdate",
      "属性状态更新执行，在getDerivedStateFromProps之后，返回true或false来控制是否渲染，在此优化性能"
    );
    return true;
  }

  getSnapshotBeforeUpdate = (prevProps, prevState) => {
    console.log(
      "getSnapshotBeforeUpdata",
      "获取更新dom前的快照，在runder后执行"
    );
    return 123;
  };

  componentDidUpdate(props, state, snap) {
    console.log(
      "componentDidUpdate",
      "渲染dom后执行",
      "接收getDerivedStateFromProps的返回值",
      snap
    );
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
