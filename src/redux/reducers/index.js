import { combineReducers } from "@reduxjs/toolkit";
import subscribes from "./subscribes";
import auth from "./auth";

const reducer = combineReducers({
  subscribes,
  auth,
});

export default reducer;
