import { actionTypeKeys } from "./actionTypeKeys";
import { Task } from "../types/Task";
import {thingsToDo} from "../data/fakeData";
import { Dispatch, AnyAction } from "redux";

export const loadTasksSuccess = (tasks: Task[]): AnyAction => {
    return {
      type: actionTypeKeys.LOAD_TASKS_SUCCESS,
      tasks
    };
  };

export const loadTasks = () => {
    return async (dispatch: Dispatch) => {
      try {
        dispatch(loadTasksSuccess([...thingsToDo]));
      } catch (error) {
        throw error;
      }
    };
  };


