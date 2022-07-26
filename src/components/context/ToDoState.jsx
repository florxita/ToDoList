import React, { useReducer, useState } from "react";
import ToDoListContext from "./ToDoListContext";
import { Reducer, TYPES } from "./Reducer";
import { v4 as uuiv4 } from "uuid";

const ToDoState = ({ children }) => {
  const [task, setTask] = useState("");
  const [error, setError] = useState(false);
  const [check, setCheck] = useState(false);
  const [sub, setSub] = useState(" ");
  const [toggleSubmit, setToggleSubmit] = useState(false);

  const initialState = [
    { id: uuiv4(), task: "Soy una tarea", completed: false },
  ];

  const { DELETE, UPDATE, ADD } = TYPES;

  const [state, dispatch] = useReducer(Reducer, initialState);

  const handleAdd = (task) => {
    dispatch({
      type: ADD,
      payload: task,
    });
  };

  const handleDelete = (id) => {
    dispatch({
      type: DELETE,
      payload: id,
    });
  };

  const handleUpdate = (todo) => {
    dispatch({
      type: UPDATE,
      payload: { ...todo, task: task }, //revisa esto que quedo mal
    });
    console.log(task);
  };

  const value = {
    task,
    setTask,
    error,
    setError,
    check,
    setCheck,
    sub,
    setSub,
    data: state,
    state,
    handleAdd,
    handleDelete,
    handleUpdate,
    toggleSubmit,
    setToggleSubmit,
  };

  return (
    <ToDoListContext.Provider value={value}>
      {children}
    </ToDoListContext.Provider>
  );
};

export default ToDoState;
