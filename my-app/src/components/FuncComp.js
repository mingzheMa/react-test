import React from "react";

export default function FuncComp(props) {
  const cb = props.cb || (() => {});
  return (
    <div>
      我是一个函数组件，接收来自父组件的props：{props.data}，回调{cb()}
    </div>
  );
}
