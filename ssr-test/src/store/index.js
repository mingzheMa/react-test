import { createStore } from "redux";

import reducer from "./reducer";
import config from "@/config";

const composeEnhancers =
  config.isWindow &&
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__();

export default createStore(reducer, composeEnhancers);
