import React from "react";
import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { Provider } from "react-redux";

import routers from "@/routers";
import store from "@/store";

import "@/styles/global";

import moviesApi from "@/api/moviesApi";
moviesApi.getMovies().then(res => {
  console.log(res);
});

export default () => {
  // console.log(routers, renderRoutes(routers));

  return (
    <Provider store={store}>
      <BrowserRouter>{renderRoutes(routers)}</BrowserRouter>
    </Provider>
  );
};
