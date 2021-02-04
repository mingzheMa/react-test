import React from "react";

export default function Login(props) {
  return (
    <div>
      Login
      <button
        onClick={() => {
          props.history.push("/");
        }}>
        登录
      </button>
    </div>
  );
}
