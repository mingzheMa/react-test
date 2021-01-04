import React, { Component } from "react";
import StateComp1 from "./StateComp1";

export default class StateComp extends Component {
  // 通过setState修改会重新渲染组件
  state = {
    name: "hhh",
    age: 100
  };

  //   修改后不会重新渲染
  num = 0;

  constructor(props) {
    super(props);

    setInterval(() => {
      this.setState({
        name: Math.random(),
        age: Math.random()
      });
    }, 1000);
  }

  render() {
    return (
      <div>
        <p>
          这是父组件传来的props：{this.props.name}，{this.props.age}
        </p>
        <p>
          我是0：{this.state.name}，{this.state.age}，{this.num}
        </p>

        <StateComp1 {...this.state} />
      </div>
    );
  }
}
