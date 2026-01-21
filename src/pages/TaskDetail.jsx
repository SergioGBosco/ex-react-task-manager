import React from 'react'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'

const TaskDetail = () => {

  const { id } = useParams();

  const { tasks } = useContext(GlobalContext);

  const task = tasks.find(t => t.id === parseInt(id));

  if (!task) {
    return (
      <h2>non esiste nessuna task con questo id </h2>
    )
  }

  const handleDelete = () => {
    console.log("hai eliminato la task:", task.id)
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
