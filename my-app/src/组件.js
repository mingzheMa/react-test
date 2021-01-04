import React from "react";
import ReactDOM from "react-dom";

import FuncComp from "./components/FuncComp";
import ClassComp from "./components/ClassComp";

const data = {
  a: 1,
  b: 2
};

const cb = () => {
  return <i>回调函数</i>;
};

ReactDOM.render(
  <React.StrictMode>
    <FuncComp data={123} />
    <FuncComp data={"字符串"} />
    <FuncComp data={data.a} cb={cb} />

    <ClassComp data={123} />
    <ClassComp data={"字符串"} />
    <ClassComp data={data.a} cb={cb} />
  </React.StrictMode>,
  document.getElementById("root")
);
