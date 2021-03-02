import React from "react";

import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import routers from "@/routers";

import "@/styles/global";

export default () => {
  console.log(routers, renderRoutes(routers));
  return <BrowserRouter>{renderRoutes(routers)}</BrowserRouter>;
};
