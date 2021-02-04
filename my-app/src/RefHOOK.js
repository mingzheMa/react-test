import ReactDOM from "react-dom";
import React, { useState, useRef } from "react";

// 使用React.createRef()创建出的ref在每次渲染时都会创建一个新的ref对象，除非把ref对象写在渲染函数外
// window.divRef = [];
// function App() {
//   const [, runder] = useState({});
//   const divRef = React.createRef();
//   window.divRef.push(divRef);
//   return (
//     <>
//       <div ref={divRef}>div</div>
//       <button onClick={() => runder({})}>runder</button>
//     </>
//   );
// }

// 使用useRef创建的ref对象在每次渲染时都是同一个ref对象
window.divRef = [];
function App() {
  const [, runder] = useState({});
  const divRef = useRef();
  window.divRef.push(divRef);
  return (
    <>
      <div ref={divRef}>div</div>
      <button onClick={() => runder({})}>runder</button>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
