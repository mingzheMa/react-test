import { combineReducers } from "redux";

import movies from "./movies";
import num from "./num";

export default combineReducers({
  movies,
  num
});
