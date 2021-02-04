import React from "react";

export default function Header(props) {
  return (
    <div>
      <p
        onClick={() => {
          props.history.push("/login");
        }}>
        请登录
      </p>
    </div>
  );
}
