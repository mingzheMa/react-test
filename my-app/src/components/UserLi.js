import React from "react";

export default function UserLi(props) {
  return (
    <li>
      <p>姓名：{props.userInfo.name}</p>
      <p>年龄：{props.userInfo.age}</p>
      <p>性别：{props.userInfo.six > 0.5 ? "男" : "女"}</p>
    </li>
  );
}
