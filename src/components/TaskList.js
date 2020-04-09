import React from "react";
import PropTypes from "prop-types";

import Task from "./Task";

function TaskList(props) {
  const events = {
    onPinTask: props.onPinTask,
    onArchiveTask: props.onArchiveTask,
  };

  const LoadingRow = (
    <div className="loading-item">
      <span className="glow-checkbox" />
      <span className="glow-text">
        <span>Loading</span> <span>cool</span> <span>state</span>
      </span>
    </div>
  );

  if (props.loading) {
    return (
      <div className="list-items">
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
      </div>
    );
  }

  if (props.tasks.length === 0) {
    return <div className="list-items">empty</div>;
  }

  const tasksInOrder = [
    ...props.tasks.filter((task) => task.status === "TASK_PINNED"),
    ...props.tasks.filter((task) => task.status !== "TASK_PINNED"),
  ];

  return (
    <div className="list-items">
      {tasksInOrder.map((task) => (
        <Task key={task.id} task={task} {...events} />
      ))}
    </div>
  );
}

TaskList.propTypes = {
  loading: PropTypes.bool,
  tasks: PropTypes.arrayOf(Task.propTypes.task).isRequired,
  onPinTask: PropTypes.func.isRequired,
  onArchiveTask: PropTypes.func.isRequired,
};

TaskList.defaultProps = {
  loading: false,
};

export default TaskList;
