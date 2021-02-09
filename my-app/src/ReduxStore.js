import ReactDOM from "react-dom";
import React from "react";
import { createStore } from "redux";

function reduser(store, action) {
  console.log(store, action);
  switch (action.type) {
    case "jia":
      return store + action.val;
    case "jian":
      return store - action.val;
    default:
      return store;
  }
}

// 创建store时需要传入reduser，在创建时会调用一次reduser（传入的store为创建函数第二参数，action为{type:"@@redux/INIT*.*.*.*.*"}，其中*代表随机数字英文字符，目前不知道是什么规律），将返回值最为该store的初始值，
const num = createStore(reduser, 10);

console.log(num.getState());
num.dispatch({
  type: "jia",
  val: 1
});
console.log(num.getState());
num.dispatch({
  type: "jian",
  val: 1
});
console.log(num.getState());

function App() {
  return <>app</>;
}

ReactDOM.render(<App />, document.getElementById("root"));
