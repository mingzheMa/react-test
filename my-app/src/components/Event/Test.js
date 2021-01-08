import React, { Component } from "react";

// 1 react在ReactDOM.render后去监听document的事件，虚拟dom树中的事件最后都会冒泡到document，react统一在document进行事件处理
//  1.1 当给真实dom绑定一个事件后，触发react事件，则会先触发真实dom的事件，不管react事件在任何位置
//  1.2 当阻止react事件冒泡后不会影响真实dom的事件，因为当react事件冒泡到document的时候真实dom的事件已开始执行
//  1.3 当阻止真实dom时间时会阻止系列react事件冒泡到document（未试验成功）
// 2 react的事件参数使用事件池的概念
// 2.1 所有react事件参数使用的是同一个对象，节省内存空间，因此div的事件对象与btn中的事件对象是同一个

// 17.0.1
// 事件委托给root，而不是document
// 删除了事件池，可以异步使用事件对象

export default class Test extends Component {
  btnEvent = null;

  render() {
    return (
      <div
        onClick={e => {
          console.log("Test click");
          // 该事件中的事件对象与btn中的事件对象是同一个
          // console.log(this.btnEvent === e);
        }}>
        <button
          onClick={e => {
            console.log("Btn click");
            // 停止事件冒泡
            // e.stopPropagation();

            // this.btnEvent = e;

            // setTimeout(() => {
            //   console.log(e.type)
            // },1000)
          }}>
          click
        </button>
      </div>
    );
  }
}

const root = document.getElementById("root");

root.addEventListener("click", e => {
  console.log("Root click");
  // e.stopPropagation();
});
