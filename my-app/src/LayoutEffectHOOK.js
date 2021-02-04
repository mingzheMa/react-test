import ReactDOM from "react-dom";
import React, { useState, useRef, useEffect, useLayoutEffect } from "react";

// 挂载流程
// 生成dom -> useLayoutEffect -> 挂载dom -> useEffect
// 注意：useLayoutEffect为同步执行会阻塞渲染
function App() {
  const [n, setN] = useState(0);
  const h1Ref = useRef();
  // 触发时间在页面挂载dom后，点击按钮偶然会看到h1中的数字会闪烁
  // useEffect(() => {
  //   h1Ref.current.innerText = Math.random().toFixed(2);
  // });

  // 触发事件在页面挂载dom之前，点击按钮不会看到h1中数字闪烁
  useLayoutEffect(() => {
    h1Ref.current.innerText = Math.random().toFixed(2);
  });
  return (
    <div>
      <h1 ref={h1Ref}>{n}</h1>
      <button
        onClick={() => {
          setN(n + 1);
        }}>
        +
      </button>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
