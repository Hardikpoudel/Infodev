import * as actions from "./actionType";

export function bugAdded(desc) {
  return {
    type: actions.Bug_Added,
    payload: {
      description: desc,
    },
  };
}
export function bugRemoved(id) {
  return {
    type: actions.Bug_Removed,
    payload: {
      id,
    },
  };
}
export const bugResolved = (id) => ({
  type: actions.Bug_Resolved,
  payload: {
    id,
  },
});
