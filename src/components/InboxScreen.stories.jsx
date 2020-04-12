import React from "react";

import InboxScreen from "./InboxScreen";
import { defaultTasksData } from "./TaskList.stories";
import { actionsData } from "./Task.stories";

export default {
  component: InboxScreen,
  title: "InboxScreen",
};

const state = {
  tasks: defaultTasksData,
};

export const Default = () => <InboxScreen state={state} {...actionsData} />;

export const Error = () => (
  <InboxScreen state={{ ...state, error: "Something" }} {...actionsData} />
);
