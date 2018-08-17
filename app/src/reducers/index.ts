import { combineReducers } from "redux";
import { StoreState } from "../store/storeState";
import tasks from "./taskReducer";

export default combineReducers<StoreState>({
  tasks
});
