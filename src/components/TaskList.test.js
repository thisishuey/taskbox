import React from "react";
import ReactDOM from "react-dom";

import { WithPinnedTasks } from "./TaskList.stories";

it("renders pinned tasks at the start of the list", () => {
  const div = document.createElement("div");
  ReactDOM.render(<WithPinnedTasks />, div);

  const firstTaskInput = div.querySelector(
    ".list-item:nth-child(1) input[value='Task 6 (pinned)']"
  );
  expect(firstTaskInput).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
