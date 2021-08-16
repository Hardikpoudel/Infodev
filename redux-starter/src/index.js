import store from "./store";
import { bugAdded, bugRemoved } from "./actions";
//first lets dispatch an action

//subscribing the store
const unsubscribe = store.subscribe(() => {
  console.log("Store Changed", store.getState());
});

store.dispatch(bugAdded("this is the second bug of the program"));
//dispatching the bugResolved action

store.dispatch(bugRemoved(1));
