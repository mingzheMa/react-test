import ReactDOM from "react-dom";
import React, { useState, useEffect } from "react";

function SubTest() {
  useEffect(() => {
    console.log("没有依赖项，只有首次dom挂载后触发");
    return () => {
      console.log("没有依赖项，只有卸载组件时触发");
    };
  }, []); // 如果依赖项为空则只有dom挂载时触发函数，在组件卸载时触发返回函数
  return <>SubTest</>;
}

export default function Test() {
  console.log("runder");

  const [num, setNum] = useState(0);
  const [show, setShow] = useState(true);

  // 在页面dom挂载后触发，建议副作用函数在这里处理
  useEffect(() => {
    console.log("首次渲染和更新时触发");
    // 页面title的更新总是感觉比div中的num慢一点
    document.title = num;

    return () => {
      console.log("更新和组件卸载时触发");
    };
  }, [num]); // 配置依赖项num使在修改show时不触发useEffect函数

  return (
    <>
      <button
        onClick={() => {
          setNum(num - 1);
        }}>
        --
      </button>

      {show && (
        <div>
          {num}
          <SubTest />
        </div>
      )}

      <button
        onClick={() => {
          setNum(num + 1);
        }}>
        ++
      </button>

      <button
        onClick={() => {
          setShow(!show);
        }}>
        显示/隐藏
      </button>
    </>
  );
}

ReactDOM.render(<Test />, document.getElementById("root"));
