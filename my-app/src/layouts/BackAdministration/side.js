import React, { useState } from "react";

const sideList = [
  {
    path: "/",
    label: "首页"
  },
  {
    path: "/page1",
    label: "页面1"
  },
  {
    path: "/page2",
    label: "页面2"
  },
  {
    path: "/page3",
    label: "页面3"
  }
];

export default function Side(props) {
  const [sides] = useState(sideList);

  const sidesDom = sides.map(s => (
    <li key={s.path}>
      <p
        onClick={() => {
          props.history.push(s.path);
        }}>
        {s.label}
      </p>
    </li>
  ));

  return (
    <div>
      <h1
        onClick={() => {
          props.history.push("/");
        }}>
        LOGO
      </h1>
      <ul>{sidesDom}</ul>
    </div>
  );
}
