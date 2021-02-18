import { createStore, bindActionCreators } from "redux";
import * as numberAction from "./action/number.action";

function reducer(store, action) {
  switch (action.type) {
    case "++":
      return store + 1;
    case "--":
      return store - 1;
    case "+":
      return store + action.payload;
    case "-":
      return store - action.payload;
    default:
      return store;
  }
}

// 一般action建议抽离出去，方便多次导入
// const store = createStore(reducer, 10);

// console.log(store.getState());
// console.log(store.dispatch(numberAction.jiaAction(10)));
// console.log(store.getState());
// console.log(store.dispatch(numberAction.jianAction(10)));
// console.log(store.getState());

// redux提供一个bindActionCreators函数，传入actionCreators（创建action）对象和dispatch函数，返回action对象，直接调用对象方法（方法名称和传入actionCreators对象名称一致）
const store = createStore(reducer, 10);
const action = bindActionCreators(numberAction, store.dispatch);

console.log(store.getState());
action.jiaAction(10);
console.log(store.getState());
action.jianAction(10);
console.log(store.getState());
