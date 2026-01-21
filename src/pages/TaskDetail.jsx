import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'

const TaskDetail = () => {

  const { id } = useParams();

  const navigate = useNavigate();

  const { tasks, removeTask } = useContext(GlobalContext);

  const task = tasks.find(t => t.id === parseInt(id));

  if (!task) {
    return (
      <h2>non esiste nessuna task con questo id </h2>
    )
  }

  const handleDelete = async () => {
    try {
      await removeTask(task.id);
      alert("Task eliminata con successo");
      navigate("/")
    } catch (error) {
      console.error(error)
      alert(error.message)
    }
  }

  return (
    <div>
      <h1>pagina di dettaglio</h1>
      <p>{task.title}</p>
      <p>{task.description}</p>
      <p>{task.status}</p>
      <p>{new Date(task.createdAt).toLocaleDateString()}</p>
      <button onClick={handleDelete}>elimina Task</button>
    </div>
  )
}

export default TaskDetail
