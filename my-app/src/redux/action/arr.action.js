export const addArr = userinfo => ({
  type: "ADD",
  payload: userinfo
});

export const setArr = (index, userinfo) => ({
  type: "SET",
  payload: {
    index,
    ...userinfo
  }
});

export const delArr = index => ({
  type: "DEL",
  payload: index
});
