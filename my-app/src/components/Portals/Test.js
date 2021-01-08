import React from "react";
import Portals from "./index";
import Portals2 from "./index2";

export default function Test() {
  return (
    <div
      onClick={e => {
        console.log(e);
      }}>
      <Portals />
      <Portals2 />
    </div>
  );
}
