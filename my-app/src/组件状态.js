import React from "react";
import ReactDOM from "react-dom";

import StateComp from "./components/StateComp";

const data = {
  name: "marx",
  age: 18
};

ReactDOM.render(
  <React.StrictMode>
    <StateComp {...data} />
  </React.StrictMode>,
  document.getElementById("root")
);
