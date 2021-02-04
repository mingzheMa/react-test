import ReactDOM from "react-dom";
import React, { useCallback, useState, PureComponent } from "react";

export default class Comp1 extends PureComponent {
  render() {
    console.log("Comp1 runder");
    return (
      <>
        <h1>{this.props.data}</h1>
        {/* <input value={props.data} onChange={props.setData} /> */}
      </>
    );
  }
}

function Comp2(props) {
  console.log("Comp2 runder");
  return <button onClick={props.click}>点击 {props.num}</button>;
}

// function App() {
//   console.log("App runder");
//   const [num, setNum] = useState(0);
//   const [data, setData] = useState("Comp1 data");
//   return (
//     <>
//       <Comp1
//         data={data}
//         setData={e => {
//           setData(e.target.value);
//         }}></Comp1>
//       {/* 当Comp2修改变量num时，Comp1传入的setData函数每次都是新的，因此导致纯组件的优化失效 */}
//       <Comp2 num={num} click={() => setNum(num + 1)}></Comp2>
//     </>
//   );
// }

function App() {
  console.log("App runder");
  const [num, setNum] = useState(0);
  const [data, setData] = useState("Comp1 data");
  // 使用useCallback时，如果setData没有变化则每次更新使用同一个函数（useState内部优化，每次渲染set函数都是同一个）
  const newSetData = useCallback(
    e => {
      setData(e.target.value);
    },
    [setData]
  );
  return (
    <>
      <Comp1 data={data} setData={newSetData}></Comp1>
      <Comp2 num={num} click={() => setNum(num + 1)}></Comp2>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
