import React from "react";

import { InboxScreen } from "../components";
import { useTaskList } from "../hooks";

function App() {
  const [state, archiveTask, pinTask] = useTaskList();

  return (
    <InboxScreen
      state={state}
      onArchiveTask={archiveTask}
      onPinTask={pinTask}
    />
  );
}

export default App;
