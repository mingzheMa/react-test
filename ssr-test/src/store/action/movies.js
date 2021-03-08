export const actionType = {
  setData: "movies/setData"
};

export function setData(data) {
  return {
    type: actionType.setData,
    payload: data
  };
}
