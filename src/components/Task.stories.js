import React from "react";
import { action } from "@storybook/addon-actions";

import Task from "./Task";

export default {
  component: Task,
  title: "Task",
  excludeStories: /.*Data$/,
};

export const taskData = {
  id: "1",
  title: "Test Task",
  status: "TASK_INBOX",
  updatedAt: new Date(2020, 0, 1, 9, 0),
};

export const actionsData = {
  onPinTask: action("onPinTask"),
  onArchiveTask: action("onArchiveTask"),
};

export const Default = () => <Task task={{ ...taskData }} {...actionsData} />;

export const Pinned = () => (
  <Task task={{ ...taskData, status: "TASK_PINNED" }} {...actionsData} />
);

export const Archived = () => (
  <Task task={{ ...taskData, status: "TASK_ARCHIVED" }} {...actionsData} />
);
