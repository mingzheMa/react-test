import React from "react";
import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { Provider } from "react-redux";

import routers from "@/routers";
import { getStore } from "@/store";

import "@/styles/global";

const store = getStore();

export default () => {
  // console.log(routers, renderRoutes(routers));

  return (
    <Provider store={store}>
      <BrowserRouter>{renderRoutes(routers)}</BrowserRouter>
    </Provider>
  );
};
