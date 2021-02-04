import ReactDOM from "react-dom";
import React, { useState, useDebugValue } from "react";

// 自定义HOOK中可以使用useDebugValue备注，在react调试工具中查看
function useText() {
  const [arr] = useState([1, 2, 3, 4, 5, 6, 7]);
  useDebugValue(arr);
  useDebugValue("im Comp1");
  return arr;
}

function App() {
  useText();
  return <div></div>;
}

ReactDOM.render(<App />, document.getElementById("root"));
