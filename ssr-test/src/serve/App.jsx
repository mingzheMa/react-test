import React from "react";

import { StaticRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import routers from "@/routers";

import "@/styles/global";

export default (props) => {
  return (
    <StaticRouter location={props.location} context={props.context}>
      {renderRoutes(routers)}
    </StaticRouter>
  );
};
