import React, { useReducer, useState, useRef } from "react";
import ToDoListContext from "./ToDoListContext";
import { Reducer, TYPES } from "./Reducer";
import { v4 as uuiv4 } from "uuid";

const ToDoState = ({ children }) => {
  const getLocalStorage = () => {
    let list = localStorage.getItem("tareas");
    if (list) {
      return (list = JSON.parse(localStorage.getItem("tareas")));
    } else {
      return [];
    }
  };

  const [task, setTask] = useState("");
  const [state, dispatch] = useReducer(Reducer, getLocalStorage());

  const [editMode, setEditMode] = useState(false);

  const [check, setCheck] = useState(false);

  const [error, setError] = useState(false);
  const [mensaje, setMensaje] = useState(" ");

  const inputRef = useRef(null);
  const [taskEdited, setTaskEdited] = useState("");

  const { DELETE, UPDATE, ADD } = TYPES;

  const addTask = () => {
    const newTask = { id: uuiv4(), task, completed: false };
    setError(false);
    dispatch({
      type: ADD,
      payload: newTask,
    });

    setTask("");
  };

  const deleteTask = (id) => {
    dispatch({
      type: DELETE,
      payload: id,
    });
    setMensaje("");
  };

  const handleFocus = () => {
    inputRef.current.focus();
  };

  const value = {
    task,
    setTask,

    data: state,
    dispatch,

    error,
    setError,

    check,
    setCheck,

    addTask,
    deleteTask,

    editMode,
    setEditMode,

    UPDATE,

    mensaje,
    setMensaje,

    handleFocus,
    inputRef,

    setTaskEdited,
    taskEdited,
  };

  return (
    <ToDoListContext.Provider value={value}>
      {children}
    </ToDoListContext.Provider>
  );
};

export default ToDoState;
