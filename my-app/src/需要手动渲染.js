import React from "react";
import ReactDOM from "react-dom";

let timmer = null;
let num = 10;
timmer = setInterval(() => {
  ReactDOM.render(
    <React.StrictMode>timmer：{num}</React.StrictMode>,
    document.getElementById("root")
  );

  if (num === 0) {
    clearInterval(timmer);
  }
  num--;
}, 500);
