import { combineReducers } from "redux";
import recipe from "./recipesReducer";

const rootReducer = combineReducers({
  recipe,
});

export default rootReducer;
