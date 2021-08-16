import * as actions from "./actionType";

let lastId = 0;

export default function reducer(state = [], action) {
  switch (action.type) {
    case actions.Bug_Added:
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          resolved: false,
        },
      ];
    case actions.Bug_Removed:
      return state.filter((bug) => bug.id != action.payload.id);
    default:
      return state;
  }
}

// if (action.type === actions.Bug_Added)
// return [
//   ...state,
//   {
//     id: ++lastId,
//     description: action.payload.description,
//     resolved: false,
//   },
// ];
// else if (action.type === actions.Bug_Removed)
// return state.filter((bug) => bug.id !== action.payload.id);
// return state;
