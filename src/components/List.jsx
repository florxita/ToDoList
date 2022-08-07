import { Item, Check } from "./styles/List.styled";
import { BiPencil } from "react-icons/bi";
import ToDoListContext from "./context/ToDoListContext";
import { useContext } from "react";
import { CloseX } from "./styles/MenuTooltip.styled";

const List = ({ item }) => {
  const {
    deleteTask,
    setTask,
    check,
    setCheck,
    setEditMode,
    editMode,
    dispatch,
    UPDATE,
    task,
    handleFocus,
  } = useContext(ToDoListContext);

  const handleCheck = () => {
    setCheck(!check);
    handleFocus();
  };

  const edit = (item) => {
    setEditMode(true);
    setTask(item.task);
    handleFocus();
  };

  const editTask = (item) => {
    dispatch({
      type: UPDATE,
      payload: { ...item, task: task },
    });
    setEditMode(false);
    setTask("");
  };

  return (
    <Item>
      <Check>
        <input type="checkbox" id={item.id} onChange={handleCheck} />
        <label htmlFor={item.id}></label>
      </Check>
      <p className={check ? "taskCompleted" : null}>{item.task}</p>

      <div className="container">
        {editMode ? (
          <span id={item.id} onClick={() => editTask(item)}>
            guardar cambios
          </span>
        ) : (
          <BiPencil onClick={() => edit(item)} />
        )}
        <CloseX onClick={() => deleteTask(item.id)} />
      </div>
    </Item>
  );
};
export default List;
