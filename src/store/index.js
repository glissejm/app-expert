import { createStore, applyMiddleware, compose } from "redux";
import { reducers } from "./reducers";
import thunk from "redux-thunk";
const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
//this functions recived only one reducer
export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
