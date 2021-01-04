import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import TimmerControl from "./components/TimmerControl";

ReactDOM.render(
  <React.StrictMode>
    <TimmerControl num={5} />
  </React.StrictMode>,

  document.getElementById("root")
);
