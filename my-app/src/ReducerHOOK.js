import ReactDOM from "react-dom";
import React, { useState, useReducer } from "react";

// Reduce HOOK
// 1.规定数据是单向流动
// 2.数据存储在一个数据仓库中，类似state
// 3.action为改变数据的唯一原因，本质是一个对象
//    1.type操作类型
//    2.payload操作后附加信息
// 4.reduce为改变数据的函数，必须为纯函数
//    1.参数1：state改变前数据状态
//    2.参数2：action改变数据原因
//    3.返回：改变后数据状态
// 5.dispatch为调用reduce的函数（reduce不能直接调用），函数参数如下
//    1.参数1：action改变数据原因

// Reduce HOOK实现了以上更新数据流程的模型，原理大致如下
// function useReducer(reducer, defaultVal, adornFn) {
//   const [val, setVal] = useState(adornFn ? adornFn(defaultVal) : defaultVal);

//   function dispatch(action) {
//     const newVal = reducer(val, action);
//     setVal(newVal);
//   }

//   return [val, dispatch];
// }

function nReduce(state, action) {
  switch (action.type) {
    case "plus":
      return state + 1;

    case "minus":
      if (state <= 0) return 0;
      return state - 1;

    default:
      return state;
  }
}

function Test() {
  const [n, dispatch] = useReducer(nReduce, 0, n => n + 1);

  return (
    <>
      <button
        onClick={() => {
          dispatch({ type: "minus" });
        }}>
        -
      </button>

      <span>{n}</span>

      <button
        onClick={() => {
          dispatch({ type: "plus" });
        }}>
        +
      </button>
    </>
  );
}

function App() {
  return <Test />;
}

ReactDOM.render(<App />, document.getElementById("root"));
