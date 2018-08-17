import { actionTypeKeys } from "./actionTypeKeys";
import { Task } from "../types/Task";
import { thingsToDo } from "../data/fakeData";
import { Dispatch, AnyAction } from "redux";

const loadTasksSuccess = (tasks: Task[]): AnyAction => {
  return {
    type: actionTypeKeys.LOAD_TASKS_SUCCESS,
    tasks
  };
};

const addNewTaskSuccess = (task: Task): AnyAction => {
  return {
    type: actionTypeKeys.ADD_TASK_SUCCESS,
    task
  };
};

const removeTaskSuccess = (tasks: Task[]): AnyAction => {
  return {
    type: actionTypeKeys.REMOVE_TASK_SUCCESS,
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

export const addTask = (task: Task) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(addNewTaskSuccess(task));
    } catch (error) {
      throw error;
    }
  };
};

export const removeTask = (tasks: Task[]) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(removeTaskSuccess([...tasks]));
    } catch (error) {
      throw error;
    }
  };
};
