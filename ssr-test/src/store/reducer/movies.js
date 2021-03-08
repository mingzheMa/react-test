import { actionType } from "../action/movies";

export default function (store = [], action) {
  switch (action.type) {
    case actionType.setData:
      return action.payload;
    default:
      return store;
  }
}
