import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <React.StrictMode>
    {true}
    <br />
    {0}
    <br />
    {"123"}
    <br />
    {""}
    <br />
    {() => {}}
    <br />
    {null}
    <br />
    {undefined}
    <div
      dangerouslySetInnerHTML={{ __html: "<i>我是dangerouslySetInnerHTML<i/>" }}
    />
  </React.StrictMode>,
  document.getElementById("root")
);
