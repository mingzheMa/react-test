import { Component } from "react";

export default class ClassComp extends Component {
  // 只有这些的时候可以省略
  //   constructor(props) {
  //     super(props);
  //   }

  render() {
    return <div>我是类组件，我传来的props：{this.props.data}</div>;
  }
}
