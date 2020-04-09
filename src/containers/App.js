import React from "react";

import { TaskList } from "../components";
import { useTaskList } from "../hooks";

function App() {
  const [state, archiveTask, pinTask] = useTaskList();
  return (
    <div className="App">
      <TaskList
        tasks={state.tasks}
        onArchiveTask={archiveTask}
        onPinTask={pinTask}
      />
    </div>
  );
}

export default App;
