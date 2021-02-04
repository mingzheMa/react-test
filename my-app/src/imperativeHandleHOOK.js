import ReactDOM from "react-dom";
import React, { Component, useRef, useImperativeHandle } from "react";
// class CompClass extends Component {
//   sayHello() {
//     console.log("hello!");
//   }
//   render() {
//     return <h1>CompClass</h1>;
//   }
// }

function CompFn(props, ref) {
  // 自定义暴露给父组件的值，当依赖项变化时再次触发函数更新返回值
  useImperativeHandle(
    ref,
    () => {
      return {
        a: 1,
        b: 2,
        sayHello() {
          console.log("Hello!");
        }
      };
    },
    []
  );

  return <h1>CompFn</h1>;
}

const NewCompFn = React.forwardRef(CompFn);

function App() {
  const ref = useRef();
  return (
    <>
      {/* <CompClass ref={ref}  /> */}
      <NewCompFn ref={ref} />
      <button
        onClick={() => {
          ref.current.sayHello();
          console.log(ref.current);
        }}>
        diaoyong
      </button>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
