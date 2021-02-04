import ReactDOM from "react-dom";
import React, { useMemo, useState, PureComponent } from "react";

// useMemo传入函数（函数必须有返回值，返回值就是监听的变量）和依赖数组，如果依赖数组中的依赖项不发生变化，则函数返回值不发生改变

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

// function App() {
//   console.log("App runder");
//   const [num, setNum] = useState(0);
//   const [data, setData] = useState("Comp1 data");
//   // 使用useMemo时，如果setData没有变化则每次更新使用同一个函数（useState内部优化，每次渲染set函数都是同一个）
//   const newSetData = useMemo(
//     () => e => {
//       setData(e.target.value);
//     },
//     [setData]
//   );
//   return (
//     <>
//       <Comp1 data={data} setData={newSetData}></Comp1>
//       <Comp2 num={num} click={() => setNum(num + 1)}></Comp2>
//     </>
//   );
// }

function App() {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(4000);
  const [num, setNum] = useState(100);

  const list = useMemo(
    () => [...new Array(max - min)].map((a, ai) => <li key={ai}>{ai}</li>),
    [min, max]
  );

  // const list = [...new Array(max - min)].map((a, ai) => <li key={ai}>{ai}</li>);
  return (
    <>
      <Comp2 num={num} click={() => setNum(Math.random())}></Comp2>
      <ul>{list}</ul>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
