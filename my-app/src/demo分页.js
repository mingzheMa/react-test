import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Page from "./components/Page";

function onChange(page) {
  console.log(page);
}

ReactDOM.render(
  <React.StrictMode>
    <Page total={100} onChange={onChange} />
  </React.StrictMode>,

  document.getElementById("root")
);
