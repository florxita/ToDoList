import { useContext, useEffect } from "react";
import { AddForm } from "./styles/Input.styled";
import { BiPlus } from "react-icons/bi";
import { FormContainer } from "./styles/Form.styled";
import ToDoListContext from "./context/ToDoListContext";
import List from "./List";
import { ErrorBg, Messaje } from "./styles/Messaje.styled";
import { BiPencil } from "react-icons/bi";

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
    setEditMode,
    dispatch,
    UPDATE,
    taskEdited,
    setTaskEdited,
  } = useContext(ToDoListContext);
  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(data));
  }, [data]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMensaje("");
    if (task.length === 0) {
      handleFocus();
    } else {
      data.length < 10
        ? (setError(false), addTask())
        : (setError(true),
          setMensaje(
            "Debes terminar algunas de tus tareas para poder agregar nuevas.*Limite de tareas 10*"
          ),
          setTask(""));
    }
  };

  const editTask = (item) => {
    if (task.length === 0) {
      setError(true);
      setMensaje("El Campo no puede estar vacio");
      setEditMode(false);
      return;
    } else {
      setError(false);

      dispatch({
        type: UPDATE,
        payload: { ...item, task: task },
      });
      setEditMode(false);
      setTask("");
    }
  };

  return (
    <>
      {error === true && (
        <ErrorBg>
          <Messaje>
            <p>{mensaje}</p>
            <button onClick={() => setError(false)}>Entiendo</button>
          </Messaje>
        </ErrorBg>
      )}
      <FormContainer>
        <figure>
          <img src="assets/form-img.svg" alt="borde espiralado nota" />
        </figure>
        <h1>
          ToDo List <BiPencil />
        </h1>

        {data.length === 0 ? (
          <span className="noTaskMessaje">No existen tareas pendientes</span>
        ) : (
          <ul>
            {data.map((item) => (
              <List
                setTaskEdited={setTaskEdited}
                key={item.id}
                item={item}
              ></List>
            ))}
          </ul>
        )}
        <AddForm
          onSubmit={
            editMode
              ? (e) => {
                  e.preventDefault();
                  editTask(taskEdited);
                }
              : handleSubmit
          }
        >
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Ingresa una tarea"
            ref={inputRef}
          />
          <button>
            <BiPlus onClick={handleFocus} />
          </button>
        </AddForm>
      </FormContainer>
    </>
  );
};
export default Form;
