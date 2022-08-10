import { Item, Check } from "./styles/List.styled";
import { BiPencil } from "react-icons/bi";
import ToDoListContext from "./context/ToDoListContext";
import { useContext } from "react";
import { CloseX } from "./styles/MenuTooltip.styled";

const List = ({ item }) => {
  const {
    deleteTask,
    setTask,
    setCheck,
    setEditMode,
    handleFocus,
    setTaskEdited,
  } = useContext(ToDoListContext);

  const edit = (item) => {
    setEditMode(true);
    setTask(item.task);
    setTaskEdited(item);
    handleFocus();
  };

  const handleCheck = (item) => {
    setCheck((current) => !current);
    item.completed = !item.completed;
    return;
  };

  return (
    <Item>
      <Check>
        <input type="checkbox" id={item.id} onClick={() => handleCheck(item)} />
        <label htmlFor={item.id}></label>
      </Check>
      <p className={item.completed === true ? "taskCompleted" : ""}>
        {item.task}
      </p>

      <div className="container">
        <BiPencil onClick={() => edit(item)} />

        <CloseX onClick={() => deleteTask(item.id)} />
      </div>
    </Item>
  );
};
export default List;
