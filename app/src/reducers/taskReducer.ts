import { actionTypeKeys } from "../actions/actionTypeKeys";
import { AnyAction } from "redux";
import { initialState } from "../store/initialState";
import { Task } from "../types/Task";

export default function tasksReducer(
  state: Task[] = initialState.tasks,
  action: AnyAction
): Task[] {
  switch (action.type) {
    case actionTypeKeys.LOAD_TASKS_SUCCESS:
      return [...action.tasks];
    case actionTypeKeys.ADD_TASK_SUCCESS:
      return [...state, Object.assign({}, action.task)];
    case actionTypeKeys.REMOVE_TASK_SUCCESS:
      return [...action.tasks];
    default:
      return state;
  }
}
