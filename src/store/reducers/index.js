import { combineReducers } from "redux";
//import the reducers to combine
import authReducer from "./auth.reducer";
import queryReducer from "./query.reducer";

//the name to the left in all reducers is the name in the tree
export const reducers = combineReducers({
  auth: authReducer,
  query: queryReducer,
});
