import React from "react";
import { action } from "@storybook/addon-actions";

import InboxScreen from "./InboxScreen";
import { defaultTasksData } from "./TaskList.stories";

export default {
  component: InboxScreen,
  title: "InboxScreen",
};

const store = {
  archiveTask: action("archiveTask"),
  pinTask: action("pinTask"),
  state: {
    tasks: defaultTasksData,
  },
};

export const Default = () => <InboxScreen store={store} />;

export const Error = () => (
  <InboxScreen store={{ ...store, state: { error: "Something" } }} />
);
