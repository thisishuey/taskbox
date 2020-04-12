import React from "react";
import { action } from "@storybook/addon-actions";
import { select, text, withKnobs } from "@storybook/addon-knobs";

import Task from "./Task";

export default {
  component: Task,
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
  title: "Task",
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

export const Default = () => (
  <Task
    task={{
      ...taskData,
      title: text("Title", taskData.title),
      status: select(
        "Status",
        {
          Inbox: "TASK_INBOX",
          Pinned: "TASK_PINNED",
          Archived: "TASK_ARCHIVED",
        },
        "TASK_INBOX"
      ),
    }}
    {...actionsData}
  />
);

export const Pinned = () => (
  <Task
    task={{
      ...taskData,
      title: text("title", taskData.title),
      status: "TASK_PINNED",
    }}
    {...actionsData}
  />
);

export const Archived = () => (
  <Task task={{ ...taskData, status: "TASK_ARCHIVED" }} {...actionsData} />
);

const longTitleString =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis magna ante. Donec feugiat finibus sem at suscipit. Aliquam gravida interdum odio. Phasellus est magna, euismod sed erat id, commodo placerat quam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam eget sapien interdum, tincidunt ante id, tristique nibh. Etiam velit mauris, cursus eu dapibus vel, pellentesque non est. Nullam tincidunt fermentum imperdiet. Vivamus semper, arcu at vehicula condimentum, lacus tortor tincidunt mi, sed convallis velit purus nec mi. Integer sit amet interdum magna, ut sodales ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam orci enim, posuere vel purus ornare, iaculis gravida enim. Etiam rhoncus nisl ut est accumsan, at sollicitudin massa semper. Nunc sit amet mi sit amet nunc dictum molestie. Vestibulum condimentum massa quis orci venenatis, ac bibendum urna porttitor.";

export const LongTitle = () => (
  <Task task={{ ...taskData, title: longTitleString }} {...actionsData} />
);
