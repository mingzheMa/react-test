import React from "react";

export default function ErrorComp() {
  throw new Error(123);
  return <div></div>;
}
