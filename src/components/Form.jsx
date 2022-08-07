import { useContext } from "react";
import { AddForm } from "./styles/Input.styled";
import { BiPencil, BiPlus } from "react-icons/bi";
import { FormContainer } from "./styles/Form.styled";
import ToDoListContext from "./context/ToDoListContext";
import List from "./List";
import { ErrorBg, Messaje } from "./styles/Messaje.styled";

const Form = () => {
  const {
    task,
    setTask,
    data,
    editMode,
    addTask,
    handleFocus,
    inputRef,
    error,
    setError,
    mensaje,
    setMensaje,
  } = useContext(ToDoListContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.length === 0) {
      // setError(true);
    } else {
      //   // setError(false)
      data.length < 9
        ? (setError(false), addTask())
        : (setError(true),
          setMensaje(
            "Debes terminar algunas de tus tareas para poder agregar nuevas."
          ),
          setTask(""));
    }
  };

  return (
    <>
      {error === true && (
        <ErrorBg>
          <Messaje>
            <p>{mensaje}</p>
            <span>*Limite de tareas 10*</span>
            <button onClick={() => setError(false)}>Entiendo</button>
          </Messaje>
        </ErrorBg>
      )}
      <FormContainer>
        <figure>
          <img src="src/img/form-img.svg" alt="borde espiralado nota" />
        </figure>
        <h1>ToDo List 5</h1>

        {data.length === 0 ? (
          <span className="noTaskMessaje">No existen tareas pendientes</span>
        ) : (
          <ul>
            {data.map((item) => (
              <List key={item.id} item={item}></List>
            ))}
          </ul>
        )}
        <AddForm onSubmit={editMode ? console.log("edit mode") : handleSubmit}>
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Ingresa una tarea"
            ref={inputRef}
          />
          {editMode ? (
            <button disabled>
              {" "}
              <BiPencil />
            </button>
          ) : (
            <button onClick={handleFocus}>
              <BiPlus />
            </button>
          )}
        </AddForm>
      </FormContainer>
    </>
  );
};
export default Form;
