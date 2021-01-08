import React from "react";
import Index from "./index";
import ErrorComp from "./ErrorComp";
import ErrorBounds from "./ErrorBounds";

export default function Test() {
  return (
    <div>
      <Index />
      <ErrorBounds>
        <ErrorComp />
      </ErrorBounds>
    </div>
  );
}
