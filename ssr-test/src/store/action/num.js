export const actionType = {
  add: "num/add",
  minus: "num/minus",
  set: "num/set"
};

export function add(num = 1) {
  return {
    type: actionType.add,
    payload: num
  };
}

export function minus(num = 1) {
  return {
    type: actionType.minus,
    payload: num
  };
}

export function set(num) {
  return {
    type: actionType.set,
    payload: num
  };
}
