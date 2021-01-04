import React from "react";

export default function BoxFn(props,ref) {
  const name = "BoxFn";
  return <div ref={ref}>我是函数组件{name}</div>;
}
