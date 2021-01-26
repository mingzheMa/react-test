import ReactDOM from "react-dom";
import React, { useState } from "react";

// 首次执行useState会在节点里创建一个状态数组，重新渲染时根据第几次调用useState在数组中找对应下标的值并返回
// 因此useState不能写在判断和循环内
// 使用useState返回的更新函数更新数据时该节点里的状态数组会跟着更新
// 一个组件内可以使用多次useState
// useState每次调用返回的是同一个修改状态函数
// 每次修改状态使用Object.is比较，如果一直则不重新渲染（可以创建一个{}对象用于强制刷新）

export default function Test() {
  console.log("runder");
  const [num, setNum] = useState(0);
  const [, forceRefresh] = useState({});

  return (
    <div>
      <button
        onClick={() => {
          setNum(num - 1);
        }}>
        --
      </button>

      <div>{num}</div>

      <button
        onClick={() => {
          setNum(num + 1);
        }}>
        ++
      </button>

      <button
        onClick={() => {
          setNum(num);
        }}>
        =
      </button>

      <button
        onClick={() => {
          forceRefresh({});
        }}>
        强制刷新
      </button>
    </div>
  );
}

ReactDOM.render(<Test />, document.getElementById("root"));
