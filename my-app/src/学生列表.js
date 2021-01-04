import React from "react";
import ReactDOM from "react-dom";

import UserLi from "./components/UserLi";

const data = [...new Array(100)].map(a => ({
  name: Math.random() * 1000,
  age: Math.random() * 1000,
  six: Math.random()
}));

const userLis = data.map(d => <UserLi userInfo={d} key={d.name} />);

ReactDOM.render(
  <React.StrictMode>{userLis}</React.StrictMode>,
  document.getElementById("root")
);
