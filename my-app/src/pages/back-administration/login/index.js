import React from "react";
import qs from "query-string";

export default function Login(props) {
  return (
    <div>
      Login
      <button
        onClick={() => {
          const search = qs.parse(props.location.search);
          props.history.push(`${search.backUrl ? search.backUrl : "/"}`);
          localStorage.setItem("token", "userToken");
        }}>
        登录
      </button>
    </div>
  );
}
