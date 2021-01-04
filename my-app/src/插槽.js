import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Slot from "./components/Slot";


// 打印的都是undefined
// function click(){
//   console.log(this)
// }

const click = () => {
  console.log(this);
};

ReactDOM.render(
  <React.StrictMode>
    <Slot header={<h1 onClick={click}>header</h1>} footer={<h1>footer</h1>}>
      <h1>这是一个默认插槽</h1>
    </Slot>
  </React.StrictMode>,

  document.getElementById("root")
);
