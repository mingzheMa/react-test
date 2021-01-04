// 新版api
import React, { Component } from "react";
import { ctx, ctx2 } from "./context";

function A() {
  return (
    <>
      <B />
      <C />
      <D />
      <E />
    </>
  );
}

class B extends Component {
  static contextType = ctx;

  render() {
    return (
      <div>
        a:{this.context.a},b:{this.context.b}
        <button onClick={this.context.add}>a++</button>
      </div>
    );
  }
}

class C extends Component {
  render() {
    return (
      // 以下两种写法均可
      //   <ctx.Consumer>
      //     {val => (
      //       <div>
      //         a:{val.a},b:{val.b}
      //         <button onClick={val.add}>a++</button>
      //       </div>
      //     )}
      //   </ctx.Consumer>
      <ctx.Consumer
        children={val => (
          <div>
            a:{val.a},b:{val.b}
            <button onClick={val.add}>a++</button>
          </div>
        )}
      />
    );
  }
}

// 函数组件获取上下文中的数据
function D() {
  return (
    <ctx.Consumer>
      {val => (
        <>
          <p>组件D</p>
          <p>a:{val.a}</p>
          <p>a:{val.b}</p>
        </>
      )}
    </ctx.Consumer>
  );
}

function E() {
  return (
    <ctx.Consumer>
      {val => (
        <ctx2.Consumer>
          {val2 => (
            <>
              <p>a:{val.a}</p>
              <p>b:{val.b}</p>
              <p>c:{val2.c}</p>
              <p>d:{val2.d}</p>
            </>
          )}
        </ctx2.Consumer>
      )}
    </ctx.Consumer>
  );
}

export default class Context extends Component {
  state = {
    value: {
      a: 123,
      b: "345",
      add: () => {
        this.setState({
          a: this.state.a + 1
        });
      }
    }
  };

  render() {
    return (
      // ctx.Provider 不要使用多次，如果在别的组件也需要使用这个ctx.Provider，应该提升到更高的组件（两个组件的父组件中）
      <>
        <ctx.Provider value={this.state.value}>
          <ctx2.Provider value={{ c: "c", d: "d" }}>
            <A />
            <F />
          </ctx2.Provider>
        </ctx.Provider>

        {/* 修改context数据时为强制渲染，会绕过shouldComponentUpdate函数，解决方案就是把Context的数据放置state的属性中，setState的原理是合并之前和传入的对象并返回一个新对象，只要对象索引位置不变则判断不变 */}
        <button
          onClick={() => {
            this.setState({});
          }}>
          修改state
        </button>
      </>
    );
  }
}

class F extends Component {
  static contextType = ctx;

  //   返回布尔值决定是否触发runder
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    return true;
  }

  render() {
    console.log("runder");
    return (
      <div>
        a:{this.context.a},b:{this.context.b}
      </div>
    );
  }
}
