import React from "react";
import "./index.css";

import Comp1 from "./Comp1";
import Comp2 from "./Comp2";
// import MouseComp from "./MouseComp";
import mouse from "./HOC/mouse";

const MouseComp1 = mouse(Comp1);
const MouseComp2 = mouse(Comp2);

export default function Test() {
  return (
    <div>
      {/* 组件1，2中有很多耦合的代码 */}
      {/* <Comp1 />
      <Comp2 /> */}

      {/* runder props */}
      {/* 如果组件之间只有渲染不同，数据处理逻辑相同的可以提取出一个组件使用runder props，其中runde只是一个普通字段，建议这么写 */}
      {/* <MouseComp runder={position => (
          <div
            className="box-sub"
            style={{
              top: position.top - 50,
              left: position.left - 50
            }}
          />
        )}>
        
      </MouseComp>

      <MouseComp runder={position => `top: ${position.top},left: ${position.left}`}>
       
      </MouseComp> */}

      {/* hoc */}
      {/* 使用hoc解耦 */}
      <MouseComp1 />
      <MouseComp2 />
    </div>
  );
}
