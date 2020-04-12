import React from "react";
import PropTypes from "prop-types";

import TaskList from "./TaskList";

function InboxScreen(props) {
  if (props.state.error) {
    return (
      <div className="page lists-show">
        <div className="wrapper-message">
          <span className="icon-face-sad" />
          <div className="title-message">Oh no!</div>
          <div className="subtitle-message">Something went wrong</div>
        </div>
      </div>
    );
  }

  return (
    <div className="page lists-show">
      <nav>
        <h1 className="title-page">
          <span className="title-wrapper">Taskbox</span>
        </h1>
      </nav>
      <TaskList
        onArchiveTask={props.onArchiveTask}
        onPinTask={props.onPinTask}
        tasks={props.state.tasks}
      />
    </div>
  );
}

InboxScreen.propTypes = {
  onArchiveTask: PropTypes.func,
  onPinTask: PropTypes.func,
  state: PropTypes.shape({
    error: PropTypes.string,
    tasks: PropTypes.array,
  }),
};

InboxScreen.defaultProps = {
  state: {
    error: null,
    tasks: [],
  },
};

export default InboxScreen;
