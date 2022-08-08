import { useContext, useState } from "react";
import { AddForm } from "./styles/Input.styled";
import { BiPlus } from "react-icons/bi";
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
    setEditMode,
    dispatch,
    UPDATE,
    taskEdited,
    setTaskEdited,
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

  const editTask = (item) => {
    dispatch({
      type: UPDATE,
      payload: { ...item, task: task },
    });
    setEditMode(false);
    setTask("");
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
        <h1>ToDo List</h1>

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
        <AddForm onSubmit={handleSubmit}>
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Ingresa una tarea"
            ref={inputRef}
          />
          {editMode ? (
            <button>
              <BiPlus
                onClick={(e) => {
                  e.preventDefault();
                  editTask(taskEdited);
                }}
              />
            </button>
          ) : (
            <button>
              <BiPlus onClick={handleFocus} />
            </button>
          )}
        </AddForm>
      </FormContainer>
    </>
  );
};
export default Form;
