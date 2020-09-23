import { createStore } from "redux";
import reducer from "../reducers";


const devTool = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
  reducer,
  devTool
);

console.log("Initial state : ", store.getState());

export default store;
