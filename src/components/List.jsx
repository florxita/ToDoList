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
    handleFocus,
    setTaskEdited,
  } = useContext(ToDoListContext);

  const handleCheck = () => {
    setCheck(!check);
    handleFocus();
  };

  const edit = (item) => {
    setEditMode(true);
    setTask(item.task);
    setTaskEdited(item);
    handleFocus();
  };

  return (
    <Item>
      <Check>
        <input type="checkbox" id={item.id} onChange={handleCheck} />
        <label htmlFor={item.id}></label>
      </Check>
      <p className={check ? "taskCompleted" : null}>{item.task}</p>

      <div className="container">
        <BiPencil onClick={() => edit(item)} />

        <CloseX onClick={() => deleteTask(item.id)} />
      </div>
    </Item>
  );
};
export default List;
