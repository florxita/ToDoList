import { Item, Check } from "./styles/List.styled";
import { BiDotsHorizontalRounded, BiPencil } from "react-icons/bi";
import ToDoListContext from "./context/ToDoListContext";
import { useContext, useEffect, useRef, useState } from "react";
import { CloseX } from "./styles/MenuTooltip.styled";

const List = ({ todo }) => {
  const ref = useRef();
  const {
    handleDelete,
    handleUpdate,
    check,
    setCheck,
    sub,
    setSub,
    toggleSubmit,
    setToggleSubmit,
  } = useContext(ToDoListContext);

  const { id, task, completed } = todo;

  const handleCheck = () => {
    todo.completed = !completed;
    setCheck(!check);
    sub == "taskCompleted" ? setSub("") : setSub("taskCompleted");
  };
  const editTask = () => {
    setToggleSubmit(true);
    handleUpdate(todo);
  };

  return (
    <>
      <Item>
        <Check>
          <input
            id={id}
            type="checkbox"
            checked={completed}
            onChange={handleCheck}
          />
          <label htmlFor={id}></label>
        </Check>
        <p className={sub}>{task}</p>
        {/* <BiPencil onClick={() => editTask()} /> */}

        <CloseX onClick={() => handleDelete(todo.id)} />
      </Item>
    </>
  );
};
export default List;
