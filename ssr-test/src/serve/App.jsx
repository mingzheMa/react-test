import React from "react";
import { StaticRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { Provider } from "react-redux";

import routers from "@/routers";
import store from "@/store";

import "@/styles/global";

import moviesApi from "@/api/moviesApi";
moviesApi.getMovies().then(res => {
  console.log(res);
});

export default props => {
  return (
    <Provider store={store}>
      <StaticRouter location={props.location} context={props.context}>
        {renderRoutes(routers)}
      </StaticRouter>
    </Provider>
  );
};
