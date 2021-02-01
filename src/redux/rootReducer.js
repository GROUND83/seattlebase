import { combineReducers } from "@reduxjs/toolkit";
import langReducer from "./langSlice";

const rootReducer = combineReducers({
  langReducer: langReducer,
});

export default rootReducer;
