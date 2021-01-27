import ReactDOM from "react-dom";
import React, { useContext } from "react";

const cxt = React.createContext();

// function Test() {
//   return (
//     <cxt.Consumer>{val => <h1>App Context传的值：{val}</h1>}</cxt.Consumer>
//   );
// }

function Test() {
  const val = useContext(cxt);
  return <h1>App Context传的值：{val}</h1>;
}

function App() {
  return (
    <cxt.Provider value="val">
      <Test />
    </cxt.Provider>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
