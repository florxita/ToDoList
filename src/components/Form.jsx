import { FormContainer } from "./styles/Form.styled";
import List from "./List";
import { AddForm } from "./styles/Input.styled";
import { BiPlus } from "react-icons/bi";
import { useState, useContext } from "react";
import { v4 as uuiv4 } from "uuid";
import { ErrorBg, Messaje } from "./styles/Messaje.styled.js";
import ToDoListContext from "./context/ToDoListContext";

const KEY = "todokey";
const Form = () => {
  const {
    data,
    handleAdd,
    task,
    setTask,
    error,
    state,
    setError,
    toggleSubmit,
    setToggleSubmit,
  } = useContext(ToDoListContext);

  const [mensaje, setMensaje] = useState(" ");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (task.trim() === "") {
      setError(true);
      setMensaje("El campo no puede estar vacio.");
      return;
    }
    setError(false);

    const newTask = { id: uuiv4(), task, completed: false };
    state.length <= 10 ? handleAdd(newTask) : setError(true);
    setMensaje(
      "Debes terminar algunas de tus tareas para poder agregar nuevas."
    );
    setTask(" ");
  };

  // const inputElement = useRef(null);
  // useEffect(() => {
  //   if (inputElement.current) {
  //     inputElement.current.focus();
  //   }
  //   if (task.trim() === " ") {
  //     inputElement.current.focus();
  //   }
  // });

  const handleChange = (e) => setTask(e.target.value);

  return (
    <>
      {error === true && (
        <ErrorBg>
          <Messaje>
            <p>{mensaje}</p>
            {state.length > 10 && <span>* Limite de Tareas 10 *</span>}
            <button onClick={() => setError(false)}>Entiendo</button>
          </Messaje>
        </ErrorBg>
      )}
      <FormContainer>
        <figure>
          <img src="src/img/form-img.svg" alt="" />
        </figure>
        <h1>ToDoList</h1>
        <ul>
          {data.map((todo, i) => (
            <List key={todo.id} todo={todo} i={i}></List>
          ))}
        </ul>

        <AddForm onSubmit={handleSubmit}>
          <button>{toggleSubmit === false ? <BiPlus /> : "editar"}</button>
          <input
            autoFocus
            type="text"
            name="task"
            // ref={inputElement}
            value={task}
            onChange={handleChange}
            placeholder="Agregar Item"
          />
        </AddForm>
      </FormContainer>
    </>
  );
};

export default Form;
