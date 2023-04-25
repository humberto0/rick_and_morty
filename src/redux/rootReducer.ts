import { combineReducers } from "@reduxjs/toolkit";
import filterReducer from "./slices/filter.slice";

const combinedReducers = combineReducers({
  filterReducer,
});

export default combinedReducers;
