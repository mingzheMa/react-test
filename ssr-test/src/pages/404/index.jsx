import React from "react";

export default function Not(props) {
  props.staticContext && (props.staticContext.statusCode = 404);
  return <div>404 NOT FOUND</div>;
}
