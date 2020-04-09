import React from "react";
import PropTypes from "prop-types";

import TaskList from "./TaskList";

function InboxScreen(props) {
  if (props.store.state.error) {
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
        onArchiveTask={props.store.archiveTask}
        onPinTask={props.store.pinTask}
        tasks={props.store.state.tasks}
      />
    </div>
  );
}

InboxScreen.propTypes = {
  store: PropTypes.shape({
    archiveTask: PropTypes.func,
    pinTask: PropTypes.func,
    state: PropTypes.shape({
      error: PropTypes.string,
      tasks: PropTypes.array,
    }),
  }),
};

InboxScreen.defaultProps = {
  store: {
    state: {
      error: null,
      tasks: [],
    },
  },
};

export default InboxScreen;
