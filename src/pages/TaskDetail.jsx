import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import Modal from '../components/Modal'
import EditTaskModal from '../components/EditTaskModal'


const TaskDetail = () => {

  const { id } = useParams();

  const navigate = useNavigate();

  const { tasks, removeTask, updateTask } = useContext(GlobalContext);

  const task = tasks.find(t => t.id === parseInt(id));

  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)

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

  const handleUpdate = async updatedTask => {
    try {
      await updateTask(updatedTask)
      setShowEditModal(false)
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
      <button onClick={() => setShowDeleteModal(true)}>elimina Task</button>
      <button onClick={() => setShowEditModal(true)}>Modifica Task</button>




      <Modal
        title="Conferma Eliminazione"
        content={<p>Sei sicuro di voler eliminare questa Task=</p>}
        show={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onConfirm={handleDelete}
        confirmText='Elimina'
      />

      <EditTaskModal
        task={task}
        show={showEditModal}
        onClose={() => setShowEditModal(false)}
        onSave={handleUpdate}
      />

    </div>
  )
}

export default TaskDetail
