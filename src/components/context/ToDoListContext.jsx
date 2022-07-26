import { createContext } from "react";

const ToDoListContext = createContext({
  tasks: [],
});

export default ToDoListContext;
