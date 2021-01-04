import React, { Component } from "react";

export default class State extends Component {
  state = {
    n: 0
  };

  add = () => {
    // 多次调用只执行一次，会合并setState
    // this.setState({
    //   n: this.state.n + 1
    // });
    // this.setState({
    //   n: this.state.n + 1
    // });
    // this.setState({
    //   n: this.state.n + 1
    // });
    
    // 回调中渲染多次浪费性能
    // this.setState(
    //   {
    //     n: this.state.n + 1
    //   },
    //   () => {
    //     this.setState(
    //       {
    //         n: this.state.n + 1
    //       },
    //       () => {
    //         this.setState({
    //           n: this.state.n + 1
    //         });
    //       }
    //     );
    //   }
    // );

    // 传入函数可以setState执行多次，函数参数为处理后的state，多次调用不会合并setState
    // this.setState(s => ({
    //   n: s.n + 1
    // }));
    // this.setState(s => ({
    //   n: s.n + 1
    // }));
    // this.setState(s => ({
    //   n: s.n + 1
    // }));

    // 打印结果为之前的state，说明setState在更新dom的时候是异步
    // this.setState({
    //     n:this.state.n + 1
    // })
    // console.log(this.state)
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <p>n：{this.state.n}</p>
        <button onClick={this.add}>n+1</button>
      </div>
    );
  }
}
