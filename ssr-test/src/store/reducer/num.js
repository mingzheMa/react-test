import { actionType } from "../action/num";

export default function (store = 0, action) {
  switch (action.type) {
    case actionType.add:
      return store + action.payload;
    case actionType.minus:
      return store - action.payload;
    case actionType.set:
      return action.payload;
    default:
      return store;
  }
}
