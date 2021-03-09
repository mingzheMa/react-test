import { createStore } from "redux";

import reducer from "./reducer";
import config from "@/config";

export function getStore() {
  let store = null;

  if (config.isWindow) {
    const composeEnhancers =
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__();

    store = createStore(reducer, window.$storeData, composeEnhancers);
  } else {
    store = createStore(reducer);
  }

  return store;
}
