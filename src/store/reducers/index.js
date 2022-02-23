//import the reducers to combine
import authReducer from "./auth.reducer";
import { combineReducers } from "redux";

//the name to the left in all reducers is the name in the tree
export const reducers = combineReducers({
  auth: authReducer,
});
