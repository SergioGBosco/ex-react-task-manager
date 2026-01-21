import React, { useMemo } from 'react'

import { useState, useRef, useContext } from 'react';

import { GlobalContext } from '../context/GlobalContext';

const symbols = "!@#$%^&*()-_=+[]{}|;:'\\,.<>?/`~";

const AddTask = () => {
  const { addTask } = useContext(GlobalContext)

  const [taskTitle, setTaskTitle] = useState("");
  const descriptionRef = useRef();
  const statusRef = useRef()

  const taskTitleError = useMemo(() => {
    if (!taskTitle.trim()) return "Inserisci un nome per la task valido"
    if ([...taskTitle].some(carattere => symbols.includes(carattere)))
      return "non è possibile inserire simboli"
    return "";
  }, [taskTitle]);

  const handleSubmit = async e => {
    e.preventDefault();
    if (taskTitleError)
      return;

    const newTask = {
      title: taskTitle.trim(),
      description: descriptionRef.current.value,
      status: statusRef.current.value
    }
    try {
      await addTask(newTask)
      alert("creazione task avvenuta correttamente");
      setTaskTitle("");
      descriptionRef.current.value = "";
      statusRef.current.value = "";
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <div>
      <h1>Pagina Aggiunta Task</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Nome Task:
          <input type="text"
            value={taskTitle}
            onChange={e => setTaskTitle(e.target.value)} />
        </label>
        {taskTitleError &&
          <p style={{ color: `red` }}>{taskTitleError}</p>
        }
        <label>
          Descrizione:
          <textarea ref={descriptionRef} />
        </label>
        <label>
          Stato:
          <select ref={statusRef}>
            <option value="To do">To do</option>
            <option value="Doing">Doing</option>
            <option value="Done">Done</option>
          </select>
        </label>
        <button type='submit' disabled={taskTitleError}>Aggiungi Task</button>
      </form>


    </div>
  )
}

export default AddTask;
