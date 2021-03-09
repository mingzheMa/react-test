import React from "react";
import { StaticRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { Provider } from "react-redux";

import routers from "@/routers";

import "@/styles/global";

export default props => {
  return (
    <Provider store={props.store}>
      <StaticRouter location={props.location} context={props.context}>
        {renderRoutes(routers)}
      </StaticRouter>
    </Provider>
  );
};
