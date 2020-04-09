import React from "react";

import { InboxScreen } from "../components";
import { useTaskList } from "../hooks";

function App() {
  const store = useTaskList();

  return <InboxScreen store={store} />;
}

export default App;
