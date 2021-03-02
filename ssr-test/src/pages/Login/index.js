import React from "react";

export default function index(props) {
  return (
    <div>
      login
      <button
        onClick={() => {
          props.history.push("/admin");
        }}>
        login
      </button>
    </div>
  );
}
