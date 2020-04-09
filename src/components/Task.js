import React from "react";
import PropTypes from "prop-types";

function Task(props) {
  return (
    <div className={`list-item ${props.task.status}`}>
      <label className="checkbox">
        <input
          defaultChecked={props.task.status === "TASK_ARCHIVED"}
          disabled={true}
          name="checked"
          type="checkbox"
        />
        <span
          className="checkbox-custom"
          onClick={() => props.onArchiveTask(props.task.id)}
        />
      </label>
      <div className="title">
        <input
          placeholder="InputTitle"
          readOnly={true}
          type="text"
          value={props.task.title}
        />
      </div>
      <div className="actions" onClick={(event) => event.stopPropagation()}>
        {props.task.status !== "TASK_ARCHIVED" && (
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <a onClick={() => props.onPinTask(props.task.id)}>
            <span className="icon-star" />
          </a>
        )}
      </div>
    </div>
  );
}

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }),
  onArchiveTask: PropTypes.func,
  onPinTask: PropTypes.func,
};

export default Task;
