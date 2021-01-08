import React from "react";
import ReactDOM from "react-dom";

export default function Portals2() {
  // 如果你想让这个组件跳出父组件放在任何一个位置可以使用ReactDOM.createPortal(reactDOM,真实DOM)，该组件最终会渲染到真实DOM下，但请注意事件冒泡是会根据虚拟dom树冒泡，并不会像渲染后的dom树冒泡
  return ReactDOM.createPortal(
    <div
      onClick={e => {
        console.log(e);
      }}>
      Portals2
    </div>,
    document.getElementById("portals")
  );
}
