import { useReducer } from "react";

const actionTypes = {
  ARCHIVE_TASK: "ARCHIVE_TASK",
  PIN_TASK: "PIN_TASK",
};

const defaultTasks = [
  { id: "1", title: "Something", status: "TASK_INBOX" },
  { id: "2", title: "Something more", status: "TASK_INBOX" },
  { id: "3", title: "Something else", status: "TASK_INBOX" },
  { id: "4", title: "Something again", status: "TASK_INBOX" },
];

function updateTaskStatus(status) {
  return (state, action) => ({
    ...state,
    tasks: state.tasks.map((task) =>
      task.id === action.id ? { ...task, status } : task
    ),
  });
}

function taskListReducer(state, action) {
  switch (action.type) {
    case actionTypes.ARCHIVE_TASK:
      console.log(state);
      return updateTaskStatus("TASK_ARCHIVED")(state, action);
    case actionTypes.PIN_TASK:
      console.log(state);
      return updateTaskStatus("TASK_PINNED")(state, action);
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

function useTaskList() {
  const [state, dispatch] = useReducer(taskListReducer, {
    tasks: defaultTasks,
  });

  const archiveTask = (id) => dispatch({ id, type: actionTypes.ARCHIVE_TASK });
  const pinTask = (id) => dispatch({ id, type: actionTypes.PIN_TASK });

  return [state, archiveTask, pinTask];
}

export default useTaskList;
