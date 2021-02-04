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

export default function Side() {
  const [sides] = useState(sideList);

  const sidesDom = sides.map(s => (
    <li key={s.path}>
      <a href={s.path}>{s.label}</a>
    </li>
  ));

  return (
    <div>
      <h1>
        <a href="/">LOGO</a>
      </h1>
      <ul>{sidesDom}</ul>
    </div>
  );
}
